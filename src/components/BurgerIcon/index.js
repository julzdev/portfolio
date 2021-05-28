import React from 'react';
import { Line, MobileIcon } from './BurgerElement';


export const LineIcon = ({className}) => {
    return <div className={className} />
}

const BurgerIcon = ({className, toggle}) => {
    return (
        <MobileIcon>
            <button className={className} onClick={toggle}>
                <Line />
                <Line size={30} />
                <Line size={20} />
            </button>
        </MobileIcon>
    )
}

export default BurgerIcon;