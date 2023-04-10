import { View, Text, Image } from "react-native";
import React from "react";
import SectionLayout from "../../layouts/sectionlayout";
import Heading from "../shared/Heading";
import TextLayout from "../../layouts/textlayout";
import { NewsCardType } from "../../../types/news";

const NewsCard = (News: NewsCardType) => {
  return (
    <SectionLayout
      extraStyles={"h-20 flex flex-row px-2 space-x-1 items-center"}
    >
      <Image source={{ uri: News.image }} className="w-16 h-16 rounded-md" />
      <View className="flex justify-between w-[85%]">
        <TextLayout
          text={News.text}
          extraStyles={"px-1 w-full tracking-tighter font-bold text-sm"}
        />
        <TextLayout
          text={News.date}
          extraStyles={"px-1 mt-1 w-full font-medium text-gray-500 text-xs"}
        />
      </View>
    </SectionLayout>
  );
};

export default NewsCard;
