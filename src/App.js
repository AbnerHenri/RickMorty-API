import React, { useEffect, useState } from 'react'
import Card from './Components/Card';
import './App.css';

function App() {

  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')
  

  useEffect(()=>{
    fetch(url)
      .then((res)=>{return res.json()})
      .then((data)=>{ 
          console.log(data.results)
          setCharacters(data.results)
          setNext(data.info.next)
          setPrev(data.info.prev)
      })
  }, [url])

    function NextPage(){
      setUrl(next)      
    }

    function PrevPage(){
      setUrl(prev)
    }
  

  return (
    <div className='Container'>
      <div className="App">
        {characters.map((e)=>
          <Card image={e.image} name={e.name} species={e.species} id={e.id} status={e.status} />
        )}
      </div>
          <div className='Buts'>
              <button onClick={()=>PrevPage()}>Previous</button>
              <button onClick={()=>NextPage()}>Next</button>
          </div>
    </div>
  );
}

export default App;
