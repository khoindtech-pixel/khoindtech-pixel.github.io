const education = [
  ['[YOUR STUDY PERIOD]', '[YOUR DEGREE]', '[YOUR UNIVERSITY]'],
  ['[YOUR STUDY PERIOD]', '[YOUR DEGREE]', '[YOUR UNIVERSITY]'],
];

const experience = [
  ['[YOUR EMPLOYMENT PERIOD]', '[YOUR JOB TITLE]', '[YOUR COMPANY]'],
  ['[YOUR EMPLOYMENT PERIOD]', '[YOUR JOB TITLE]', '[YOUR COMPANY]'],
  ['[YOUR EMPLOYMENT PERIOD]', '[YOUR JOB TITLE]', '[YOUR COMPANY]'],
  ['[YOUR EMPLOYMENT PERIOD]', '[YOUR JOB TITLE]', '[YOUR COMPANY]'],
  ['[YOUR EMPLOYMENT PERIOD]', '[YOUR JOB TITLE]', '[YOUR COMPANY]'],
];

const skillGroups = {
  Languages: ['JavaScript', 'TypeScript', '*C/C++', '*Python', '*Bash/Shell'],
  Frontend: ['HTML', 'CSS', '*SASS', '*Tailwind CSS'],
  Web: ['React', '*Next.js', 'Node.js', '*Express.js', '*REST API', '*GraphQL'],
  Database: ['MySQL', 'PostgreSQL'],
  Tools: ['VS Code', '*Git', 'GitHub'],
  'AI Tools': ['GitHub Copilot', 'ChatGPT', 'Gemini', 'Claude'],
};

function Timeline({ items, withBullets = false }) {
  return (
    <ul className="timeline">
      {items.map(([period, title, company]) => (
        <li className="timeline-item" key={`${period}-${title}-${company}`}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-period">{period}</span>
            <h4>{title}</h4>
            <p className="timeline-company">{company}</p>
            {withBullets && <ul className="timeline-bullets"><li>...</li><li>[DESCRIBE YOUR RESPONSIBILITIES AND ACHIEVEMENTS HERE]</li></ul>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Resume() {
  return (
    <>
      <div className="content-header"><h2 className="page-title">Resume</h2></div>
      <div className="page-body">
        <section className="resume">
          <div className="resume-columns">
            <div>
              <h3 className="resume-heading">🎓 Education</h3>
              <Timeline items={education} />
              <h3 className="resume-heading" style={{ marginTop: 36 }}>⚡ Skills</h3>
              <div className="skill-groups">
                {Object.entries(skillGroups).map(([name, values]) => (
                  <div key={name}><p className="skill-group-label">{name}</p><ul className="skill-tags">{values.map((value) => <li className="skill-tag" key={value}>{value}</li>)}</ul></div>
                ))}
              </div>
              <h3 className="resume-heading" style={{ marginTop: 36 }}>🌐 Languages</h3>
              <ul className="lang-list">{[['Vietnamese', 'Native'], ['English', 'Intermediate'], ['Chinese', 'Beginner']].map(([name, level]) => <li key={name}><span className="lang-name">{name}</span><span className="lang-level">{level}</span></li>)}</ul>
              <h3 className="resume-heading" style={{ marginTop: 36 }}>🎯 Hobbies</h3>
              <ul className="hobby-list"><li>🎮 Playing video games</li><li>📚 Reading comic books</li><li>🎨 Drawing</li></ul>
            </div>
            <div>
              <h3 className="resume-heading">💼 Experience</h3>
              <Timeline items={experience} withBullets />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
