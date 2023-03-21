import '../styles/NoPage.css'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
    <div className="nopage">
        <h1>404</h1>
        <p>Page not found!</p>
        <p>Return to <Link to='/'>Home</Link></p>
    </div>
    );
  };
  
export default NoPage;