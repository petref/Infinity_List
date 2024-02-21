import { ItemsState } from "types/types";
export const getTableData = async (): Promise<ItemsState[]> => 
                await fetch("http://localhost:5000/getTableData")
                .then( data => data.json())
                .then( data => data)
                .catch((error) => {
                    console.error(`Error: ${error.message}`);
                    if ('stack' in error) {
                      console.error(`Stack trace: ${error.stack}`);
                    }
                });
