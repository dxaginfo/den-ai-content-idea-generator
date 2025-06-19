import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { format, addMonths, subMonths, getDay, startOfMonth, endOfMonth, addDays, isSameDay } from 'date-fns';

// Mock data for scheduled content
const mockScheduledContent = [
  {
    id: '1',
    title: '10 Productivity Hacks for Remote Workers',
    contentType: 'blog',
    date: new Date(2025, 5, 15), // June 15, 2025
  },
  {
    id: '2',
    title: 'How to Build a Personal Brand on Social Media',
    contentType: 'video',
    date: new Date(2025, 5, 22), // June 22, 2025
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Content Marketing in 2025',
    contentType: 'blog',
    date: new Date(2025, 5, 28), // June 28, 2025
  },
];

const ContentCalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [scheduledContent] = useState(mockScheduledContent);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // Generate calendar days for the month
  const renderCalendar = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = monthStart;
    const startDay = getDay(startDate);

    const days = [];
    const rows = [];
    let day = startDate;

    // Days of week header
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysRow = (
      <Grid container key="days-header">
        {daysOfWeek.map((dayName) => (
          <Grid item xs key={dayName} sx={{ textAlign: 'center', py: 1, fontWeight: 'bold' }}>
            {dayName}
          </Grid>
        ))}
      </Grid>
    );
    rows.push(daysRow);

    // Create blank cells for days before the first of the month
    let cells = [];
    for (let i = 0; i < startDay; i++) {
      cells.push(
        <Grid item xs key={`empty-${i}`} sx={{ minHeight: 120, p: 1 }}>
          <Paper sx={{ height: '100%', bgcolor: 'grey.100', p: 1 }} elevation={0} />
        </Grid>
      );
    }

    // Fill in the days of the month
    while (day <= monthEnd) {
      const formattedDate = format(day, 'd');
      const contentForDay = scheduledContent.filter((content) =>
        isSameDay(content.date, day)
      );

      cells.push(
        <Grid item xs key={day.toString()} sx={{ minHeight: 120, p: 1 }}>
          <Paper
            sx={{
              height: '100%',
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            elevation={1}
          >
            <Typography
              variant="body2"
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                fontWeight: 'bold',
              }}
            >
              {formattedDate}
            </Typography>

            <Box sx={{ mt: 3 }}>
              {contentForDay.map((content) => (
                <Box key={content.id} sx={{ mb: 1 }}>
                  <Chip
                    size="small"
                    label={content.contentType}
                    color={
                      content.contentType === 'blog'
                        ? 'primary'
                        : content.contentType === 'video'
                        ? 'secondary'
                        : 'default'
                    }
                    sx={{ mb: 0.5 }}
                  />
                  <Typography variant="caption" display="block" sx={{ lineHeight: 1.2 }}>
                    {content.title.length > 25
                      ? `${content.title.substring(0, 25)}...`
                      : content.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      );

      // Start a new row after Saturday
      if (getDay(day) === 6) {
        rows.push(
          <Grid container key={day.toString()} spacing={0}>
            {cells}
          </Grid>
        );
        cells = [];
      }

      day = addDays(day, 1);
    }

    // Add remaining days to the last row
    if (cells.length > 0) {
      // Add empty cells to complete the row
      while (cells.length < 7) {
        cells.push(
          <Grid
            item
            xs
            key={`empty-end-${cells.length}`}
            sx={{ minHeight: 120, p: 1 }}
          >
            <Paper sx={{ height: '100%', bgcolor: 'grey.100', p: 1 }} elevation={0} />
          </Grid>
        );
      }
      rows.push(
        <Grid container key={`last-row`} spacing={0}>
          {cells}
        </Grid>
      );
    }

    return rows;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <CalendarMonthIcon sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          Content Calendar
        </Typography>
      </Box>

      {/* Calendar controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => console.log('Add content')}
        >
          Add Content
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={prevMonth} aria-label="previous month">
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6" sx={{ mx: 2 }}>
            {format(currentMonth, 'MMMM yyyy')}
          </Typography>
          <IconButton onClick={nextMonth} aria-label="next month">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Calendar */}
      <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        {renderCalendar()}
      </Paper>

      {/* Upcoming content */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Upcoming Content
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          {scheduledContent
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((content) => (
              <Grid item xs={12} md={4} key={content.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Chip
                        label={content.contentType.toUpperCase()}
                        size="small"
                        color={
                          content.contentType === 'blog'
                            ? 'primary'
                            : content.contentType === 'video'
                            ? 'secondary'
                            : 'default'
                        }
                      />
                      <Typography variant="body2">
                        {format(content.date, 'MMM d, yyyy')}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      {content.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ContentCalendarPage;