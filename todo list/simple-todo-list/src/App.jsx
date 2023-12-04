import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import detective from './assets/images/detective.svg'
import search from './assets/images/search.svg'
import addnote from './assets/images/addNote.svg'
import darkmode from './assets/images/darkmode.svg'
import bin from './assets/images/bin.svg'

import AddNotes from './components/newNote'

function App() {

  const [isAdded, setIsAdded] = useState(false)
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
   const inputRef = useRef()



  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    });
    setFilteredItems(prev => {
      return [...prev, value]
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value
    setFilteredItems(items.filter(item => item.toLowerCase().includes(value.toLowerCase()))
    )
  }

  

  return (
    <div>
      {!isAdded && ( 
      <div className='container'>
        <h1>TODO LIST</h1>
        <div className='header' >
          <input className='search-bar' onChange={onChange} type='search' placeholder='Search note...'/>
          <button className='dark'><img src={darkmode}/></button>
        </div> <br/>
        <img src={detective} className='detective'/>
        <h2>Empty...</h2>
  
        {filteredItems.map(item => (
          <div className='list'>
            <input className='checkbox' type='checkbox'/>
            {item}
            <button className='bin'><img src={bin}/></button> <br/>
            <div className='line'></div>
          </div>
        ))}  
        
        <form onSubmit={onSubmit}>
          New note : <input ref={inputRef} type='text'/>
          <button type='submit'>Add</button>
        </form>
        <button className='add' onClick={() => setIsAdded(true)}><img src={addnote}/></button>
      </div>)}
      {isAdded && <NewNotes/>}
    </div>
  )
}

export default App


