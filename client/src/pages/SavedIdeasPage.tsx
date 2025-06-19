import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// Mock data for saved ideas
const mockSavedIdeas = [
  {
    id: '1',
    title: '10 Productivity Hacks for Remote Workers',
    contentType: 'blog',
    niche: 'Productivity',
    targetAudience: 'Remote Workers',
    keywords: ['productivity', 'remote work', 'time management'],
    createdAt: '2025-06-15',
    scheduled: true,
    scheduledDate: '2025-07-01',
  },
  {
    id: '2',
    title: 'How to Build a Personal Brand on Social Media',
    contentType: 'video',
    niche: 'Marketing',
    targetAudience: 'Entrepreneurs',
    keywords: ['personal branding', 'social media', 'marketing'],
    createdAt: '2025-06-12',
    scheduled: false,
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Content Marketing in 2025',
    contentType: 'blog',
    niche: 'Marketing',
    targetAudience: 'Marketers',
    keywords: ['content marketing', 'strategy', 'trends'],
    createdAt: '2025-06-10',
    scheduled: false,
  },
];

const SavedIdeasPage: React.FC = () => {
  const [ideas] = useState(mockSavedIdeas);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter ideas based on search term and filter type
  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch = idea.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === 'all' ||
      (filterType === 'scheduled' && idea.scheduled) ||
      (filterType === 'unscheduled' && !idea.scheduled) ||
      idea.contentType === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <BookmarkIcon sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          Saved Ideas
        </Typography>
      </Box>

      {/* Filters and search */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            placeholder="Search saved ideas..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="filter-type-label">Filter By</InputLabel>
            <Select
              labelId="filter-type-label"
              id="filter-type"
              value={filterType}
              label="Filter By"
              onChange={handleFilterChange}
            >
              <MenuItem value="all">All Ideas</MenuItem>
              <MenuItem value="blog">Blog Posts</MenuItem>
              <MenuItem value="video">Videos</MenuItem>
              <MenuItem value="social">Social Media</MenuItem>
              <MenuItem value="scheduled">Scheduled</MenuItem>
              <MenuItem value="unscheduled">Unscheduled</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Ideas list */}
      {filteredIdeas.length > 0 ? (
        <Grid container spacing={3}>
          {filteredIdeas.map((idea) => (
            <Grid item xs={12} key={idea.id}>
              <Card variant="outlined">
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {idea.title}
                    </Typography>
                    <Box>
                      <Chip
                        label={idea.contentType.toUpperCase()}
                        size="small"
                        color={
                          idea.contentType === 'blog'
                            ? 'primary'
                            : idea.contentType === 'video'
                            ? 'secondary'
                            : 'default'
                        }
                        sx={{ mr: 1 }}
                      />
                      {idea.scheduled && (
                        <Chip
                          icon={<CalendarTodayIcon />}
                          label={idea.scheduledDate}
                          size="small"
                          color="success"
                        />
                      )}
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Niche: {idea.niche} | Target Audience: {idea.targetAudience}
                  </Typography>

                  <Box sx={{ mt: 1 }}>
                    {idea.keywords.map((keyword, index) => (
                      <Chip
                        key={index}
                        label={keyword}
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => console.log('Edit idea', idea.id)}
                  >
                    Edit
                  </Button>
                  {!idea.scheduled && (
                    <Button
                      size="small"
                      startIcon={<CalendarTodayIcon />}
                      onClick={() => console.log('Schedule idea', idea.id)}
                    >
                      Schedule
                    </Button>
                  )}
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton
                    aria-label="delete"
                    onClick={() => console.log('Delete idea', idea.id)}
                  >
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: 10,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No saved ideas found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {searchTerm
              ? `No results matching "${searchTerm}"`
              : 'Generate and save some ideas to see them here'}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default SavedIdeasPage;