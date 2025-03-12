import { useState } from 'react'
import Input from './components/Input'
import Section from './components/Section'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [phone, setPhone] = useState('')
  const [education, setEducation] = useState([''])
  const [experience, setExperience] = useState([''])
  const [isSaved, setIsSaved] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    setIsSaved(true)
  }
  
  if (isSaved) {
    return (
      <div id="cv">
        <h1 className="title">{name}</h1>
        <div className="subtitles">
          <h3 className='subtitle'>{position}</h3>
          <h3 className='subtitle'>{phone}</h3>
        </div>
        <Section title="Education" values={education} setValues={setEducation} isSaved={isSaved}/>
        <Section title="Experience" values={experience} setValues={setExperience} isSaved={isSaved}/>
      </div>
    )
  }
  return (
    <form onSubmit={(e) => handleSubmission(e)}>
      <h2>Personal Information</h2>
      <input value={name} placeholder="Name" className="text" onChange={(e) => setName(e.target.value)} required></input>
      <div className="subtitles">
        <input value={position} placeholder="Position" className="text" onChange={(e) => setPosition(e.target.value)} required></input>
        <input value={phone} placeholder="Phone" className="text" onChange={(e) => setPhone(e.target.value)} required></input>
      </div>
      <Section title="Education" values={education} setValues={setEducation} isSaved={isSaved}/>
      <Section title="Experience" values={experience} setValues={setExperience} isSaved={isSaved}/>
      <button type='submit' className='submit'>Save</button>
    </form>
)}

export default App
