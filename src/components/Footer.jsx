import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 h-[50vh] w-[100%] bg-zinc-800 pt-20 ">
      <h1 className="mb-5">
        <span className="text-stone-400 ">RIGHT</span>
        <span className="text-white">FIT.COM</span>
      </h1>
      <div className="flex lg:md:flex justify-between list-none w-[100%]">
        <div style={{ flex: 0.6 }}>
          <ul className="flex flex-col gap-2">
            <li className="text-white">Home</li>
            <li className="text-white">All Products</li>
            <li className="text-white">Feature Product</li>
            <li className="text-white">Contact</li>
            <li className="text-white">About</li>
          </ul>
        </div>
        <div style={{ flex: 3 }}>
          <p className="text-white text-justify flex-col">
            We are a registered E-Commerce seller and we support a varity of
            loacal and internation
            <div className="flex gap-5 pt-20">
              <img
                className="w-[50px] h-[35px]"
                src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png"
                alt=""
              />
              <img
                className="w-[50px]] h-[35px]"
                src="https://www.transparentpng.com/thumb/mastercard/mastercard-png-8.png"
                alt=""
              />
              <img
                className="w-[50px]] h-[35px]"
                src="https://www.transparentpng.com/thumb/mastercard/mastercard-png-8.png"
                alt=""
              />
              <img
                className="w-[50px] h-[35px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png"
                alt=""
              />
              <img
                className="w-[10%] h-[50px]"
                src="https://pngimg.com/uploads/paypal/paypal_PNG1.png"
                alt=""
              />
            </div>
          </p>
        </div>
        <div className="flex-1 justify-end">
          <p className="text-white">Website produce by</p>
          <img
            className="w-[70%] pt-10"
            src="https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?w=1060&t=st=1691177229~exp=1691177829~hmac=b1c3a49d2f026cc454fe9239632005252b796db4d97e1d5e327aa0c391ea9958"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
