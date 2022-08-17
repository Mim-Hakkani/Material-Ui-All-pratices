import { useQuery } from '@apollo/client';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { GET_SINGLE_LOCATION } from '../query/location';

const SingleQuery = () => {
    const [id,setId] =useState('')
    const [apiID,setApiId] =useState(0)
 

   const handleClick =(e)=>{
        e.preventDefault();
        // console.log('some changes ::',typeof id);
        const IDIs = parseInt(id);
        // console.log('some id ::',typeof IDIs);
        setApiId(IDIs);
      
   }

    const{data,loading,error} =useQuery(GET_SINGLE_LOCATION,{
        variables:{
            id:apiID
           
        },
        fetchPolicy:'cache-and-network'
    })

    // console.log('get single data :',data);

    return (
        <div>
            <h3>Please input id :</h3>
            
            {/* get input using onchanges  */}
            <form>
               <input type="text" name="" id="" onChange={(e)=>setId(e.target.value)}/>
               <input type="submit" value="Submit" onClick={handleClick} />
            </form>


            <Box mt={5}>
               {
                !loading &&                <>
                      <h2> {data?.location?.name}</h2>
                      <h2> {data?.location?.type}</h2>       
               </>
               }


            </Box>
            
        </div>
    );
};

export default SingleQuery;