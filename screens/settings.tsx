import { View, Text } from "react-native";
import React from "react";
import useDark from "../hooks/useDark";
import ScreenLayout from "../components/layouts/screenlayout";
import TextLayout from "../components/layouts/textlayout";

const Settings = () => {
  const { setisDark, isDark } = useDark();
  return (
    <ScreenLayout extraStyles={"flex items-center justify-center"}>
      <TextLayout
        text={"Change Mode"}
        onPress={() => {
          setisDark(!isDark);
          alert(isDark);
        }}
      />
    </ScreenLayout>
  );
};

export default Settings;
