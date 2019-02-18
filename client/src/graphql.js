import gql from 'graphql-tag'

export const ALL_CATS_QUERY = gql`
  query {getCats {id name age}}
`
