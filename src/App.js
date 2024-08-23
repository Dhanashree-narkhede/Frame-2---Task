import React from 'react';
import { Routes, Route } from "react-router-dom";
import MyOptionOne from './components/options/MyOptionOne';
import MyOptionTwo from './components/options/MyOptionTwo';
import MyOptionThree from './components/options/MyOptionThree';
import MyOptionFour from './components/options/MyOptionFour';
import MyOptionFive from './components/options/MyOptionFive';
import MyOptionSix from './components/options/MyOptionSix';
import Layout from './pages/Layout';
import MyOptionSeven from './components/options/MyOptionSeven';
import MyOptionEight from './components/options/MyOptionEight';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>     
          <Route path="optionone" element={ <MyOptionOne/>}/>
          <Route path="optiontwo" element={ <MyOptionTwo/>}/>
          <Route path="optionthree" element={ <MyOptionThree/>}/>
          <Route path="optionfour" element={ <MyOptionFour/>}/>
          <Route path="optionfive" element={ <MyOptionFive/>}/>
          <Route path="optionsix" element={ <MyOptionSix/>}/>
          <Route path="optionseven" element={ <MyOptionSeven/>}/>
          <Route path="optioneight" element={ <MyOptionEight/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
