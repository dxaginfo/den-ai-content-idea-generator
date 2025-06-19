import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import IdeaGeneratorPage from './pages/IdeaGeneratorPage';
import SavedIdeasPage from './pages/SavedIdeasPage';
import ContentCalendarPage from './pages/ContentCalendarPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  // This will be replaced with actual auth logic
  const isAuthenticated = false;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected routes */}
          <Route 
            path="/generate" 
            element={isAuthenticated ? <IdeaGeneratorPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/saved-ideas" 
            element={isAuthenticated ? <SavedIdeasPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calendar" 
            element={isAuthenticated ? <ContentCalendarPage /> : <Navigate to="/login" />} 
          />

          {/* 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;