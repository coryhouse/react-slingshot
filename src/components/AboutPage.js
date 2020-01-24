import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';

import {Button} from '@material-ui/core';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <p>
        This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
        starter kit</a>.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default AboutPage;
