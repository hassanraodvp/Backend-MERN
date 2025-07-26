import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
