
export interface VirtuaList  {
    totalItems: number,
    itemHeight: number,
    renderItem: React.ReactComponentElement,
    windowHeight: number,
}

export interface ItemsState {
    index: number,
    name: string,
    checked: boolean,
}
