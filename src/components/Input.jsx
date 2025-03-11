const Input = ({ placeholder, className, value, onChange }) => (
    <div>
      <input className={className} value={value} placeholder={placeholder} onChange={onChange}></input>
    </div>
  )
export default Input