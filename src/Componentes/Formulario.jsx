import '../App.css'
export default function Formulario({ titulo, nuevo, cantidad, cambio, agregarItem}){
    return (
        <div className="Formulario">
            <h2>{titulo}</h2> 
        <div>
            <input
                className="FormProducto"
                type="text" 
                name="nuevo"
                value={nuevo} 
                onChange={cambio}
                placeholder="Producto"/>
            <input 
                className="FormCantidad"
                type= "number"
                name="cantidad"
                value={cantidad}
                onChange={cambio}
                placeholder="Cantidad"/>
            <button 
                className="btn-agregar" 
                onClick={agregarItem}
                disabled={nuevo.trim() === ""} 
        
            >
                Agregar
            </button>
        </div>
    </div>
    );
}