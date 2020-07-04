import { useState, useEffect } from "react";

interface WindowGlobal extends Window {
  google: unknown;
}

const initialized: HTMLScriptElement[] = [];
export function useGoogleMapsApi(
  apiKey: string,
  opts?: { placesApi: Boolean }
) {
  const [windowGlobal] = useState<WindowGlobal>(process.browser && window);
  const [googleApi, setGoogleApi] = useState(null);

  useEffect(() => {
    if (windowGlobal.google) {
      // if window.google object is already available just use it
      setGoogleApi(windowGlobal.google);
      return;
    }
    const src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}${
      opts.placesApi ? "&libraries=places" : ""
    }`;
    // `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`

    const existingScript = initialized.find((el) => el.src === src);

    const onLoad = () => {
      setGoogleApi(windowGlobal.google);
    };

    if (existingScript) {
      // if script tag was added by other element just check when it is loaded
      existingScript.addEventListener("load", onLoad);
      return;
    }

    const script = document.createElement(`script`);
    script.src = src;
    script.async = true;
    script.defer = true;
    script.addEventListener(`load`, onLoad);
    (document.head as any).appendChild(script);
    initialized.push(script);

    return () => {
      script.removeEventListener(`load`, onLoad);
      script.remove();
      initialized.splice(
        initialized.findIndex((el) => el.src === src),
        1
      );
    };
  }, [apiKey]);

  return googleApi;
}
