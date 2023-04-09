import Animated from "react-native-reanimated";
import { FadeInUp, FadeOutUp } from "react-native-reanimated";
const Toaster = ({ text }: { text: string }) => {
  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
      {text}
    </Animated.View>
  );
};
