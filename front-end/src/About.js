import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/About')
      .then(response => response.json())
      .then(data => setAboutData(data.about))
      .catch(error => console.error('Error fetching About Us data:', error));
  }, []);

  if (!aboutData) {
    return <p>Loading About Us...</p>;
  }

  return (
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <img className="image" src={aboutData.imageUrl} alt="Profile" onError={(e) => { e.target.src = "/fallback-image.jpg"; }} />
      <h2>{aboutData.name}</h2>
      <p className="bio">{aboutData.bio}</p>
    </div>
  );
};

export default About;
