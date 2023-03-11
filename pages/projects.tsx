import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import {
  Alert,
  AlertDescription,
  Box,
  CloseButton,
  useToast,
  Tag,
  TagLabel,
  TagRightIcon,
  TagLeftIcon,
} from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import dynamic from "next/dynamic";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Toast1, Toast2 } from "../components/toast";

SwiperCore.use([Mousewheel, Pagination]);

const Aug = dynamic(() => import("../components/aug"), { ssr: false });

export default function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toast = useToast();
  const id = "scroll-toast";

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    if (!toast.isActive(id)) {
      toast({
        id,
        isClosable: true,
        render: () => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="stretch"
            color="black"
            border="2px 2px 2px 2px red"
          >
            <Tag>
              {screenWidth < 600 && <Toast2 />}
              {screenWidth >= 600 && <Toast1 />}
            </Tag>
          </Box>
        ),
      });
    }
  }, [toast]);

  return (
    <>
      <Nav />
      <Box
        className={styles.pugbox}
        // display="flex"
        // justifyContent="center"
        // mt={40}
        // ml={12}
        // background="#161616"
      >
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 1000 },
            480: { slidesPerView: 1, spaceBetween: 1000 },
            768: { slidesPerView: 1, spaceBetween: 1000 },
            1024: { slidesPerView: 1, spaceBetween: 0 },
          }}
          direction={"horizontal"}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Aug
              title="Tauri"
              img="/sylvid.mov"
              code="https://github.com/Abdirrahman/Syl-Desktop"
              live=""
              nolive={styles.nolive}
              desc="A Text editor in markdown for Windows, Mac and Linux."
              tech="React, NextJS, Tauri, Pocketbase in TypeScript."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Aug
              title="React Native Template"
              img="/univentsvid.mov"
              code="https://github.com/Abdirrahman/React-Native-Template"
              live=""
              nolive={styles.nolive}
              desc="A starter template with authentication, a cloud database, navigation and some state management setup. "
              tech="React Native, Redux, Firebase in TypeScript."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Aug
              title="Supabase"
              img="/supavid.mov"
              code="https://github.com/Abdirrahman/supa"
              live="https://supabase-psql-tut.netlify.app"
              nolive=""
              desc="Reddit like message board, with authentication implemented."
              tech="React, PostgreSQL, Supabase in TypeScript."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Aug
              title="Twitter Bot"
              img="/twittervid.mov"
              code="https://github.com/Abdirrahman/PrayerTimesTwitBot"
              live="https://twitter.com/BotPrayerTimes"
              nolive=""
              desc="A Bot that tweets our prayer times, was hosted in Heroku."
              tech="Twitter API, Tweepy in Python."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Aug
              title="Covid-19"
              img="/covidvid.mov"
              code="https://github.com/Abdirrahman/Covid19-ANN"
              live=""
              nolive={styles.nolive}
              desc="Audio classifcation to diagnoise Covid-19 with coughs sounds using a Convolutional Neural Network. "
              tech="TensorFlow, Keras, NumPy, Matplotlib, pandas, librosa, scikit-learn in Python."
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
