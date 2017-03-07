import React from 'react';
import { Link, IndexLink } from 'react-router';


const HomePage=()=>(

<div>
   <header className="jumbotron hero-spacer">
          <h1>A Warm Welcome!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
            eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat
            nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <p>
            <Link className="btn btn-primary btn-large" to="/"> Call to action!</Link>
          </p>
        </header>
        <hr/>
       
</div>
);

export default HomePage;