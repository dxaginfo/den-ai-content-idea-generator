import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HistoryIcon from '@mui/icons-material/History';

const IdeaGeneratorPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    contentType: '',
    niche: '',
    targetAudience: '',
    keywords: '',
  });

  // Ideas state
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock generated ideas
      const mockIdeas = [
        '10 Productivity Hacks for Remote Workers',
        'How to Build a Personal Brand on Social Media',
        'The Ultimate Guide to Content Marketing in 2025',
        'Why Video Content is Dominating Social Media Platforms',
        'Creating Engaging Blog Posts: Tips from Professional Writers',
      ];
      
      setGeneratedIdeas(mockIdeas);
      setLoading(false);
    }, 2000);
  };

  const saveIdea = (idea: string) => {
    console.log('Saving idea:', idea);
    // This will be replaced with actual save logic
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        AI Content Idea Generator
      </Typography>
      <Typography variant="body1" paragraph>
        Fill in the form below to generate content ideas tailored to your needs.
      </Typography>

      <Grid container spacing={4}>
        {/* Form section */}
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <FormControl fullWidth margin="normal">
                <InputLabel id="content-type-label">Content Type</InputLabel>
                <Select
                  labelId="content-type-label"
                  id="contentType"
                  name="contentType"
                  value={formData.contentType}
                  label="Content Type"
                  onChange={handleSelectChange}
                  required
                >
                  <MenuItem value="blog">Blog Post</MenuItem>
                  <MenuItem value="video">Video</MenuItem>
                  <MenuItem value="social">Social Media Post</MenuItem>
                </Select>
                <FormHelperText>
                  Select the type of content you want to create
                </FormHelperText>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                id="niche"
                label="Niche/Topic"
                name="niche"
                placeholder="e.g., Technology, Fitness, Marketing"
                value={formData.niche}
                onChange={handleChange}
                helperText="Enter the general topic or industry"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="targetAudience"
                label="Target Audience"
                name="targetAudience"
                placeholder="e.g., Beginners, Professionals, Parents"
                value={formData.targetAudience}
                onChange={handleChange}
                helperText="Who is your content aimed at?"
              />

              <TextField
                margin="normal"
                fullWidth
                id="keywords"
                label="Keywords (Optional)"
                name="keywords"
                placeholder="e.g., productivity, tips, strategy"
                value={formData.keywords}
                onChange={handleChange}
                helperText="Comma-separated keywords to focus on"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                startIcon={<AutoAwesomeIcon />}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Ideas'}
              </Button>
            </Box>
          </Paper>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<HistoryIcon />}
              sx={{ mb: 2 }}
            >
              View Generation History
            </Button>
          </Box>
        </Grid>

        {/* Results section */}
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, minHeight: 400 }}>
            <Typography variant="h5" gutterBottom>
              Generated Ideas
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}
              >
                <CircularProgress />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Generating creative ideas...
                </Typography>
              </Box>
            ) : generatedIdeas.length > 0 ? (
              <Grid container spacing={2}>
                {generatedIdeas.map((idea, index) => (
                  <Grid item xs={12} key={index}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6">{idea}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          startIcon={<BookmarkBorderIcon />}
                          onClick={() => saveIdea(idea)}
                        >
                          Save Idea
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                  flexDirection: 'column',
                }}
              >
                <AutoAwesomeIcon
                  sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }}
                />
                <Typography variant="body1" color="text.secondary">
                  Fill out the form and click 'Generate Ideas' to see AI-powered
                  content suggestions here.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IdeaGeneratorPage;