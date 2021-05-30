import React from 'react';
import { HeroContainer, Container, HeroLogo, HeroTitle, HeroDescription, HeroName, HeroScrollLine } from './HeroElements';

import { SiGithub } from "react-icons/si";
import { AiFillGitlab, AiFillInstagram } from "react-icons/ai";

const HeroSection = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroLogo />
                <HeroTitle>Hi, I'm Juls <p style={{color: '#5d5d5d'}}>.</p></HeroTitle>
                <HeroDescription>I design and develop websites and apps. Feel free to check out my work below.</HeroDescription>
                <HeroName>software engineer • developer</HeroName>
                <HeroScrollLine />
                <div style={{display: 'flex', justifyContent: 'center', margin: '3rem 0rem', width: '100%'}}>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <a href="https://www.gitlab.com/juliuspineda" style={{textDecoration: 'none'}}>
                            <AiFillGitlab style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                            <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>Gitlab</p>
                        </a>
                    </div>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <a href="https://julzdev.github.io/portfolio/" style={{textDecoration: 'none'}}>
                            <SiGithub style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                            <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>GitHub</p>
                        </a>
                    </div>
                    <div style={{flexDirection: 'column', padding: '0 25px', cursor: 'pointer'}}>
                        <a href="https://www.instagram.com/jlspnd/" style={{textDecoration: 'none'}}>
                            <AiFillInstagram style={{ width: 30, height: 30, color: '#5d5d5d' }} />
                            <p style={{color: '#5d5d5d', fontSize: '12px', letterSpacing: '.2rem'}}>Instagram</p>
                        </a>
                    </div>
                </div>
            </HeroContainer>
        </Container>
    )
}

export default HeroSection;
