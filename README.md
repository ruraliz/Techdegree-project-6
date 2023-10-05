# Techdegree-project-6
Portfolio site that showcases my Treehouse Techdegree projects
### Additional styling.

#### Styles changes 
- Added more styling to the about-bio class paragraph tag. 
- Added a button to return to the home page to the error and page-not-found pug and added styles to it.
- removed bullet points from the li that lists skills in the about pug file. 
 ```css
 .about-bio p {
    font-size: 15px;
    padding-top: 40px;
    color: #372d08; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 14px; 
    line-height: 24px; 
    margin: 0 0 24px; 
    text-align: justify; 
    text-justify: inter-word; 
 }
.button-primary-small{
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #555;
  }
  .skills-contact-box.box li {
    list-style: none;
  }
 ```
 #### Background changes.
 - Added background image to bottom of the about page to add more color.
 - Added background image to index page to add more color.
 ```css
  .portfolio-about{
    background-image:url('/static/images/footer.jpg');
  }
  .portfolio-intro {
    max-width: 1200px;
    padding: 40px 50px 30px;
    background-image:url('/static/images/back.jpeg')
  }
 ```
 #### Addtional images.
 - Added images of list of skills instead of words to add more styling to the about page. 
 ```pug
ul  
          li
            img(alt="javaScript" src="https://camo.githubusercontent.com/89ad0ced586939c4927e6d7a6a1c1f834aeff76fdc852d92fdf9504d65851cf8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d696d706f7274616e74" data-canonical-src="https://img.shields.io/badge/-JavaScript-important" style="max-width: 100%;")
          li 
            img(alt="html5" src="https://camo.githubusercontent.com/0c3a16a22ae058cfe38a06dc9ea16404cf006409262f547c9ccfa3ec8b30f71e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f7374796c653d666c61742d737175617265266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;")
          li 

            img(alt="Css3" src="https://camo.githubusercontent.com/290cf298e736fbf4168011a64babd1c88d21e27a03ea78d6523376d08c9124a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d435353332d677265656e" data-canonical-src="https://img.shields.io/badge/-CSS3-green" style="max-width: 100%;")
          li
            img(alt="MongoDB" src="https://camo.githubusercontent.com/8525e7e6900fc4c5546b0442f8a2f187b802e9f40d431ac7394d2c1509234ad9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d6f6e676f44422d3133616135323f7374796c653d666c61742d737175617265266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&amp;logo=mongodb&amp;logoColor=white" style="max-width: 100%;")
          li
            img(alt="postgreSQL" src="https://camo.githubusercontent.com/340d88aa691e578c35306459f9bfb4831ca4ed7d055dc293efd3de939f9818af/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d506f737467726553514c2d79656c6c6f77677265656e" data-canonical-src="https://img.shields.io/badge/-PostgreSQL-yellowgreen" style="max-width: 100%;")
          li
            img(alt="Nodejs" src="https://camo.githubusercontent.com/425d14e7ceaf18d8bb8e9bf17cd1a270c928c888b9ee4abe84a3bc8a5b3122fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6f64656a732d3433383533643f7374796c653d666c61742d737175617265266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&amp;logo=Node.js&amp;logoColor=white" style="max-width: 100%;")
          li 
            img(src='/static/images/github-mark.png' width="40px")
          li
            img(src='/static/images/Visual_Studio_Code_1.18_icon.svg' width='40px')
 ```

