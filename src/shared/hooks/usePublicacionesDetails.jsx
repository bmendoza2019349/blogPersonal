import { useState } from "react";
import {toast} from "react-hot-toast";
import { getPublicDetails as getPublicacionDetailsRequest } from "../../services";

export const usePublicacionDetails = () => {
    const [publicacionesDetails, setPublicacionesDetails] = useState()

    const getPublicDetails = async(id) => {
        const responseData = await getPublicacionDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Error al cargar la informacion de la publicacion'
            )
        }
        setPublicacionesDetails(responseData)
    }

    return{
        publicacionesDetails,
        isFetching: !publicacionesDetails,
        getPublicDetails
    }
}