import { Route, Routes } from "react-router-dom";
import {Publicaciones} from '../publicaciones/Publicaciones'
import { AddPublicacion } from "../publicaciones/Publication";

export const Content = ({publicaciones, getPublicaciones}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="publicaciones" element={<Publicaciones publicaciones={publicaciones}/>} />
                <Route path="addpublicacion" element={<AddPublicacion/>} />
            </Routes>

        </div>
    )
}