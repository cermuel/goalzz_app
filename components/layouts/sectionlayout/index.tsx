import { TouchableOpacity, View } from "react-native";
import useDark from "../../../hooks/useDark";

type SectionLayoutType = {
  children: any;
  extraStyles?: string | string[];
  onPress?: any;
};
const SectionLayout = ({
  children,
  extraStyles,
  onPress,
}: SectionLayoutType) => {
  const { isDark } = useDark();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`px-2 my-1 w-full rounded-md ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        } ${extraStyles && extraStyles}`}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default SectionLayout;
