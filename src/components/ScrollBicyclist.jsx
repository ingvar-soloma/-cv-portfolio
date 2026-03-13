import React, { useState, useEffect, useRef } from 'react';
import { Settings, Eye, EyeOff, X } from 'lucide-react';

const ScrollBicyclist = ({ isVisible = true }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDir, setScrollDir] = useState('down');
  const [displayPedalAngle, setDisplayPedalAngle] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [exertion, setExertion] = useState(0); // 0 to 100
  
  const scrollTimeout = useRef(null);
  const rafRef = useRef(null);
  const physicsRafRef = useRef(null);
  const prevScrollY = useRef(0);
  
  // Physics states
  const targetTop = useRef(window.innerHeight / 2);
  const currentTop = useRef(window.innerHeight / 2);
  const [visualTop, setVisualTop] = useState(window.innerHeight / 2);
  const pedalAngle = useRef(0);
  const lastTime = useRef(performance.now());

  // Main Physics Loop
  useEffect(() => {
    const loop = (now) => {
      const dt = Math.min((now - lastTime.current) / 1000, 0.1); 
      lastTime.current = now;

      const dist = targetTop.current - currentTop.current;
      const speed = dist * 25; 
      const v = Math.abs(speed);
      
      currentTop.current += speed * dt;
      setVisualTop(currentTop.current);
      setVelocity(v);

      if (v > 1) {
        pedalAngle.current = (pedalAngle.current + v * dt * 0.5) % 360;
        setDisplayPedalAngle(pedalAngle.current);
        setExertion(prev => Math.min(100, prev + v * dt * 0.05));
      } else {
        setExertion(prev => Math.max(0, prev - dt * 10));
      }

      physicsRafRef.current = requestAnimationFrame(loop);
    };

    physicsRafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(physicsRafRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) setScrollDir('down');
      else if (currentScrollY < prevScrollY.current) setScrollDir('up');
      prevScrollY.current = currentScrollY;

      if (isDragging) return;
      
      const update = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight <= 0) return;
        setScrollProgress(window.scrollY / totalHeight);
        setIsScrolling(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setIsScrolling(false), 300);
      };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable <= 0) return;
      
      const margin = 50;
      const trackHeight = clientHeight - margin * 2;
      let progress = (e.clientY - margin) / trackHeight;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
      window.scrollTo(0, progress * totalScrollable);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const margin = 50;
  targetTop.current = margin + scrollProgress * (window.innerHeight - margin * 2 - 80);

  const hip = { x: 42, y: 44 };
  const crankCenter = { x: 50, y: 80 };
  const pedalRadius = 10;
  
  const angleRad1 = (displayPedalAngle * Math.PI) / 180;
  const angleRad2 = ((displayPedalAngle + 180) * Math.PI) / 180;
  
  const foot1 = { 
    x: crankCenter.x + pedalRadius * Math.cos(angleRad1), 
    y: crankCenter.y + pedalRadius * Math.sin(angleRad1) 
  };
  const foot2 = { 
    x: crankCenter.x + pedalRadius * Math.cos(angleRad2), 
    y: crankCenter.y + pedalRadius * Math.sin(angleRad2) 
  };

  const getKnee = (f) => {
    const midX = (hip.x + f.x) / 2;
    const midY = (hip.y + f.y) / 2;
    return { x: midX + 11, y: midY + 5 };
  };
  
  const knee1 = getKnee(foot1);
  const knee2 = getKnee(foot2);

  const blurAmount = Math.min(velocity / 200, 1.5);
  const isExerted = exertion > 60;
  const windLines = velocity > 20 ? [
    { x: -10, y: 30, len: velocity / 4, op: Math.min(velocity / 300, 0.6) },
    { x: -15, y: 50, len: velocity / 3, op: Math.min(velocity / 250, 0.4) },
    { x: -12, y: 70, len: velocity / 5, op: Math.min(velocity / 350, 0.5) },
  ] : [];

  return (
    <>

      {isVisible && (
        <div 
          className={`fixed right-[-15px] z-[100] transition-opacity duration-300 print:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${isScrolling || isDragging ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
          style={{ 
            top: `${visualTop}px`,
            transform: 'translateX(0)',
            touchAction: 'none',
            filter: `blur(${blurAmount}px)`
          }}
          onMouseDown={handleMouseDown}
          title="Scroll by dragging me!"
        >
          <svg width="120" height="100" viewBox="-20 0 100 100" className="drop-shadow-lg overflow-visible">
            <g 
              style={{ 
                transition: 'transform 0.4s ease-in-out',
                transform: scrollDir === 'down' ? 'rotate(90deg) scaleY(-1)' : 'rotate(-90deg)',
                transformOrigin: '50px 50px'
              }}
            >
              {windLines.map((line, i) => (
                <line 
                  key={i}
                  x1={line.x} y1={line.y}
                  x2={line.x - line.len} y2={line.y}
                  stroke="var(--wind-streak)"
                  strokeWidth="1.5"
                  strokeOpacity={line.op}
                  strokeLinecap="round"
                />
              ))}

              <g style={{ transformOrigin: '25px 80px', transform: `rotate(${displayPedalAngle * 2}deg)` }}>
                <circle cx="25" cy="80" r="18" stroke="var(--bike-frame)" strokeWidth="2" fill="none" />
                <line x1="25" y1="62" x2="25" y2="98" stroke="var(--bike-accent)" strokeWidth="1" />
                <line x1="7" y1="80" x2="43" y2="80" stroke="var(--bike-accent)" strokeWidth="1" />
              </g>
              <g style={{ transformOrigin: '75px 80px', transform: `rotate(${displayPedalAngle * 2}deg)` }}>
                <circle cx="75" cy="80" r="18" stroke="var(--bike-frame)" strokeWidth="2" fill="none" />
                <line x1="75" y1="62" x2="75" y2="98" stroke="var(--bike-accent)" strokeWidth="1" />
                <line x1="57" y1="80" x2="93" y2="80" stroke="var(--bike-accent)" strokeWidth="1" />
              </g>

              <g fill="none" stroke="var(--bike-frame)" strokeWidth="3" strokeLinecap="round" strokeJoin="round">
                <path d="M25 80 L50 80" />
                <path d="M50 80 L42 43" />
                <path d="M25 80 L42 43" />
                <path d="M42 43 L65 48" />
                <path d="M50 80 L65 48" />
                <path d="M65 48 L75 80" />
                <path d="M42 43 L36 43 L48 43" strokeWidth="4" />
                <path d="M65 48 L68 48 C 74 48, 74 62, 64 62" />
              </g>

              <g style={{ transformOrigin: '50px 80px', transform: `rotate(${displayPedalAngle}deg)` }}>
                <line x1="50" y1="80" x2={50 + 10} y2="80" stroke="var(--bike-frame)" strokeWidth="2" strokeLinecap="round" />
                <line x1="50" y1="80" x2={50 - 10} y2="80" stroke="var(--bike-accent)" strokeWidth="2" strokeLinecap="round" />
                <rect x={50 + 10 - 4} y={80 - 2} width="8" height="4" rx="1" fill="var(--bike-frame)" />
                <rect x={50 - 10 - 4} y={80 - 2} width="8" height="4" rx="1" fill="var(--bike-accent)" />
              </g>

              <g className={isExerted ? "animate-heavy-breathing" : ""}>
                <circle cx="58" cy="27" r="6" fill="var(--rider-main)" />
                <path d="M58 33 L42 44" stroke="var(--rider-main)" strokeWidth="6" strokeLinecap="round" />
                <path d="M53 38 L68 54" stroke="var(--rider-accent)" strokeWidth="2.5" strokeLinecap="round" />
                <path d={`M${hip.x} ${hip.y} L${knee1.x} ${knee1.y} L${foot1.x} ${foot1.y}`} stroke="var(--rider-leg)" strokeWidth="4" fill="none" strokeLinecap="round" strokeJoin="round" />
                <path d={`M${hip.x} ${hip.y} L${knee2.x} ${knee2.y} L${foot2.x} ${foot2.y}`} stroke="var(--rider-leg-far)" strokeWidth="4" fill="none" strokeLinecap="round" strokeJoin="round" />
              </g>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollBicyclist;
