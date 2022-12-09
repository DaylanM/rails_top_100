import ReviewShow from './ReviewShow';

const ReviewList = ({ reviews, updateReview, deleteReview }) => (
  <>
    { reviews.map( c => 
      <ReviewShow
        key={c.id}
        {...c}
        updateReview={updateReview}
        deleteReview={deleteReview}
      />
    )}
  </>
) 

export default ReviewList;