import React from "react";
import { useLocation } from "./LocationContext.client";

export const SayHello = () => {
  const [location] = useLocation();

  return <h1>Hello, {location?.searchText ?? "Anonymous"}!</h1>;
};
