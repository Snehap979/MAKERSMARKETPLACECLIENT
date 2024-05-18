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
import { getProductsList } from '../actions/UserAction';
import AppBarComponent from '../higherOrderComponent/AppBarComponent';

export default function FolderList({user}) {
  const [jsonData,setData]=useState([])
  useEffect(() => {
    const fetchData = async (user) => {
      try {
        const response = await getProductsList(user.email);
        console.log("response",response)
        setData(response.data)
      } catch (error) {
        console.log("error", error);
      }
    };
    if(jsonData.length==0)
    fetchData(user)
  })
  return (
<React.Fragment>
<AppBarComponent name={"PRODUCTS LIST"}>

</AppBarComponent>
<List sx={{ width: '100%', maxWidth: 'unset', bgcolor: 'background.paper' }}>
      {jsonData.length>0 && jsonData.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            {/* <ListItemAvatar>
              <Avatar>
                <img src={item.image} />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText
              primary={item.name}
              secondary={`Name: ${item.productName
              }, Price: ${item.price}, Quantity: ${item.quantity}`}
            />
          </ListItem>
          {index !== jsonData.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
</React.Fragment>
   
  );
}
