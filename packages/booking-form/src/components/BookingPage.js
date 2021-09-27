import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <React.Fragment>
        <h3>
          This is Booking page
        </h3>
        <div style={{width:'500px',margin: '20px'}}>
          <Link to="/property">
            <Button variant="contained" color="primary">
                Go Back to property page
            </Button>
          </Link>
        </div>
        
    </React.Fragment>
  );
}
