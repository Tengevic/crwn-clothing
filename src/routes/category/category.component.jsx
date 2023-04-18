import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import ProductCard from "../../Components/product-card/product-card.componet";

const Category = () => {
     const {category} = useParams();
     const {categoryMap} = useContext(CategoriesContext);
     const [products, setProducts] = useState(categoryMap[category]);

     useEffect(() =>{
        setProducts(categoryMap[category])
     },[category, categoryMap])

     return (
        <Fragment>
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="category-conatiner">
            {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </Fragment>
    )
}
export default Category;