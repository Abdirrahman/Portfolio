import { Box, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";
// import Carousel from "react-spring-3d-carousel";
import { RoughNotation } from "react-rough-notation";
import Nav from "../components/Nav";
import Image from "next/image";
import {
  WiredButton,
  WiredCard,
  WiredImage,
  WiredDivider,
  WiredIconButton,
} from "react-wired-elements";

interface Props {
  title: string;
  img: string;
  code: string;
  live: string;
  desc: string;
  tech: string;
}

export default function Another({ title, img, code, live, desc, tech }: Props) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        ml={-40}
        background="#161616"
        color="white"
      >
        <Box mt={2}>
          <RoughNotation type="box" show={true} color="white" strokeWidth={1}>
            <p>{title}</p>
          </RoughNotation>
        </Box>
        <Box ml={20}>
          <WiredCard style={wiredstyl} elevation={4}>
            {/* <div>
              <img src="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e" />
            </div> */}
            <video muted playsInline loop autoPlay>
              <source src={img} />
            </video>
          </WiredCard>
          <div>
            <p>{desc}</p>
            <small>{tech}</small>
            <br />
            <br />
            <Box display="flex" justifyContent="flex-end" mr={10}>
              <Box mr={3}>
                <a href={code}>
                  {" "}
                  <WiredIconButton
                    icon="code"
                    iconColor="white"
                    lineColor="white"
                    iconSize={24}
                  />
                </a>
              </Box>
              <Box>
                <a href={live}>
                  <WiredIconButton
                    icon="link"
                    iconColor="white"
                    lineColor="white"
                    iconSize={24}
                  />
                </a>
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}
const wiredstyl = {
  color: "white",
  padding: 25,
  height: 440,
  width: 750,
};
const wyre = {
  color: "red",
};
