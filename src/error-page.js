import { useRouteError } from "react-router-dom";
import Navigation from './components/navigation';

import './styles/error-page.scss';

export default function ErrorPage() {
  const error = useRouteError();
//   console.error(error);

  return (
    <main role="main" id="wrap" className="main"> 
        <div id="error-page">
        <Navigation/>
        <div className="error-info">
            <h1>Oops!</h1>
            <p>
                <i>{error.status}</i>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        </div>
    </main>
  );
}