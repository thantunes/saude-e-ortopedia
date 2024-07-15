import React, { useEffect } from "react";
import { useRuntime } from "vtex.render-runtime";

const SEOCategoryTag = () => {
  const { route } = useRuntime();

  useEffect(() => {
    const divToWrap = document.querySelector(
      ".vtex-store-components-3-x-productDescriptionText"
    );

    if (divToWrap) {
      const h2Element = document.createElement("h2");

      while (divToWrap.firstChild) {
        h2Element.appendChild(divToWrap.firstChild);
      }

      h2Element.style.color = '#727273';
      h2Element.style.lineHeight = '28px';
      h2Element.style.fontSize = '16px';
      h2Element.style.fontWeight = 400;

      divToWrap.parentNode.replaceChild(h2Element, divToWrap);
    }
  }, []);

  return null;
};

export default SEOCategoryTag;
