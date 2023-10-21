import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer.js';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState([]);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((sum, obj) => obj.price + sum, 0));
  }, [cartItems]);

  React.useEffect(() => {
    axios
      .get('https://651831b1582f58d62d357d58.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onRemoveItem = async (id) => {
    const object = await axios
      .get(`https://651831b1582f58d62d357d58.mockapi.io/cart?id=${id}`)
      .then((res) => res.data[0]);

    await axios
      .delete(
        `https://651831b1582f58d62d357d58.mockapi.io/cart/${object.cart_id}`
      )
      .then(() => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) =>
        console.error('Ошибка при удалении из корзины:', error)
      );
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          totalPrice={totalPrice}
        />
      )}
      <Header totalPrice={totalPrice} onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="flex items-center gap-3">
          <Link to={'/'}>
            <div className="p-2 border-zinc-300 border-[2px] w-7 h-7 flex items-center justify-center rounded-lg">
              <img src="/img/arrow-back.svg" alt="back" />
            </div>
          </Link>
          <h1 className="cut-text text-3xl font-bold">Мои закладки</h1>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
