import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { Box } from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import dynamic from "next/dynamic";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/mousewheel";
import Projects from "./projects";
import { useRouter } from "next/router";
SwiperCore.use([Mousewheel, Pagination]);

const Another = dynamic(
  () => {
    return import("./aug");
  },
  { ssr: false }
);

interface Props {
  elID: HTMLElement | null;
}

function HomePage() {
  const router = useRouter();
  //   const scroll2El = (elID: any )=> {
  //     window.scrollTo({
  //       top: document.getElementById(elID).offsetTop - 60,
  //       behavior: 'smooth',
  //     });
  //   };

  // const onBtnClick = (e) => {
  //     e.preventDefault();
  //     const goto = e.target.getAttribute('goto');
  //     setTimeout(() => {
  //       scroll2El(goto);
  //     }, 100);
  //   }
  return (
    <>
      <Nav />
      <Box display="flex" justifyContent="center" bg="#161616" color="white">
        <div className={styles.hero}>
          <span>
            {" "}
            Hello,
            <br /> I am Abdirrahman a full stack developer, currently based in
            London. Check out my{" "}
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
          </span>
        </div>
      </Box>
      <section id="projects">{/* <Projects /> */}</section>
    </>
  );
}

export default HomePage;
