import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchProductStore} from './SearchProductStore';
import {ProductStore} from './ProductStore';
import {ProductListStore} from './ProductListStore';

function App() {

  const test = [{name: "Product1", price: 50000, description: "Comida"},
                {name: "Product2", price: 50001, description: "Comida"},
                {name: "Product3", price: 50002, description: "Comida"},
                {name: "Product4", price: 50003, description: "Comida"},
                {name: "Product5", price: 50004, description: "Comida"},
                {name: "Product6", price: 50005, description: "Comida"},
                {name: "Product7", price: 50006, description: "Comida"},
                {name: "Product8", price: 50007, description: "Comida"},
                {name: "Product9", price: 50008, description: "Comida"},];
  return (
    <div className="App">
      <SearchProductStore />
      <ProductListStore products={test}> </ProductListStore>
    </div>
  );
}

export default App;
