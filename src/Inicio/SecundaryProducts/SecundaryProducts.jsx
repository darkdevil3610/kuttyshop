import './SecundaryProducts.css';
import React from 'react';
import {
  isMobile, isAndroid,
} from 'react-device-detect';
import ProductLeft from './SecProductLeft/SecProductLeft';
import ProductRigthTop from './SecProductRigthTop/SecProductRigthTop';
import ProductRigthBottom from './SecProductRigthBottom/SecProductRigthBottom';

const products = {
  left: {
    name: 'Organic Products',
    src: 'https://www.colorado.edu/ecenter/sites/default/files/styles/large/public/callout/image1.png?itok=hsYKMfzq',
    description: 'The Positive Impact of Organic Foods ',
  },
  rigth_top: {
    name: 'Organic',
    src: 'https://www.starhealth.in/blog/wp-content/uploads/2022/03/Organic-food.jpg',
    description: 'Buy organic food products and grocery',
  },
  rigth_bottom: {
    name: 'Organic Food',
    src: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/organic-food-on-board-fb-55662cbc11.jpg',
    description: 'Consumers above 35 are most aware of buying organic products',
  },
  bottom: {
    name: 'Organic',
    src: 'https://c8.alamy.com/comp/2GWB53W/poster-design-with-organic-vegetables-2GWB53W.jpg',
    description: 'Buy organic food products and grocery',
  },
};

function SecundaryProducts() {
  return (
    <div className="SECPrimaryProducts">
      <span className="SECtitleProducts">Take advantage of the discount</span>
      <div className="SECboxProducts">
        <ProductLeft
          product={products.left}
          isAndroid={isAndroid}
          isMobile={isMobile}
        />
        <div className="SECBoxRigth">
          <ProductRigthTop
            isAndroid={isAndroid}
            isMobile={isMobile}
            product={products.rigth_top}
          />
          <ProductRigthBottom
            isAndroid={isAndroid}
            isMobile={isMobile}
            product={products.rigth_bottom}
          />
        </div>
      </div>
      <span className="SECviewMoreProducts">
        Discover more products 
        {' '}
        <a href="/" className="SEClinkViewMore underline">Here</a>
      </span>
    </div>
  );
}

export default SecundaryProducts;
