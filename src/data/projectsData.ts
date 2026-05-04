export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  image ? : string;
  highlights: string[];
  screenshots?: string[];

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
      "Frontend development in a team environment for a React platform with reusable UI sections, design implementation, and backend-connected event content.",
    fullDescription:
      "Contributed to the development of the CodeX platform as part of a team project. I worked mainly on frontend implementation using React, TypeScript, and Material UI, building sections for the Home page and About Us page based on provided designs. I also worked with backend-connected event data displayed from Google Calendar and implemented reusable UI sections including partner/logo presentation.",
    stack: ["React", "TypeScript", "Material UI", "C#", "Azure DevOps"],
    image: "/images/codeXCalendar.png",
    highlights: [
      "Implemented major frontend sections for the Home page and About Us page",
      "Translated provided UI designs into reusable React components",
      "Worked with backend-connected event data shown in the frontend",
      "Built reusable presentation sections using Material UI",
      "Integrated partner/company logos into the interface",
      "Collaborated in an existing team codebase using Git and Azure DevOps"
    ],
    screenshots: [
      "/images/codeXCalendar.png",
      "/images/OmCodeX Intro.png",
      "/images/ProcessSection.png",
    ],
    whatIBuilt: [
      "Built reusable UI sections for the Home page and About Us page",
      "Implemented frontend presentation of event content from a backend service",
      "Converted design ideas into structured React components",
      "Created a partner showcase section with integrated SVG/logo-based visuals"
    ],
    technicalHighlights: [
      "Component-based frontend architecture",
      "Backend-connected frontend data flow",
      "Responsive section-based layout",
      "SVG and branded UI integration",
      "Team collaboration in shared codebase"
    ],
    challenges: [
      "Adapting quickly to a new frontend stack while contributing to an active team project",
      "Understanding an existing codebase and aligning with its structure",
      "Turning design specifications into reusable and maintainable components",
      "Working across frontend implementation and simple backend-connected functionality"
    ],
    outcome:
      "Strengthened my experience in collaborative frontend development, React component design, design-to-code implementation, and integration of backend-provided content in a real team project."
  },

  {
    id: "smart-greenhouse",
    title: "Smart Greenhouse",
    shortDescription:
      "Embedded systems project for automated greenhouse monitoring and control using sensors, interrupts, LCD interface, and event-driven logic.",
    fullDescription:
      "Developed a microcontroller-based smart greenhouse system in C on the SAM3X8E ARM Cortex-M3. The system monitors temperature and light conditions, controls lighting and shading, keeps time, stores historical temperature data, and provides a keypad/LCD interface for configuration and supervision.",
    stack: ["C", "Embedded Systems", "ARM Cortex-M3", "Sensors", "Interrupts", "LCD"],
    // image: "/images/test.png",
    highlights: [
      "Implemented temperature monitoring with configurable alarm limits",
      "Added light sensing with automated LED and servo-based shading control",
      "Built timing functionality using SysTick and timer-driven logic",
      "Created keypad and LCD interface for monitoring and configuration",
      "Implemented historical temperature logging and rolling statistics",
      "Added fast simulation mode for testing system behavior"
    ],
    // screenshots: ["/images/test.png"],
    whatIBuilt: [
      "Built the full system in embedded C on the SAM3X8E microcontroller",
      "Implemented sensor-based monitoring for temperature and light",
      "Developed actuator control for artificial lighting and shading",
      "Created a menu-driven LCD/keypad interface for user interaction",
      "Added historical storage and alarm handling for environmental monitoring"
    ],
    technicalHighlights: [
      "Interrupt-driven timing with SysTick and timer counters",
      "Event-based coordination using second, minute, hour, and day flags",
      "Linked-list-based record storage",
      "Rolling 7-day temperature tracking",
      "Low-level register-based hardware control",
      "Fast simulation mode for accelerated testing"
    ],
    challenges: [
      "Coordinating multiple time-based system tasks reliably",
      "Managing limited embedded memory while storing historical data",
      "Handling stable keypad input and repeated LCD updates",
      "Structuring the code into maintainable modules in a low-level environment"
    ],
    outcome:
      "The final system could autonomously monitor greenhouse conditions, control lighting and shading, raise alarms when limits were exceeded, and store historical data for review. The project strengthened my embedded C skills, interrupt-driven design, and hardware-level programming."
  },

  {
    id: "kernel-os",
    title: "Kernel OS",
    shortDescription:
      "Academic operating systems project focused on scheduling, task coordination, and low-level kernel behavior in C.",
    fullDescription:
      "Worked on an academic operating systems project centered on low-level programming in C. The project involved task scheduling, synchronization concepts, timing behavior, and internal kernel structures such as ready lists, waiting lists, timer handling, and mailbox-based communication.",
    stack: ["C", "Operating Systems", "Low-Level Programming", "ARM"],
    image: "/images/flow-chart-diagram.png",
    highlights: [
      "Worked with low-level kernel-oriented programming in C",
      "Explored scheduling logic and task state transitions",
      "Reasoned about coordination between ready, waiting, and timer lists",
      "Worked with timing-driven task behavior and output handling",
      "Strengthened understanding of software-hardware interaction"
    ],
    screenshots: [],
    whatIBuilt: [
      "Implemented and analyzed core operating-system concepts in C",
      "Worked with scheduler-related structures and task coordination",
      "Explored how timing, events, and state transitions affect execution"
    ],
    technicalHighlights: [
      "Scheduler-centered design",
      "Ready list, waiting list, and timer list coordination",
      "Mailbox-based communication",
      "SysTick-driven timing behavior",
      "Task-based output handling"
    ],
    challenges: [
      "Understanding how kernel structures interact during execution",
      "Reasoning about transitions between ready, waiting, and timed states",
      "Debugging low-level behavior without high-level abstractions"
    ],
    outcome:
      "The project strengthened my understanding of scheduling logic, operating-system internals, and system-level programming in C.",
    architectureImage: "/images/flow-chart-diagram.png",
    architectureDescription:
      "The system is centered around a scheduler coordinating multiple tasks through internal kernel structures such as the ready list, waiting list, timer list, and mailbox. Input events and SysTick timing affect task execution, while task behavior is reflected through hardware outputs."
  },

  {
    id: "game-2048",
    title: "2048 Game",
    shortDescription:
      "Java desktop implementation of 2048 using MVC architecture, observer-based updates, and custom game logic.",
    fullDescription:
      "Developed a Java version of 2048 with focus on modular architecture, separation of concerns, and object-oriented design. The project was structured using MVC and Observer pattern principles, with support for graphical and console-based views, keyboard input handling, score tracking, win/loss detection, and variable board sizes.",
    stack: ["Java", "Swing", "MVC", "Observer Pattern", "JUnit", "OOP"],
    // image: "/images/test.png",
    highlights: [
      "Implemented full tile movement and merge logic for the game",
      "Structured the application using MVC architecture",
      "Used observer-based updates for multiple views",
      "Built both graphical and console representations of the board",
      "Added score tracking, random tile generation, and win/loss detection",
      "Extended the game with selectable board sizes"
    ],
    // screenshots: ["/images/test.png"],
    whatIBuilt: [
      "Developed the game model, controller logic, and multiple views",
      "Implemented keyboard-based interaction for gameplay",
      "Built Swing-based graphical rendering of the board",
      "Added console and sound observers to reflect state changes"
    ],
    technicalHighlights: [
      "MVC architecture",
      "Observer-based state updates",
      "Swing GUI and event handling",
      "Custom tile movement and merge algorithms",
      "Support for multiple board sizes",
      "Modular Java interfaces and abstractions"
    ],
    challenges: [
      "Implementing correct tile merge behavior across all movement directions",
      "Keeping the model independent from presentation logic",
      "Synchronizing multiple views with the same game state",
      "Structuring the project cleanly for maintainability and extension"
    ],
    outcome:
      "The project strengthened my Java skills in OOP, architecture, event-driven UI development, and game-state management through a complete desktop application."
  },
];