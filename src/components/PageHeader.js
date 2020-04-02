import React from 'react';
import plants1 from '../images/plants1.jpg';
import plants2 from '../images/plants2.jpg';

const PageHeader = (props) => (
        <div className="PageHeader">
          <img className="HeaderImage" src={plants1} alt="plants"/>  
          <h1>This is my blog</h1>
          <img className="HeaderImage" src={plants2} alt="plants"/> 
          </div>
          )

  export default PageHeader