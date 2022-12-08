import '../../../assets/stylesheets/body.css'
import { useQuery } from '@tanstack/react-query'
import {getParticiones } from '../../../api/Api'

function Cuerpo(){
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['home'],
        queryFn: getParticiones
    })
    if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Error: {error.message}</div>

    return(
        <>
        <div>
            {JSON.stringify(data)}
            
        </div>
        <button type="button" class="btn btn-primary">Comenzar test</button>
        <div className="contain-options">
            <p>Opciones</p>
            <input type="radio" name="status" value="interesado" id="interesado" /> <label for="interesado">Estoy interesado</label>
        </div>
        
        </>
    )
}

export default Cuerpo