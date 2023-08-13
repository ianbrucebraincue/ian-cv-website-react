import { useState, useEffect } from 'react';
import { Link, Outlet  } from 'react-router-dom';
import Navigation from './components/Navigation';
import Image from './components/Image';

import './styles/projects.scss'

export default function ProjectLayout() {
    const [projects, setProjects] = useState([]);
    const [hoverProject, setHoverProject] = useState("");
    const [imageTransitionState, setImageTransitionState] = useState(false);

    useEffect(() => {
        fetch('../projects.json'
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then(response => response.json())
          .then(data => setProjects(data.projects));
      }, []);

    return (
        <main role="main" id="wrap" className="main">  
           <Navigation />  
           <div className="projects-index">
            <div className="project-hover-image">
                <Image name={hoverProject}/>
            </div>
            <div className="projects-list">
                <h1 className="">Projects</h1>
                <ul>
                    {projects.map(project => (
                        <li key={project.id}
                            onMouseEnter={() => setHoverProject(project.images[0])}
                            onMouseLeave={() => setHoverProject("")}>
                        <Link to={project.path}>
                            <h2>{project.title}</h2>
                        </Link> 
                        </li>

                    ))}
                </ul>
            </div>
           </div>

           <Outlet context={ projects }/>
           
        </main>
    )
}