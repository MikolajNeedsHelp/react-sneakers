import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // const onClickPlus = ( ) => {
  //   setIsAdded(!isAdded);

    const onClickPlus = ( ) => {
      onPlus({imageUrl, title, price});
      setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
              <img src="/img/heart1.svg" alt="unliked" />
            </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Cena</span>
              <b>{price} pln.</b>
            </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/checked.svg' : '/img/plus.svg'} alt="Plus" />
          </div>
        </div>
    );
};


    

export default Card; 

{/* <div className='card'>
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Cena</span>
              <b>500 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Cena</span>
              <b>500 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Cena</span>
              <b>500 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div> */}