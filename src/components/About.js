import React, {
 Component
}
from 'react';
import FontAwesome from 'react-fontawesome';

import NavLink from './NavLink';

export default class About extends Component {
 render() {
  return ( < div className = "row" >
    {/* Bio coloumn */}
   < div className = " row bio col-md-2" >
     < h1 > Hello! < /h1 > <br></br >
     < h4 > My name is Ahmed. I am a full stack web developer. Making web applications is my passion. I enjoy my work and always looking forward to create new projects
   </h4>
   < /div >
     {/* Main coloumn */}
   <div className="main col-md-8">
       {/* Projects row */}
     <div className="row">
       <div className="col-md-4">
         <div className="thumbnail">
          <img src="..." alt="..."></img>
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
         </div>
       </div>

       <div className="col-md-4">
         <p> Hello</p>
       </div>
       <div className="col-md-4">
         <p> Hello</p>
       </div>
     </div>
       {/* Tools coloumn */}
     <div className="row">
       <h1 className="text-center">Languages, Frameworks and Tools</h1>
       <div className="col-md-6">
         <h1>logos</h1>
       </div>
       <div className="col-md-6">
         <h1>Tools</h1>
       </div>

     </div>
     < NavLink className = "next"
     to = "/work" >
     < FontAwesome name = 'a fa-arrow-circle-right'
     size = '3x' / >
     < /NavLink>
   </div>

   < /div >
  );
 }
}
