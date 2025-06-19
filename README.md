# AI Content Idea Generator

A web application that helps content creators brainstorm and generate ideas for blog posts, videos, and social media content using AI.

## Overview

The AI Content Idea Generator is designed to solve the "blank page problem" that content creators face when planning their content calendar. Using advanced AI models, it analyzes trends, keywords, and user inputs to suggest relevant, engaging content ideas tailored to specific niches and audiences.

## Key Features

- **Idea Generation Engine**: Generate content ideas based on content type, niche, and target audience
- **Trend Analysis**: Insights from Google Trends and social media platforms to identify popular topics
- **Keyword Optimization**: Suggestions for SEO-friendly keywords to maximize content reach
- **Content Calendar Planning**: Organize and schedule content ideas in a visual calendar
- **User Management**: Save favorite ideas and track content performance

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI for responsive design
- Redux Toolkit for state management
- Axios for API communication

### Backend
- Node.js with Express
- MongoDB for data storage
- JWT authentication
- OpenAI API integration

### DevOps
- GitHub Actions for CI/CD
- Docker for containerization
- Vercel for frontend hosting
- Heroku/AWS for backend hosting

## Getting Started

### Prerequisites
- Node.js (v14.x or higher)
- npm or yarn
- MongoDB account
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/den-ai-content-idea-generator.git
cd den-ai-content-idea-generator
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In the server directory, create a .env file
touch .env

# Add the following variables
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# In a new terminal, start frontend server
cd client
npm start
```

## Project Structure

```
den-ai-content-idea-generator/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── store/           # Redux store
│   │   ├── styles/          # CSS styles
│   │   └── App.tsx          # Main application component
├── server/                  # Backend Node.js application
│   ├── controllers/         # Request handlers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Utility functions
│   └── index.js             # Entry point
└── README.md                # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [OpenAI](https://openai.com/) for providing the AI models
- [React](https://reactjs.org/) for the frontend framework
- [Node.js](https://nodejs.org/) for the backend environment
- [MongoDB](https://www.mongodb.com/) for the database solution