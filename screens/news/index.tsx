import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

const News = ({ navigation }: any) => {
  return (
    <View>
      <Text>News</Text>
      <Button
        title="Go to league news"
        onPress={() => navigation.navigate("LeagueNews")}
      />
    </View>
  );
};

export default News;
