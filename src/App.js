import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
     <h1>Bismillah Hir Rahmanir Rahim </h1>
    
     <Box 
     
     sx={{
      border:'1px solid red',
      padding:'5px', 
      // add hover in inline css 
     '&:hover': {
        background: "#f00",
      }}} 

      //  add the css style without sx 
       fontSize="25px"
       color='violet'
       m="0 auto"
       textTransform="uppercase"
       textAlign='center'
       display='flex'
       flexDirection={'column'}
    
       >
        <p>  1. it works as div by default </p>  
        <p>  2. add all styles like as css </p>  
        <p>  3. play with the box items   </p>  
         
          
     </Box>
   
    </div>
  );
}

export default App;