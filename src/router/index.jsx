import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import TodoDetail from "../components/TodoDetail";

const BaseRouter = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path="/detail" element={<TodoDetail />}></Route>             
            </Routes>            
        </BrowserRouter>
    )
}

export default BaseRouter