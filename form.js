const form = document.getElementById("formulariocompleto");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let formdata = new FormData(form);
    let formobj = convertirformdataaobjeto(formdata)

})

function convertirformdataaobjeto(formdata){
    let formnombre= formdata.get("nombre")
    let formrut= formdata.get("rut")
    let formcantidad= formdata.get("cantidad")
    return {
        "nombre": formnombre,
        "rut": formrut,
        "cantidad": formcantidad
    }
}

function guardarobj(formobj){
    let formobjJSON = JSON.stringify(formobj)
    localStorage.setItem("data", formobjJSON)
}

