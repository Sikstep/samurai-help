import React, { useState } from 'react';
import {EditableSpanType} from '../Typisation';
import {UniversalFieldInput} from './UniversalFieldInput';

export const EditableSpan = (props: EditableSpanType) => {
    const [editable, setEditable] = useState(false);

    const onDoubleClickHandler = () => {
        setEditable(true)
    }


    return (
        editable ?
        <UniversalFieldInput addItem={()=>{}}/> :
            <span onDoubleClick={onDoubleClickHandler}><b>{props.title}</b></span>
    );
};
