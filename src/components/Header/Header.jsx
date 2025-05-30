import avatar from '../../assets/Ava.jpg';
import './Header.css';

export default function Header() {
  const description = 'Experienced front-end dev looking for MERN/MEAN (react/angular+node.js) positions to start as a full-stack dev.';

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