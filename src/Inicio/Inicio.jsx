import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Slider from './Slider/Slider';
import Background from './Background/Background';
import PrimaryProducts from './PrimaryProducts/PrimaryProducts';
import SecundaryProducts from './SecundaryProducts/SecundaryProducts';
import { QUERY_MODULE } from '../Operations/Query';

function Inicio() {
  const { loading, data, error } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4dbacb464c4051e9b4a73',
    },
  });
  if (error) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Unable to load the home content.</div>;
  }
  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
      }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  const images = data?.findForModule?.image || [];
  const texts = data?.findForModule?.text || [];

  if (!data?.findForModule) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Home content is not available right now.</div>;
  }

  return (
    <>
      <Background images={images} texts={texts} />
      <Slider images={images} texts={texts} />
      <PrimaryProducts images={images} texts={texts} />
      <SecundaryProducts images={images} texts={texts} />
    </>

  );
}

export default Inicio;
