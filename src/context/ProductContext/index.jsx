/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

// Assets
import img1 from '../../assets/tshirts/img1.png'
import img2 from '../../assets/tshirts/img2.png'
import img3 from '../../assets/tshirts/img3.png'
import img4 from '../../assets/tshirts/img4.png'
import img5 from '../../assets/tshirts/img5.png'
import img6 from '../../assets/tshirts/img6.png'
import img7 from '../../assets/tshirts/img7.png'
import img8 from '../../assets/tshirts/img8.png'

// Context
export const ProductContext = createContext();
export const ProductAction = createContext();

function ProductContextProvider(props) {
  const productsData = [
    {
      image: img1,
      title: 'Red Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'L', 'XL'],
      color: ['#501212'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck', 'Solid'],
    },
    {
      image: img2,
      title: 'Plant Border Pattern Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'M', 'XXL'],
      color: ['#4A7742'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck', 'Pattern'],
    },
    {
      image: img3,
      title: 'Chrismas Tree Pattern Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'L', 'XL'],
      color: ['#4A7742'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck', 'Pattern'],
    },
    {
      image: img4,
      title: 'Grass Autumn Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'M', 'L'],
      color: ['#4A7742', '#2C4C34'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck', 'Pattern'],
    },
    {
      image: img5,
      title: 'Still Water Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'L'],
      color: ['#BAD3C6'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck'],
    },
    {
      image: img6,
      title: 'Bubbles Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['S', 'M'],
      color: ['#BAD3C6', '#255D87'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck'],
    },
    {
      image: img7,
      title: 'Honey Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['M', 'L', 'XXL'],
      color: ['#E2D484', '#AB5A2D'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck'],
    },
    {
      image: img8,
      title: 'Leaf Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse.',
      size: ['L', 'XL', 'XXXL'],
      color: ['#4A7742'],
      prize: '$60',
      tags: ['T-Shirt', 'Round Neck'],
    },
  ]

  const { children } = props
  const [product, setProduct] = useState(productsData)

  return (
    <ProductContext.Provider value={{ product }}>
      <ProductAction.Provider value={{ setProduct }}>
        {children}
      </ProductAction.Provider>
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
