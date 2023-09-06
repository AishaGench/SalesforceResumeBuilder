import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import aisha from '@salesforce/resourceUrl/aisha'
export const PROFILE_IMAGE = aisha

export const SOCIAL_LINKS=[
    {
        type: "linkedin",
        label: "linkedin/aisha-gench",
        link: "https://www.linkedin.com/in/aisha-gench/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/aishagench",
        link: "https://www.salesforce.com/trailblazer/aishagench",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },
    {
        type: "github",
        label: "github/AishaGench",
        link: "https://github.com/AishaGench",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
   
]
export const USER_DETAILS={
    NAME:'Aisha Gench',
    ROLE:'Salesforce Developer',
    EMAIL:'aisha.gench@gmail.com',
    PHONE:'832 552 0102'
}
export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "I have 5+ years in the IT industry and experience as a Salesforce Developer. I've been very closely involved in the entire salesforce development lifecycle within the CI/CD pipeline, application design patterns, and integration patterns. When it comes to the tools, I fully take advantage of triggers, Apex classes, integration services, controllers, as well as Aura framework and lightning web components. I am also very much hands-on in the integration part of Salesforce, using Rest and Soap APIs. Highly skilled and dedicated software professional with expertise in object-oriented programming (Java) and test automation frameworks. Proficient in software development methodologies, particularly Agile/Scrum, with designing, developing, and executing automation scripts. Dedicated, highly motivated, and analytical Problem-Solver. A strong believer in teamwork, and collaboration with a cross-functional team mindset.",
   
}
export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "MMCT Tech",
            DURATION: "December 2022 - Present",
            DESCRIPTION:
                "",
            DESCRIPTION_POINTS: [
                "Developed and maintained Apex Triggers and Asynchronous Apex classes to automate business processes and enhance system functionality",
                "Created Lightning Web Components (LWC) to build intuitive and responsive user interfaces.",
                "Designed and implemented automation processes using Process Builder and Flow Builder to streamline business workflows.",
                "Integrated external systems with Salesforce using Web Services, SOAP, and REST APIs.",
                "Configured salesforce.com by creating custom objects and fields, and implementing validation rules to enforce data integrity.",
                "Established various relationships like Master Detail, Lookup, and Many-to-Many to establish data dependencies.",
                "Utilized Flows and Layouts to improve user experience and simplify complex business processes.",
                "Created and customized Reports and Dashboards to provide real-time insights to stakeholders.",
                "Used Data Loader for insert, update, and bulk import or export of data from Salesforce.com objects. Used it to read, extract and load data from comma-separated values (CSV) files.",
                "Experience in SFDC Development implementing the APEX Classes, APEX Triggers, Force.com, SOQL SOSL, Aura.",
                "Implemented agile management ideals and participated in sprint reviews and daily Scrum meetings to align with the Agile practices of the organization.",
                "Excellent communication and inter-personal skills, accustomed to work in both large and small team environments.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Lightning Web Components (LWC)",
                    "APEX Classes",
                    "APEX Triggers",
                    "Process Builder",
                    "Flow Builder",
                    "Process Builder",
                    "Salesforce.com",
                    "SOQL",
                    "Custom Object",
                    "Fields",
                    "Jira",
                    "Javascript",
                ]
            },
        },
        {
            ROLE: "Test Automation Engineer",
            COMPANY_NAME: "Victoria’s Secret",
            DURATION: "April 2022- November 2022",
            DESCRIPTION:
                "Automated the functional testing (85%) of the web application, attended daily Agile Scrum meetings and performed UI, and Database testing.",
            DESCRIPTION_POINTS: [
                "Participated in the development of an automation framework with Cucumber, Gherkin, Junit, and Selenium WebDriver.",
                "Built testing framework by Maven and automated the process thru Bamboo into CI/CD pipeline.",
                "Developed reusable codes and executed test scripts using Cucumber as an automation tool with Java on IntelliJ.",
                "Worked on BDD by incorporating Object Oriented Programming to automate Victoria’s Secret functional test cases.",
                "Reported defects using JIRA and interacted with the development team to resolve any defects.",
                "Achieved frequent commits into version control systems such as Bitbucket via push, pull, and rebase.",
                "Involved in Scrum meetings and Agile activities such as Stand-up, Planning, Grooming, and Retrospective.",
                "Contributed to analyzing, planning, finalizing, and reporting on project schedules and timelines on Jira and Confluence.",
                "Well-recognized by team leads in order to build strategies in plan, designing, and developing QA test cases.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Java",
                    "Selenium WebDriver,",
                    "Cucumber",
                    "Maven",
                    "JUnit",
                    "Bit Bucket",
                    "Sauce Labs",
                    "JDBC",
                    "TestNG",
                    "Postman",
                    "Bamboo",
                    "Jira",
                    "Git",
                    "Figma",
                    "Confluence",
                ]
            },
        },
        {
            ROLE: "Test Automation Engineer",
            COMPANY_NAME: "BookIT & 4Stay",
            DURATION: "April 2018 – March 2022",
            DESCRIPTION:
                "Constructed and initiated testing framework in accordance with the project’s web application service along with analytical approach and involved in UI and API testing.",
            DESCRIPTION_POINTS: [
                "Created a Data-Driven testing framework from scratch involving Selenium WebDriver, TestNG, and Maven using Page Object Model.",
                "Involved in functional testing using Cucumber and JUnit based on Behavior Driven Development (BDD) with POM.",
                "Developed reusable codes and executed test scripts using Selenium as an automation tool with Java on IntelliJ.",
                "Executed automated tests as a CI/CD pipeline by setting up the building tools such as Maven and Jenkins.",
                "Tracked code changes for project development purposes on Git and GitHub version control systems.",
                "Integrated Java Database Connectivity (JDBC) to PostgreSQL and verify the data by SQL queries.",
                "Written detailed test strategies, reports, and comprehensive quality assurance documents on Confluence.",
                "Participated in daily Scrum meetings including sprint planning and reviews in an Agile environment.",
                "Reported defects using JIRA and interacted with the development team to resolve any defects.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Java",
                    "Selenium WebDriver",
                    "Cucumber",
                    "Maven",
                    "JUnit",
                    "Git",
                    "GitHub",
                    "Postman",
                    "Jenkins",
                    "Confluence",
                    "Jira",
                    "SQL",
                    "Agile"
                ]
            },
        }
    ]
}
export const EDUCATION_DATA={
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Turkish Language and Literature",
            UNIVERSITY_NAME: "University of Prishtina BSc",
            DURATION: "2008 - 2012",
        },
        {
            NAME: "Full-Stack Automation Testing",
            UNIVERSITY_NAME: "Cybertek Coding School",
        },
        {
            NAME: "Full-Stack Web Dev",
            UNIVERSITY_NAME: "Softinnovas Coding School",
        }
    ]
}
export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Certified Platform Developer I",
        },
        {
            NAME: "Salesforce Admin Certification",
        }
    ]
}
export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "Professional",
        },
        {
            NAME: "Turkish",
            LEVEL: "Native",
        }
    ]
}
export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "CRM",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "50" },
            ],
        },
        {
            HEADING: "QA",
            SKILLS_LIST: [
                { NAME: "Java", LEVEL: "75" },
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: 
        [
            "Git",
            "Jira",
            "Confluence",
            "Agile"
        ]
    }
    
}
export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Cooking", "Reading", "Craft"]
}

