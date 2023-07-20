import React from "react";
import styles from "./BlogSection.module.css";
import BlogSectionCard from "../BlogSectionCard/BlogSectionCard";

export default function BlogSection() {
  return (
    <div className={styles.container}>
      <label>Lee nuestro blog</label>
      <h2>Ultimos posts</h2>
      <div className={styles.sectionCards}>
        <BlogSectionCard last={true} />
        <BlogSectionCard />
        <BlogSectionCard />
        <BlogSectionCard />
      </div>
    </div>
  );
}
