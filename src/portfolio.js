/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Karthik Mohan",
  title: "Hi all, I'm Karthik",
  subTitle: emoji(
    "A computer science engineer with experience as a mobile/software application developer and information security researcher in various companies and institutes 👨🏾‍💻. Interested in building utility resources to make life simpler. I'm fascinated by modern and evolving technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/karthikmohan",
  linkedin: "https://www.linkedin.com/in/karthik-mohan-/",
  gmail: "bablu1995@gmail.com",
  steam:"https://steamcommunity.com/id/ozias/",
  reddit:"https://www.reddit.com/user/MasterPrestigeNuts/",
  twitter:"https://twitter.com/karthikmo_han",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do 💻",
  subTitle: "ENTHUSIASTIC DEVELOPER, WHO WANTS TO EXPLORE UPCOMING TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."),
    emoji("⚡ Heavy focus on Mobile Application Development, Custom ROM development and Information Security Research."),
    emoji("⚡ Integration of upcoming tech. such as hyper-ledger and blockchain services."),
    emoji("⚡ Fluency in Cloud Computing Services such as Firebase/ AWS / Digital Ocean.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "etheruem",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 4 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Application Development / UI-UX Design",  //Insert stack or technology you have experience in
      progressPercentage: "92%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Information Security Research",
      progressPercentage: "75%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Information Security Research, Intern",  
      company: "IIT Bombay",
      companylogo: require("./assets/images/iitLogo.png").default,
      date: "July 2019 – May 2020",
      desc: "This project was a part of my M. Tech. Dissertation. Understanding the concepts of Blockchain, Ethereum and Smart Contracts and implementing them on medical databases. Especially focusing on the privacy features of the above mentioned concepts.",
      descBullets: [
        "Additional Exposure to Data Analysis and Categorisation using R"
      ]
    },
    {
      role: "Mobile Application Developer",   
      company: "ADmyBRAND",
      companylogo: require("./assets/images/admybrandLogo.png").default,
      date: "March 2016 – May 2018",
      desc: "Worked as an App Developer, gained much experience from the start-up work culture. Specialising in Android App development and its UI/UX designing.",
      descBullets: [
        "Coordinated among several teams in building a plethora of apps."
      ]
    },
    {
      role: "Research And Development Engineer, Intern",  
      company: "AIST, Japan",
      companylogo: require("./assets/images/aistLogo.png").default,
      date: "June 2017 – Aug 2017",
      desc: "Dealing in Research, Informatics and Development (Both in Computer Science and Medical Science Fields). Use of automation technology, deep understanding from research specialists and co-working environments all were part of this internship."
    },
{
      role: "Software Engineer, Intern",  
      company: "NRSC, ISRO",
      companylogo: require("./assets/images/isroLogo.jpg").default,
      date: "Dec 2016 – Feb 2017",
      desc: "At ISRO, I worked on data analysis and software development. Creating software to compile, analyse, and translate data into different formats that each software can understand. I spent a lot of time working with PostgreSQL and R. This was an internal project which was aimed at providing a unified platform for all the departments involved."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Education And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "VIT University, Vellore",
      subtitle: "Masters in Computer Science and Engineering (Specialisation in Information Security)",
      image: require("./assets/images/vitLogo.png").default,
      footerLink: [
	{ name: "Graduation (July, 2020)"},
        { name: "University Rank Holder"},
        { name: "Merit Scholarship" },
	{ name: "Research Paper Publication" }
      ]
    },
    {
      title: "SRM University, Delhi NCR",
      subtitle: "Bachelors in Computer Science and Engineering",
      image: require("./assets/images/srmLogo.png").default,
      footerLink: [	{ name: "Graduation (June, 2018)"},{ name: "Chancellor Scholarship"},
	{ name: "C / C++ Certifications"}, { name: "Java Certifications"}]
    },

    {
      title: "Banyan Tree Schools",
      subtitle: "High School (Science, Mathematics and Computer Science)",
      image: require("./assets/images/btsLogo.png").default,
      footerLink: [
	{ name: "Graduation (July, 2013)"},
        { name: "Sports Captain"}, { name: "Proficiency in Arts"}, { name: "Proficiency in Computer Science"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs Which I Liked 📝",
  subtitle:
    "With Love for Developing cool stuff, I like to read and develop my knowledge. So here are some of the blogs which i thought were worth sharing.",

  blogs: [
    {
      url: "https://medium.com/edtech-trends/covid-19-accelerating-vr-adoption-e95c9c44c9a9",
      title: "COVID-19 Accelerating VR Adoption",
      description: "The Coronavirus pandemic has become a catalyst for us to embrace immersive technologies in our “new normal” workflow."
    },
    {
      url: "https://onezero.medium.com/tech-savvy-readers-are-designing-their-own-better-versions-of-goodreads-aac96934d79",
      title: "Tech-Savvy Readers Are Designing Their Own, Better Versions of Goodreads",
      description: "The dream of a better internet for book lovers is emerging on platforms like Glitch"
    },
    {
      url: "https://medium.com/datadriveninvestor/why-tesla-is-going-to-be-my-next-15-year-investment-3f3d84381ca9",
      title: "Why Tesla is Going to be My Next 15-Year Investment",
      description: "And how Elon Musk keeps all competition 10 years behind."
    },
    {
      url: "https://medium.com/predict/the-future-is-more-terrifying-than-we-can-imagine-ceb6403765b1",
      title: "The Future is More Terrifying Than We Can Imagine",
      description: "We have no idea of the horrors that are waiting for us."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9945730914",
  email_address: "bablu1995@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "karthikmo_han", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
