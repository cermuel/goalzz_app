import { View } from "react-native";
import useDark from "../../../hooks/useDark";

type ScreenLayoutType = {
  children: any;
  extraStyles?: string | string[];
};
const ScreenLayout = ({ children, extraStyles }: ScreenLayoutType) => {
  const { isDark } = useDark();
  return (
    <View
      className={`p-2 w-screen min-h-screen ${
        isDark ? "bg-dark-color" : "bg-light-color"
      } ${extraStyles && extraStyles}`}
    >
      {children}
    </View>
  );
};

export default ScreenLayout;
