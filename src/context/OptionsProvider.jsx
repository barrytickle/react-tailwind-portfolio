import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import { endpoint } from "../helpers/config";
import OptionsContext from "./OptionsContext";

const OptionsProvider = ({ children }) => {
  const [store, setStore] = useState(null); // Initially null to handle loading state
  const hasFetched = useRef(false); // Prevent multiple fetches in dev mode

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        // Run all fetch requests in parallel
        const [navRes, footerRes, pagesRes] = await Promise.all([
          fetch(`${endpoint}/navigation?populate=*`),
          fetch(`${endpoint}/footer?populate=deep`),
          fetch(`${endpoint}/pages/?populate=deep`),
        ]);

        // Convert responses to JSON
        const [navData, footerData, pagesData] = await Promise.all([navRes.json(), footerRes.json(), pagesRes.json()]);

        console.log("Fetched Data:", { navData, footerData, pagesData });

        // Ensure valid data before updating state
        setStore({
          menus: navData?.data ?? null,
          footer: footerData?.data ?? null,
          pages: pagesData?.data ?? null,
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []); // ✅ Runs only once

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ store, setStore }), [store]);

  return (
    <OptionsContext.Provider value={contextValue}>
      {store ? children : <p>Loading options...</p>}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;

OptionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
