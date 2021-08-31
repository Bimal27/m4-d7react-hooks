
import { useEffect } from "react"
import { useState } from "react"
import{Form,Button} from "react-bootstrap"

const AddComment = ({asin}) => {
  
    const [comments , setComments] = useState({
        comment: '',
        rate: 1,
        elementId:null
    })

    useEffect(()=>{
        setComments({
            ...comments,
            elementId:asin
        })
    },[asin,comments])

    const handleInput = async (e) =>{
        try {
            e.preventDefault();
            const response = await fetch(" https://striveschool-api.herokuapp.com/api/comments",{
                method:"POST",
                body: JSON.stringify(comments),
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2Mjk5NzkzNzUsImV4cCI6MTYzMTE4ODk3NX0.8oPWQmDkjhZppxF1O_JjqR5vYAfRMCIn_4zUs7p9_OM",
                    "Content-type": 'application/json'
                }
            })
            if(response.ok){
                alert('Comments added successfully')
                
            }
        } catch (error) {
            console.log(error)
            
        }

    }


    return(
           <Form onSubmit={handleInput}>
               <Form.Group >
                    
                    <Form.Control type="text" placeholder="add comment" 
                    value={comments.comment}
                    onChange={e =>setComments({
                        comments,
                        comment:e.target.value
                    
                })}
                     />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Rate</Form.Label>
                    <Form.Control as="select" value={comments.rate}
                    onChange={e =>setComments({
                        ...comments,
                        rate:e.target.value
                    })
                }>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
               </Form.Group>
               <Button variant="success" type="submit">
                                Add
             </Button>
           </Form>
        )
    }

export default AddComment