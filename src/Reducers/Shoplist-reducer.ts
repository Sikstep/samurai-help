import React from 'react';
import {FilterType, ListPropsType} from '../Typisation';
import {v1} from 'uuid';
import {stat} from 'fs';
type StateType = ListPropsType[]
type AddShoplistType = ReturnType<typeof addShoplistAC>
type ChangeFilterShoplistType = ReturnType<typeof changeFilterShoplistAC>
type RemoveShoplistType = ReturnType<typeof removeShoplistAC>
type ActionsType = AddShoplistType | ChangeFilterShoplistType | RemoveShoplistType;

const shoplistID_1 = v1();
const shoplistID_2 = v1()

const initState: StateType = [
    {id: shoplistID_1, title: "Что купить папе", filter: "all"},
    {id: shoplistID_2, title: "Что купить котопсу", filter: "all"},
]

const shoplistReducer = (state: StateType = initState, action: ActionsType): StateType => {
    let stateCopy;
    switch (action.type) {
        case "ADD-SHOPLIST":
            const newTodolist: ListPropsType = {id: action.payload.shopID, title: action.payload.title, filter: "all"};
            stateCopy = [...state, newTodolist];
            return stateCopy;

        case "REMOVE-SHOPLIST":
            stateCopy = state.filter(shopList => shopList.id !== action.payload);

            delete state[action.payload]
            return stateCopy

        case "CHANGE-FILTER-SHOPLIST":
            stateCopy = state.map(el => el.id === action.payload.shopListID ? {...el, filter: action.payload.newFilterValue} : el)
            return stateCopy
        default:
            return state
    }
}

const addShoplistAC = (title: string, shopID: string) => {
    return {
        type: "ADD-SHOPLIST",
        payload: {title, shopID}
    } as const
}

const changeFilterShoplistAC = (shopListID: string, newFilterValue: FilterType) => {
    return {
        type: "CHANGE-FILTER-SHOPLIST",
        payload: {shopListID, newFilterValue}
    } as const
}

const removeShoplistAC = (shopID: string) => {
    return {
        type: "REMOVE-SHOPLIST",
        payload: shopID
    } as const
}