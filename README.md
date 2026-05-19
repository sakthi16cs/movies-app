# Movie Search Application

A React-based movie search application built with Redux Toolkit, React Router, and the OMDB API. This app allows users to search for movies, view detailed information, and explore movie listings.

## Features

- 🎬 Search movies by title
- 📋 Browse movie listings
- 🎥 View detailed movie information
- 🎨 Responsive UI with SCSS styling
- 🔄 State management with Redux Toolkit
- 🛣️ Client-side routing with React Router

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **OMDB API Key** (free) - [Get one here](https://www.omdbapi.com/apikey.aspx)

## Installation

1. **Clone or extract the project**
   ```bash
   cd testreact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your OMDB API Key**
   - Go to [OMDB API](https://www.omdbapi.com/apikey.aspx)
   - Sign up for a free API key
   - Open `src/common/apis/MovieApiKey.js`
   - Replace the placeholder with your API key:
     ```javascript
     export const APIKey = 'your_api_key_here'
     ```

## Running the Application

### Development Mode

```bash
npm start
```

This runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder.\
The build is minified and optimized for best performance.

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Project Structure

```
src/
├── components/
│   ├── Footer/
│   ├── Header/
│   ├── Home/
│   ├── MovieCard/
│   ├── MovieDetail/
│   ├── MovieListing/
│   └── PageNotFound/
├── features/
│   ├── store.js (Redux store)
│   └── movies/
│       └── movieSlice.js (Redux slice)
├── common/
│   ├── colors.scss
│   └── apis/
│       ├── movieApi.js (Axios instance)
│       └── MovieApiKey.js (API key configuration)
├── App.js
└── index.js
```

## Technologies Used

- **React** 18.2.0 - UI library
- **Redux Toolkit** 2.2.3 - State management
- **React Router DOM** 6.22.3 - Client-side routing
- **Axios** 1.6.8 - HTTP client
- **SCSS** - Styling
- **OMDB API** - Movie data source

## Available Scripts

### `npm start`
Runs the development server at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the production-ready bundle

### `npm test`
Runs the test suite

### `npm run eject`
**⚠️ Warning: This is a one-way operation!**
Ejects from Create React App and exposes all configuration files.

## Troubleshooting

### API Key Issues
- Make sure your OMDB API key is correctly set in `src/common/apis/MovieApiKey.js`
- Check that you've registered and activated your free API key at [OMDB API](https://www.omdbapi.com/apikey.aspx)
- The API key may take a few minutes to activate after registration

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm start
```

### Dependencies Issues
Clear node_modules and reinstall:
```bash
rm -r node_modules
npm install
```

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
