import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <a className={styles.navc} href="Arrow">
          <i className="ri-github-line"></i>
        </a>
        <a className={styles.navc} href="Arrow">
          <Link href="/something">a</Link>
        </a>

        <a className={styles.navc} href="Display">
          <i className="ri-linkedin-box-line"></i>
        </a>

        <a className={styles.navc} href="projects">
          {" "}
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </>
  );
}
