import './Footer.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ColumsFooter from '../ColumsFooter/ColumsFooter';

const textApi = [
  {
    title: 'PRODUCTS',
    content: [
      { name: 'Smartphones', url: '/' },
      { name: 'PC', url: '/' },
      { name: 'Tabletas', url: '/' },
      { name: 'Audio', url: '/' },
      { name: 'Wearables', url: '/' },
      { name: 'Accesorios', url: '/' },
      { name: 'Wi-Fi 5G', url: '/' },
    ],
    key: '1',
  },
  {
    title: 'MEDIUM',
    content: [
      { name: 'Location of Service Centers', url: '/' },
      { name: 'Parts Price Inquiry', url: '/' },
      { name: 'Complaints book', url: '/' },
      { name: 'Technical Support Service', url: '/' },
    ],
    key: '2',
  },
  {
    title: 'CONTACT US',
    content: [
      { name: 'Help and Support', url: '/' },
      { name: 'Live chat', url: '/' },
      { name: 'Doubts and suggestions', url: '/' },
    ],
    key: '3',
  },
  {
    title: 'KNOW US',
    content: [
      { name: 'About us', url: '/' },
      { name: 'Vhse Group', url: '/' },
      { name: 'Vhse Enterprise', url: '/' },
      { name: 'Join us', url: '/' },
      { name: 'Contact us', url: '/' },
    ],

    key: '4',
  },
];

const redes = {
  title: 'CONTACT',
  reds: {
    facebook: 'https://www.facebook.com/',
    whatsapp: 'https://www.whatsapp.com/',
    instagram: 'https://www.instagram.com/dark_devil_3609',
  },
};

function Footer() {
  const [windowFooter, setWindowFooter] = useState(0);

  const changeWindow = (num) => {
    setWindowFooter(num);
  };

  return (
    <div className="Footer">
      {textApi.map((column) => (
        <ColumsFooter
          key={column.key}
          title={column.title}
          content={column.content}
          changeWindow={(x) => changeWindow(x)}
          windowFooter={windowFooter}
          llave={column.key}
        />
      ))}
      <div className="colSiguenos">
        <span className="titleFooter">{redes.title}</span>
        <ul className="boxIcoRedes">
          <li className="liFooter">
            <a href={redes.reds.facebook} className="linkFooter">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
          </li>
          <li className="liFooter">
            <a href={redes.reds.whatsapp} className="linkFooter">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            </a>
          </li>
          <li className="liFooter">
            <a href={redes.reds.instagram} className="linkFooter">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
