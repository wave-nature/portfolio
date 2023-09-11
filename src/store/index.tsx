"use client";
import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext({
  usdToInr: 80,
  country: "IN",
  setUsdToInr: (usdToInr: number) => {},
  setCountry: (country: string) => {},
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [usdToInr, setUsdToInr] = useState(80);
  const [country, setCountry] = useState("IN");

  function setUsdToInrWrapper(usdToInr: number) {
    setUsdToInr(usdToInr);
  }
  function setCountryWrapper(country: string) {
    setCountry(country);
  }

  return (
    <StoreContext.Provider
      value={{
        usdToInr,
        country,
        setUsdToInr: setUsdToInrWrapper,
        setCountry: setCountryWrapper,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
