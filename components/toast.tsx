import {
  useToast,
  Tag,
  TagLabel,
  TagRightIcon,
  TagLeftIcon,
} from "@chakra-ui/react";

export const Toast1 = () => {
  return (
    <>
      <TagLabel>Scroll Down</TagLabel>
      <em className="ri-arrow-down-line" />
    </>
  );
};

export const Toast2 = () => {
  return (
    <>
      <TagLabel>Swipe</TagLabel>
      <em className="ri-arrow-right-line" />
    </>
  );
};
