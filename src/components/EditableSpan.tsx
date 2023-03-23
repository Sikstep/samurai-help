import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {EditableSpanType} from '../Typisation';

export const EditableSpan = (props: EditableSpanType) => {
    const [editable, setEditable] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.title);

    const onDoubleClickHandler = () => {
        setEditable(true)
    }

    const onBlurHandler = () => {
        props.changePurchaseTitle(currentValue)
        setEditable(false);
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.changePurchaseTitle(currentValue)
            setEditable(false)
        }
    }

    const addNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let newTitle = e.currentTarget.value.trim()
        if (newTitle) {
            setCurrentValue(newTitle)
        }
    }

    return (
        editable ?
            <input value={currentValue} autoFocus
                   onBlur={onBlurHandler}
                   onKeyDown={onEnterHandler}
                   onChange={addNewTitle}
            /> :
            <span onDoubleClick={onDoubleClickHandler}><b>{props.title}</b></span>
    );
};
