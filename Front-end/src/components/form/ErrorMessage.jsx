

export default function ErrorMessage({error,message}){

  return message ? <small style={{color:"red"}}>{message}</small> : error && <small style={{color:"red"}}>{error.message}</small>

}