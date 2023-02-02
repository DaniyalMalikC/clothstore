/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

// Context
export const ProductContext = createContext();
export const ProductAction = createContext();

function ProductContextProvider(props) {
  const { children } = props
  const [product, setProduct] = useState([])

  return (
    <ProductContext.Provider value={{ product }}>
      <ProductAction.Provider value={{ setProduct }}>
        {children}
      </ProductAction.Provider>
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
