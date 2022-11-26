/***************************
 * IMPORTS
 ***************************/
import './timetable.css';
import { useState } from 'react';
import { Icon } from '@iconify/react';

/***************************
 * COMPONENT
 ***************************/
export default function TTEvent(params) {
    const [popupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    }



    return (
        <div className='ttevent'>
            <button className='ttcard' onClick={togglePopup} style={{width: params.width, backgroundColor: params.color}}>
                {params.children}
            </button>
            {(popupVisible && params.popup != '') && (<div className='ttpopup'>
                {params.popup}
                <button className='ttclose' onClick={() => setPopupVisible(false)}><Icon icon='ic:baseline-close' /></button>
            </div>)}
        </div>
    )
}
