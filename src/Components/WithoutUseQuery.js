import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import useLocation from '../query/useLocation';

const WithoutQuery = () => {


    // fetch data without useQuery hook 

        const {data,loading,error} =useLocation();

        //  console.log('fetch data without hook', data);

   
    // if loading 
    if(loading) return <p>Data is loading ..</p>

    //if error
    if (error) return `Error! ${error.message}`;

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

export default WithoutQuery;