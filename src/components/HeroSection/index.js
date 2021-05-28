import React from 'react';
import { HeroContainer, Container, HeroLogo, HeroTitle, HeroDescription, HeroName, HeroScrollLine } from './HeroElements';

import { SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const HeroSection = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroLogo />
                <HeroTitle>Hi, I'm Juls <p style={{color: '#5d5d5d'}}>.</p></HeroTitle>
                <HeroDescription>I design and develop websites and apps. Feel free to check out my work below.</HeroDescription>
                <HeroName>julius pineda</HeroName>
                <HeroScrollLine />
                <IoIosArrowDropdownCircle style={{position: 'absolute', bottom: '100px', right: '40px', width: '60px', height: '60px', cursor: 'pointer'}} />
                <div style={{display: 'flex', justifyContent: 'center', margin: '3rem 0rem', width: '100%'}}>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <SiGithub style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                        <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>GitHub</p>
                    </div>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <SiFacebook style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                        <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>Facebook</p>
                    </div>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <SiInstagram style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                        <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>Instagram</p>
                    </div>
                </div>
            </HeroContainer>
        </Container>
    )
}

export default HeroSection;
