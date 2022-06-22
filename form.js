const form = document.getElementById("formulariocompleto");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let formdata = new FormData(form);
    let formobj = convertirformdataaobjeto(formdata)
    insertartabla (formobj)
    guardarobj(formobj)
    
})

function insertartabla (formobj) {
    let tablaref = document.getElementById("visortabla");
    let nuevafila = tablaref.insertRow(-1);
    let nuevotipocelda = nuevafila.insertCell(0);
    nuevotipocelda.textContent = formobj["nombre"];

    nuevotipocelda = nuevafila.insertCell(1);
    nuevotipocelda.textContent = formobj["rut"];

    nuevotipocelda = nuevafila.insertCell(2);
    nuevotipocelda.textContent = formobj["cantidad"];

}

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
    //let formarray = JSON.parse(localStorage.getItem("data")) || [];
    //formarray.push(formobj);
    //Convierto mi array en JSON
    let formarrayJSON = JSON.stringify(formobj);
    //Guardo el array en formato JSON en el local storage
    //localStorage.setItem("data", formarrayJSON)
    console.log(formobj);


    
    //console.log(formobj);

    fetch ("https://frozen-scrubland-95507.herokuapp.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formarrayJSON,
    });
}