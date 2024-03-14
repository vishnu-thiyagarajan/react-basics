import { useEffect, useState } from 'react';
import './App.css';
import ListJokes from './component/ListJokes';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://official-joke-api.appspot.com/jokes/ten");
      const jokes = await response.json();
      setLoading(false);
      setData(jokes);
    }
    fetchData();
  },[])
  if(loading) return <p>loading...</p>
  return (
    <>
    <ListJokes data={data} />
    </>
  );
}

export default App;
