import { useEffect, useState } from "react";
import styles from "./page.module.css";

import VirtuaList from "@/components/VirtuaList/VirtuaList";

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
        <VirtuaList 
                totalItems={500000}
                itemHeight={80}
                windowHeight={800}
                renderItem={({ index, style } : { index: number, style: object }) => {
                    const item = items[index];
                    return (
                    <div 
                        key={item?.name} 
                        className={styles.item} 
                        style={style}
                    >
                        <div className={styles.itemWrapper}>
                            <div className={styles.cell}>
                                {item?.name}
                            </div>
                            <div className={styles.cell}>
                                {item?.name}
                            </div>
                            <div className={styles.cell}>
                                {item?.name}
                            </div>
                        </div>
                    </div>
                    );
                }}
            />
        </div>
    </main>
  );
}
