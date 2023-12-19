

const Cart = ({img, title, subTitle}) => {
    return (
        <div className="text-center shadow-2xl w-28 space-y-2 ml-10 p-2 bg-[#242323] rounded-xl">
        <div className="flex items-center justify-center">
        <img className="w-3/4" src={img} alt="icon" />
        </div>
        <div className="">
          <h2 className="font-bold">{title}</h2>
          <progress className=" progress progress-warning bg-white" value={80} max="100"></progress>
          <p>{subTitle}</p>
        </div>
      </div>
    );
};

export default Cart;