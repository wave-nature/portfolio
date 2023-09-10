"use client";
import React, { createContext, useState, useEffect } from "react";

import Loader from "@/components/Loader";
import { getCountry, getUsdToInr, saveSiteVisitImpression } from "@/request";

export const StoreContext = createContext({
  usdToInr: 80,
  country: "IN",
  setUsdToInr: (usdToInr: number) => {},
  setCountry: (country: string) => {},
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [usdToInr, setUsdToInr] = useState(80);
  const [country, setCountry] = useState("IN");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    saveSiteVisitImpression();
    async function fetchData() {
      try {
        const usdToInr = await getUsdToInr();
        const country = await getCountry();
        setUsdToInr(usdToInr);
        setCountry(country);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchData();
  }, []);

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
      {loader ? <Loader /> : children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
