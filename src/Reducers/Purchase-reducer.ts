import {shoplistType} from '../Typisation';
import {v1} from 'uuid';

type StateType = shoplistType

type ChangePurchaseTitleType = ReturnType<typeof changePurchaseTitleAC>
type ChangeCartStatusType = ReturnType<typeof changePurchaseStatusAC>
type DeletePurchaseType = ReturnType<typeof deletePurchaseAC>
type AddNewPurchaseType = ReturnType<typeof addNewPurchaseAC>

type ActionType = ChangePurchaseTitleType | ChangeCartStatusType | DeletePurchaseType | AddNewPurchaseType

let shoplistID_1 = v1();
let shoplistID_2 = v1();
const initialStateForPurchase = {
    [shoplistID_1]: [
        {id: v1(), title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
        {id: v1(), title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
        {id: v1(), title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
        {id: v1(), title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        {id: v1(), title: 'Cakes', expectedPrice: '$4.99', realPrice: '$6.99', inCart: false},
    ],
    [shoplistID_2]: [
        {id: v1(), title: 'Витамины', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
        {id: v1(), title: 'Корм', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
        {id: v1(), title: 'Игрушка', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
    ]
}
export const purchaseReducer = (state: StateType = initialStateForPurchase, action: ActionType): StateType => {
    let stateCopy;
    switch (action.type) {
        case 'CHANGE-PURCHASE-TITLE':
            stateCopy = {...state, [action.payload.shoplistID]: state[action.payload.shoplistID].map(purch => purch.id === action.payload.purchaseID ? {...purch, title: action.payload.newTitle} : purch)}
            return stateCopy
        case 'CHANGE-PURCHASE-STATUS':
            stateCopy = {...state, [action.payload.shopListID]: state[action.payload.shopListID].map(purch => purch.id === action.payload.itemID ? {...purch, inCart: action.payload.checked} : purch)}
            return stateCopy
        case 'REMOVE-PURCHASE':
            stateCopy = {...state, [action.payload.shopListID]: state[action.payload.shopListID].filter(purch => purch.id !== action.payload.itemID)}
            return stateCopy
        case 'ADD-NEW-PURCHASE':
            const newPurch = {id: v1(), title: action.payload.newTitle, expectedPrice: '$1.99', realPrice: '$1.99', inCart: false}
            stateCopy = {...state, [action.payload.shopListID]: [newPurch, ...state[action.payload.shopListID]]}
                return stateCopy
        default:
            return state
    }
}

export const changePurchaseTitleAC = (shoplistID: string, purchaseID: string, newTitle: string) => {
    return {
        type: 'CHANGE-PURCHASE-TITLE',
        payload: {shoplistID, purchaseID, newTitle}
    } as const
}

export const changePurchaseStatusAC = (shopListID: string, itemID: string, checked: boolean) => {
    return {
        type: 'CHANGE-PURCHASE-STATUS',
        payload: {shopListID, itemID, checked}
    } as const
}

export const deletePurchaseAC = (shopListID: string, itemID: string) => {
    return {
        type: 'REMOVE-PURCHASE',
        payload: {shopListID, itemID}
    } as const
}

export const addNewPurchaseAC = (shopListID: string, newTitle: string) => {
    return {
        type: 'ADD-NEW-PURCHASE',
        payload: {shopListID, newTitle}
    } as const
}