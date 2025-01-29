import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addToCart, incrementAmount, manualAmountIncrement, removeFromCart } from '../redux/depositSlice'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const [newAmount, setNewAmount] = useState(0)
  return (
    <>
      <h1>Redux Demo</h1>
      <div className="card">
        Products  : {cart.product}
        <br />
        Amount : {cart.amount}
        <br />
        <button onClick={() => dispatch(addToCart())}>
          Add To Cart
        </button>
        <button onClick={() => dispatch(removeFromCart())}>
          Remove From Cart
        </button>
        <button onClick={() => dispatch(incrementAmount())}>
          +
        </button>

        <br />

        <input type="text" value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))} />

        <button onClick={() => dispatch(manualAmountIncrement(newAmount))}>
          Add Amount
        </button>
      </div>
    </>
  )
}

export default App
