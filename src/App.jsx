import { useState } from 'react'
import './App.css'
import ListaCompras from './Componentes/ListaCompras';

function App() {
  return (
    <>
      <main className='Fondo'>
          <h1>  Mi lista de compras</h1>
      <ListaCompras />
      </main>
    </>
  )
}

export default App;
