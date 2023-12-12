

const Cart = ({img, title, subTitle}) => {
    return (
        <div className="text-center shadow-xl w-32 space-y-2">
        <img src={img} alt="icon" />
        <div className="">
          <h2 className="font-bold text-xl">{title}</h2>
          <progress className="text-red-600" value={80} max="100"></progress>
          <p>{subTitle}</p>
        </div>
      </div>
    );
};

export default Cart;