
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-6 border-t border-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/50 text-sm">
              &copy; {currentYear} Tushar Sharma. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-foreground/50 text-sm">
              Built with <span className="text-accent">React</span> & <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
