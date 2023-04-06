import {v1} from 'uuid';
import {FilterType, ListPropsType} from '../Typisation';
import {addShoplistAC, changeFilterShoplistAC, removeShoplistAC, shoplistReducer} from './Shoplist-reducer';


const shoplistID_1 = v1();
const shoplistID_2 = v1();

const initState: ListPropsType[] = [
    { id: shoplistID_1, title: "Что купить папе", filter: "all" },
    { id: shoplistID_2, title: "Что купить котопсу", filter: "all" },
];

describe("shoplistReducer", () => {
    test("should add new shoplist to the state", () => {
        const title = "Test shoplist";
        const shopID = v1();
        const action = addShoplistAC(title, shopID);
        const newState = shoplistReducer(initState, action);
        expect(newState.length).toBe(3);
        expect(newState[2].title).toBe(title);
        expect(newState[2].id).toBe(shopID);
        expect(newState[2].filter).toBe("all");
    });

    test("should remove shoplist from the state", () => {
        const shopID = shoplistID_1;
        const action = removeShoplistAC(shopID);
        const newState = shoplistReducer(initState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].id).toBe(shoplistID_2);
    });

    test("should change filter value of the shoplist", () => {
        const shopListID = shoplistID_1;
        const newFilterValue: FilterType = 'buy';
        const action = changeFilterShoplistAC(shopListID, newFilterValue);
        const newState = shoplistReducer(initState, action);
        expect(newState[0].filter).toBe(newFilterValue);
    });

    test("should return the same state when unknown action is provided", () => {
        const action = { type: "UNKNOWN_ACTION" } as any;
        const newState = shoplistReducer(initState, action);
        expect(newState).toEqual(initState);
    });
});