import React, {
 Component
}
from 'react';
import FontAwesome from 'react-fontawesome';

import NavLink from './NavLink';

export default class About extends Component {
 render() {
  return (
  < div className = "row" >
    {/* Bio coloumn */}
   < div className = " row bio col-md-3" >
      <div className="row">
      <div className="BioImage thumbnail">
        <img src="../images/echo.png" alt="..."></img>
      </div>
      <div className="info">
        < h1 > Hello! < /h1 > <br></br >
        < h4 > My name is Ahmed. I am a full stack web developer. Making web applications is my passion. I enjoy my work and always looking forward to create new projects
      </h4>
      </div>
     </div>
     <div className="row">

     </div>

   </div>
     {/* Main coloumn */}
   <div className=" col-md-8">
       {/* Projects row */}
     <div className=" main row">
       <h1> Check my Projects</h1>
       <div className="col-md-4">
         <div className="thumbnail">
           <a href="https://echo-project.herokuapp.com/"
              target="_blank">
          <img src="../images/echo.png" alt="..."></img>
          </a>
          <p>...</p>
         </div>
       </div>

       <div className="col-md-4">
         <div className="thumbnail">
          <a href="https://audioeats.herokuapp.com/"
              target="_blank">
              <img src="../images/foodBytes.png" alt="..."></img>
          </a>
            <p>...</p>
         </div>
       </div>
       <div className="col-md-4">
         <div className="thumbnail">
           <a href="https://rails-my-blog.herokuapp.com/"
              target="_blank">
              <img src="../images/blog.png" alt="..."></img>
           </a>
           <p>...</p>
         </div>
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
