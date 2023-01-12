import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useToast, Box, Tag, TagLabel } from "@chakra-ui/react";

export default function Nav() {
  const toast = useToast({
    position: "top",
  });
  return (
    <>
      <div className={styles.nav}>
        <a
          className={styles.navc}
          href="https://github.com/abdirrahman"
          target="_blank"
        >
          <i className="ri-github-line"></i>
        </a>
        <a
          className={styles.navc}
          href="https://www.linkedin.com/in/abdirrahman/"
          target="_blank"
        >
          <i className="ri-linkedin-box-line"></i>
        </a>

        <a
          className={styles.navc}
          onClick={() => {
            navigator.clipboard.writeText("abdirrahman@outlook.com");
            toast({
              render: () => (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  color="black"
                  border="2px 2px 2px 2px red"
                >
                  <Tag>
                    <TagLabel>Copied!</TagLabel>
                    <em className="ri-clipboard-line"></em>
                  </Tag>
                </Box>
              ),
            });
          }}
        >
          {" "}
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </>
  );
}
