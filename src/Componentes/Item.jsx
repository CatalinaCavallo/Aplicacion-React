import { useState } from "react";

export default function Item({ item, index, sumar, restar, eliminarItem, actualizarNombre }) {
    const [editando, setEditando] = useState(false);
    const [nuevoNombre, setNuevoNombre] = useState("");

    function guardarCambio() {
        console.log("Guardando:", nuevoNombre);  
        if (nuevoNombre.trim() !== "") {
            actualizarNombre(index, nuevoNombre);
            setEditando(false);
        }
    }

    return (
        <li className="Item">
            {editando ? (
                <>
                <div className="FormEditar">
                    <input 
                        type="text" 
                        value={nuevoNombre} 
                        onChange={(e) => setNuevoNombre(e.target.value)} 
                    />
                    <button onClick={guardarCambio}>
                        <i className="bi bi-check-lg"></i>
                    </button>
                    <button onClick={() => setEditando(false)}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
                </>
            ) : (
                <>
                    <span>{item.nombre}</span>
                    <button onClick={() => sumar(index)}>
                        +
                    </button>
                    {item.cantidad}
                    <button onClick={() => restar(index)}>
                        -
                    </button>
                    <button onClick={() => eliminarItem(index)}>
                        <i className="bi bi-trash"></i>
                    </button>
                    <button onClick={() => {
                        setEditando(true);
                        setNuevoNombre(item.nombre);
                    }}>
                        <i className="bi bi-pencil"></i>
                    </button>
                </>
            )}
        </li>
    );
}
