import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer.js';
import CarouselElement from './components/Carousel';

function App({children}) {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState([]);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((sum, obj) => obj.price + sum, 0));
  }, [cartItems]);

  React.useEffect(() => {
    axios
      .get('https://651831b1582f58d62d357d58.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get('https://651831b1582f58d62d357d58.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCart = (obj) => {
    console.log(obj);
    axios
      .post('https://651831b1582f58d62d357d58.mockapi.io/cart', obj)
      .then(() => {
        setCartItems([...cartItems, obj]);
      })
      .catch((error) =>
        console.error('Ошибка при добавлении в корзину:', error)
      );
  };

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
      <CarouselElement />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="cut-text text-3xl font-bold">
            {searchValue
              ? `Wyszukiwanie na żądanie: "${searchValue}"`
              : 'Wszystkie sneakersy'}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                className="remove_input-btn"
                src="/img/btn-remove.svg"
                alt="search"
                onClick={() => setSearchValue('')}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="browse"
              placeholder="Wyszukaj"
            />
          </div>
        </div>

        <div className="card-wrapper d-flex flex-wrap">
          {items.filter((item) =>
            item.title.toLowerCase().includes(searchValue)
          ).length ? (
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue))
              .map((item, index) => (
                <Card
                  key={item.id}
                  {...item}
                  favoriteList={favoriteList}
                  setFavorite={setFavoriteList}
                  isAdded={cartItems.some(
                    (obj) => Number(obj.id) === Number(item.id)
                  )}
                  onFavorite={() => console.log('serduszko')}
                  onPlus={(item) => onAddToCart(item)}
                />
              ))
          ) : (
            <div className="empty">
              <img src="/img/out-of-stock.png" alt="empty icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
