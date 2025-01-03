import { useState, useEffect } from "react";
import { randomCat } from "../services/fact";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFat = () => {
    randomCat().then((newFat) => setFact(newFat));
  };
  useEffect(refreshFat, []);
  return { fact, refreshFat };
};