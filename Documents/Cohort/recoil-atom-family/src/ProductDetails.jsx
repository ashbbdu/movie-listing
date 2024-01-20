import {useParams} from "react-router-dom"
import { useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil'
import { poductByIdAtomFamily } from './atoms'

const ProductDetails = () => {
    const { id } = useParams()
    // const productDetails = useRecoilState(poductByIdAtomFamily(id))
    // or
    const productDetails = useRecoilValueLoadable(poductByIdAtomFamily(id))
    // const product = productDetails[0].contents;
    console.log(productDetails);

if(productDetails.state === "loading") {
    return <div>Loading...</div>
} else if(productDetails.state === "hasValue") {
    return (
        <div className="details">
            {/* <img  src={product.image} alt="product-img" width={250} height={200} />
            <h2>{product.title}</h2>
            <h2>{product.desription}</h2>
            <h2>{product.category}</h2>
            <h2>{product.price}</h2> */}
            
            <img  src={productDetails.contents.image} alt="product-img" width={250} height={200} />
            <h2>{productDetails.contents.title}</h2>
            <h2>{productDetails.contents.desription}</h2>
            <h2>{productDetails.contents.category}</h2>
            <h2>{productDetails.contents.price}</h2>
        </div>
      )
} else if(productDetails.state === "hasError") {
    return (
        <div>Backend Crashed</div>
    )
}

  
}

export default ProductDetails