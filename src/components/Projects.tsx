import React, { useState, useRef, useEffect, useCallback } from 'react';
import PokemonCard from './PokemonCard';
// Import images from your assets folder
import handwrittenDigitRecognitionImage from '../assets/handwritten digit recognition.png';
import chromosomalInstabilityImage from '../assets/chromosomal instability detection.png';
import wineQualityPredictionImage from '../assets/wine quality prediction.png';
import amazonReviewImage from '../assets/Amazon Review.png';
import optimalAirportLocationImage from '../assets/optimal airport location.png';
import arcadeCabinetImage from '../assets/Arcade Cabinet.png';
import owldineImage from '../assets/owldine.png'; // Add your OwlDine image here

// Define the Project type
interface Project {
  title: string;
  description: string;
  type: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'OwlDine',
    description:
      'Developed a responsive web application for college dining services. Features include real-time menus, meal tracking, and dietary filtering. Built with modern web development technologies.',
    type: 'web-app',
    image: owldineImage, // Ensure this image exists in your assets folder
    technologies: ['React', 'TypeScript', 'Flask', 'PostgreSQL'],
    link: '/projects/owldine', // Add project-specific link
  },
  {
    title: 'Handwritten Digit Recognition with CNN',
    description:
      'Developed a Convolutional Neural Network (CNN) to recognize handwritten digits from the MNIST dataset, achieving an accuracy of nearly 98%.',
    type: 'ML',
    image: handwrittenDigitRecognitionImage,
    technologies: ['Python', 'PyTorch', 'MNIST Dataset'],
    link: '/projects/handwritten-digit-recognition', // Link to project page
  },
  {
    title: 'Chromosomal Instability Detection',
    description:
      'Working at MD Anderson on detection and quantification of biological markers in cellular images.',
    type: 'ML',
    image: chromosomalInstabilityImage,
    technologies: ['Python', 'Pytorch'],
    link: '/projects/chromosomal-instability-detection', // Add project-specific link
  },
  {
    title: 'Wine Quality Prediction Using Deep Neural Network',
    description:
      'Built a Deep Neural Network (DNN) to predict the quality of white wine based on various chemical properties, achieving an accuracy of 76.53%.',
    type: 'ML',
    image: wineQualityPredictionImage,
    technologies: ['Python', 'PyTorch', 'Wine Quality Dataset'],
    link: '/projects/wine-quality-prediction', // Add project-specific link
  },
  {
    title: 'Amazon Review Sentiment Analysis',
    description:
      'Analyzed Amazon product reviews to determine customer sentiment.',
    type: 'ML',
    image: amazonReviewImage,
    technologies: ['Python', 'Natural Language Processing', 'Amazon Product Reviews'],
    link: '/projects/amazon-review-sentiment-analysis', // Add project-specific link
  },
  {
    title: 'Optimal Airport Location Analysis',
    description:
      'Conducted an analysis to determine the optimal location for a new airport.',
    type: 'ML',
    image: optimalAirportLocationImage,
    technologies: ['Python', 'Geospatial Analysis', 'Data Visualization'],
    link: '/projects/optimal-airport-location-analysis', // Add project-specific link
  },
  {
    title: 'Arcade Cabinet',
    description:
      'Researched, designed, and fabricated a fully functional arcade cabinet. Developed software to emulate classic arcade games, integrating it with custom-built controls and a user interface. (Image is before painting and adding electronics)',
    type: 'robotics',
    image: arcadeCabinetImage,
    technologies: ['Woodworking', 'Raspberry Pi', 'Electronics'],
    link: '/projects/arcade-cabinet', // Add project-specific link
  },
];

