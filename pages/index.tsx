import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { Box, Text, useDisclosure, Button } from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Projects = dynamic(
  () => {
    return import("./projects");
  },
  { ssr: false }
);

function HomePage() {
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

      <Projects />
    </>
  );
}

export default HomePage;
