import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [key,setKey] = useState(null)

  useEffect(() => {
    const getKey = () => {
      setKey(process.env.TEST_KEY)
    }
    return () => {getKey()}
  },[])

  console.log(process.env)

  return (

    <div>
      <div>hello</div>
      <div>{key}</div>
    </div>
  );
}

export default App;
