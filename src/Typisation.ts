import {v1} from 'uuid';


export type shoplistType = {
    [key: string]: ThingsToBuyPropsType[]
}


export type ThingsToBuyPropsType = {
    id: string,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    shopId: string
    title: string
    whatToBuy: ThingsToBuyPropsType[]
    deleteItemShop: (shopListID: string, itemID: string) => void
    changeFilter: (shoplistID: string, newFilterValue: FilterType) => void
    addTask: (shopListID: string, newTitle: string) => void
    changeCheckBox: (shopListID: string, itemID: string, checked: boolean) => void
    filterValue: FilterType
    removeShopList: (shopID: string) => void
    changePurchaseTitle: (shoplistID: string, purchaseID: string, newTitle: string) => void

}
export type ListPropsType = {
    id: string
    title: string
    filter: FilterType
}

export type FilterType = 'all' | 'buy' | 'not buy'

export type UniversalFieldInputPropsType = {
    addItem: (inputValue: string) => void
    onBlur?: () => void
    onEnter?: () => void

}

export type EditableSpanType = {
    title: string
    changePurchaseTitle: (newTitle: string) => void
}


