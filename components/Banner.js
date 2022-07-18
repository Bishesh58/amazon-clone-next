import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="b1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="b2.jpg" />
        </div>
        <div>
          <img loading="lazy" src="b3.jpg" />
        </div>
        <div>
          <img loading="lazy" src="b4.jpg" />
        </div>
        <div>
          <img loading="lazy" src="b5.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
