import React from 'react';
import './Marcas.css';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import SingleMarca from './SingleMarca/SingleMarca';
import { QUERY_BRANDS } from '../Operations/Query';

function Marcas() {
  const { loading, data } = useQuery(QUERY_BRANDS);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="Marcas">

      <div className="marcasBackground">
        <div className="marcaBoxImgBg">
          <img
            className="marcaBoxImg"
            src="https://imgur.com/r9YysEo"
            alt="background"
          />
          <div className="marcaDegraded" />
        </div>
        <div className="marcaTextBg">
          Brands
        </div>
      </div>

      <div className="boxMarcasImg">
        {data.findBrands.map((b) => (
          <SingleMarca key={b.id} src={b.src} name={b.name} />
        ))}
      </div>
      <div className="footerMarcas">
        <div className="boxTextFooter">
          <span className="">
             CONSULTATION
          </span>
          <span className="spanTitleFooter">
            IN SHOP
          </span>
        </div>
        <div className="listMarcas">
          <ul style={{
            width: '150px', display: 'flex', justifyContent: 'center', flexDirection: 'column',
          }}
          >
            {data.findBrands.map((marca) => {
              const brand = marca.name.substring(0, 1).toUpperCase() + marca.name.substring(1);
              return (
                <li key={marca.id} className="linkMarca">
                  <Link to={`/products/${marca.name}`} className="linkMarca">{brand}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Marcas;
