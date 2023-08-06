import { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import { Link, Outlet  } from 'react-router-dom';

export default function ProjectLayout() {
    const [projects, setProjects] = useState([]);

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
           <h1 className="visuallyhidden">Projects</h1>
           <div>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                       <Link to={project.path}>
                        <h2>{project.title}</h2>
                       </Link> 
                    </li>

                ))}
            </ul>
           </div>

           <Outlet context={ projects }/>
           
        </main>
    )
}