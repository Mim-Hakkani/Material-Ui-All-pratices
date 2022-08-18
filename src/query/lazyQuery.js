import { gql } from "@apollo/client";

export const GET_SIMILAR_NAME = gql`
query charactersall($name:String!) {
  characters(filter:{name:$name}){
    results{
      name
      gender
      image
      location{
        name
      }
    }
  }
}

`

