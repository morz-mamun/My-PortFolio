

const Cart = ({img, title, subTitle}) => {
    return (
        <div className="text-center shadow-xl w-20 space-y-2 ml-10">
        <img className="w-2/3" src={img} alt="icon" />
        <div className="">
          <h2 className="font-bold text-xl">{title}</h2>
          <progress className=" progress progress-warning bg-white" value={80} max="100"></progress>
          <p>{subTitle}</p>
        </div>
      </div>
    );
};

export default Cart;