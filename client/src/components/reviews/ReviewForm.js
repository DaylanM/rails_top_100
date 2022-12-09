import { useState, useEffect } from 'react';

const ReviewForm = ({ addReview, id, name, rating, body, updateReview, setEdit }) => {
  const [review, setReview] = useState({ name: '', body: '', rating: 0 })

  useEffect( () => {
    if (id) {
      setReview({ name, rating, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReview(id, review)
      setEdit(false)
    } else {
      addReview(review)
    }
    setReview({ name: '', body: '', rating: 0 })
  }

  return(
    <>
      <p>{name}</p>
      <h1>{id ? "Update" : "Create"} Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input 
          name='name'
          value={review.name}
          onChange={(e) => setReview({...review, name: e.target.value })}
          required
        />
        <label>Body</label>
        <textarea
          body='body'
          value={review.body}
          onChange={(e) => setReview({...review, body: e.target.value })}
          required
        ></textarea>
        <label>Rating</label>
        <input 
          rating='rating'
          type='number'
          value={review.rating}
          onChange={(e) => setReview({...review, rating: e.target.value })}
          max='5'
          min='0'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ReviewForm;