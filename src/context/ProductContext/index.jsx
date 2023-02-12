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
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Red',
      prize: '$60',
    },
    {
      image: img2,
      title: 'Plant Border Pattern Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Green',
      prize: '$60',
    },
    {
      image: img3,
      title: 'Chrismas Tree Pattern Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Green',
      prize: '$60',
    },
    {
      image: img4,
      title: 'Grass Autumn Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: ['Green', 'Yellow'],
      prize: '$60',
    },
    {
      image: img5,
      title: 'Still Water Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Sea Green',
      prize: '$60',
    },
    {
      image: img6,
      title: 'Bubbles Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Light Blue',
      prize: '$60',
    },
    {
      image: img7,
      title: 'Honey Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: ['Yellow', 'Brown'],
      prize: '$60',
    },
    {
      image: img8,
      title: 'Leaf Dev. T-shirt',
      description: 'Cillum sunt incididunt ipsum eu nisi occaecat est anim velit Lorem. Nisi tempor nisi quis fugiat eiusmod incididunt deserunt esse amet quis deserunt aliquip veniam. Eu aute quis ad magna irure Lorem ad aliqua anim excepteur magna cillum. Sunt id culpa sit eu cupidatat incididunt. Eu commodo consectetur fugiat ea fugiat in esse. Labore incididunt fugiat dolor amet duis proident nulla officia eiusmod incididunt Lorem magna officia. Voluptate tempor ex exercitation laborum tempor commodo officia. Anim ex nulla ullamco aliquip minim cillum non irure. Id velit magna cillum enim sit veniam qui officia do mollit qui anim. Ex exercitation sit anim dolore culpa labore aute tempor occaecat aliquip. Cillum nisi ex sint eu deserunt commodo.',
      size: 'S',
      color: 'Green',
      prize: '$60',
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
