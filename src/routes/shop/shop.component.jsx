import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import ProductCard from "../../Components/product-card/product-card.componet";
import './shop.styles.scss'

const Shop = () =>{
    const {products} = useContext(ProductsContext)
    return(
        <div className="products-container">
            {products.map((product) =>
                <ProductCard key={product.id} product = {product}></ProductCard>
            )}
        </div>
    )
}
export default Shop;