import { TouchableOpacity, View } from "react-native";
import useDark from "../../../hooks/useDark";

type SectionLayoutType = {
  children: any;
  extraStyles?: string | string[];
  onPress?: (event: MouseEvent | TouchEvent) => void | any;
};
const SectionLayout = ({ children, extraStyles }: SectionLayoutType) => {
  const { isDark } = useDark();
  return (
    <TouchableOpacity>
      <View
        className={`px-2 w-full rounded-md ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        } ${extraStyles && extraStyles}`}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default SectionLayout;
