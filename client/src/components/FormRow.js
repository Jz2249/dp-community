
/* name attribute is used to group the value to its associated label. 
   eg.( for='abc' ====> name = 'abc' )
*/
const FormRow = ({type, name, value, handleChange, labelText}) => {
  return (
    
    <div className="form-row">
            <label htmlFor={name} className="html-row">{labelText || name}</label>
            <input 
              type={type}
              value={value}
              name={name}
              onChange={handleChange}
              className='form-input'
              />
          </div>
  )
}

export default FormRow