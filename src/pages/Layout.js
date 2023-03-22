import { Outlet } from "react-router-dom";
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button className='home-button' onClick={() => window.location.reload()}>Home</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;