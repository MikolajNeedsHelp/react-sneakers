function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img className='mr-5' width={42} height={42} src="/img/logo.png" alt="" />
          <div>
            <h3 className='text-uppercase mb-5'>React Sneakers</h3>
            <p className='opacity-5 mt-5'>Sklep najlepszych sneakersów</p>
          </div>
        </div>
          <ul className='d-flex align-center'>
            <li onClick={props.onClickCart} className='mr-30 d-flex align-center cu-p'>  
              <img width={18} height={18} src="/img/cart.svg" alt="" />
              <span className='ml-10'>137 pln.</span>
            </li>
            <li>
              <img className='mr-5' width={18} height={18} src="/img/user.svg" alt="" />
            </li>
          </ul>
      </header>
    );
}

export default Header;