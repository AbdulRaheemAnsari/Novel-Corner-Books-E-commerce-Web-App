import { RiArrowRightSLine } from "react-icons/ri";
import './breadcrums.css'
import { Link } from "react-router-dom";

const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className="breadcrums flex w-full h-[100px] items-center pl-12 mt-2 underline gap-2">
        <Link to="/"><p className="cursor-pointer">HOME</p></Link> <RiArrowRightSLine className="rotte" /> <p>{product.categories}</p>  <RiArrowRightSLine className="rotte" />  <div>{product.name}</div>
    </div>

  )
}

export default BreadCrums;