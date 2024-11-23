import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './styles/Skill.css'; // Import file CSS untuk styling tambahan

function Skill() {
  const [key, setKey] = useState('ms-office');

  return (
    <div className="skill-container">
      <div className="skill-box">
        <Tabs
          id="controlled-tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* MS Office Tab */}
          <Tab eventKey="ms-office" title="MS Office">
            <ul>
              <li>Word</li>
              <li>Excel</li>
              <li>PowerPoint</li>
              <li>Visio</li>
            </ul>
          </Tab>

          {/* Programming Language Tab */}
          <Tab eventKey="programming" title="Programming">
            <ul>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>C Language</li>
              <li>Java</li>
              <li>css</li>
            </ul>
          </Tab>

          {/* Design Tab */}
          <Tab eventKey="design" title="Design">
            <ul>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </Tab>

          {/* Linux Tab */}
          <Tab eventKey="linux" title="Linux">
            <ul>
              <li>Ubuntu</li>
              <li>Debian</li>
            </ul>
          </Tab>

          {/* Database Tab */}
          <Tab eventKey="database" title="Database">
            <ul>
              <li>MySQL</li>
            </ul>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Skill;
