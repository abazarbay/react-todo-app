import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 To-Do App. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </div>
        </footer>
    );
}

export default Footer;