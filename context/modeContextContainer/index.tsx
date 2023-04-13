import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const ModeContext = createContext<any>({});
export const OnboardingContext = createContext<any>({});

const ModeContextContainer = ({ children }: any) => {
  const [mode, setmode] = useState();
  return (
    <ModeContext.Provider value={{ mode, setmode }}></ModeContext.Provider>
  );
};

export default ModeContextContainer;
