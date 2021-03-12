const desktop = 1200;
const laptop = 1024;
const smallLaptop = 900;
const tablets = 768;
const smallTablets = 600;
const phones = 480;
const smallPhones = 320;

module.exports = {
  isDesktop: () => window.innerWidth <= desktop,
  isLaptop: () => window.innerWidth <= laptop,
  isSmallLaptop: () => window.innerWidth <= smallLaptop,
  isTablets: () => window.innerWidth <= tablets,
  isSmallTablets: () => window.innerWidth <= smallTablets,
  isPhones: () => window.innerWidth <= phones,
  isSmallPhones: () => window.innerWidth <= smallPhones,
};
