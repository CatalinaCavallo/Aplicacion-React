import React, { useState } from "react";

export default function ListaCompras(){
    const [item, setItem] = useState([]);
    const [nuevo, setNuevo] = useState("");

    function cambio(event){
        setNuevo(event.target.value);
    }

    function agregarItem(){
        if(nuevo.trim() !==""){
            setItem(t => [...t, {nombre: nuevo, cantidad: 1}]);
            setNuevo("");
        }
    }

    function eliminarItem(){

    }
    return(
    <div className="Lista">
        <div>
            <input
                type="text" 
                value={nuevo} 
                onChange={cambio}/>
            <button 
                className="btn-agregar" 
                onClick={agregarItem}>
                Agregar
            </button>
        </div>

        <ol>
            {item.map((item, index) =>
                <li key={index}> 
                    <span className="text"> {item.nombre} {item.cantidad} </span>
                    <button 
                        className="btn-eliminar"
                        onClick={() => eliminarItem(index)}>
                        <i class="bi bi-trash"></i>
                    </button>
                </li>
            )}
        </ol>
    </div>
    

);
}