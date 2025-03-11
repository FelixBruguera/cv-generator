import { useState } from "react"
import Input from "./Input"

const Section = ({ title }) => {
    const [values, setValues] = useState([''])

    return (
    <div className="section">
        <div className="flex">
            <h2>{title}</h2>
            {values.length < 5 ? <button className="add">+</button> : null }
        </div>
        {values.map((value, i) => { 
            return (
                <div className="flex">
                    <Input value={value} className="text" data-index={i}/>
                    <button className="remove">-</button>
                </div>
            )
        })}
    </div>
    )
}

export default Section