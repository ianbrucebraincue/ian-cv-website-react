import Navigation from './components/navigation';
import { Link, Outlet  } from 'react-router-dom';

export default function ProjectLayout() {
    return (
        <main role="main" id="wrap" className="main">  
           <Navigation />  
           <h1>Projects</h1>
           <div>
            <ul>
                <li>
                    <Link to="/projects/1">Project 1</Link>
                </li>
                <li>
                    <Link to="/projects/2">Project 2</Link>
                </li>
            </ul>
           </div>
           <Outlet />
        </main>
    )
}