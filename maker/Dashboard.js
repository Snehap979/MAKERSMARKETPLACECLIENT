import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import ChartComponent from './Chart';

const jsonData = [
  { name: 'bags', sold: 4, price: 45, quantity: 5 },
  { name: 'purse', sold: 4, price: 450, quantity: 15 },
  { name: 'glass', sold: 3, price: 45, quantity: 5 },
  { name: 'watches', sold: 14, price: 45, quantity: 15 },
  { name: 'tie', sold: 64, price: 456, quantity: 75 },
];

const Dashboard = () => {
  console.log("inside of the dashboard");
  return (
    <Grid container direction="column" style={{padding:16}}>
      <Grid item container justifyContent="space-between" spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card style={{ height: 200 }}>
            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div>
                <Typography variant="h5" component="h2" color="green">
                  Revenue
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ padding: 4 }}>
                  5000
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={{ height: 200 }}>
            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div>
                <Typography variant="h5" component="h2" color="green">
                  Order
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ padding: 4 }}>
                  20
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{padding:8}}>
        <Card style={{ height: 500 }}>
          <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
            <ChartComponent data={jsonData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
