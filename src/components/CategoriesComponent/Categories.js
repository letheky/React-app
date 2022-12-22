import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import './Categories.css'
import cat1 from "../../assets/img/dellIcon.jpg";
import cat2 from "../../assets/img/asusIcon.jpg";
import cat3 from "../../assets/img/appleIcon.png";

export default function Categories(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="categories" id="categories">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="categories-bx wow zoomIn">
                        <h2>Product Categories</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme categories-slider">
                            <div className="item">
                                <img src={cat1} alt="Image" />
                                <h5>Dell products</h5>
                            </div>
                            <div className="item">
                                <img src={cat2} alt="Image" />
                                <h5>Asus products</h5>
                            </div>
                            <div className="item">
                                <img src={cat3} alt="Image" />
                                <h5>Apple products</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
