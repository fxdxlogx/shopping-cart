import { useState } from 'react';
import './App.css';
import Card from './components/card'
import Cart from './components/cart'

function App() {

  let [items,setItems] = useState([])

  function useSetItems(name){
    setItems([...items,{prouct:name}])
  }

  return (
    <div className="App">
      <Card productName='Jacket' addItemInArray={useSetItems}></Card>
      <Cart>
        {
          items.map(pro => {
            <li>{pro.product}</li>
            console.log(pro.product)
          })
        }
      </Cart>
    </div>
  );
}

export default App;
