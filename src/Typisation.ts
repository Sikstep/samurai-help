export type ThingsToBuyPropsType = {
    id: string,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    title: string
    whatToBuy: ThingsToBuyPropsType[]
    deleteItemShop: (id: string) => void
    changeFilter: (newFilterValue:FilterType)=>void
    addTask: (title: string) => void

}

export type FilterType = "all" | "buy" | "not buy"



