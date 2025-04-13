export default function Item({ item, index, sumar, restar, eliminarItem}){
    return (
        <li className="Item">
            <span> 
                {item.nombre} 
            </span>
            <button 
                onClick={() => sumar(index)}>+</button>
            {item.cantidad} 
            <button onClick={() => restar(index)}>-</button>
            <button 
                onClick={() => eliminarItem(index)}>
                <i class="bi bi-trash"></i>
            </button>
            <button onClick={() => editar(index)}> 
                <i class="bi bi-pencil"></i>
            </button>
        </li>
    );
}