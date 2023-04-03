import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle as closedCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as openCircle } from '@fortawesome/free-regular-svg-icons';

export default function Carousel({ data }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const currentImg = data[currentImgIndex];

  const rightClick = useCallback(() => {
    setCurrentImgIndex((prev) => (prev + 1) % data.length);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(rightClick, 3000);

    return () => clearInterval(interval);
  }, [currentImgIndex, rightClick]);

  function leftClick() {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(data.length - 1);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  }

  function dotClick(index) {
    setCurrentImgIndex(index);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='column-third align-arrows'><FontAwesomeIcon onClick={leftClick} className='chevron' icon={faChevronLeft} size='2xl' /></div>
        <div className=' column-third'><img src={currentImg.imgUrl} alt={currentImg.name} /></div>
        <div className='column-third align-arrows'><FontAwesomeIcon onClick={rightClick} className='chevron' icon={faChevronRight} size='2xl' /></div>
      </div>
      <div className='row'>
        <div className='column-full align-dots'>
          {data.map((data, index) => (<Dot key={data.id} currentImgIndex={currentImgIndex} dotClick={dotClick} index={index} />))}
        </div>
      </div>
    </div>
  );
}

function Dot({ index, dotClick, currentImgIndex }) {
  return (
    <>
      {index === currentImgIndex ? <FontAwesomeIcon className='dot-pad' icon={closedCircle} /> : <FontAwesomeIcon onClick={() => dotClick(index)} className='dot-pad' icon={openCircle} />}
    </>
  );
}
