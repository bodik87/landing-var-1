"use client";
import React from "react";
import { languages } from "@/public/lang";
import { CurrentLanguage } from "@/context/LangContext";

export default function LanguageToogle() {
  // @ts-ignore: Unreachable code error
  const { changeLanguages } = CurrentLanguage();
  const switchToUA = () => changeLanguages(languages[0]);
  const switchToRUS = () => changeLanguages(languages[1]);

  return (
    <div className="flex gap-1 whitespace-nowrap">
      <span onClick={switchToUA} className="cursor-pointer">
        | UA
      </span>
      <span onClick={switchToRUS} className="cursor-pointer">
        ENG |
      </span>
    </div>
  );
}