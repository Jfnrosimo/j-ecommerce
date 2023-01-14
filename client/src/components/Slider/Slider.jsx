import { useState } from "react";

//Import UI
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="h-[calc(100vh-50px)] w-screen relative">
      <div
        className={`flex h-full w-[calc(100vw*3)] transition-all duration-1000 ease-linear overflow-hidden`}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="object-cover h-full w-screen" src={data[0]} alt="" />
        <img className="object-cover h-full w-screen" src={data[1]} alt="" />
        <img className="object-cover h-full w-screen" src={data[2]} alt="" />
      </div>
      <div className="absolute self-center bottom-14 flex justify-center right-0 left-0 mx-auto">
        <ArrowLeftOutlined
          fontSize="large"
          className=" cursor-pointer bg-slate-500 mx-2 bg-opacity-40"
          onClick={prevSlide}
        />
        <ArrowRightOutlined
          fontSize="large"
          className=" cursor-pointer bg-slate-500 mx-2 bg-opacity-40"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
