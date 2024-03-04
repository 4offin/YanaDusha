// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'

function App() {

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App