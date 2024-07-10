
export default function Input({name,regist,type,place}){


  return(
    <div className="col-md-8 col-lg-9">
      <input 
        type={type} 
        className="form-control" 
        placeholder={place}
        {...regist(name)}
      />
    </div>
  )
}