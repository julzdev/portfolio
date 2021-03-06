import React, {useState, useRef} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { IoConstructOutline } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// import { Link } from 'react-scroll';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const myRef = useRef(null);

    const scrollToRef = (ref) => ref.current.scrollIntoView({behavior:'smooth'})
    const onButtonClick = () => scrollToRef(myRef);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />  
            <HeroSection />
            <IoIosArrowDropdownCircle onClick={onButtonClick} style={{position: 'absolute', bottom: '100px', right: '40px', width: '60px', height: '60px', cursor: 'pointer'}} />
            <div ref={myRef}>
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                    <IoConstructOutline style={{ width: 100, height: 100, color: '#5d5d5d', margin: '1rem 0rem' }} />
                    <p style={{letterSpacing: '.2rem', color: '#5d5d5d'}}>Under Construction</p>
                </div>
            </div>
        </>
    )
}

export default Home;
