import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext =createContext({
    categoryMap: {},
});

export const CategoriesProvider = ({children}) =>{
    const [categoryMap, setcategoryMap] = useState({});

    useEffect(() =>{
        const getCategoriesMap = async () => {
            const CategoryMap = await getCategoriesAndDocuments();
            setcategoryMap(CategoryMap);
        }
        getCategoriesMap();
    },[])
    const value = {categoryMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}