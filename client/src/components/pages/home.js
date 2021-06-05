import React from "react";
import logo from '../images/crop.png';


const Home = () => {
  return(
    <div>
    <table>
      <tr>
        <td>
     <img src={logo} style={{width: "250px", height: "250px"}} alt="yo"></img>
     </td>
   
   <td>
     <h1>Magdi Tiea</h1>
     <em>Aspiring full-stack web developer from <strong>Windsor, ON</strong></em>
   <br></br>
   <br></br>
   <ul>
     <em>
   Working hard <br></br>
   Learning new things
   Making as much money as possible 
     </em>
   </ul>
   </td>
     </tr>               
     </table>
   
   <hr></hr>
   
   <div id="background">
   <h2>Background</h2>
   <p>
     I was born on April 20, 2000 & came to Canada when I was 3 years old. Ever since I was young Ive learned anything I wanted in life i have to work hard and nothing is given to you. Growing up I was 1 of 5 children. Living day to day and seeing my parents struggle unlocked a deep motivation that doesnt allow me to quit
   </p>
   </div>
   
   <hr></hr>
   
   <div id="education">
     <h2>Education</h2>
   <table>
     <tr>
       <td>
         <strong>
           Grand River Academy🎓 (graduated)
         </strong>
       </td>
       <td>
   <em>
         2018-2019
         </em>
       </td>
     </tr>
     <tr>
       <td>
         <strong>
           University of Prince Edward Island
         </strong>
       </td>
       <td>
         <em>
           2019-2020
         </em>
       </td>
     </tr>
     <tr>
       <td>
         <strong>
           Carelton University Coding Bootcamp
         </strong>
       </td>
       <td>
         <em>
         November 2, 2020- May 15, 2021
         </em>
       </td>
     </tr>
   <tr>
     <td>
       <strong>
         Udemy 2021 web development course
       </strong>
     </td>
     <td>
       <em>
       June 1, 2021 - Present
       </em>
     </td>
   </tr>
   </table>
   </div>
   
   <hr></hr>
   <div id="skills">
   <h2>Skills</h2>
   
   <table>
     <tr>
       <td>
       HTML
       </td>
       <td>⭐️⭐️⭐️⭐️⭐️</td>
       <td>CSS</td>
       <td>⭐️⭐️⭐️⭐️⭐️</td>
     </tr>
     <tr>
       <td>
         JAVASCRIPT
       </td>
       <td>⭐️⭐️⭐️⭐️</td>
       <td>
         REACT
       </td>
       <td>⭐️⭐️⭐️</td>
     </tr>
   </table>
   </div>
   
   <hr></hr>
   
   <h1>click here for my resume (link to resume)</h1>
   
   
   
   
   
   
   
   
   </div> 
  )
}