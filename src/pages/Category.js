import React from 'react'
// import { useParams } from 'react-router';
import { useQuery, gql } from '@apollo/client';

const CATEGORY = gql `
query GetReviews{
  reviews{
    id
    title
    rating
    body
  }
}
`


export default function Category() {

    const{ loading, error, data} = useQuery(CATEGORY); 
    if (loading) return <p>Loading...</p>
    if (error) return <p> error </p>
    console.log(data)
    const reviews = data.reviews
    console.log(reviews)
    
    return (
        
        <div>
          {
            reviews.map( review => (
                <div key={review.id}>
                    <h2 className="title">{review.title}</h2>
                    <div className="body">{review.body}</div>
                    <div className="rating">{review.rating}</div>
                </div>
          ))}
        </div>
        
    )
}
