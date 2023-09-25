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
    description: 'El Ruby está equipado con un panel VA que proporciona una pérdida mínima de luz y un contraste superior con colores oscuros más fuertes y definidos, lo que te brindará la respuesta que necesitas.',
  },
  rigth_bottom: {
    name: 'Organic Food',
    src: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/organic-food-on-board-fb-55662cbc11.jpg',
    description: 'Los Zeus son auriculares premium diseñados para disfrutar al 100% del magnífico mundo sonoro de los mejores juegos.',
  },
  bottom: {
    name: 'Redragon Esmerald',
    src: 'https://redragon.es/content/uploads/2021/06/EMERALD-1.png',
    description: 'El Emerald es un monitor gamer de 27" con tecnología IPS, lo que proporciona un ángulo de visión muy amplio, de 178º, y una mejoría sustancial en el color. ',
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
