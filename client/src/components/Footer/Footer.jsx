const Footer = () => {
  return (
    <div className="mx-36 mt-16 mb-5">
      <div className="flex gap-40">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Categories</h2>
          <span className="text-gray-700 text-sm">Women</span>
          <span className="text-gray-700 text-sm">Men</span>
          <span className="text-gray-700 text-sm">Shoes</span>
          <span className="text-gray-700 text-sm">Accessories</span>
          <span className="text-gray-700 text-sm">New Arrivals</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Links</h2>
          <span className="text-gray-700 text-sm">FAQ</span>
          <span className="text-gray-700 text-sm">Pages</span>
          <span className="text-gray-700 text-sm">Stores</span>
          <span className="text-gray-700 text-sm">Compare</span>
          <span className="text-gray-700 text-sm">Cookies</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">About</h2>
          <p className=" text-justify text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            repellendus, omnis eos voluptatum facilis possimus impedit nostrum.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-justify text-gray-700 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequatur recusandae voluptatibus doloremque modi porro dolor?
            Iusto, provident molestias nesciunt harum ea.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <span className="text-2xl text-blue-500 font-bold">JEcom</span>
          <span className="ml-7 text-gray-700 text-sm">
            &#169; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <img className=" w-1/4" src="/img/payment.png" alt="payment logo" />
      </div>
    </div>
  );
};

export default Footer;
