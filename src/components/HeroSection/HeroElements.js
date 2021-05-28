import styled, {keyframes} from 'styled-components';
import { device } from '../../globalStyles.style';
import Avatar from '../../assets/New Project.png';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    width: 100%;
    height: calc(100vh - 80px);
    text-align: center;
    position: relative;
`;

export const HeroContainer = styled.div`
    /* background: black; */
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    /* padding: 0 150px; */
    width: 50%;
    height: calc(50% - 60px);
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const rotate0 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const HeroLogo = styled.img.attrs({
    src: `${Avatar}`
})`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    animation: ${rotate0} .8s linear;
    @media ${device.ipad} {
        width: 100px;
        height: 100px;
    }
`;

const rotate = keyframes`
  from {
    color: #cdcdcd;
    /* transform: rotate(0deg); */
  }

  to {
    color: #000;
    /* transform: rotate(360deg); */
  }
`;

export const HeroTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 70px;
    font-weight: 700;
    animation-name: ${rotate};
    animation-duration: 2s;
    @media ${device.ipad} {
        font-size: 40px;
    }
`;

const rotate1= keyframes`
  from {
    color: #000;
    /* transform: rotate(0deg); */
  }

  to {
    color: #5d5d5d;
    /* transform: rotate(360deg); */
  }
`;

export const HeroDescription = styled.h3`
    font-size: 30px;
    font-weight: 300;
    animation-name: ${rotate1};
    animation-duration: 2s;
    color: #5d5d5d;

    @media ${device.ipad} {
        font-size: 22px;
    }
`;

export const HeroName = styled.p`
    display: block;
    transform: rotate(270deg);
    letter-spacing: .5rem; 
    position: absolute; 
    top: calc(100vh - 500px); 
    left: -50px;
    font-size: 20px; 
    color: #a29e9e;
    transition: 0.3s all ease;
    @media ${device.ipad} {
        display: none;
        
    }
`;

export const HeroScrollLine = styled.div`
    transform: rotate(270deg); 
    position: absolute; 
    top: calc(100vh - 400px); 
    right: -80px; 
    width: 300px; 
    height: 1px; 
    background: #a29e9e;
    transition: 0.3s all ease;
    @media ${device.ipad} {
        display: none;
    }
`;