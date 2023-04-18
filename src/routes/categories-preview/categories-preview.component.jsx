
import { CategoriesContext } from "../../context/Categories.context"; 
import {  useContext } from "react";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

const CategoriesPreview = () =>{
    const {categoryMap} = useContext(CategoriesContext)
    return(
        <div>
                { Object.keys(categoryMap).map((title) =>{
                    const product = categoryMap[title];
                    return <CategoryPreview key={title} title={title} products={product}/>
                })}
            
        </div>
        
    )
}
export default CategoriesPreview;