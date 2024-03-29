import React, {ChangeEvent} from 'react';
import {FilterType, ShopListPropsType} from './Typisation';
import s from './App.module.css'
import {UniversalFieldInput} from './components/UniversalFieldInput';
import {EditableSpan} from './components/EditableSpan';


export const ShopList = (props: ShopListPropsType) => {

    const onClickFilterButtonHandler = (value: FilterType) => {
        props.changeFilter(props.shopId, value)
    }

    const buttonColorAll = props.filterValue === 'all' ? s.buttonActiveColor : '';
    const buttonColorBuy = props.filterValue === 'buy' ? s.buttonActiveColor : '';
    const buttonColorNotBuy = props.filterValue === 'not buy' ? s.buttonActiveColor : '';

    const addNewTask = (inputValue: string) => {
        props.addTask(props.shopId, inputValue)
    }

    const onClickRemoveShoplistHandler = () => {
        props.removeShopList(props.shopId)
    }

    const changeShoplistTitleHandler = (newTitle: string) => {
        props.changeShoplistTitle(props.shopId, newTitle)
    }

    return (
        <div className="shoplist">
            <div className={s.shoplistTitle}>
                <h3>
                    <EditableSpan title={props.title} changePurchaseTitle={changeShoplistTitleHandler}/>
                </h3>
                <button onClick={onClickRemoveShoplistHandler}>Delete</button>
            </div>
            <UniversalFieldInput addItem={addNewTask}/>
            <ol>
                {props.whatToBuy.map((item) => {

                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeCheckBox(props.shopId, item.id, e.currentTarget.checked)
                        }

                        const ex = Number(item.expectedPrice.replace(/[$]/g, ''));
                        const real = Number(item.realPrice.replace(/[$]/g, ''));
                        const colorPrice = ex >= real ? s.goodPrice : s.badPrice;

                        const changePurchaseTitleHandler = (newTitle: string) => {
                                props.changePurchaseTitle(props.shopId, item.id, newTitle)
                        }
                        return (
                            <li key={item.id} className={item.inCart ? s.shopList : ''}>
                                <div>
                                    <EditableSpan title={item.title} changePurchaseTitle={changePurchaseTitleHandler}/>
                                    <button onClick={() => {
                                        props.deleteItemShop(props.shopId, item.id)
                                    }}> -x-
                                    </button>
                                </div>
                                <div className={colorPrice}>{'expected price: ' + item.expectedPrice}</div>
                                <div className={colorPrice}>{'real price: ' + item.realPrice}</div>
                                <span>in basket: </span>
                                <input
                                    type={'checkbox'}
                                    onChange={onChangeCheckBoxHandler}
                                    checked={item.inCart}
                                />
                            </li>
                        )
                    }
                )
                }
            </ol>
            <div className="filter-buttons">
                <button
                    className={buttonColorAll}
                    onClick={() => onClickFilterButtonHandler('all')}>all
                </button>
                <button
                    className={buttonColorBuy}
                    onClick={() => onClickFilterButtonHandler('buy')}>buy
                </button>
                <button
                    className={buttonColorNotBuy}
                    onClick={() => onClickFilterButtonHandler('not buy')}>not buy
                </button>
            </div>
        </div>
    );
};