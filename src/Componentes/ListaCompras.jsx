import { useState } from "react";
import Item from "./Item";
import Formulario from "./Formulario";

export default function ListaCompras() {
    const [item, setItem] = useState([]);
    const [nuevo, setNuevo] = useState("");
    const [cantidad, setCantidad] = useState("");

    function cambio(event) {
        const { name, value } = event.target;
        if (name === "nuevo") {
            setNuevo(value);
        } else if (name === "cantidad") {
            setCantidad(value);
        }
    }

    function agregarItem() {
        const cantidadNumerica = Number(cantidad);
    
        if (nuevo.trim() !== "" && cantidadNumerica > 0) {
            setItem(t => [...t, { nombre: nuevo, cantidad: cantidadNumerica }]);
            setNuevo("");
            setCantidad("");
        }
    }

    function eliminarItem(index) {
        const actualizarLista = item.filter((_, i) => i !== index);
        setItem(actualizarLista);
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
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
        );
        setItem(nuevaLista);
    }

    function actualizarNombre(index, nuevoNombre) {
        const nuevaLista = item.map((item, i) =>
            i === index ? { ...item, nombre: nuevoNombre } : item
        );
        setItem(nuevaLista);
    }

    return (
        <div>
            <Formulario
                titulo="Agregar productos"
                nuevo={nuevo}
                cantidad={cantidad}
                cambio={cambio}
                agregarItem={agregarItem}
            />
            <ol>
                {item.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        index={index}
                        sumar={sumar}
                        restar={restar}
                        eliminarItem={eliminarItem}
                        actualizarNombre={actualizarNombre}
                    />
                ))}
            </ol>
        </div>
    );
}
