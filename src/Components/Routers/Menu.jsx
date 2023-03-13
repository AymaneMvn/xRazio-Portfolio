import Xrazio from "../xrazio";
import WorkOfGalleryRouter from "./WorkOfGalleryRouter";
import { Routes , Route } from "react-router-dom";
import AboutRoutes from "./AboutRoutes";

export default function Menu() {
    return (
        <div>
        <Routes>
        <Route path="/" element={<Xrazio/>}/>
        <Route path="/WorkOfGallery" element={<WorkOfGalleryRouter/>}/>
        <Route path="/About" element={<AboutRoutes/>}/>
        </Routes>
        </div>
    );
};