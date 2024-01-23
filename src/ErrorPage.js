import Navigation from './components/NavigationDesktop';

import './styles/error-page.scss';

export default function ErrorPage() {
  return (
    <main role="main" id="wrap" className="main"> 
        <div id="error-page">
        <Navigation/>
        <div className="error-info">
            <h1>Oops!</h1>
            <p>
                <i>There are worse things in life.</i>
            </p>
            <p>
                <i>404 - Page not found.</i>
            </p>
        </div>
        </div>
    </main>
  );
}