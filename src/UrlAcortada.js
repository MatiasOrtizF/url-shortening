import { useState } from 'react';
import { useEffect } from 'react';
import Terea from './Terea';


export default function UrlAcortada () {

    const[tareas, setTareas] = useState([]);

    const parrafo = document.querySelector("warnings");
    const copys = document.querySelectorAll(".copy");

    copys.forEach(copy => {
        copy.addEventListener("click", e=> {
            removeCopy();
            navigator.clipboard.writeText(copy.parentNode.children[0].innerHTML);
            console.log(copy.parentNode.children[0].innerHTML);
            copy.innerHTML="Copied!";
            copy.classList.add("copied");
        })
    })
    
    function removeCopy() {
        copys.forEach(copy=> {
            if(copy.classList.contains("copied")) {
                copy.classList.remove("copied");
                copy.innerHTML="Copy";
            }
        })
    } 
    

    const callApi = () => {

    const input = document.getElementById("input");
    let url = input.value;
    fetch("https://api.shrtco.de/v2/shorten?url="+url)
        .then(response => response.json())
        .then(data => {
            let urlCortada = data.result.short_link;
            let urlOriginal = data.result.original_link;
            const tareaNueva = {
                id: urlCortada,
                texto: urlOriginal
            }
        const tareasActualizadas = [tareaNueva, ...tareas];
        setTareas(tareasActualizadas);
    })
}
    return(
        <>            
            <header className="container">
                <img src="images/logo.svg" alt=""/>

                <img className="illustration-work" src="images/illustration-working.svg" alt=""/>

                <h1>More than just shorter links</h1>

                <p>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>

                <button>Get Started</button>
            </header>

            <main>
                <div className="acortador">
                    <input id="input" type="text" placeholder="Shorten a link here..."/>
                    <p className="warnings"></p>

                    <button onClick={callApi}>Shorten It!</button>
                </div>

                {
                    tareas.map((tarea) =>
                    <Terea
                        id={tarea.id}
                        texto={tarea.texto}
                    >
                    </Terea>
                )}
            </main>

            <footer><p>Pagina web By: <a target="_blank" href="https://matiasortizf.github.io/portafolio/">Matias Ortiz</a></p></footer>
        </>
    )
} 
