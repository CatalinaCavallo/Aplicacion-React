import { useState } from 'react'
import './App.css'
import ListaCompras from './Componentes/ListaCompras';

function App() {
  return (
    <>
      <main className='Fondo'>
          <h1> <i class="bi bi-bag-heart-fill"></i> Mi lista de compras</h1>
      <ListaCompras />
      </main>
    </>
  )
}

export default App;
