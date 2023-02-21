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
    addtask:(newTitle:string)=> void
    changeCheckBox: (itemID: string, checked: boolean) => void
    filterValue: FilterType

}

export type FilterType = "all" | "buy" | "not buy"



