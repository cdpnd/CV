import dev from './assets/Developer.png';
import ba from './assets/BA.png';
import supp from './assets/support.png';

export const CORE_CONCEPTS = [
  {
    image: dev,
    title: 'Full-Stack Developer',
    description:
      'Experienced Front-End Software Engineer intending to transition to a full-stack position (especially interested in NodeJS, .NET, Python)',
  },
  {
    image: ba,
    title: 'Business Analyst',
    description:
      'Aspiring Business Analyst with a strong interest in business analysis and continuous learning',
  },
  {
    image: supp,
    title: 'Technical Support Engineer',
    description:
      'Experienced L2-L3 Tecnical Support Engineer with strong knowledge in SQL/JS/HTML/CSS',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Experience',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'Education',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Skills',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'Contacts',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};