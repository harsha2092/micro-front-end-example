import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <React.Fragment>
        <h3>This is property page</h3>
        <div style={{width:'500px',margin: '20px'}}>
          <Link to="/">
            <Button variant="contained" color="primary">
                Go Back to home page
            </Button>
          </Link>
        </div>
        <div style={{width:'500px', marginLeft: '20px'}}>
          <Link to="/book">
            <Button variant="contained" color="primary">
                Go to Bookings page
            </Button>
          </Link>
        </div>
    </React.Fragment>
  );
}
