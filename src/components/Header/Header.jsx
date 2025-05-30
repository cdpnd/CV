import avatar from '../../assets/Ava.jpg';
import './Header.css';

export default function Header() {
  const description = 'Experienced Front-End Developer and Technical Support Engineer. Aspiring Business Analyst with a strong interest in business analysis.';

  return (
    <header>
      <div className="my-name">
        <h1>Eugene Pashchenko</h1>
        <p>
          {description}
        </p>
      </div>
      <div className="avatar">
        <img src={avatar} alt="Stylized atom" />
      </div>
    </header>
  );
}