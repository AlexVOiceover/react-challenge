import { useState } from 'react'

function ChooseRating() {
    const [rating, setRating] = useState(3);
  
    function updateRating(event: React.ChangeEvent<HTMLInputElement>) {
        setRating(+event.target.value);
    }
  
    return (
      <form>
        <input
          type="range"
          value={rating}
          onChange={updateRating}
          min="1"
          max="5"
          aria-label="Rating"
        />
        <output>{"⭐️".repeat(rating)}</output>
      </form>
    );
  }

export default ChooseRating
