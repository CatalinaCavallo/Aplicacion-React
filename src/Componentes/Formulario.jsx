import '../App.css'
export default function Formulario({ nuevo, cambio, agregarItem}){
    return (
        <div className="Formulario">
        <div>
            <input
                type="text" 
                value={nuevo} 
                onChange={cambio}/>
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