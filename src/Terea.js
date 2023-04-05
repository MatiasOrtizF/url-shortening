export default function UrlAcortada ({texto,id}) {

    const copiar = (e) => {
        e.target.parentNode.parentNode.parentNode.querySelectorAll(".copy").forEach(copy=> {
            if(copy.classList.contains("copied")) {
                copy.classList.remove("copied");
                copy.innerHTML="Copy";
            }
        });
        navigator.clipboard.writeText(e.target.parentNode.children[0].innerHTML);
        e.target.innerHTML="Copied!";
        e.target.classList.add("copied");
        console.log(e.target.parentNode.children[0].innerHTML);
    }

/*
    copys.forEach(copy => {
        copy.addEventListener("click", e=> {
            removeCopy();
            console.log(copys);
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
    } */

    return(
        <div class="box">
            <div class="url-no-acortada">
                    <h4 id="noAcortada">{texto}</h4>
            </div>
            <div className="url-acortada">
                    <h4 id="acortada">{id}</h4>
                    <button className="copy" onClick={copiar} >Copy</button>
            </div>
        </div>
    )
} 