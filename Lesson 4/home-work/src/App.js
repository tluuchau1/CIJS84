import Card from './Component/Content.jsx';
import './App.css';
import React from 'react';
import "./Component/Grid.css";



function App() {
  return (
    <div className='container-card row '>
    <div className='card-left l-6'>
      <Card 
      imageShow = {false}
      Title="Nhân dân tệ xuống thấp nhất 5 tháng so với USD"
      />
    </div>
    <div className='card-right l-6'>
    <Card 
    imageShow = {true}
    Title = "Nhân dân tệ xuống thấp nhất 5 tháng so với USD" />
    <Card 
    titleIndex = "top"
    imageShow = {true}
    Title = "Nhân dân tệ xuống thấp nhất 5 tháng so với USD" 
    />

    </div>
    </div>
  );
}

export default App
