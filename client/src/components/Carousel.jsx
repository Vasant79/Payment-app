import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSlide((prevState) =>
        prevState == data.length - 1 ? 0 : prevState + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function handleRight() {
    setSlide((prevState) => (prevState == data.length - 1 ? 0 : prevState + 1));
  }

  function handleLeft() {
    let last = data.length - 1;
    setSlide((prevState) => (prevState == 0 ? last : prevState - 1));
  }

  const renderIndicator = data.map((eachData, index) => {
    return index == slide ? (
      <FaCircle className="h-2 w-2 mt-2 mx-1 text-blue-500" />
    ) : (
      <FaCircle className="h-2 w-2 mt-2 mx-1 text-blue-200" />
    );
  });

  // mapping data to display pictures,heading 1 & 2, next & prev button
  const renderData = data.map((eachData, index) => {
    return (
      <div className="hidden lg:block">
        {index == slide ? (
          <div>
            <div className="relative ml-40 ">
              <img
                className="h-546 w-auto mx-auto  px-20 transition duration-700 ease-in-out"
                src={eachData.image}
                alt="image"
              />

              <div className="absolute bottom-80 pb-10 font-Lato text-5xl font-medium overflow-hidden">
                {eachData.mainText ? (
                  <div>
                    <span className="text-blue-600">{eachData.mainText}</span>
                  </div>
                ) : (
                  ""
                )}

                {eachData.secondText ? (
                  <div>
                    <span>{eachData.secondText}</span>
                  </div>
                ) : (
                  ""
                )}

                <div className="mt-5 flex ">
                  <span onClick={handleLeft}>
                    <FaChevronLeft className="h-6 w-6 text-gray-400 hover:text-blue-400" />
                  </span>
                  {renderIndicator}
                  <span onClick={handleRight}>
                    <FaChevronRight className="h-6 w-6 text-gray-400 hover:text-blue-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  });

  return <div>{renderData}</div>;
}

export default Carousel;
