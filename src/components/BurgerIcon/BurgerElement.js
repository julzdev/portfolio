import styled from 'styled-components';
import BurgerIcon, { LineIcon } from './index';

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        transform: translate(-100, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const StyledBurgerIcon = styled(BurgerIcon)`
    text-decoration: none;
    border: none;
    background-color: transparent;
    text-align: -webkit-right;
    cursor: pointer;

    /* @media screen and (max-width: 768px) {
        vertical-align: middle;
    } */
`;

export const Line = styled(LineIcon)`
    width: ${props => props.size ? props.size + 'px' : `40px`};
    height: 2px;
    background-color: #fff;
    margin: 5px 0px;

    @media screen and (max-width: 960px) {
        background-color: #000;
    }
`;