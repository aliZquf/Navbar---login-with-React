const Input = ({onChange,label,value,name,id}) => {
    return(
        <div className="mb-3">
        <label htmlFor="email">{label}:</label>
        <input onChange={onChange} value={value} name={name} id={id} className="form-control" type="text" />
    </div>
    );
}
 
export default Input ;