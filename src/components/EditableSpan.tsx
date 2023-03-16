import React, { useState } from 'react';
import {EditableSpanType} from '../Typisation';
import {UniversalFieldInput} from './UniversalFieldInput';

export const EditableSpan = (props: EditableSpanType) => {
    const [editable, setEditable] = useState(false);

    const onDoubleClickHandler = () => {
        
    }
    
    return (
        editable ?
        <UniversalFieldInput addItem={()=>{}}/> :
            <span onDoubleClick={()=>{}}><b>{props.title}</b></span>

    );
};
