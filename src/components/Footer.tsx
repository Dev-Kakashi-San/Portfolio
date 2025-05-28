
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState<number | null>(null);
  
  useEffect(() => {
    // Fetch and increment visitor count using CountAPI
    fetch('https://api.countapi.xyz/hit/tushar-sharma-portfolio/global-visits')
      .then(response => response.json())
      .then(data => {
        if (data && data.value) {
          setVisitCount(data.value);
        }
      })
      .catch(error => {
        console.log('Visitor count unavailable');
      });
  }, []);
  
  return (
    <footer className="py-6 px-6 border-t border-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/50 text-sm">
              &copy; {currentYear} Tushar Sharma. All rights reserved.
              {visitCount && (
                <span className="ml-2 opacity-30">• {visitCount}</span>
              )}
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
