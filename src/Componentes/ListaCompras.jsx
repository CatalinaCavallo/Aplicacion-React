import React, { useState } from "react";
import Item from "./Item";
import Formulario from "./Formulario";

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
        <div>
            <Formulario
                nuevo = {nuevo}
                cambio = {cambio}
                agregarItem={agregarItem}
            />
            <ol>
                {item.map((item, index) =>
                    <Item
                    key = {index}
                    item = {item}
                    index = {index}
                    sumar = {sumar}
                    restar = {restar}
                    eliminarItem = {eliminarItem}
                    />
                )}
            </ol>
        </div>
);
}