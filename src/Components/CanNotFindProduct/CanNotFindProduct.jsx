import "./cannotfindproduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CanNotFindProduct = () => {
  

  let settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  };
  return (
    <div className="sliders-containerss">
      <Slider{...settings}>
        <div className="thousand-text">
          <h3>50,000 BOOKS IN MANT CATEGORIES</h3>
        </div>
        <div className="thousand-text">
          <h3>SERVING BOOK LOVER SINCE 1952</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CanNotFindProduct;