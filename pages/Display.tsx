import { Card, Tag, CardBody, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface Props {
  title: string;
  img: string;
  code: string;
  live: string;
}
// TO DO !!!
// Do some animations with text like  https://soulwire.co.uk/
// Then do modals (go to charka-ui) at the text and link code and live
export default function Display({ title, img, code, live }: Props) {
  return (
    <>
      <Box display="flex" justifyContent="center" zIndex={10}>
        <Card maxW="sm">
          <CardBody>
            <Image src={img} />
            <p className="title">{title}</p>

            <Tag variant="solid" colorScheme="teal" mr={2}>
              {" "}
              <a href={code} target="_blank">
                Code
              </a>
            </Tag>
            <Tag variant="solid" colorScheme="blue">
              <a href={live} target="_blank">
                Live
              </a>
            </Tag>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
