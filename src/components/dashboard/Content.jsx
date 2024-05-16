import { Route, Routes } from "react-router-dom";
import { Publicaciones } from '../publicaciones/Publicaciones'
import { AddPublicacion } from "../publicaciones/Publication";
import { PublicacionView } from "../publicaciones/PublicacionesView";
import { AddComentario } from "../publicaciones/PublicacionAddComent";
import { Settings } from "../settings/Settings";
import { DeleteComentario } from "../publicaciones/PublicacionDeleteComent";
import { DeletePublicacion } from "../publicaciones/PublicacionDelete";

export const Content = ({ publicaciones, getPublicaciones }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="public/:id/updatePu" element={<Settings />} />
                <Route path="publicaciones" element={<Publicaciones publicaciones={publicaciones} />} />
                <Route path="addpublicacion" element={<AddPublicacion />} />
                <Route path="public/:id/comments" element={<AddComentario />} />
                <Route path="public/:id/comments/:commentId" element={<DeleteComentario />} />
                <Route path="public/:id/pubDelete" element={<DeletePublicacion />}/>
                <Route path="public/:id" element={<PublicacionView getPublicaciones={getPublicaciones} />} />
            </Routes>

        </div>
    )
}