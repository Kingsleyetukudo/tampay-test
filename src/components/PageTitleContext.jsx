import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Default Title");

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

PageTitleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePageTitle = () => useContext(PageTitleContext);
