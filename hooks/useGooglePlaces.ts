import { useState, useEffect, useRef } from "react";
import { useGoogleMapsApi } from "./useGoogleMapsApi";

export function useGooglePlaces(
  apiKey: string,
  options: google.maps.places.AutocompleteOptions
) {
  const google = useGoogleMapsApi(apiKey, { placesApi: true });
  const inputRef = useRef<HTMLInputElement>(null);
  const [autoComplete, setAutoComplete] = useState<any>();

  useEffect(() => {
    if (!google || !inputRef) {
      return;
    }
    setAutoComplete(
      new google.maps.places.Autocomplete(inputRef.current, options)
    );
    autoComplete?.setFields(["address_component"]);
  }, [google, inputRef]);

  return { inputRef, autoComplete, google };
}
