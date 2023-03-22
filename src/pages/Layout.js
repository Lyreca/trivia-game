import { Outlet, Link } from "react-router-dom";
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button class='home-button' onClick={() => window.location.reload()}>Home</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;