import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import React, { useState, useEffect } from "react";
import { getProductsList } from '../../actions/UserAction';
import AppBarComponent from '../../higherOrderComponent/AppBarComponent';
import ProductDetailsContainer from '../ProductDetailsContainer'
import ProductDetailsComponent from '../ProductDetailsComponent';

export default function BuyerProductList({email}) {
  const [jsonData,setData]=useState([])
  useEffect(() => {
    const fetchData = async (email) => {
      try {
        const response = await getProductsList(email);
        console.log("response",response)
        setData(response.data)
      } catch (error) {
        console.log("error", error);
      }
    };
    if(jsonData.length==0)
    fetchData(email)
  })

  const [navigate,setNavigation]=useState("false")
  const [item,setItem]=useState(null)
  const handleItem=(event)=>{
    setNavigation("true")
    setItem(event.target.value)
  }
  if(navigate=="true")
  {
    console.log("inside of true")
    return
    ( <ProductDetailsComponent>
   </ProductDetailsComponent>
    )
  }
  else
  return (
<React.Fragment>
<AppBarComponent name={"PRODUCTS LIST"}>
</AppBarComponent>
<List sx={{ width: '100%', maxWidth: 'unset', bgcolor: 'background.paper' }}>
      {jsonData.length>0 && jsonData.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem onClick={handleItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={item.image} alt={`Product ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={`Name: ${item.productName
              }, Price: ${item.price},`}
            />
          </ListItem>
          {index !== jsonData.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
</React.Fragment>
   
  );
}
