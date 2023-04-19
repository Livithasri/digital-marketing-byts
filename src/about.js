// import React from "react";

// const About = () => {
//   return <div>about</div>;
// };
// export default About;

// import React from 'react';
 import aboutImage from './about1.jpg'; 
 import aboutImage1 from './about.jpg';// Import the image file
 import aboutImage2 from './images.jpg';
 import aboutImage3 from './images (1).jpg';
// import './About.css'; // Import the CSS file

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1 className="about-title">About Us</h1>
//       <img src={aboutImage} alt="About Us" className="about-image" /> {/* Use the imported image */}
//       <p className="about-text">Welcome to our digital marketing website! We are a team of experts who specialize in helping businesses grow their online presence.</p>
//       <p className="about-text">Our services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content creation, and more. We work with businesses of all sizes, from startups to large corporations, and help them achieve their marketing goals.</p>
//       <p className="about-text">Our mission is to provide exceptional digital marketing services that drive results for our clients. We stay up-to-date with the latest industry trends and use cutting-edge strategies to deliver effective marketing campaigns.</p>
//       <p className="about-text">Contact us today to learn more about how we can help your business succeed online!</p>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import "./About.css"; // Import CSS file for styling

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1 className="about-heading">Welcome to Our Digital Marketing Agency</h1>
//       <div className="about-content-container">
//         <div className="about-image-container">
//           <img src={aboutImage} alt="Digital Marketing Team" className="about-image" />
//           <img src={aboutImage1} alt="Digital Marketing Strategies" className="about-image" />
//         </div>
//         <div className="about-description">
//           <p>
//             At our digital marketing agency, we are passionate about helping businesses grow
//             their online presence. Our team of experienced marketers and strategists are
//             dedicated to providing top-notch digital marketing services tailored to meet
//             the unique needs of each of our clients.
//           </p>
//           <p>
//             With our expertise in SEO, SEM, social media marketing, content marketing, and
//             more, we can help your business generate more leads, increase brand awareness,
//             and drive revenue growth. Our data-driven approach ensures that we are constantly
//             optimizing our strategies to deliver the best results for your business.
//           </p>
//           <p>
//             Whether you're a small startup or a large enterprise, we have the skills and
//             knowledge to create a digital marketing campaign that aligns with your business
//             goals and delivers measurable results. Contact us today to learn more about how
//             we can help your business succeed in the online world.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css"; // Import CSS file for styling
import About2 from './about1';
import About3 from './about2';



const About = () => {
  return (
    
    <div className="about-container">
      <h1 className="about-heading">Welcome to Our Digital Marketing Agency</h1>
      {/* <div class="fi"> */}
      <img src='https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1520x800.webp' class="fi"/>
      {/* </div> */}
      
      <div className="about-content-container">
        <div className="about-description">
          <p>
            At our digital marketing agency, we are passionate about helping businesses grow
            their online presence. Our team of experienced marketers and strategists are
            dedicated to providing top-notch digital marketing services tailored to meet
            the unique needs of each of our clients.
          </p>
          <p>
            With our expertise in SEO, SEM, social media marketing, content marketing, and
            more, we can help your business generate more leads, increase brand awareness,
            and drive revenue growth. Our data-driven approach ensures that we are constantly
            optimizing our strategies to deliver the best results for your business.
          </p>
          <p>
            Whether you're a small startup or a large enterprise, we have the skills and
            knowledge to create a digital marketing campaign that aligns with your business
            goals and delivers measurable results. Contact us today to learn more about how
            we can help your business succeed in the online world.
          </p>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="Digital Marketing Team" className="about-image about-image-left" />
          <img src={aboutImage1} alt="Digital Marketing Strategies" className="about-image about-image-right" />
          <img src={aboutImage2} alt="Digital Marketing Campaigns" className="about-image about-image-left" />
          <img src={aboutImage3} alt="Digital Marketing Analytics" className="about-image about-image-right" />
        </div>
      </div>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <About2/>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <About3/>
    </div>
    
    
  );
};

export default About;


// import React from "react";
// import "./About.css"; // Import the CSS file for styling
// import About2 from './about1';

// const About = () => {
//   return (
//     <>
//     <div className="about-container">
//        <h1 className="about-heading">Welcome to Our Digital Marketing Agency</h1>
//        <div className="about-content-container">
//          <div className="about-description">
//            <p>
//              At our digital marketing agency, we are passionate about helping businesses grow
//              their online presence. Our team of experienced marketers and strategists are
//              dedicated to providing top-notch digital marketing services tailored to meet
//              the unique needs of each of our clients.
//            </p>
//            <p>
//              With our expertise in SEO, SEM, social media marketing, content marketing, and
//              more, we can help your business generate more leads, increase brand awareness,
//              and drive revenue growth. Our data-driven approach ensures that we are constantly
//           optimizing our strategies to deliver the best results for your business          </p>
//            <p>
//              Whether you're a small startup or a large enterprise, we have the skills and
//              knowledge to create a digital marketing campaign that aligns with your business
//              goals and delivers measurable results. Contact us today to learn more about how
//              we can help your business succeed in the online world.
//            </p>
//         </div>
//          <div className="about-image-container">
//            <img src={aboutImage} alt="Digital Marketing Team" className="about-image about-image-left" />
//            <img src={aboutImage1} alt="Digital Marketing Strategies" className="about-image about-image-right" />
//            <img src={aboutImage2} alt="Digital Marketing Campaigns" className="about-image about-image-left" />
//            <img src={aboutImage3} alt="Digital Marketing Analytics" className="about-image about-image-right" />
//          </div>
//        </div>
    
//    </div>
//    <About2/> 
    {/* <div className="about-container1">
      <div className="about-description1">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque augue a velit dignissim, at aliquet mi venenatis.
          Suspendisse vitae volutpat mauris, et rutrum mauris. Nunc feugiat
          libero a est ullamcorper tincidunt. Nam eget arcu nulla. Quisque
          feugiat, justo id dignissim aliquam, dui felis feugiat odio, vel
          cursus erat tortor in ligula. Sed interdum auctor nisl a bibendum.
        </p>
        <p>
          Integer accumsan lectus tortor, non ultricies orci tristique et.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Ut venenatis augue quam, vel feugiat urna
          congue in. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Aliquam in nibh a purus venenatis
          malesuada. Vivamus maximus nunc et justo laoreet dapibus. Nunc
          elementum sollicitudin enim, id ullamcorper mi tristique at.
        </p>
      </div>
      <div className="about-images1">
        <img src="/image1.jpg" alt="Digital Marketing Image 1" />
        <img src="/image2.jpg" alt="Digital Marketing Image 2" />
      </div>
    </div> */}
//     </>
//   );
// };

// export default About;
