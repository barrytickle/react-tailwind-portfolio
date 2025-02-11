import { createContext } from "react";

const OptionsContext = createContext({
  store: null, // Initially null to indicate loading state
  setStore: () => {}, // Placeholder function to prevent undefined errors
});

export default OptionsContext;
