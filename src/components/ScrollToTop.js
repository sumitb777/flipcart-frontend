import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check scroll position and update isVisible state
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Add scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=' bg-white  '>
            {isVisible && (

                <div className="scroll  pt-2 " onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up fa-2xl  "></i>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
