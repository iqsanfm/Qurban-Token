import Navbar from "../../components/Navbar";
import React from 'react';
import styles from "./styles.module.css";

export default function About() {
  return (
   <div className={styles.container}>
    <div className={styles.main_container}>
      <Navbar/>
        <ul>
            About
        </ul>
    </div>
    </div>
  )
}