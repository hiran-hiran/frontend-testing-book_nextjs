import Link from "next/link";
import Pen from "./assets/Pen.svg";
import styles from "./styles.module.css";
import Image from 'next/image';

export const Heading = () => {
  return (
    <h1 className={styles.heading}>
      <Link href={`/`} >
        <span className={styles.icon}>
          <Image src={Pen} alt=""/>
        </span>
        Tech Posts
      </Link>
    </h1>
  );
};
