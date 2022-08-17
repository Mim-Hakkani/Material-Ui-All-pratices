import { gql, useQuery } from "@apollo/client";


const GET_LOCATION_ALL =gql`
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

const useLocation = ()=>{
const {data,loading,error} = useQuery(GET_LOCATION_ALL)
    return {
        data,
        loading,
        error
    }
}
export default useLocation;