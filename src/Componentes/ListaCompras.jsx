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

    function eliminarItem(index){
        const actualizarLista = item.filter((_, i) => i !== index);
        setItem (actualizarLista);
    }

    function sumar(index) {
        const nuevaLista = item.map((item, i) =>
            i === index ? { ...item, cantidad: item.cantidad + 1 } : item 
     );
        setItem(nuevaLista);
    }

    function restar(index) {
        const nuevaLista = item.map((item, i) =>
            i === index && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 } : item 
     );
        setItem(nuevaLista);
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
                    <span className="text"> 
                        {item.nombre} {item.cantidad} 
                    </span>
                    <button onClick={() => sumar(index)}>+</button>
                    <button onClick={() => restar(index)}>-</button>
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