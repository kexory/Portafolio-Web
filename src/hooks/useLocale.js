import { useEffect, useState } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

const dictionaries = { es, en };

export function useLocale() {
  const [locale, setLocale] = useState("es");
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (path) => path.split(".").reduce((value, key) => value?.[key], dictionaries[locale]) ?? path;
  return { locale, setLocale, t };
}
