import CategoryItem from"../Category-item/Catergory-item.componet"

const Directory = ({Categories}) => {
    return(
        <div className="categories-container">
             {Categories.map((Category) =>(
            <CategoryItem key={Category.id} category ={Category}/>
     ))
      }   
  </div>
    )
}
export default Directory