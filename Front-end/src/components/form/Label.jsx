

export default function Label({name}){
  return (
    <label 
      htmlFor="fullName" 
      className="col-md-4 col-lg-3 col-form-label">
        {name}
      </label>

  )
}