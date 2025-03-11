import { useState } from 'react'
import Input from './components/Input'
import Section from './components/Section'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [phone, setPhone] = useState('')
  

  return (
    <form>
      <Input className="title" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <div className="flex">
        <Input className="subtitle" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
        <Input className="subtitle" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div>
      <Section title="Education"/>
      <Section title="Experience"/>
    </form>
  )
}

export default App
