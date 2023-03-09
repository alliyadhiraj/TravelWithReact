
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelpPage from '../components/HelpPage';
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import Places from "../components/Places";
import Services from "../components/Services";
import About from "../components/About";
import Social from "../components/Social";

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path="/" element= {<HomePage/>}/>
                <Route path="/LoginPage" element= {<LoginPage/>}/>
                <Route path="/places" element= {<Places/>}/>
                <Route path="/help" element={<HelpPage social={<Social/>}/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>
                

            </Routes>

        </div>
    
    </BrowserRouter>
);

export default AppRouter;