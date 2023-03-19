import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from '../App.module.css';
import {UniversalFieldInputPropsType} from '../Typisation';


export const UniversalFieldInput = (props: UniversalFieldInputPropsType) => {
    const [error, setError] = useState<'Ошибка, введите имя товара!' | ''>('');
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        setError('')
    }
    const onClickHandler = () => {
        const trimmedValue = inputValue.trim()
        if (trimmedValue !== '') {
            props.addItem(inputValue)
            setInputValue('')
        } else {
            setError('Ошибка, введите имя товара!');
            setInputValue('')
        }
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const trimmedValue = inputValue.trim()
        if (event.key === 'Enter')
            if (trimmedValue !== '') {
                props.addItem(inputValue)
                setInputValue('')
                if (props.onEnter) {
                    props.onEnter()
                }
            } else {
                setError('Ошибка, введите имя товара!')
                setInputValue('')
            }
    }

    const onBlurHandler = () => {
        if (props.onBlur) {
            props.onBlur()
        }
    }

    return (
        <div>
            <input value={inputValue}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
                   onBlur={onBlurHandler}
                   autoFocus
            />
            <button disabled={inputValue.trim() === ''} onClick={onClickHandler}>add</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
};

