import React, { useState } from 'react'
import { list } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = () => {
    const [people, setPeople] = useState(list);
    const [index, setIndex] = useState(0);

    const { id, image, name, quote, title } = people[index];


    let handlePrev = () => {
        setIndex(index > 0 ? index - 1 : people.length - 1);
    }

    let handleNext = () => {
        setIndex(index < people.length - 1 ? index + 1 : 0);
    }

    return (
        <div className='section-center'>

            <article key={id}>
                <img className='person-img' src={image} alt={name} />
                <h5 className='name'>{name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
            </article>

            <button className='prev' onClick={handlePrev}><FiChevronLeft /></button>
            <button className='next' onClick={handleNext}><FiChevronRight /></button>
        </div>
    )
}

export default Carousel
