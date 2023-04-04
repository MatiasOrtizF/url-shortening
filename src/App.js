import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UrlAcortada from './UrlAcortada';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
      
  }, []);
    const[datas, setDatas] = useState([]);

  
    const filtrarPorRegiones = () => {
        fetch("https://api.shrtco.de/v2/shorten?url=www.frontendmentor.io")
        .then(response => response.json())
        .then(data => {
            const urlActualizadas = [data.result.short_link, ...datas]
            setDatas(urlActualizadas);
        })
    }
  

  return (
    <div>

    <button onClick={filtrarPorRegiones}>Emviar</button>
        <div className="acortador">
            <input id="acortador" type="text" placeholder="Shorten a link here..."/>
            <button>Shorten It!</button>
        </div>
            {datas.map(data=> 
                        <UrlAcortada
                        noAcortada = {data}
                        acortada = {data}
                        >      
                        </UrlAcortada>    
            )}
        
        
    </div>
  );
}

export default App;
