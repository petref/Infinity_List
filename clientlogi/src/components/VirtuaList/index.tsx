"use client"
import React, { useState } from "react";
import { VirtuaList } from "@/types/types";

import styles from "./index.module.css";

const VirtuaList = ({ 
    totalItems, 
    itemHeight,
    renderItem,
    windowHeight,
}: VirtuaList)  => {
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = totalItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    totalItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  let items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          height: itemHeight,
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%"
        }
      })
    );
  }
  
  const onScroll =( e: React.UIEvent<HTMLInputElement>)  => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className={styles.listWrapper}>
      <div className={styles.tableWrapper} style={{ overflowY: "scroll" }} onScroll={onScroll}>
        <div className={styles.listHeader} style={{height: `${itemHeight}px`}}>
            <div className={styles.columnHeader}>column 1</div>
            <div className={styles.columnHeader}>column 2</div>
            <div className={styles.columnHeader}>column 3</div>
        </div>
        <div
          className={styles.inner}
          style={{ position: "relative", height: `${innerHeight}px` }}
        >
          <div>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtuaList;