import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './homebanner.css'
import { Link } from "react-router-dom";


function HomeBanner() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <div className="Home-slider-container w-full overflow-hidden">
      <Slider {...settings}>
        <div className="Home-banner">
          <img className="Home-Image" src="https://www.libertybooks.com/image/cache/catalog/Shakir/Banner%20D/Baadmay%20Web-Banner-1600x380.jpg?q6" alt="" />
        </div>
        <div className="Home-banner">
          <Link to="/NewArrivalsProductsPage"><img className="Home-Image" src="https://www.libertybooks.com/image/cache/catalog/Shakir/Banner%20D/New-Arivals-Web-Banner-1600x380.jpg?q6" alt="" /></Link>
        </div>
        <div className="Home-banner">
          <Link to="/BookBazarProductsPage"><img className="Home-Image" src="https://www.libertybooks.com/image/cache/catalog/Shakir/Banner%20D/Web-Banner%20(13)-1600x380.jpg?q6" alt="" /></Link>
        </div>
        <div className="Home-banner">
          <img className="Home-Image" src="https://www.libertybooks.com/image/cache/catalog/Shakir/Banner%20D/Pre-Order-Web-Banner%20(2)-1600x380.jpg?q6" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;



