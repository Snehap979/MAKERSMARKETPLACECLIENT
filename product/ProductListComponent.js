import React,{useState} from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import ProductDetailsComponent from './ProductDetailsComponent'
import beverages from '../images/beverages.jpg'
import DIY from '../images/DIY.jpg'
import selfcare from '../images/selfcare.jpg'
import handmade from '../images/handmade.jpg'
import vintage from '../images/vintage.jpg'
import freegifts from '../images/freegifts.jpg'
import bakery from '../images/bakery.jpg'
import ProductDetailsContainer from './ProductDetailsContainer';
import BuyerProductList from './buyer/BuyerProductsList';
import ProductListComponent from './buyer/BuyerProductsList'

const List = [
    {
        img: freegifts,
        title: 'Free Gifts',
    },
    {
        img: beverages,
        title: 'Beverages',
    },
    {
        img: selfcare,
        title: 'SelfCare',
    },
    {
        img: DIY,
        title: 'DIY',
    },
    {
        img: bakery,
        title: 'Art & Prints',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Organic Products',
    },
    {
        img: bakery,
        title: 'Bakery',
    },
    {
        img: vintage,
        title: 'Vintage & Retro Finds',
    },
    {
        img: handmade,
        title: 'Jewelry',
    }
];

export default function AlignItemsList({email}) {
    console.log("inside of the alggnItems")
const [navigate,navigateHandle]=useState(false)
const [product,setProduct]=useState(null)
    const handleClick=(event)=>{
        console.log("inside of the handelClick",event.target)
        setProduct(event.target.value)
        navigateHandle(true)
    }
    if(navigate)
    {
        return(
<BuyerProductList email={email}>

</BuyerProductList>
        )
// return(
//     <ProductListComponent>
        
//     </ProductListComponent>
// )
    }
    else
    return (
        <Grid container spacing={2}>
            {List.map((value, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} onClick={handleClick}>
                            <CardContent style={{ flex: '1 0 auto' }}>
                                <div style={{ width: '100%', paddingTop: '50%', position: 'relative' }}>
                                    <img src={value.img} alt={value.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <Typography variant="body1">{value.title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
}




// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// export default function TitlebarImageList() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
// ];