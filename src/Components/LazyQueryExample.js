import { useLazyQuery } from '@apollo/client';
import { Grid, Paper, Typography } from '@mui/material';
import { border, Container } from '@mui/system';
import React, { useState } from 'react';
import { GET_SIMILAR_NAME } from '../query/lazyQuery';

const LazyQueryExample = () => {

    const [name,setName] =useState('');

    const[getNames, {data,loading,error,called}]=useLazyQuery(GET_SIMILAR_NAME,{
        variables:{
            name
        },

       
    })

    console.log('use lazyQuery Data is :: ',loading,error,called ,data);

    return (
        <div>

            <label>Please Input Name : </label>
            <input type="text" name="" onChange={(e)=>setName(e.target.value)}
            placeholder="Enter name "
             
             style={{
                padding:'7px',
                borderRadius:'1px',
                border:'1px solid #gray'
        
             }}
            />
            <button onClick={()=>getNames()} style={{
                backgroundColor:'#658745',
                color:'#000',
                padding:'7px 15px'
            }}>Search</button>


            <Container fixed>
               <Grid container spacing={2}>
                {
                    data?.characters?.results?.map(item=>{
                        return (
                        <Grid item xs={12} md={4}>

                        <Paper elevation={3} p={5}>     
                                <img src={item?.image} alt='lagy-images' width="100%" />
                            
                             <Typography variant='body1'>{item.name}</Typography>
                            
                            <Typography variant='body1'>{item?.gender}</Typography>
                        </Paper>
                            </Grid>)
                        
                    })
                }

                </Grid>
            </Container>
        </div>
    );
};

export default LazyQueryExample;