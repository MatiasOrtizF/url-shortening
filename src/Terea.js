export default function UrlAcortada ({texto,id}) {


    return(
        <div class="box">
            <div class="url-no-acortada">
                    <h4 id="noAcortada">{texto}</h4>
            </div>
            <div className="url-acortada">
                    <h4 id="acortada">{id}</h4>
                    <button className="copy">Copy</button>
            </div>
        </div>
    )
} 