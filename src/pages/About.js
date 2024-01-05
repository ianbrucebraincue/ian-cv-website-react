import Navigation from '../components/navigation';

import '../styles/about.scss'

export default function About () {
    return (
        <main role="main" id="wrap" className="main">  
           <Navigation /> 
           <div className="about">
                <div className="about-text">
                    <div className="page-title">
                        <h1>Regarding</h1> 
                    </div>
                    <div className="about-description">
                        <h2>
                        I'm a full stack web developer based in London. 
                        Specializing in front end development,
                        I believe in the inherent value of all perspectives, 
                        translating them into practical solutions.
                        </h2>
                    </div>
                </div>
                <div className="about-image">

                </div>
           </div>
        </main>
    )
}