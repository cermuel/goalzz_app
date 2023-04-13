import { Text } from "react-native";
import useDark from "../../../hooks/useDark";

type TextLayoutType = {
  text: string | string[] | any;
  extraStyles?: string | string[];
  onPress?: any;
  inverse?: boolean;
};
const TextLayout = ({ text, onPress, extraStyles }: TextLayoutType) => {
  const { isDark } = useDark();
  return (
    <Text
      className={`${!isDark ? "text-dark-color" : "text-light-color"} px-1 ${
        extraStyles && extraStyles
      }`}
      onPress={onPress && onPress}
    >
      {text}
    </Text>
  );
};

export default TextLayout;
