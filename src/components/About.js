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
       <h4>Know me better</h4>
         <a href="https://nz.linkedin.com/in/ahmed-shaaban-4b4546105"
           target="_blank">
           <i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
         </a>
         <a href="https://github.com/AhmedShab/"
           target="_blank">
           <i className="fa fa-github-square fa-4x" aria-hidden="true"></i>
         </a>
         <a href="https://twitter.com/A_Shab_"
           target="_blank">
           <i className="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
         </a>
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
         <img className=" img-responsive logo thumbnail" width="80px" height="100px" src="../images/JavaScript.png"></img>
         <img className="logo thumbnail" width="100px" height="100px" src="../images/HTML5_Logo_512.png"></img>
         <img className= "logo thumbnail" width="80px" height="100px" src="../images/css3.png"></img>
         <img className="logo thumbnail" width="100px" height="100px" src="../images/node.png"></img>
         <img className="logo thumbnail" width="100px" height="100px" src="../images/sass-logo.png"></img>
         <img className="logo thumbnail" width="100px" height="100px" src="../images/jQurery.gif"></img>
         <img className="logo thumbnail" width="120px" height="120px" src="../images/es6-logo.png"></img>
         <img className="logo thumbnail" width="100px" height="100px" src="../images/react-logo.png"></img>
         <img className="logo thumbnail" width="130px" height="100px" src="../images/bootstrap_logo.png"></img>

       </div>
       <div className="col-md-6">
         <h1>Tools</h1>
          <img className=" img-responsive logo thumbnail" width="200px" height="80px" src="../images/mobile-first.png"></img>
          <img className=" img-responsive logo thumbnail" width="220px" height="60px" src="../images/trello-logo-blue.png"></img>
          <img className=" img-responsive logo thumbnail" width="220px" height="100px" src="../images/balsamiq-logo-1.png"></img>
          <img className=" img-responsive logo thumbnail" width="100px" height="100px" src="../images/aglie2.png"></img>
          <img className=" img-responsive logo thumbnail" width="200px" height="70px" src="../images/GitHub-Logo.png"></img>

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
