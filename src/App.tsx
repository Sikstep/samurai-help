import React, {useState} from 'react';
import './App.css';
import {ShopList} from "./ShopList";
import {FilterType, lidstpropsType, shoplistType, ThingsToBuyPropsType} from "./Typisation";
import {v1} from "uuid";



function App() {

    let shoplistID_1 = v1();
    let shoplistID_2 = v1()

    const [shopList, setShopList]=useState<Array<lidstpropsType>>([
        {id: shoplistID_1, title: "Что купить папе", filter: "all"},
        {id: shoplistID_2, title: "Что купить котопсу", filter: "all"},

    ])

    const [thingsToBuy, setThingsToBuy] = useState<shoplistType>({

        [shoplistID_1]:[
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
    })

    const deleteItemShop = (shoplistID: string, itemID:string) => {
      setThingsToBuy({...thingsToBuy, [shoplistID]: thingsToBuy[shoplistID].filter(item => item.id !== itemID)})

    }

    const changeFilter = (shoplistID: string, newFilterValue:FilterType)=>{
        setShopList(shopList.map(el => el.id === shoplistID ? {...el, filter: newFilterValue} : el))
    }

    const changeCartStatus = (shoplistID: string, itemID: string, checked: boolean) => {
        setThingsToBuy({...thingsToBuy, [shoplistID]: thingsToBuy[shoplistID].map( el => el.id === itemID ? {...el, inCart: checked} : el )})
    }
    const addtask =(shoplistID: string, newTitle:string)=>{
        const newTavar={id: v1(), title: newTitle, expectedPrice: '$4.99', realPrice: '$6.99', inCart: false}
            setThingsToBuy({...thingsToBuy, [shoplistID]: [newTavar,...thingsToBuy[shoplistID]]})
    }



    return (
        <div className="App">

            { shopList.map(el=>{
               let thingsToShopList = thingsToBuy[el.id]
                   thingsToShopList = el.filter === "buy"
                   ? thingsToBuy[el.id].filter(el=>!el.inCart)
                   : el.filter === "not buy"
                       ? thingsToBuy[el.id].filter(el=>el.inCart)
                       : thingsToBuy[el.id]
                return (
                    <ShopList
                        key={el.id}
                        shopId={el.id}
                        title = {el.title}
                        whatToBuy = {thingsToShopList}
                        deleteItemShop = {deleteItemShop}
                        changeFilter={changeFilter}
                        addtask={addtask}
                        changeCheckBox={changeCartStatus}
                        filterValue={el.filter}
                    />
                )
            })}

        </div>
    );
}
export default App;
