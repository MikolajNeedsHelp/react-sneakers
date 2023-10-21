const Drawer = ({ onClose, onRemove, items = [], totalPrice }) => {

  const tax = totalPrice * 0.05;

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Koszyk
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj, index) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                onClick={() => onRemove(obj.id)}
                alt="remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Do zapłaty:</span>
              <div></div>
              <b>{totalPrice + tax} pln.</b>
            </li>
            <li>
              <span>Podatek 5%:</span>
              <div></div>
              <b>{tax} pln.</b>
            </li>
          </ul>

          <button className="greenButton">
            Złożyć zamówienie <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
