import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Routes, Route } from 'react-router-dom';
import Noise from './Noise';
import Home from './pages/Home';
import About from './pages/About';
import ProjectLayout from './ProjectLayout';
import Project from './pages/Project';
import ErrorPage from './ErrorPage';

// Create a custom theme
const ianBruceTheme = createTheme({
    typography: {
      fontFamily: 'Rethink Sans, Arial', // Replace 'Your-Desired-Font' with your preferred font family
    },
});

function App() {
    return (
        // Wrap your app with ThemeProvider and apply the custom theme
        <ThemeProvider theme={ianBruceTheme}>
            <CssBaseline />
            <Noise />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<ProjectLayout />}>
                    <Route path=":id" element={<Project />}/>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App