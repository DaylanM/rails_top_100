import { useState } from 'react';
import ReviewForm from './ReviewForm'; 

const ReviewShow = ({ id, name, body, rating, updateReview, deleteReview }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <ReviewForm 
            id={id}
            name={name}
            body={body}
            rating={rating}
            updateReview={updateReview}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h3>{name}</h3>
          <p>{body}</p>
          <p>{rating}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteReview(id)}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default ReviewShow;