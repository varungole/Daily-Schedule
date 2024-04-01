import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { ROUTES } from "./route";
import Navbar from '../components/Navbar';
export const router =   createBrowserRouter(
    createRoutesFromElements(
        ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
        ))
    )
)