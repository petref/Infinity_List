import React from "react";

export interface VirtuaList  {
    totalItems: number,
    itemHeight: number,
    renderItem: React.FC<RenderItem>,
    windowHeight: number,
}

export interface DataRow {
    style: Object,
    item: ItemsState
}

export interface ItemsState {
    index: number,
    name: string,
    description: string,    
    price: string
}

interface RenderItem {
    index: number,
    style: Object
}