// import React from 'react';
// import axios from 'axios';
// import Card from './components/Card';
// import Header from './components/Header';
// import Drawer from './components/Drawer';

// function App() {
//   const [items, setItems] = React.useState([]);
//   const [cartItems, setCartItems] = React.useState([]);
//   const [searchValue, setSearchValue] = React.useState('');
//   const [cartOpened, setCartOpened] = React.useState(false);

//   React.useEffect(() => {
//       axios.get('https://651831b1582f58d62d357d58.mockapi.io/items').then((res) => {
//         setItems(res.data);
//       });
//       axios.get('https://651831b1582f58d62d357d58.mockapi.io/cart').then((res) => {
//         setCartItems(res.data);
//       });
//   }, []);

//   const onAddToCart = (obj) => {
//     axios.post('https://651831b1582f58d62d357d58.mockapi.io/cart', obj);
  
//     setCartItems((prev) => [...prev, obj]);
//   };

//   const onRemoveItem = (id) => {
//     axios.delete(`https://651831b1582f58d62d357d58.mockapi.io/cart/${id}`);
//     setCartItems((prev) => [ ...prev, obj]);
//   }

//   const onChangeSearchInput = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div className="wrapper clear">
//       {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
//       <Header onClickCart={() => setCartOpened(true)} />
//       <div className="content p-40">
//         <div className="d-flex align-center justify-between mb-40">
//           <h1>{searchValue ? `Wyszukiwanie na żądanie: "${searchValue}"` : 'Wszystkie sneakersy'}</h1>
//           <div className="search-block d-flex">
//             <img src="/img/search.svg" alt="Search" />
//             {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src="/img/btn-remove.svg" alt="Clear"/>}
//             <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
//           </div>
//         </div>

//         <div className="d-flex flex-wrap">
//           {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
//             <Card
//               key={index}
//               title={item.title}
//               price={item.price}
//               imageUrl={item.imageUrl}
//               onFavorite={() => console.log('Добавили в закладки')}
//               onPlus={(obj) => onAddToCart(obj)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer.js';

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://651831b1582f58d62d357d58.mockapi.io/items').then((res) => {
        setItems(res.data);
      });
      axios.get('https://651831b1582f58d62d357d58.mockapi.io/cart').then((res) => {
        setCartItems(res.data);
      });
  }, []);
  
  // const onAddToCart = (obj) => {
  //   axios.post('https://651831b1582f58d62d357d58.mockapi.io/cart', obj);
  //   setCartItems([...cartItems, obj]);
  // };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://651831b1582f58d62d357d58.mockapi.io/cart${id}`);
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  // const onChangeSearchInput = (event) => {
  //   setSearchValue(event.target.value);
  // };
  // console.log(cartItems);

  const onAddToCart = (obj) => {
  axios.post('https://651831b1582f58d62d357d58.mockapi.io/cart', obj)
    .then(() => {
      setCartItems([...cartItems, obj]);
    })
    .catch(error => console.error('Ошибка при добавлении в корзину:', error));
};

const onRemoveItem = (id) => {
  axios.delete(`https://651831b1582f58d62d357d58.mockapi.io/cart/${id}`)
    .then(() => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    })
    .catch(error => console.error('Ошибка при удалении из корзины:', error));
};



  
  return (
    <div className='wrapper clear'>
      {cartOpened && ( <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Wyszukiwanie na żądanie: "${searchValue}"` : 'Wszystkie sneakersy'}</h1>
          <div className='search-block d-flex'>
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="browse" placeholder='Wyszukaj'/>
          </div>
        </div>

        <div className="card-wrapper d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('serduszko')}
            onPlus={(obj) => onAddToCart(obj)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;

