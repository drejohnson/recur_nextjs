import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGooglePlaces } from "hooks/useGooglePlaces";
import { useMergeRefs } from "use-callback-ref";
import style from "./style.module.css";

const AddEvent = () => {
  const { inputRef, autoComplete, google } = useGooglePlaces("add_api_key", {
    types: ["geocode"],
  });
  const [location, setLocation] = useState({
    name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    googleMapLink: "",
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const handlePlaceSelect = () => {
    let place = autoComplete.getPlace();
    let address = place.address_components;
    console.log(address);
    setLocation({
      name: place.name,
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[3].long_name,
      state: address[5].short_name,
      zip_code: address[7]?.short_name,
      googleMapLink: place.url,
    });
  };

  useEffect(() => {
    if (!autoComplete) {
      return;
    }
    const listener = autoComplete?.addListener(
      "place_changed",
      handlePlaceSelect
    );
    return () => autoComplete?.removeListener(listener);
  }, [autoComplete]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <section className={style.event_form}>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title"
          name="title"
          ref={register({ required: true })}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          ref={register({ maxLength: 240 })}
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={useMergeRefs([inputRef, register({ maxLength: 240 })])}
        />

        <button type="submit">Create Event</button>
      </form>
    </section>
  );
};

export default AddEvent;
