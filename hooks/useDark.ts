import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

const useDark = () => {
  const colorScheme = useColorScheme();
  const [isDark, setisDark] = useState<boolean>(colorScheme === "dark");

  return { isDark, setisDark };
};

export default useDark;
