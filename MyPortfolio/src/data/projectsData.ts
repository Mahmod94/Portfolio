export type Project = {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    stack: string[];
    image: string;
    highlights: string[];
    screenshots: string[];
};
//  "Contributed to the development of the CodeX website 
//  together with other team members. I worked mainly on 
//  frontend implementation, including sections of the Home
//   page and the About Us page, using React, TypeScript and
//    Material UI. I also worked with simple backend-connected 
//  data and event content fetched from Google Calendar.",
export const projectsData: Project[] = [
    {
        id: "codex-platform",
        title: "CodeX Platform",
        shortDescription:
            "Frontend development of a React-based platform with event integration and reusable UI sections.",
        fullDescription:
            "Contributed to the development of the CodeX website together with other team members. I worked mainly on frontend implementation, including sections of the Home page and the About Us page, using React, TypeScript and Material UI. I also worked with simple backend-connected data and event content fetched from Google Calendar.",
            stack: ["React", "TypeScript", "Material UI", "C#"],
            image: "/images/codeXCalendar.png",
            highlights: [
                "Implemented the Home page vased on provided UI design",
                "Developed the About Us page",
                "Build reusable frontend components using React and Material UI",
                "Connected the frontend to a simple backend service",
                "Worked with event data fetched from Google Calendar and shon on the Home page",
            ],
            screenshots: [
                "/images/codeXCalendar.png",
                "/images/OmCodeX Intro.png",
                "/images/ProcessSection.png",
                "/Images/WhoWeAre.png",
                "/Images/testimintals.png"
            ],
    },
    
    {
        id:"smart-greenhouse",
        title:"Smart Greenhouse",
        shortDescription:
            "Embedded systems project for greenhouse monitoring using sensors, LCD display and control logic.",
        fullDescription:
            "Developed an embedded system for monitoring greenhouse conditions using sensors, an LCD display and automated control logic. The project focused on hardware interaction, sensor handling, and system feedback in embedded C.",
        stack: ["C", "Embedded Systems"],
        image: "/images/test.png",
        highlights: [
            "Implemented temperature monitoring",
            "Added light sensing and control logic",
            "Built an LCD-based interface for system feedback",
            "Worked with embedded C and hardware interaction",
        ],
        screenshots: ["/images/test.png"],
    },
        {
        id:"kernel-os",
        title:"Kernel OS",
        shortDescription:
            "Academic operation systems project focused on low-level programming and core OS concepts.",
        fullDescription:
            "Worked on an academic operationg systems project focued on low-level programming ",
        stack: ["C", "Embedded Systems"],
        image: "/images/test.png",
        highlights: [
            "Implemented temperature monitoring",
            "Added light sensing and control logic",
            "Built an LCD-based interface for system feedback",
            "Worked with embedded C and hardware interactionm",
        ],
        screenshots: ["/images/test.png"],
    },
        {
        id:"game-2048",
        title:" '2048 Game",
        shortDescription:
            "Java implementation",
        fullDescription:
            "",
        stack: ["Java", "OOP", "MVC", "Swing","JUnit"],
        image: "/images/test.png",
        highlights: [
            "Implemented the game logic for title movement and merging",
            "Structured the projec using object-oriented design principles",
            "Worked with sepataion between model, view and controller",
            "Added testing using JUnit for important game behaviors",
        ],
        screenshots: ["/images/test.png"],
    },
]
