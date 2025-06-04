import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import Summary from './components/Summary.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('skills');
  const [darkMode, setDarkMode] = useState(true);

  function handleSelect(selectedButton) {
    // selectedButton => 'experience', 'education', 'skills', 'certifications'
    setSelectedTopic(selectedButton);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header mode={darkMode} setMode={setDarkMode} />
      <main>
        <section id="summary">
          <Summary />
        </section>
        
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === 'skills'}
              onSelect={() => handleSelect('skills')}
            >
              Skills
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'experience'}
              onSelect={() => handleSelect('experience')}
            >
              Experience
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'education'}
              onSelect={() => handleSelect('education')}
            >
              Education
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'certifications'}
              onSelect={() => handleSelect('certifications')}
            >
              Certifications
            </TabButton>
          </menu>
          {tabContent}
        </section>
        <section id="core-concepts">
          <h2 className="left">What am I looking for:</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
