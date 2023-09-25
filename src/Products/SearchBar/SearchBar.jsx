import './SearchBar.css';
import React from 'react';

function SearchBar() {
  const marcas = [
    {
      name: 'Kuttyshop',
    },
    {
      name: 'Tkdm',
    },
    {
      name: 'Shop',
    },
    {
      name: 'Brand1',
    },
    {
      name: 'Brand2',
    },
  ];
  return (
    <div className="SearchBar">
      <span className="SBtitle">Filters</span>
      <div className="SBboxBTN">
        <button className="SBbtn pointer" type="button">Limpiar</button>
        <button className="SBbtn pointer" type="button">Filtrar</button>
      </div>
      <div className="SBboxPrecio">
        <span className="SBBtitle">Price</span>
        <div className="SBprecioBox">
          <input className="inputPrecio" type="number" name="min" placeholder="Min" />
          -
          <input className="inputPrecio" type="number" name="max" placeholder="Max" />
        </div>
      </div>
      <div className="SBboxMarca">
        <span className="SBBTitle">Marca</span>
        <div className="SBmarcaBox">
          {marcas.map((mrc) => (
            <div key={Math.random()} className="SBsingleMarca">
              <input
                className="SBcheckBox"
                type="checkbox"
                name={mrc.name}
                id={mrc.name}
              />
              <label htmlFor={mrc.name} className="SBmarcaSingle">{mrc.name.toUpperCase()}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
