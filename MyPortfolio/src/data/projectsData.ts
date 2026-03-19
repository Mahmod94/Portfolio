export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  image: string;
  highlights: string[];
  screenshots: string[];

  whatIBuilt?: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  outcome?: string;

  architectureImage?: string;
  architectureDescription?: string;
};


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
      "Implemented the Home page based on provided UI design",
      "Developed the About Us page",
      "Built reusable frontend components using React and Material UI",
      "Connected the frontend to a simple backend service",
      "Worked with event data fetched from Google Calendar and shown on the Home page",
    ],
    screenshots: [
      "/images/codeXCalendar.png",
      "/images/OmCodeX Intro.png",
      "/images/ProcessSection.png",
      "/images/WhoWeAre.png",
      "/images/testimonials.png",
    ],
    whatIBuilt: [
      "Implemented reusable UI sections for the Home page and About Us page",
      "Worked with frontend integration for backend-connected event content",
      "Translated provided designs into React components using Material UI",
    ],
    technicalHighlights: [
      "Reusable component structure",
      "Frontend data integration",
      "Responsive section-based layout",
    ],
    outcome:
      "The project strengthened my experience in collaborative frontend development, design implementation, and React component structuring.",
  },

  {
    id: "smart-greenhouse",
    title: "Smart Greenhouse",
    shortDescription:
      "Embedded systems project for automated greenhouse monitoring and control using sensors, LCD interface and event-driven logic.",
    fullDescription:
      "Developed a microcontroller-based smart greenhouse system in C on the SAM3X8E ARM Cortex-M3. The system continuously monitors temperature and light conditions, controls shading and artificial lighting, logs environmental data for historical review, and provides a keypad/LCD interface for user configuration and supervision.",
    stack: ["C", "Embedded Systems", "ARM Cortex-M3", "Sensors", "LCD", "Interrupts"],
    image: "/images/test.png",
    highlights: [
      "Implemented temperature monitoring using a DS18B20 sensor",
      "Added light sensing and automated control of LED lighting and servo-based shading",
      "Built a software-based real-time clock using SysTick interrupts",
      "Created a keypad and graphical LCD interface for configuration and monitoring",
      "Implemented 7-day temperature logging with alarms and fast simulation mode",
    ],
    screenshots: ["/images/test.png"],
    whatIBuilt: [
      "Built the system in embedded C on the SAM3X8E microcontroller",
      "Designed sensor-based monitoring for temperature and light conditions",
      "Implemented actuator control for LED lighting and servo-based shading",
      "Created a menu-driven LCD and keypad interface",
      "Added historical logging and user-configurable alarm behavior",
    ],
    technicalHighlights: [
      "Interrupt-driven timing using SysTick and timer counters",
      "Event-based coordination using second, minute, hour and day flags",
      "Dynamic record storage using a linked list",
      "Rolling 7-day temperature statistics",
      "Low-level register-based hardware control",
      "Fast simulation mode for accelerated testing",
    ],
    challenges: [
      "Synchronizing all periodic system tasks in both normal mode and fast simulation mode",
      "Managing limited embedded memory while storing temperature history",
      "Handling keypad debounce and stable user input",
      "Keeping LCD rendering stable during repeated updates",
      "Structuring the software into clear and maintainable modules",
    ],
    outcome:
      "The final system was able to autonomously monitor greenhouse conditions, control lighting and shading, trigger alarms when temperature limits were exceeded, and store historical data for user review. The project strengthened my experience in embedded C, interrupt-driven design and low-level hardware interaction.",
  },

{
  id: "kernel-os",
  title: "Kernel OS",
  shortDescription:
    "Academic operating systems project focused on scheduling, task coordination and low-level system behavior.",
  fullDescription:
    "Worked on an academic operating systems project focused on low-level programming in C, including task scheduling, synchronization concepts and internal system structures such as ready lists, waiting lists, timer handling and mailbox-based communication.",
  stack: ["C", "Operating Systems", "Low-Level Programming"],
  image: "/images/flow-chart-diagram.png",
  highlights: [
    "Worked with low-level system programming in C",
    "Explored task scheduling and kernel-related data structures",
    "Reasoned about how the scheduler interacts with ready, waiting and timer lists",
    "Worked with input/output coordination through tasks and LED behavior",
    "Strengthened understanding of software-hardware interaction in system-level code",
  ],
  screenshots: [],
  whatIBuilt: [
    "Implemented and analyzed core operating system concepts in C",
    "Worked with task coordination and scheduler-related structures",
    "Explored how events, timing and task state transitions affect system behavior",
  ],
  technicalHighlights: [
    "Scheduler-centered design",
    "Ready list, waiting list and timer list coordination",
    "Mailbox-based communication concepts",
    "SysTick-driven timing behavior",
    "Task-based output handling",
  ],
  challenges: [
    "Understanding how multiple internal kernel structures interact during execution",
    "Reasoning about task transitions between ready, waiting and timed states",
    "Debugging low-level behavior without high-level abstractions",
  ],
  outcome:
    "The project strengthened my understanding of operating system internals, scheduling logic and system-level programming in C.",
  architectureImage: "/images/flow-chart-diagram.png",
  architectureDescription:
    "The system is centered around a scheduler that coordinates multiple tasks using internal kernel structures such as the ready list, waiting list, timer list and mailbox. Input from the pushbutton and timing events from the SysTick timer affect task execution, while task behavior is reflected through LED outputs.",
},

  {
    id: "game-2048",
    title: "2048 Game",
    shortDescription:
      "Java implementation of 2048 with focus on OOP, MVC structure and testing.",
    fullDescription:
      "Built a Java version of the 2048 game with focus on modular design, separation of concerns and game logic testing.",
    stack: ["Java", "OOP", "MVC", "Swing", "JUnit"],
    image: "/images/test.png",
    highlights: [
      "Implemented the game logic for tile movement and merging",
      "Structured the project using object-oriented design principles",
      "Worked with separation between model, view and controller",
      "Added JUnit tests for important game behaviors",
    ],
    screenshots: ["/images/test.png"],
  },
];