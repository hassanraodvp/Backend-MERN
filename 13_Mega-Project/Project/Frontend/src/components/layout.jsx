import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/searchBar";
const layout = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
