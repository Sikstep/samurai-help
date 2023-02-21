import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterType, ShopListPropsType} from "./Typisation";
import s from './App.module.css'

export const ShopList = (props: ShopListPropsType) => {

    const [error, setError] = useState<"Ошибка, введите имя товара!" | ''>('');
    const onclickHandler =(value:FilterType)=>{
        props.changeFilter(value)
    }
    const[inputValue,setInputValue]=useState("")
    const onChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.currentTarget.value)
        setError('')
    }
    const onClickHandler = ()=>{
        const trimmedValue = inputValue.trim()
        if (trimmedValue !== ""){
            props.addtask(inputValue)
            setInputValue('')
        } else {
            setError("Ошибка, введите имя товара!");
            setInputValue('')
        }

    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>)=>{
        const trimmedValue = inputValue.trim()
        if (event.key === "Enter")
            if (trimmedValue !== "") {
                props.addtask(inputValue)
                setInputValue('')
            } else {
                setError("Ошибка, введите имя товара!")
                setInputValue('')
            }

    }
    const [shopList, setShopList] = useState('');
    return (
        <div>
            <h3>{props.title}</h3>
            <input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <button disabled={inputValue.trim() === ""} onClick={onClickHandler}>add</button>
            {error && <div>{error}</div>}
            <ol>
                {props.whatToBuy.map((item) => {

                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeCheckBox(item.id, e.currentTarget.checked)
                        }

                        return (
                            <li key={item.id} className={item.inCart ? s.shopList : ''}>
                                <div><b>{item.title}</b>
                                    <button onClick={()=>{props.deleteItemShop(item.id)}}> -x- </button></div>
                                <div>{'expected price: ' + item.expectedPrice}</div>
                                <div>{'real price: ' + item.realPrice}</div>
                                <span>in basket: </span>
                                <input type={"checkbox"}
                                       onChange={onChangeCheckBoxHandler}
                                       checked={item.inCart}/>
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