export default function Item({ item, index, sumar, restar, eliminarItem}){
    return (
        <li>
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
    );
}