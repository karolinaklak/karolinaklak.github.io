// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Karolina",
  middleName: "",
  lastName: "KLAK",
    message: " Simplicity, carried to the extreme, becomes elegance. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/karolinaklak",
    },
    {
      image: "fa-linkedin",
        url: "https://www.linkedin.com/in/karolina-klak-893b14182/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/CSwithKaro/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/karolinaklak.png"),
  imageSize: 375,
  message:
    "My name is Karolina Klak. I’m a self-taught back end developer with a tendency to Python and C# programming. I'm most passionate about data and cybersecurity, and would like to pursue this passion with writing technical articles. In my free time I like working on open source projects, playing music, cultivating myself and traveling around the world.",
    resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "karolinaklak", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/karolinaklak.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/karolinaklak.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "Django", value: 40},
    { name: "C#", value: 60 },
      { name: ".NET", value: 60 },
      {name: "Symfony", value: 40},
    { name: "SQL | NoSQL", value: 75 },
    { name: "Data Structures", value: 65 },
    { name: "React", value: 50 },
    
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 65 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 70 },
      { name: "Creativity", value: 60 },
      {name:"Agility", value : 60}
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for data or back end opportunities as a freelancer ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "contact@klak.pro",
};


const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Back End developer',// Here Add Company Name
      //companylogo: require('../assets/img/dell.png'),
      date: 'March 2022',
    },
    {
      role: '.Net developer',
      //companylogo: require('../assets/img/boeing.png'),
      date: 'June 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };


// later on, we can add experiences here ( after getInTouch or before as u want to) and blog if we decide to full those sections
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};