import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      <main>
        <Outlet />
      </main>
      <nav>
        <Footer/>
      </nav>
    </div>
  );
};

export default Layout;