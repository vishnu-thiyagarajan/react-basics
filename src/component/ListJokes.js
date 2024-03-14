import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export default function ListJokes({data}) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'blue', color:'white' }}>
      {data?.map((joke)=>{
        return <>
        <ListItem alignItems="flex-start">
        <ListItemText
          primary={joke.setup}
          secondary={
            <p style={{color:'white'}}>
              {joke.punchline}
            </p>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{borderColor:'white'}} />
</>
      })
    }
    </List>
  );
}