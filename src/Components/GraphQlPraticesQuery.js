import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { GET_LOCATIONS } from '../query/locations';

const GraphQlPraticesQuery = () => {

    // get data from useQuery hook direct 
    const {data,loading,error} =useQuery(GET_LOCATIONS)

    // check console if data is comming 
    console.log('data is here :',data);

    // if loading 
    if(loading) return <p>Data is loading ..</p>

    return (
        <Container> 
            <Box display="flex" flexDirection="row" flexWrap="wrap" >
                {
                    data?.locations?.results?.map(location=><div key={location?.id}>
                    
                    <Box border="1px solid red" p={5} width={200} >
                        <> 
                        <Typography variant='body1'>{location?.name}</Typography>
                        <Typography variant='body1'>{location?.type}</Typography>
                        </>
                    </Box>
                    </div>)
                }
            </Box>
        </Container>
    );
};

export default GraphQlPraticesQuery;