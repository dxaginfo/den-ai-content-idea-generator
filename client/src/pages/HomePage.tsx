import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Generate Brilliant Content Ideas in Seconds
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Leverage AI to overcome creative blocks and generate engaging content
            ideas for blogs, videos, and social media.
          </Typography>
          <Button
            component={RouterLink}
            to="/generate"
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            startIcon={<CreateIcon />}
          >
            Start Generating Ideas
          </Button>
        </Box>

        {/* Features Section */}
        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <CreateIcon fontSize="large" color="primary" />
                  <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
                    AI-Powered Generation
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Generate tailored content ideas based on your niche, audience,
                  and content type using advanced AI technology.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <TrendingUpIcon fontSize="large" color="primary" />
                  <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
                    Trend Analysis
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Stay ahead of the curve with real-time trend analysis and
                  insights to create timely, relevant content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <SearchIcon fontSize="large" color="primary" />
                  <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
                    Keyword Optimization
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Optimize your content with targeted keywords to improve
                  discoverability and reach your ideal audience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <CalendarMonthIcon fontSize="large" color="primary" />
                  <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
                    Content Calendar
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Plan and organize your content strategy with an intuitive
                  calendar to maintain a consistent publishing schedule.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            bgcolor: 'primary.light',
            borderRadius: 4,
            p: 6,
            mt: 8,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h2" color="white" gutterBottom>
            Ready to Transform Your Content Strategy?
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            Join thousands of content creators who use our platform to generate
            engaging ideas and streamline their content creation process.
          </Typography>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Get Started for Free
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;