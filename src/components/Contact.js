import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact({ setPrompts, setContactOpen, setBetterGUI }) {
  return (
    <>
      <header className="navbar">
        <div className="navbar-section">
          <img
            alt="cmd-icon"
            className="navigation-btn"
            src="media/images/icons8-show-sidepanel-24.png"
          />
          <span
            className="navigation-btn"
            onClick={() => {
              setPrompts([{ input: 'help', location: 'root' }]);
              setContactOpen(false);
              setBetterGUI(false);
            }}
          >
            Home
          </span>
          <span className="navigation-btn" onClick={() => setBetterGUI(true)}>
            Projects
          </span>
          <span
            className="navigation-btn"
            onClick={() => {
              setContactOpen(true);
              setBetterGUI(false);
            }}
          >
            Contact
          </span>
          <span
            className="navigation-btn"
            onClick={() => window.open('media/pdf/resume.pdf', '_blank')}
          >
            Resume
          </span>
        </div>
      </header>
      <Container className="d-flex align-items-center justify-content-center">
        <iframe
          title="Contact"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrArWfzt1q8AAId2r7GFwAl-UZ1IQOmxmrCPsAGF-ENOrzEQ/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{
            height: '800px',
            width: '640px',
            marginTop: '4em',
            marginBottom: '1em',
          }}
        >
          Cargando…
        </iframe>
      </Container>
    </>
  );
}
