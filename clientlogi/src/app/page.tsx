"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

import { getTableData } from "../services/tableListActions";
import VirtuaList from "../components/VirtuaList/VirtuaList";
import { ItemsState, DataRow } from "../types/types";


export const DataRows: React.FC<DataRow> = ({ style, item} : DataRow) =>  (
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
                {item?.description}
            </div>
            <div className={styles.cell}>
                {item?.price}
            </div>
        </div>
    </div>
);

const addRow = (items: ItemsState[]): ItemsState[] => [
    ...items,
    {
        index: items.length + 1,
        name: `Item ${items.length + 1}`,
        description: `Item ${items.length + 1}`,
        price:  `Item ${items.length + 1}`,
    }
  ];


export default function Home() {

  const [items, setItems] = useState<ItemsState[]>([]);

  useEffect(() => {
    getTableData()
    .then(res => {setItems(res)});
  }, []);



  return (
    <main className={styles.main}>
        <div className={styles.titleMenuWrapper}>
            <div className={styles.titlePage}>
                <h3>VIrtualized list</h3>
            </div>
            <button
                type="button"
                onClick={() => setItems(addRow(items))} 
                className={styles.button}>
                    Add new item
            </button>
        </div>
        <div className={styles.listWrapper}>
            <VirtuaList 
                totalItems={items.length}
                itemHeight={80}
                windowHeight={800}
                renderItem={({ index, style } : { index: number, style: object }) => ( 
                    <DataRows 
                        style={style}
                        item={items[index]}
                    />
                )}
            />
        </div>
    </main>
  );
}
