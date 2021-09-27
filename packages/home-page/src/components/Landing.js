import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <React.Fragment>
        <h3>This is home page</h3>
        <div style={{margin: '20px'}}>
        <Link to="/property">
          <Button variant="contained" color="primary">
              Go to property page
          </Button>
        </Link>
        </div>
    </React.Fragment>
  );
}
