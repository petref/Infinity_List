import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [items, setItems] = useState<{
    index: number;
    name: string;
    checked: boolean;
} | (() => { index: number; name: string; checked: boolean; })>([]);

  useEffect(() => {
    // repopulate the list when count changes
    setItems(
      new Array(500000)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}`, checked: false }))
    );
  }, []);
  return (
    <main className={styles.main}>
      
    </main>
  );
}
