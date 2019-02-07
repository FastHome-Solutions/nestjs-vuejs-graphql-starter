import gql from 'graphql-tag'

export const ALL_CATS_QUERY = gql`
  query {getCats {id name age}}
`
export const ALL_HOMES_QUERY = gql`
  query {homes {id headlineExpose description}}
`
