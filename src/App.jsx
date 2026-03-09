
import './App.css'

function App() {
const CalcularPrecioTotal = () => {
  const cantidad = document.querySelector('input[placeholder="ingrese la cantidad"]').value;
  const precioUnitario = document.querySelector('input[placeholder="ingrese el precio unitario"]').value;
  const precioTotal = cantidad * precioUnitario;
  alert(`El precio total es: ${precioTotal}`);
};

  return (
    <>
      <div>
      </div>
      <h1>Hola desde Vite 2026</h1>
      <input type="number" placeholder="ingrese la cantidad" />
      <input type="number" placeholder="ingrese el precio unitario" />
      <button onClick={CalcularPrecioTotal}>Calcular</button>
      <div className="card" >
      El precio total es: 
      </div>
     
    </>
  )
}

export default App
