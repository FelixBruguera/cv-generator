const Section = ({ title, values, setValues, isSaved }) => {
    const handleInput = (e) => {
        const index = e.target.dataset.index
        const newValues = [...values]
        newValues[index] = e.target.value
        setValues(newValues)
    }
    const add = () => {
        setValues(prev => prev.concat(''))
    }
    const remove = (e) => {
        const index = e.target.dataset.index
        const newValues = [...values]
        newValues.splice(index, 1)
        setValues(newValues)
    }

    if (isSaved) {
        return (
            <section>
                <div className="flex">
                    <h2 className="section-title">{title}</h2>
                </div>
                <ul>
                    {values.map((value) => <li className="text" key={value}>{value}</li>
                    )}
                </ul>
            </section>
        )
    }

    return (
        <section>
            <div className="flex">
                <h2>{title}</h2>
                {values.length < 5 ? 
                <button className="add" type="button" onClick={add}>+</button> : null }
            </div>
            {values.map((value, i) => { 
                return (
                    <div className="flex">
                        <input value={value} className="text" data-index={i} onChange={handleInput} required></input>
                        <button className="remove" type="button" data-index={i} onClick={remove}>-</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Section