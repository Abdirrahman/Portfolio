import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { Box, Text, useDisclosure, Button } from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/mousewheel";
SwiperCore.use([Mousewheel, Pagination]);

const Another = dynamic(
  () => {
    return import("./another");
  },
  { ssr: false }
);

export default function Something() {
  return (
    <>
      <Nav />
      <Box display="flex" justifyContent="center" bg="#161616" color="white">
        <div className={styles.hero}>
          <span>
            {" "}
            Hello, I am Abdirrahman a full stack developer, currently working on
            a few side <a href="www.google.com">syl. </a> Check out my{" "}
            <RoughNotation
              type="underline"
              show={true}
              color="white"
              strokeWidth={2}
            >
              projects.
            </RoughNotation>
          </span>
        </div>
      </Box>
      <Swiper
        // navigation={true}
        // scrollbar={{
        //   hide: true,
        // }}
        // spaceBetween={150}
        // slidesPerView={1}
        // // onSlideChange={() => console.log("slide change")}
        // // onSwiper={(swiper) => console.log(swiper)}
        // modules={[Mousewheel]}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Another
            title="Tauri"
            img="/tauri-vid.mov"
            code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            desc="A Text editor in markdown for Windows, Mac and Linux."
            tech="React, NextJS, Tauri, Pocketbase in TypeScript."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Another
            title="Univents"
            img="/tauri-vid.mov"
            code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            desc="A social media application to connect students through university events."
            tech="React Native, Redux, Firebase in TypeScript."
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Another
            title="Supabase"
            img="/tauri-vid.mov"
            code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            live="supabase-psql-tut.netlify.app"
            desc="TBC"
            tech="React, PostgreSQL, Supabase in TypeScript."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Another
            title="Twitter Bot"
            img="/tauri-vid.mov"
            code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            desc="A Bot that tweets our prayer times, was hosted in Heroku."
            tech="Twitter API, Tweepy in Python."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Another
            title="Covid-19"
            img="/tauri-vid.mov"
            code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
            desc="Audio classifcation to diagnoise Covid-19 with coughs sounds using a Convolutional Neural Network. "
            tech="TensorFlow, Keras, NumPy, Matplotlib, pandas, librosa, scikit-learn in Python."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
