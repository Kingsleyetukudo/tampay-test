import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Default Title");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  console.log(isSidebarOpen);

  return (
    <PageTitleContext.Provider
      value={{ pageTitle, setPageTitle, isSidebarOpen, toggleSidebar }}
    >
      {children}
    </PageTitleContext.Provider>
  );
};

PageTitleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePageTitle = () => useContext(PageTitleContext);
