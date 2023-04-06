import {v1} from 'uuid';
import {
    addNewPurchaseAC,
    changePurchaseStatusAC,
    changePurchaseTitleAC,
    deletePurchaseAC,
    purchaseReducer
} from './Purchase-reducer';
import {shoplistType} from '../Typisation';


let initialState: shoplistType;

beforeEach(() => {
    const shoplistID_1 = v1();
    const shoplistID_2 = v1();
    initialState = {
        [shoplistID_1]: [
            {id: v1(), title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
            {id: v1(), title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
            // ...
        ],
        [shoplistID_2]: [
            {id: v1(), title: 'Витамины', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
            // ...
        ],
    };
});

test('should change purchase title', () => {
    const shoplistID = Object.keys(initialState)[0];
    const purchase = initialState[shoplistID][0];
    const newTitle = 'New Milk';

    const newState = purchaseReducer(initialState, changePurchaseTitleAC(shoplistID, purchase.id, newTitle));

    expect(newState[shoplistID][0].title).toBe(newTitle);
});

test('should change purchase status', () => {
    const shoplistID = Object.keys(initialState)[0];
    const purchase = initialState[shoplistID][0];

    const newState = purchaseReducer(initialState, changePurchaseStatusAC(shoplistID, purchase.id, !purchase.inCart));

    expect(newState[shoplistID][0].inCart).toBe(!purchase.inCart);
});

test('should delete purchase', () => {
    const shoplistID = Object.keys(initialState)[0];
    const purchase = initialState[shoplistID][0];

    const newState = purchaseReducer(initialState, deletePurchaseAC(shoplistID, purchase.id));

    expect(newState[shoplistID]).toHaveLength(initialState[shoplistID].length - 1);
    expect(newState[shoplistID].find((p) => p.id === purchase.id)).toBeUndefined();
});

test('should add new purchase', () => {
    const shoplistID = Object.keys(initialState)[0];
    const newTitle = 'New Item';

    const newState = purchaseReducer(initialState, addNewPurchaseAC(shoplistID, newTitle));

    expect(newState[shoplistID]).toHaveLength(initialState[shoplistID].length + 1);
    expect(newState[shoplistID][0].title).toBe(newTitle);
});

