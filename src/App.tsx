import React, {useState} from 'react';
import './App.css';
import {ShopList} from "./ShopList";
import {FilterType, ThingsToBuyPropsType} from "./Typisation";
import {v1} from "uuid";


function App() {

    const [thingsToBuy, setThingsToBuy] = useState<ThingsToBuyPropsType[]>([
        {id: v1(), title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
        {id: v1(), title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
        {id: v1(), title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
        {id: v1(), title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        {id: v1(), title: 'Cakes', expectedPrice: '$4.99', realPrice: '$6.99', inCart: false},
    ])
    const [filter, setFilter] = useState<FilterType>("all")
    const deleteItemShop = (id:string) => {
        let things = thingsToBuy.filter(th => th.id !== id)
        setThingsToBuy(things)
        console.log(parseFloat('12.5$'))
    }
    let thingsToShopList = filter === "buy"
        ? thingsToBuy.filter(el=>el.inCart === true)
        : filter === "not buy"
            ? thingsToBuy.filter(el=>el.inCart === false)
            : thingsToBuy

    const changeFilter = (newFilterValue:FilterType)=>{
        setFilter(newFilterValue)
    }
    const addtask =(newTitle:string)=>{
        const newTavar={id: v1(), title: newTitle, expectedPrice: '$4.99', realPrice: '$6.99', inCart: false}
        setThingsToBuy([newTavar,...thingsToBuy])
    }

    const changeCartStatus = (itemID: string, checked: boolean) => {
        setThingsToBuy(thingsToBuy.map( el => el.id === itemID ? {...el, inCart: checked} : el ))
    }

    return (
        <div className="App">
            <ShopList
                title = {"What to buy"}
                whatToBuy = {thingsToShopList}
                deleteItemShop = {deleteItemShop}
                changeFilter={changeFilter}
                addtask={addtask}
                changeCheckBox={changeCartStatus}
            />
        </div>
    );
}
export default App;
