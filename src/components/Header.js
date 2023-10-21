import { Link } from 'react-router-dom';

function Header(props) {
  const tax = props.totalPrice * 0.05;

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="flex items-center gap-2">
        <img
          className="mr-5"
          width={42}
          height={42}
          src="/img/logo.png"
          alt=""
        />
        <div className="">
          <h3 className="text-uppercase  font-bold text-xl">React Sneakers</h3>
          <p className="opacity-5 text-sm">Sklep najlepszych sneakersów</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li
          onClick={props.onClickCart}
          className="mr-30 d-flex align-center cu-p"
        >
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span className="ml-10">{props.totalPrice + tax} pln.</span>
        </li>
        <Link to={"/favorites"}>
          <li className="mr-30 flex items-center group cu-p">
            <img width={18} height={18} src="/img/favorites.svg" alt="" />
            <span className="ml-10 text-zinc-400 group-hover:text-zinc-700">
              LOX
            </span>
          </li>
        </Link>
        <li>
          <img
            className="mr-5"
            width={18}
            height={18}
            src="/img/user.svg"
            alt=""
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
