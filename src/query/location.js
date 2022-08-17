import { gql } from "@apollo/client";


export const GET_SINGLE_LOCATION = gql`
query SingleLocation($id:ID!){
  location(id:$id){
    name
    type
    id
  }
}
`