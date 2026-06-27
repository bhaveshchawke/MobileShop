import { Outlet } from "react-router";
import { NavBar } from "./Components/common/NavBar";
import { Footer } from "./Components/common/Footer";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
