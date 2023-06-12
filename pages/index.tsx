import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
// import { Box } from "@chakra-ui/react";
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import dynamic from "next/dynamic";
// import SwiperCore, { Mousewheel, Pagination } from "swiper";
// import "swiper/css";
import "swiper/css/mousewheel";
import { useRouter } from "next/router";
// SwiperCore.use([Mousewheel, Pagination]);

const Hero = dynamic(() => import("../components/hero"), { ssr: false });

function HomePage() {
  const router = useRouter();
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default HomePage;

// <Box display="flex" justifyContent="center" bg="#161616" color="white">
// <div className={styles.hero}>
//   <span>
//     {" "}

//       <span className={styles.name}>Abdirrahman </span>
//       <br /> Data and Software Engineer
//       <div>
//         {/* <wired-divider /> */}
//         <br /> a based in London. Take a momemnt to explore my{" "}
//         <RoughNotation
//           type="underline"
//           show={true}
//           color="white"
//           strokeWidth={2}
//           iterations={4}
//           animationDelay={1000}
//         >
//           <a onClick={() => router.push("/projects")}>projects.</a>
//         </RoughNotation>
//       </div>

//   </span>
// </div>
// </Box>
