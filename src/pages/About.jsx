import {
  FiCode,
  FiGitBranch,
  FiPenTool,
} from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa6';
import {
  SiClaude,
  SiFigma,
  SiGithubcopilot,
  SiGooglegemini,
  SiJavascript,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

const services = [
  ['UI Development', 'Building responsive web interfaces with HTML, CSS, JavaScript, and modern frameworks (React, Next.js).', '#7226a1', FiCode],
  ['Design to Code', 'Translating Figma designs into pixel-perfect interfaces, maintaining consistency with the design system.', '#f24e1e', FiPenTool],
  ['Version Control', 'Managing source code with Git, collaborating through GitHub (branching, pull requests, code review).', '#ffa500', FiGitBranch],
  ['AI-Assisted Development', 'Leveraging AI tools like Claude and Gemini for coding, debugging, and boosting productivity across the development workflow.', '#6366f1', FaRobot],
];

const skills = [
  ['React', SiReact, '#61DAFB'],
  ['JavaScript', SiJavascript, '#F7DF1E'],
  ['TypeScript', SiTypescript, '#3178C6'],
  ['Figma', SiFigma, '#F24E1E'],
  ['Google Gemini', SiGooglegemini, '#8E75B2'],
  ['GitHub Copilot', SiGithubcopilot, '#000000'],
  ['Claude', SiClaude, '#D97757'],
];

export default function About() {
  return (
    <>
      <div className="content-header"><h2 className="page-title">About Me</h2></div>
      <div className="page-body">
        <section className="about">
          <div className="about-text">
            <p>[YOUR PROFESSIONAL SUMMARY. Describe your experience, specialty, and background here.]</p>
            <p>Currently focused on Figma, with a goal of becoming a UI/UX designer. Alongside that, I&apos;m learning Blender and drawing to become a 2D/3D digital artist.</p>
          </div>
          <div className="section-block">
            <h3 className="block-title">What I&apos;m Doing</h3>
            <ul className="services-grid">
              {services.map(([title, description, color, Icon]) => (
                <li className="service-card" key={title}>
                  <div className="service-icon" style={{ color }}><Icon aria-hidden="true" /></div>
                  <div><h4>{title}</h4><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-block">
            <h3 className="block-title">Skills</h3>
            <ul className="skills-grid">
              {skills.map(([skill, Icon, color]) => (
                <li className="skill-badge" key={skill}>
                  <Icon
                    className="skill-icon"
                    style={{
                      color,
                      backgroundColor: color === '#000000' ? '#fff' : 'transparent',
                      padding: color === '#000000' ? '6px' : 0,
                      borderRadius: color === '#000000' ? '8px' : 0,
                    }}
                    aria-hidden="true"
                  />
                  <span className="skill-label">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
