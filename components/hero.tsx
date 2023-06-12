import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import {
  WiredButton,
  WiredCard,
  WiredImage,
  WiredDivider,
  WiredIconButton,
  WiredVideo,
} from "react-wired-elements";
import "swiper/css/mousewheel";
import { useRouter } from "next/router";
SwiperCore.use([Mousewheel, Pagination]);

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <Box display="flex" justifyContent="center" bg="#161616" color="white">
        <div className={styles.hero}>
          <span>
            {" "}
            <span className={styles.name}>Abdirrahman Mohamed</span>
            <br />
            <WiredDivider />
            <div>
              I'm a Data & Software Engineer based in London. Before that, I
              graduated from King's College London with a Bachelors in
              Electronic Engineering. Take a moment to explore my{" "}
              <RoughNotation
                type="underline"
                show={true}
                color="white"
                strokeWidth={2}
                iterations={4}
                animationDelay={1000}
              >
                <a onClick={() => router.push("/projects")}>projects.</a>
              </RoughNotation>
              <br />
              <br />
            </div>
          </span>
        </div>
      </Box>
    </>
  );
}
