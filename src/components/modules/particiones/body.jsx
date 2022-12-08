import '../../../assets/stylesheets/body.css'
import preguntas from '../../../router/preguntas'
import Respuesta from './respuesta'
import { useQuery } from '@tanstack/react-query'
import {getParticiones } from '../../../api/Api'

import {useState, useEffect} from 'react';

function Cuerpo(){
    const preguntas = [
        {
            titulo: "Dado el conjunto: ",
            opciones: [
                {textoRespuesta: "ingresar sd", isCorrect: true},
                {textoRespuesta: "ingresar opcion", isCorrect: false},
                {textoRespuesta: "ingresar opcion", isCorrect: true},
                {textoRespuesta: "ingresar opcion", isCorrect: false},
            ],
        },
    
    ]


    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuación, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['particion'],
        queryFn: getParticiones
    })
    if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Error: {error.message}</div>

    return(
        <>

        <div className="container">
        <div className="lado-izquierdo">
                <div className="pregunta-numero">
                    <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                    <div className="titulo-pregunta">{preguntas[preguntaActual].titulo},{data}</div>
                </div>
            </div>

            <div className="lado-derecho">
                {preguntas[preguntaActual].opciones.map((respuesta) =>(
                    <button className='quiz'>{respuesta.textoRespuesta}</button>
                ))  }
            </div>
        </div>
        
        <div className="container">
        <div className="lado-izquierdo">
                <div className="pregunta-numero">
                    <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                    <div className="titulo-pregunta">Ingrese un conjunto a resolver</div>
                </div>
            </div>

            <div className="lado-derecho">

                <input className='input' type="text" />
                <button type="button" className='quiz' data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar respuesta</button>
                
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Resultados</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

        </div>

        
        <div className="container">
        <div className="lado-izquierdo">
                <div className="pregunta-numero">
                    <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                    <div className="titulo-pregunta">Ingresa las particiones resultantes del siguiente conjunto: </div>
                </div>
            </div>

            <div className="lado-derecho">

                <input className='input' type="text" />
                <button type="button" className='quiz' data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar respuesta</button>
                
                
            </div>

         {/* Modal */}

         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Resultados</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

        </div>
        
        </>
    )
}

export default Cuerpo