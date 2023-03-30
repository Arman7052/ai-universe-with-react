import React from 'react';
import Header from './component/Header/header';
import Button from './component/Button/Button';
import Card from './component/Card/Card';
import Singledata from './component/Card/Singledata/Singledata';
const App = () => {
  return (
    <>
    <Header></Header>
    <Button>Sort By Date</Button>
    <Card></Card>
    </>
  );
};

export default App;