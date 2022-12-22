
import NavBar from '../components/NavbarComponent/NavBar'
import Banner from '../components/BannerComponent/Banner'
import Categories from '../components/CategoriesComponent/Categories'
import Products from '../components/ProductsComponent/Products'
import Footer from '../components/FooterComponent/Footer'

export default function HomePage(){
    return (
          <div>
            <NavBar />
            <Banner />
            <Categories />
            <Products /> 
            <Footer />
          </div>
      );
}