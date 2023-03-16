import React, { useState } from "react";
import { createFromFetch } from "react-server-dom-webpack";
import { LocationContext } from "./LocationContext.client";

export const Root = () => {
  const [location, setLocation] = useState();

  return (
    <LocationContext.Provider value={[location, setLocation]}>
      <Container />
    </LocationContext.Provider>
  );
};

const chunk = createFromFetch(fetch("/rsc"));

const Container = () => {
  return chunk.readRoot();
};
