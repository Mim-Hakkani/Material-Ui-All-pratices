import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import { BottomNavigation, BottomNavigationAction, Breadcrumbs, Button, Container, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, ListSubheader, Pagination, Paper, Stack, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
function App() {
    const [value, setValue] = useState(0);
  return (
    <div className="App" style={{border:'1px solid orange',padding:'10px 10px'}}>
     <h1>Bismillah Hir Rahmanir Rahim </h1>
    
     <Box 
     
    //  convert box (div) to span 

    component="span"

     
     sx={{
      border:'1px solid red',
      padding:'5px', 
      // add hover in inline css 
     '&:hover': {
       color: "#000",
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

     {/* add styles in 4 way in material uis 
     
     
       <Button sx={{ mb: 3 }}>
        // or
        <Box mb={3}>
        // or
        <Box marginBottom={3}>
         or
        // <Box className="hakkani mim"></Box>
     
     */}


     {/* convet box to button  */}

     <Box component="button" variant="contained">
      submit
     </Box>
    
    <h1>Material Container properties :: </h1>

    <Container sx={{border:'1px solid red'}} fixed>
       <p>This is the matrial ui container</p>
    </Container>



    <Container 
    
    sx={{border:'1px solid green', mt:"10px"}} 

     // show the cotainer in medium sizes 
    maxWidth='md'

    /* if true the remove the padding  both sides  ... default false */
    disableGutters={true}

    fixed  // show all time as a container type 


      //  if used this property override the componet as i wish 
    // component="h1"

    
    >  

       <p>This is the matrial ui container mim vaii</p>
    </Container>

  
 <h1> Most important in Grid Layout in Material Ui Design </h1>

 <Grid container 

//  spacing is working from row and column both sides 
      spacing={2}

//  this propertity is working only row based 
    // rowSpacing={5}
 

    //  this propertity is working only column based 
      //  columnSpacing={5}

    //  it is workig as flex and grid properties and also used its all properties

    //  direction="row-reverse"  // row ,row-reverse,column,column-reverse 
    //  alignItems='flex-start'  //  flex-start,flex-end,center,baseline,streach
    //  justifyContent="center"

    // column ="12"  // it will be increase as my wishes 
 
 >

    <Grid item xs={12} sm={6} md={8} lg={4} >
      <Box border="1px solid red"  p="0px">
        Responsives Grid 1s
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={8}>
      <Box border="1px solid green">
        Responsives Grid 2
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={8} lg={4}>
      <Box border="1px solid red">
        Responsives Grid 3
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={8}>
      <Box border="1px solid green">
        Responsives Grid 4
      </Box>
    </Grid>


    {/* auto layout  */}
        <Grid item auto>
        <Box border="1px solid green">
           auto layout 1
        </Box>
    </Grid>

      <Grid item xs={12} sm={6} md={4} lg={8}>
        <Box border="1px solid green">
           auto layout 2
        </Box>
    </Grid>

        <Grid item auto>
        <Box border="1px solid green">
           auto layout 3
        </Box>
    </Grid>

 </Grid>


<h1> Stact in material ui </h1>

 {/* initially stack is worked in column wise  */}

<Stack 
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}
  divider={<Divider orientation="vertical" flexItem />}

  border="1px solid #d5d5d5"
>
  <p>Home</p>
  <p>Menu</p>
  <p>About</p>
  <p>Items</p>
  <p>Gallary</p>
  <p>Contact</p>
</Stack>


<h1>Time To play With images </h1>
 
 {/* basic images list  */}
     <ImageList 
  sx={{ width: 500, height: 450 }}
  cols={3}  // number of columns 
  rowHeight={164} // show how many height in 
  variant="woven" 
    // variant  khera to ei thsake re : // 'masonry' 'quilted''standard''woven'
  >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

 {/* images with icon and titles  */}
   <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Pratices the images list</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={<p>Golam Hakkani mim</p>}
            // subtitle={<p>front end developer</p>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon/>
              </IconButton>
            }

            // actionPosition="right" // or left
            // position="top"    // top or bottom which show the icons bar
          />
        </ImageListItem>
      ))}
    </ImageList>


    <h1>Hidden in material ui (Note : it is deprecated in version 5) not used </h1> 

   <Divider></Divider>

   <h1>Bottom Navigation : </h1>
   <h3>It Works as icon with names / labels </h3>

<BottomNavigation
  showLabels  // show the labels name / title name 
  value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon sx={{color:'red'}}/>} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>

<Divider/>

<h1>Breadcumb :: in mui</h1>

<Breadcrumbs 
aria-label="breadcrumb" // default dite hobe 

separator="=>"  // used different types of icons and node also

maxItems={2}   // how many breadcoeme to show in site if used it then first and last item is showm and middle is collaps 

itemsAfterCollapse ={2} 
// if used maxitems then used after items collaps show data 

itemsBeforeCollapse ={2}
 // before the items collaps shown data 
>
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    <LocationOnIcon />
    Core0
  </Link>
    <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core1
  </Link>
    <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core2
  </Link>
    <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core3
  </Link>
    <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core4
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>


<h1>Materiul Ui Button Icons </h1>
 
 {/* different variant is ready  */}

<Button variant="text" disabled>Text</Button>
<Button variant="contained" >Contained</Button>
<Button variant="outlined" >Outlined</Button>
<Button variant="contained"  color="secondary">color Button</Button>
<Button 
  variant="contained" 
  color="secondary" // success , error
  size='medium' // medium , small
  startIcon={<LocationOnIcon/>} 
  endIcon={<LocationOnIcon/>}
 >color Button</Button>

 <Button 
    variant='contained' 
    fullWidth 
    href="http://www.facebook.com"
   >
    Full Width button 
  </Button>

   <h1>Material Special Component Link </h1>

  <Link 
  //  component="button" 
   variant='body1'
   color="primary" 
   underline='hover'
   href="https://www.ehsanmarketing.com"
  //  rel="noopener"
   target="_blank"
   >Ehsan Marketing</Link>

   <h3>Pagination Item Start </h3>

   <Pagination
    count={15}
    color="primary"
    defaultPage={12}
    variant="outlined"
    // hideNextButton={true}
     />


<h1>Drawer , Tabs , stepper , speed dial </h1>

<Paper square>
  <span>miim</span>
</Paper>

<h1> Baki gula mutamuti parbo... The End </h1>
    </div>
  );
}

export default App;
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];