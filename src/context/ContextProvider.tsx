import React from 'react';

import ProductContextProvider from './ProductContext'

function ContextProvider(props) {
  const { children } = props
  return (
    <ProductContextProvider>{children}</ProductContextProvider>
  );
}

export default ContextProvider;
