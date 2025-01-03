import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
    const [imgUrl, setImgUrl] = useState();
    useEffect(() => {
      if (!fact) return;
      const threeFirstWords = fact.split(" ", 3).join(" ");
      const CAT_ENDPOINT = `https://cataas.com/cat/says/${threeFirstWords}?size=50`;

      fetch(CAT_ENDPOINT)
        .then((response) => response)
        .then((data) => {
          const { url } = data;
          setImgUrl(url);
        });
    }, [fact]);
    return { imgUrl };
}