// New ProjectCarousel component
interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Calculate the angle for each item
  const totalItems = projects.length;
  const anglePerItem = 360 / totalItems;
  
  // Responsive radius based on screen size
  const [radius, setRadius] = useState(400);

  // Update radius on window resize
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      // Adjust radius based on screen width
      setRadius(isMobileView ? 280 : window.innerWidth < 1024 ? 350 : 400);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Get the index of the card that's closest to the front
  const getFrontCardIndex = () => {
    // Figure out which card is in front based on rotation angle
    const normalizedAngle = ((rotationAngle % 360) + 360) % 360;
    const frontAngle = normalizedAngle % anglePerItem;
    let frontIndex = Math.round((normalizedAngle - frontAngle) / anglePerItem) % totalItems;
    
    // Adjust for negative rotation
    if (frontIndex < 0) frontIndex += totalItems;
    
    return frontIndex;
  };

  // Handle card click to expand/focus it
  const handleCardClick = (index: number) => {
    // On mobile, when a card is clicked, navigate to the project page
    if (isMobile) {
      window.location.href = projects[index].link;
      return;
    }
    
    // Toggle selection state
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
    } else {
      setSelectedCardIndex(index);
    }
  };

  // Handle card hover
  const handleCardHover = (index: number) => {
    setHoveredCardIndex(index);
  };

  // Handle end of card hover
  const handleCardHoverEnd = () => {
    setHoveredCardIndex(null);
  };

  // Handle background click to deselect card
  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only deselect if clicking directly on the background, not a card
    if (e.currentTarget === e.target && selectedCardIndex !== null) {
      setSelectedCardIndex(null);
    }
  };

  // Mouse and Touch Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (selectedCardIndex !== null || isAnimating) return;
    
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.clientX);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || selectedCardIndex !== null) return;
    
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 5) {
      setHasMoved(true);
    }
    
    // Convert horizontal movement to rotation
    // Adjust sensitivity for different screen sizes
    const sensitivity = isMobile ? 0.4 : 0.25;
    const newRotation = rotationAngle + deltaX * sensitivity;
    
    setStartX(e.clientX);
    setRotationAngle(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers with improved sensitivity for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (selectedCardIndex !== null || isAnimating) return;
    
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.touches[0].clientX);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || selectedCardIndex !== null) return;
    
    // Prevent default to stop page scrolling while swiping
    e.preventDefault();
    
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 5) {
      setHasMoved(true);
    }
    
    // Higher sensitivity for touch events to make swiping feel natural on mobile
    const sensitivity = 0.5;
    const newRotation = rotationAngle + deltaX * sensitivity;
    
    setStartX(e.touches[0].clientX);
    setRotationAngle(newRotation);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Navigation functions with improved animations
  const goToNextProject = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const startAngle = rotationAngle;
    const targetAngle = rotationAngle - anglePerItem;
    const startTime = performance.now();
    const duration = 600; // ms
    
    const animateWithLinearMotion = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutQuad for smoother deceleration
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentAngle = startAngle + (targetAngle - startAngle) * easedProgress;
      setRotationAngle(currentAngle);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateWithLinearMotion);
      } else {
        setRotationAngle(targetAngle);
        setIsAnimating(false);
        animationRef.current = null;
      }
    };
    
    animationRef.current = requestAnimationFrame(animateWithLinearMotion);
  };

  const goToPrevProject = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const startAngle = rotationAngle;
    const targetAngle = rotationAngle + anglePerItem;
    const startTime = performance.now();
    const duration = 600; // ms
    
    const animateWithLinearMotion = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutQuad for smoother deceleration
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentAngle = startAngle + (targetAngle - startAngle) * easedProgress;
      setRotationAngle(currentAngle);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateWithLinearMotion);
      } else {
        setRotationAngle(targetAngle);
        setIsAnimating(false);
        animationRef.current = null;
      }
    };
    
    animationRef.current = requestAnimationFrame(animateWithLinearMotion);
  };

  // Get front card index for visibility checking
  const frontCardIndex = getFrontCardIndex();

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Check if a card is one of the visible front cards
  const isCardVisible = (index: number) => {
    const totalCards = projects.length;
    const distanceFromFront = Math.min(
      (index - frontCardIndex + totalCards) % totalCards,
      (frontCardIndex - index + totalCards) % totalCards
    );
    
    // Consider cards close to the front as "visible"
    // Show fewer cards on mobile for better performance
    return distanceFromFront <= (isMobile ? Math.ceil(totalCards / 4) : Math.ceil(totalCards / 3));
  };

  return (
    <div 
      className="relative w-full h-full perspective-1000 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleBackgroundClick}
      ref={carouselRef}
    >
      {/* Navigation Buttons - Update these styles for better mobile accessibility */}
      <button
        onClick={goToPrevProject}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 
        bg-white/90 hover:bg-gray-200 text-black p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextProject}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 
        bg-white/90 hover:bg-gray-200 text-black p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300"
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Swipe instructions for mobile - only shown on small screens */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-70 md:hidden">
        Swipe to browse projects
      </div>
      
      {/* 3D Carousel Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-visible"
        style={{
          perspective: '1200px',
          paddingTop: isMobile ? '20px' : '40px',
          paddingBottom: isMobile ? '20px' : '40px',
        }}
      >
        {/* Rotating carousel ring */}
        <div
          className="absolute transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationAngle}deg)`,
            transition: isAnimating 
              ? 'transform 600ms linear'
              : isDragging && hasMoved
                ? 'transform 0.15s linear'
                : 'transform 0.35s ease-out',
            willChange: 'transform',
            width: '1px', // Center point
            height: '1px',
            top: '50%', // Center vertically
          }}
        >
          {/* Render all cards around the 3D ring */}
          {projects.map((project, index) => {
            // Calculate card's position on the 3D ring
            const cardAngle = (index * anglePerItem);
            
            // Check if this is the selected card or hovered card
            const isSelected = selectedCardIndex === index;
            const isHovered = hoveredCardIndex === index;
            
            // Check if card is visible from the front
            const visible = isCardVisible(index);
            
            // Responsive card dimensions
            const cardWidth = isMobile ? 240 : 290;
            const cardHeight = isMobile ? 400 : 450;
            
            return (
              <div 
                key={index}
                className="absolute origin-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  marginTop: `-${cardHeight / 2}px`,
                  backfaceVisibility: 'hidden',
                  transition: isAnimating
                    ? 'all 600ms linear'
                    : 'all 0.3s ease-out',
                  opacity: isSelected ? 1 : visible ? 1 : 0.5,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
              >
                <div 
                  className={`w-full h-full cursor-pointer overflow-hidden rounded-xl ${isSelected ? 'ring-4 ring-white ring-opacity-60' : ''}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isSelected 
                      ? 'scale(1.1)' 
                      : isHovered 
                        ? 'scale(1.05)' 
                        : 'scale(1)',
                    transition: 'transform 0.2s ease-out',
                    boxShadow: isSelected 
                      ? '0 0 40px 10px rgba(255, 255, 255, 0.4)' 
                      : isHovered
                        ? '0 0 30px 5px rgba(255, 255, 255, 0.3)' 
                        : '0 10px 25px rgba(0, 0, 0, 0.2)',
                  }}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardHoverEnd}
                >
                  <div 
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-xl h-full w-full"
                    style={{
                      transform: 'rotateY(0deg)', // Keep card content facing forward
                      display: 'flex', // Add flex display
                      flexDirection: 'column', // Stack content vertically
                      borderRadius: '12px', // Match the rounded appearance in the image
                    }}
                  >
                    <PokemonCard {...project} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Projects
          </span>
        </h2>
        <div className="h-[80vh] md:h-[90vh]">
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
}