import { LoadingSpinner} from '../LoadingSpinner'
import { usePublicacionSettings } from '../../shared/hooks/useUpdatePublicacion'
import { PublicacionSettings } from '../publicaciones/PublicacionSettings'

export const Settings = () => {
    const { publicacionSettings, isFetching, saveSettings} = usePublicacionSettings()

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div>
            <PublicacionSettings settings={publicacionSettings} saveSettings={saveSettings}/>
        </div>
        
    )
}