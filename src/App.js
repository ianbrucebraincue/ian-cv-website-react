import { Routes, Route } from 'react-router-dom';
import Noise from './Noise';
import Home from './pages/Home';
import CurriculumVitae from './pages/CurriculumVitae';
import ProjectLayout from './ProjectLayout';
import Project from './pages/Project';
import ErrorPage from './ErrorPage';

function App() {
    return (
        <>
        <Noise />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CurriculumVitae />} />
            <Route path="/projects" element={<ProjectLayout />}>
                <Route path=":id" element={<Project />}/>
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </> 
    )
}

export default App