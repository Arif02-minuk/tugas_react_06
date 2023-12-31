import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const AppRouter = () => {
    return (
        <Router>
                <div>
                    <Routes>
                    <Route path="/" exact element={<App/>}/>
                    <Route path="/menu_makanan" exact element={<MenuMakanan/>} />
                    <Route path="/menu_minuman" element={<MenuMinuman/>} />
                    <Route path="/kontak" element={<Kontak/>} />
                    </Routes>
               </div>
        </Router>
    )
}


export default AppRouter;