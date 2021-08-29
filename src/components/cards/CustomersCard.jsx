import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, ButtonGroup} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    height: 360
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function CustomersCard({customer}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            User
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Name: {customer.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Email: {customer.email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Username: {customer.username}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Phone: {customer.phone}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Website: {customer.website}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button size="small">Sort By Email</Button>
            <Button>Sort By City</Button>
            <Button>Sort By Website</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
