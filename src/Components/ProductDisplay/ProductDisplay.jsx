import { useContext } from "react"
import BreadCrums from "../BreadCrums/BreadCrums"
import { ArrivalContext } from "../Context/NewArrivalsContext"
import { useParams } from "react-router-dom"
import ProductDisplayPage from "../ProductDisplayPage/ProductDisplayPage"


const ProductDisplay = () => {

    const { AllProductsDatas } = useContext(ArrivalContext)
    const { productId } = useParams();
    const product = AllProductsDatas.find((e) => e.id === Number(productId));

    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplayPage product={product} />
        </div>
    )
}

export default ProductDisplay;