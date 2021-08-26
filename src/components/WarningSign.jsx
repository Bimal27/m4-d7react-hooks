import { Alert} from 'react-bootstrap'


const WarningSign = (props)=>{
   
    return(
        <Alert  variant={props.color}>
         {props.title}
      </Alert>
    )
 
  
}
export default WarningSign