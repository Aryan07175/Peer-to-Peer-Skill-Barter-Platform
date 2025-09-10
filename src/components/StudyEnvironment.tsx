import React, { useEffect, useRef } from 'react';
import { BookOpen, Coffee, Lightbulb, Monitor, Headphones, PenTool } from 'lucide-react';

export function StudyEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20" />
      
      {/* Study room elements */}
      <div className="absolute inset-0">
        {/* Desk lamp glow */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-24 right-24 w-16 h-16 bg-yellow-300/20 rounded-full blur-2xl" />
        
        {/* Monitor glow */}
        <div className="absolute bottom-40 left-20 w-40 h-24 bg-blue-400/10 rounded-lg blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Coffee steam */}
        <div className="absolute top-1/2 right-1/3 w-2 h-20 bg-gradient-to-t from-transparent to-gray-300/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating study icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <BookOpen className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Lightbulb className="w-6 h-6 text-yellow-400/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Monitor className="w-7 h-7 text-green-400/30" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
          <Coffee className="w-5 h-5 text-orange-400/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-float" style={{ animationDelay: '4s' }}>
          <Headphones className="w-6 h-6 text-purple-400/30" />
        </div>
        <div className="absolute top-1/2 left-1/5 animate-float" style={{ animationDelay: '5s' }}>
          <PenTool className="w-5 h-5 text-pink-400/30" />
        </div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}