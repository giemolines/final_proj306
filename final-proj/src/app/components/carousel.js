import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';

const images = [
    '/slider-1.jpg',
    '/slider-2.jpg',
    '/slider-3.jpg',
    '/slider-4.jpg',
    '/slider-5.jpg',
    '/slider-6.jpg',
    '/slider-7.jpg'
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative p-16 w-full h-96">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover" 
                />
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black p-2 hover:scale-110 transition duration-200 ease-in-out"
                onClick={handlePrev}
            >
                <ArrowBackIosRounded/>
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black p-2 hover:scale-110 transition duration-200 ease-in-out"
                onClick={handleNext}
            >
                <ArrowForwardIosRounded/>
            </button>
        </div>
    );
}
