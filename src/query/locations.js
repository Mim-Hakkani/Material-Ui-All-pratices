import { gql } from "@apollo/client";

export const GET_LOCATIONS= gql`
query allLocations{
  locations{
    results{
      name
      id
      type
    }
  }
}

`