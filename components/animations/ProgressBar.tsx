import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
const ProgressBar = ({ progress }: any) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(progress + "%", { duration: 1000 }),
  }));

  return <Animated.View style={animatedStyle} />;
};

export default ProgressBar;
