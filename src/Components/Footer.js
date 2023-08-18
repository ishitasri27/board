import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <div>
        <h4>Follow us on social media:</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.facebook.com/edboard.mmmut/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="literaryedb@mmmut.ac.in" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.instagram.com/the_editorial_board/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      <p style={{ margin: '10px 0', fontSize: '14px' }}>&copy; The Editorial Board</p>
    </footer>
  );
};

export default Footer;
