import { Box, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

import { RoughNotation } from "react-rough-notation";
import Image from "next/image";
import {
  WiredButton,
  WiredCard,
  WiredImage,
  WiredDivider,
  WiredIconButton,
  WiredFab,
  WiredVideo,
} from "react-wired-elements";
import { CSSProperties } from "react";

interface Props {
  title: string;
  img: string;
  code: string;
  live: string | undefined;
  nolive: any;
  desc: string;
  tech: string;
}

export default function Aug({
  title,
  img,
  code,
  live,
  nolive,
  desc,
  tech,
}: Props) {
  return (
    <>
      <Box className={styles.pbox}>
        <Box mt={2}>
          <div className={styles.ptitle}>
            <RoughNotation
              type="box"
              show={true}
              color="white"
              strokeWidth={2}
              animationDelay={1000}
            >
              <p>{title}</p>
            </RoughNotation>
          </div>
        </Box>
        <Box ml={20}>
          <WiredCard className={styles.wiredstyl} elevation={3}>
            <video muted playsInline loop autoPlay>
              <source src={img} />
            </video>
          </WiredCard>

          <div className={styles.pdesc}>
            <p>{desc}</p>
            <RoughNotation
              type="highlight"
              show={true}
              color="black"
              strokeWidth={1}
            >
              <small>{tech}</small>
            </RoughNotation>
            <br />
            <br />
            <Box display="flex" justifyContent="flex-end" mt={-10} mr={10}>
              <Box
                mr={3}
                // _hover={{
                //   boxShadow: "0px 0px 1px 11px red",
                // }}
              >
                <a className={nolive} href={live}>
                  {" "}
                  <WiredFab bgColor="black">
                    {" "}
                    <em className="ri-link"></em>
                  </WiredFab>
                </a>
              </Box>
              <Box fontSize={0.1}>
                <a href={code}>
                  <WiredFab bgColor="black">
                    <em className="ri-github-line"></em>
                  </WiredFab>
                </a>
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}
