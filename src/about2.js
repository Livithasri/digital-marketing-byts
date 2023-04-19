// import React from "react";
// import "./about1.css"; // Import the CSS file for styling
// import about3 from './about2.jpg';
// const About3 = () => {
//   return (
//     <div className="about-container3">
      
//       <div className="about-images3">
//         {/* <img src="/image1.jpg" alt="Digital Marketing Image 1" /> */}
//         <img src={about3}/>
//       </div>
//       <div className="about-description3">
//         <h2>About Us</h2>
//         <p>
//         Ad-One means No. 1 digital marketing studio (Top Digital Marketing Agency) that acts as an efficient center for all your digital activities. We are the digital & technology experts that help businesses & individuals to design, develop, implement & track result-driven solutions. 
//         </p>
//         <p>
//         We are the trusted name for end-to-end digital marketing, logo designing, and website development in India. We always maintain a real-time track record of your digital strategies and keep informing you prominently at each stage of the execution process.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About3;

import React from "react";
import "./about2.css"; // Import your CSS file here

const About3 = () => {
  return (
    <div className="about-container3">
      <div className="about-description3">
        {/* Content on the left side */}
        <h1>Content Title</h1>
        <p>
        Ad-One means No. 1 digital marketing studio (Top Digital Marketing Agency) that acts as an efficient center for all your digital activities. We are the digital & technology experts that help businesses & individuals to design, develop, implement & track result-driven solutions. 
        </p>
        <p></p>
      </div>
      <div className="about-image3">
        {/* Image on the right side */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOFcR52k0YCV8fpQEiwQ-raTp1af2E0FgaQ&usqp=CAU" alt="Example" />
      </div>
    </div>
  );
};

export default About3;

