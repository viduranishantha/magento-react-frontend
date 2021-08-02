import React from 'react'
import { useParams } from 'react-router';
import { useQuery, gql } from '@apollo/client';

const CATEGORY = gql `
query GetCATEGORY{
  categories(
    filters: {
      
      parent_id: {in: ["2"]}
    }
    pageSize:3
    currentPage: 2
  ) {
    total_count
    items {
      uid
      name
      path      
    }
  }
}
`;



export default function Category() {

    const{ loading, error, data} = useQuery(CATEGORY); 

    return (
        <div>
            Category List
        </div>
    )
}
