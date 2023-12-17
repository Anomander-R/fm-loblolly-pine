import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Destination, Crew, Technology} from "./pages";
import {HeaderBar} from "./components"

const App = () => {
  return (<>
    <HeaderBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/destination'} element={<Destination/>}></Route>
      <Route path={'/crew'} element={<Crew/>}></Route>
      <Route path={'/technology'} element={<Technology/>}></Route>
    </Routes>
    </>
  );
};

export default App;
