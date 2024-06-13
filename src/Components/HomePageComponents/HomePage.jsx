import HomeBanner from '../HomeBanner/HomeBanner'
import BookBazarCart from '../BookBazarCart/BookBazarCart';
import RecentAddedCart from '../RecentAdded/RecentAddedCart';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CanNotFindProduct from '../CanNotFindProduct/CanNotFindProduct';


const HomePage = () => {
    
    return (
        <div>
            <HomeBanner />
            <BookBazarCart categories="BookBazar" />
            <RecentAddedCart categories="Recentadded" />
            <ShopByCategory />
            <CanNotFindProduct />
        </div>
    )
}

export default HomePage