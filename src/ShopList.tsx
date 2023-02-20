import React from 'react';
import {FilterType, ShopListPropsType} from "./Typisation";

export const ShopList = (props: ShopListPropsType) => {

    const onclickHandler =(value:FilterType)=>{
        props.changeFilter(value)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                {props.whatToBuy.map((item) => {
                        return (
                            <li key={item.id}>
                                <div><b>{item.title}</b>
                                    <button onClick={()=>{props.deleteItemShop(item.id)}}> -x- </button></div>
                                <div>{'expected price: ' + item.expectedPrice}</div>
                                <div>{'real price: ' + item.realPrice}</div>
                                <span>in basket: </span>
                                <input type={"checkbox"} checked={item.inCart}/>
                            </li>
                        )
                    }
                )
                }
            </ol>
            <div>
                <button onClick={()=>onclickHandler("all")}>all</button>
                <button onClick={()=>onclickHandler("buy")}>buy</button>
                <button onClick={()=>onclickHandler("not buy")}>not buy</button>
            </div>
        </div>
    );
};

// () =>{alert('удален из списка товар #' + item.id)}