const Footer = () => {
  return (
    <div className="mx-36 mt-16 mb-5">
      <div className="flex gap-40">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">About</h2>
          <p className=" text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            repellendus, omnis eos voluptatum facilis possimus impedit nostrum.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequatur recusandae voluptatibus doloremque modi porro dolor?
            Iusto, provident molestias nesciunt harum ea.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span>JEcom</span>
          <span>&#169; Copyright 2023. All Rights Reserved</span>
        </div>
        <div>
          <img src="/img/payment.png" alt="payment logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
