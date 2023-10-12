"use client";
import { languages } from "@/public/lang";
import { createContext, useContext, useEffect, useState } from "react";

interface LangContextType {
  userLanguage: string;
  changeLanguages: (lang: string) => void
}

const LangContext = createContext<LangContextType | null>(null);

const isBrowser = () => typeof window !== "undefined";

export const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userLanguage, setUserLanguage] = useState("");

  useEffect(() => {
    let value;
    value = localStorage.getItem("lang") || languages[0];
    setUserLanguage(value);
  }, []);

  const changeLanguages = (lang: string) => {
    window.localStorage.setItem("lang", lang);
    setUserLanguage(window.localStorage.getItem("lang") || languages[0]);
  };

  return (
    <LangContext.Provider value={{ userLanguage, changeLanguages }}>
      {children}
    </LangContext.Provider>
  );
};

export const CurrentLanguage = () => {
  return useContext(LangContext);
};
