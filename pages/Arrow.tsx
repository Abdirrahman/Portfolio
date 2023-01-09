import { ReactDOM } from "react";
import { render } from "react-dom";
import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {
  WiredButton,
  WiredCard,
  WiredImage,
  WiredDivider,
} from "react-wired-elements";

interface Props {
  title: string;
  img: string;
  code: string;
  live: string;
  desc: string;
  tech: string;
}

export default function Arrow({ title, img, code, live, desc, tech }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        borderRadius={10}
        _hover={{
          background: "white",

          // boxShadow: "1px 2px white",
        }}
        m={2}
      >
        <RoughNotation type="box" show={true} color="white" strokeWidth={1}>
          <Button
            colorScheme="red"
            variant="link"
            pt={7}
            pb={3}
            _hover={{
              textDecoration: "none",
              // transform: "translate(-2px,-8px)",
            }}
            onClick={onOpen}
          >
            <p className={styles.rot}> {title}</p>
          </Button>
        </RoughNotation>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent background="#161616" p={2}>
            <ModalHeader background="#161616" color="white" mt={2}>
              {title}
            </ModalHeader>
            <ModalCloseButton background="#161616" color="white" />
            <WiredCard style={wiredstyl} elevation={1}>
              <ModalBody>
                <WiredImage src={img} />
                {/* <Image src={img} /> */}

                {desc}
                <br />
                <small> {tech}</small>
                <br />
                <WiredDivider elevation={2} />
                <br />
              </ModalBody>
            </WiredCard>
            <ModalFooter>
              <WiredButton style={wiredstyl} elevation={3}>
                <Link href={code}>Code</Link>
              </WiredButton>
              <WiredButton style={wiredstyl} elevation={3}>
                <Link href={live}>Live</Link>
              </WiredButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

const wiredstyl = {
  color: "white",
};
