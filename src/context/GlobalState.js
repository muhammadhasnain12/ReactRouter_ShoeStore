import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { GET_PRODUCTS } from './Types';
// Initial state
const InitialState = {
    shoes: {
        // const shoes = {
            "air-jordan-3-valor-blue": {
              name: "VALOUR BLUE",
              img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
               price: "$75.00"
              },
            "jordan-mars-270-london": {
              name: "JORDAN MARS 270 LONDON",
              img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
                price: "$55.00"
            },
            "air-jordan-1-zoom-racer-blue": {
              name: "RACER BLUE",
              img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
                price: "$50.00"
            },

            "Flex Experience Run 9": {
                name: "Flex Experience Run 9",
                img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8e1e26aa-49ff-4b28-b5ce-b25930922dc1/air-max-90-womens-shoe-g5nqKN.jpg",
                img2: "https://m.media-amazon.com/images/I/61FxQSqEpOL._AC_SR700,525_.jpg",
                price: "$65.00"
              },
              "Flex Control 4": {
                name: "Flex Control 4",
                img: "https://www.snipesusa.com/media/catalog/product/cache/1/thumbnail/450x/db978388cfd007780066eaab38556cef/n/i/nike_cw7013-100_01.jpg",
                img2: "https://m.media-amazon.com/images/I/717eNWShX9L._AC_SR700,525_.jpg",
                price: "$70.00"
              },
               "Air Max Motion 2": {
                name: "Air Max Motion 2",
                img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f20582bd-ce2f-44e6-8877-648a2d05e11e/air-max-270-react-womens-shoe-6bhhrf.jpg",
                img2: "https://m.media-amazon.com/images/I/71ZH5cjP+oL._AC_SR700,525_.jpg",
                price: "$84.95"
              },
              "Phantom GT Club DF FG/MG": {
                name: "Phantom GT Club DF FG/MG",
                img2: "https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg",
                img: "https://i.pinimg.com/originals/dc/0c/fb/dc0cfb1585072d122f09995d96361ea1.jpg",
                price: "$45.00"
              }
        //   };
        } 
}

//create context
export const GlobalContext = createContext(InitialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer , InitialState);
 
//    Actions deleteion,add,
     
      function addTransaction(shoe) {
        dispatch({
            type: GET_PRODUCTS,
            payload: shoe
        })
    }

    return (<GlobalContext.Provider value={{
        shoes:state.shoes,
        
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
