export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  image?: string;
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
    id: "hotel-booking-system",
    title: "Hotel Booking System",
    shortDescription:
      "Secure REST API for hotel bookings built with Spring Boot, featuring JWT authentication, role-based access control, and structured error handling.",
    fullDescription:
      "Designed and built a backend REST API for managing hotel bookings. The system enforces room inventory and capacity rules, supports user registration with hashed passwords, and exposes role-protected endpoints for booking management. The application follows a layered architecture (Controller → Service → Repository) with centralized exception handling and is documented through Swagger UI.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA / Hibernate",
      "H2",
      "Maven",
      "OpenAPI / Swagger"
    ],
    image: "/images/swagger-ui.png",
    highlights: [
      "Implemented JWT authentication with a custom Spring Security filter (OncePerRequestFilter)",
      "Role-based access control (USER, ADMIN) via URL matchers and @PreAuthorize",
      "Custom exception classes mapped to structured JSON error responses through @RestControllerAdvice",
      "Room inventory and guest-capacity enforcement at the service layer",
      "BCrypt password hashing and DTO pattern to prevent over-posting attacks",
      "Auto-generated API documentation with Swagger UI and JWT-aware Authorize button",
      "Externalized JWT secret and token expiration via application.properties"
    ],
    screenshots: [
      "/images/swagger-ui.png",
      "/images/swagger-rooms.png",
      "/images/postman-booking.png",
      "/images/postman-error.png"
    ],
    whatIBuilt: [
      "Designed and implemented the full backend from entity model to REST endpoints",
      "Built a custom JWT service for token generation and validation",
      "Implemented a Spring Security filter chain integrated with the JWT layer",
      "Created a layered architecture separating HTTP, business logic, and persistence concerns",
      "Designed DTOs to control which fields the client can submit",
      "Implemented a global exception handler producing consistent error responses",
      "Added Swagger UI configuration for interactive API exploration"
    ],
    technicalHighlights: [
      "Stateless JWT-based authentication with HS256 signing",
      "Spring Security filter chain with custom OncePerRequestFilter",
      "Role-based authorization at both URL and method level",
      "Centralized error handling with @RestControllerAdvice",
      "Bean Validation with @NotBlank, @Min, @Max, @Pattern",
      "Enum-based room inventory and pricing model",
      "Spring Data JPA derived queries (findByUsername, countByRoomType)",
      "OpenAPI 3 documentation via springdoc-openapi"
    ],
    challenges: [
      "Integrating a custom JWT filter cleanly into the Spring Security filter chain",
      "Designing exception flow so business errors surface as structured JSON responses, not stack traces",
      "Preventing role injection by separating request DTOs from JPA entities",
      "Ensuring the auth filter handled both valid, invalid, and missing tokens without crashing the request",
      "Migrating from in-memory users to a fully database-backed UserDetailsService while keeping login working"
    ],
    outcome:
      "Delivered a production-style backend demonstrating modern Spring Boot patterns: stateless JWT auth, layered architecture, validation, structured error handling, and auto-generated documentation. The project sharpened my understanding of Spring Security internals and API design principles."
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
      "Java desktop 2048 built on a clean MVC + Observer architecture, where a single game model drives three synchronized views (Swing GUI, console, and sound) and scales to configurable board sizes from 4×4 to 8×8.",
    fullDescription:
      "A Java implementation of 2048 designed around clean object-oriented architecture, not just gameplay. It's built on MVC and the Observer pattern: a single GameModel holds all state and notifies three independent observers — a Swing GUI, a console view, and a sound observer — which stay in sync without knowing about each other. The model is fully generalized over board size, so the same logic powers a difficulty selector offering 4×4 (hard), 6×6 (medium), and 8×8 (easy) boards. The slide-and-merge algorithm is extracted into its own MoveHandler2048 class (Single Responsibility), the board is exposed only through defensive copies, and the system is driven entirely through interfaces (IGameModel, GameController, Moveable, GameObserver) so views and input methods can be swapped without touching game logic.",
    stack: ["Java", "Swing", "MVC", "Observer Pattern", "Java Sound API", "OOP"],
    highlights: [
      "Size-generalized model powering a difficulty selector (4×4, 6×6, 8×8) — no logic hardcoded to a 4×4 grid",
      "Full tile movement and merge logic across all four directions, working on any board size",
      "Structured the application using MVC with interface-driven design",
      "Three independent observers (Swing GUI, console, sound) reacting to the same model",
      "Extracted slide-and-merge algorithm into a separate MoveHandler2048 class (SRP)",
      "Score tracking, random tile spawning, and win (2048) / loss (no moves) detection"
    ],
    whatIBuilt: [
      "Designed the model, controllers, and multiple views from scratch",
      "Built a size-generalized GameModel and a Swing difficulty selector (4×4 / 6×6 / 8×8)",
      "Implemented keyboard control via WASD and arrow keys (Enter to restart, Esc to exit) using a custom KeyAdapter controller",
      "Built Swing-based graphical rendering with color-coded tiles that adapts to board size",
      "Added console and sound observers reflecting state changes in real time"
    ],
    technicalHighlights: [
      "MVC architecture with interface-driven design (IGameModel, GameController, Moveable, GameObserver)",
      "Observer pattern with three independent observers on a single model",
      "Size-generalized board model — slide/merge logic works for any N×N grid",
      "Extracted MoveHandler2048 class following the Single Responsibility Principle",
      "Defensive board copies to prevent external state mutation",
      "Sound feedback through the Java Sound API (AudioSystem / Clip)",
      "Swing GUI with real-time color-coded tile rendering",
      "Modern Java switch expressions (arrow syntax) for clean direction handling"
    ],
    challenges: [
      "Implementing correct tile merge behavior across all four movement directions",
      "Generalizing the slide-and-merge logic so it works for any board size, not just 4×4",
      "Keeping the model fully independent from presentation and input logic",
      "Synchronizing multiple views with the same game state through the observer pattern"
    ],
    outcome:
      "The project strengthened my Java skills in object-oriented design, architectural patterns (MVC and Observer), and building extensible, loosely-coupled systems where one model cleanly drives multiple synchronized views."
  },
];