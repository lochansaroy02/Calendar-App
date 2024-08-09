
import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import Header from './components/Header'
import ResourceBar from './components/ResourceBar'
import ResizableDiv from './components/ResizableDiv'

function App() {


  const [resources, setResources] = useState(0)
  return (
    <div className=''>

      <Header />
      <ResourceBar setResources={setResources} />
      <Grid resources={resources} />
    </div>
  )
}

export default App
