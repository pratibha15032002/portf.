import "./Projects.css";

const Projects = () => {
  return (
    <>
      {/* Page Heading */}
      <header className="projects-header">
        <h1>Projects</h1>
      </header>

      {/* Projects Section */}
      <div className="container">

        <div className="project-card">
          <span className="project-number">01</span>
          <h3>Music Player</h3>
          <p>
            Features play, pause, skip, and library management with a sleek
            interactive user interface.
          </p>
          <a
            href="https://pratibha15032002.github.io/musicc/"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            Launch App
          </a>
        </div>

        <div className="project-card">
          <span className="project-number">02</span>
          <h3>Weather App</h3>
          <p>
            Real-time atmospheric conditions tracking including humidity,
            wind, and precipitation using external APIs.
          </p>
          <a
            href="https://weather-1-0a6d.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            Check Weather
          </a>
        </div>

        <div className="project-card">
          <span className="project-number">03</span>
          <h3>Doctor Book Appointment</h3>
          <p>
            A comprehensive healthcare solution that bridges the gap between doctors and patients. Features include dynamic slot booking, secure JWT authentication, and an automated email notification system using Nodemailer.
          </p>
          <a
            href="https://prescripto.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            View Menu
          </a>
        </div>

        <div className="project-card">
          <span className="project-number">04</span>
          <h3>Task Manager</h3>
          <p>
            Boost productivity with task prioritization, state management,
            and an organized life-work workflow.
          </p>
          <a
            href="https://pratibha15032002.github.io/to-do-App/"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            Manage Tasks
          </a>
        </div>

        <div className="project-card">
          <span className="project-number">05</span>
          <h3>Issue Tracker</h3>
          <p>
            A professional system for logging, assigning, and tracking bugs
            or feature requests for dev teams.
          </p>
          <a
            href="https://isuuu-trackaer.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            View Dashboard
          </a>
        </div>

        <div className="project-card">
          <span className="project-number">06</span>
          <h3>Flipkart Clone</h3>
          <p>
            A full-scale e-commerce interface showcasing electronics,
            fashion, and furniture categories.
          </p>
          <a
            href="https://pratibha15032002.github.io/Flipkart-Clone/"
            target="_blank"
            rel="noreferrer"
            className="btn-demo"
          >
            Explore Store
          </a>
        </div>

      </div>
    </>
  );
};

export default Projects;
