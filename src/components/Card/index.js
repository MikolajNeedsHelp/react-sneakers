import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, id, onPlus, isAdded, setFavorite, favoriteList }) {
  const onClickPlus = () => {
    onPlus({ imageUrl, title, price, id });
  };

  const isFavorite = favoriteList.find((obj) => obj.id === id);

  const onFavorite = () => {
    if(isFavorite) {
      setFavorite(favoriteList.filter((obj) => obj.id !== id))
    } else {
      setFavorite((state) => [...state, {id, imageUrl, price, title}])
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src={isFavorite ? "/img/heart2.svg" : "/img/heart1.svg"} alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" className='mb-[20px] mx-auto' />
      <h5>{title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Cena</span>
          <b>{price} pln.</b>
        </div>
        {isAdded ? (
          <img className={styles.plus} src={'/img/checked.svg'} alt="Plus" />
        ) : (
          <img
            onClick={onClickPlus}
            className={styles.plus}
            src={'/img/plus.svg'}
            alt="Plus"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
