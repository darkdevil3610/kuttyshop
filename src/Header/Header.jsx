import './Header.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BtnBurger from '../BtnBurger/BtnBurger';
import LateralBar from './LateralBar/LateralBar';
import { QUERY_MODULE } from '../Operations/Query';
import { findID } from '../util';
import { useShop } from '../context/ShopContext';

function Header() {
  const { isLoged, logout, user } = useShop();
  const idImageLogo = '649e0f0de59b27af2756c89d';
  const idTextLogo = '649f8b8fe527c66bfbf3f850';
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4ced84c622ac3d7588672',
    },
  });

  const images = loading ? [] : data.findForModule.image;
  const texts = loading ? [] : data.findForModule.text;

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        <img
          className="imgLogoHeader"
          src={loading ? '' : images.find(findID(idImageLogo)).src}
          alt={loading ? '' : images.find(findID(idImageLogo)).alt}
        />
        <span className="titleHeader">
          {loading ? '' : texts.find(findID(idTextLogo)).name}
        </span>
      </a>
      <div className="rigth">
        <ul className={`Nav ${open && 'NavView'}`}>
          <li className="li">
            <Link className="link navLink underline" to="/">Start</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/products">Products</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/brand">Brands</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/shops">Stores</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" href="https://first-page-admin-page.vercel.app/">Buy</Link>
          </li>
        </ul>
        <div className="boxbtnAndModal">
          <button id="openModal" onClick={() => setOpenModal((o) => !o)} type="button" className="btnSearchNav pointer">
            <FontAwesomeIcon icon={faUser} size="2x" beat={false} />
          </button>
          <div id="modal" className={`boxModal ${isLoged() && 'boxModalLoged'}`} style={{ display: openModal ? 'none' : 'flex' }}>
            {
              isLoged()
                ? (
                  <>
                    <span>
                      Username:
                      {' '}
                      {user?.username}
                    </span>
                    <span>
                      Name:
                      {' '}
                      {user?.name}
                    </span>
                    <span>
                      Lastname:
                      {' '}
                      {user?.lastname}
                    </span>
                    <span>
                      Phone:
                      {' '}
                      {user?.phone}
                    </span>
                    <button type="button" className="underline clearBtn" style={{ fontSize: '1.2rem' }} onClick={logout}>LogOut</button>
                  </>
                )
                : (
                  <>
                    <Link className="linkAuth underline" to="/login">Log in</Link>
                    <Link className="linkAuth underline" to="/singin">Sign in</Link>
                  </>
                )
            }
          </div>
        </div>
        <button type="button" className="btnSearchNav" onClick={clickOpen}>
          <BtnBurger open={open} />
        </button>
      </div>
      <LateralBar open={open} func={clickOpen} />
    </div>
  );
}

export default Header;
