import { Route, Routes } from "react-router-dom";
import {Publicaciones} from '../publicaciones/Publicaciones'
import { AddPublicacion } from "../publicaciones/Publication";
import { PublicacionView } from "../publicaciones/PublicacionesView";
import { AddComentario } from "../publicaciones/PublicacionAddComent";

export const Content = ({publicaciones, getPublicaciones}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="publicaciones" element={<Publicaciones publicaciones={publicaciones}/>} />
                <Route path="addpublicacion" element={<AddPublicacion/>} />
                <Route path="public/:id/comments" element={<AddComentario/>} />
                <Route path="public/:id" element={<PublicacionView  getPublicaciones={getPublicaciones}/>}/>
            </Routes>

        </div>
    )
}