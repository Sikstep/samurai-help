import React, {useState} from 'react';
import {EditableSpanType} from '../Typisation';
import {UniversalFieldInput} from './UniversalFieldInput';

export const EditableSpan = (props: EditableSpanType) => {
    const [editable, setEditable] = useState(false);

    const onDoubleClickHandler = () => {
        setEditable(true)
    }

    const onBlurHandler = () => {
        setEditable(false);
    }

    const onEnterHandler = () => {
        setEditable(false)
    }

    const changeNewPurchaseTitle = (newTitle: string) => {
        props.changePurchaseTitle(newTitle)
    }

    return (
        editable ?
            <UniversalFieldInput addItem={changeNewPurchaseTitle}
                                 onBlur={onBlurHandler}
                                 onEnter={onEnterHandler}
            /> :
            <span onDoubleClick={onDoubleClickHandler}><b>{props.title}</b></span>
    );
};
