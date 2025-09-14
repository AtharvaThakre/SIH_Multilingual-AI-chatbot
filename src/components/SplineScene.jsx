"use client";

import { useState, useEffect } from 'react';

export default function SplineScene({ 
  className = "", 
  width = "100%", 
  height = "100vh",
  scene = "https://prod.spline.design/f-CE0UieSwA6jUz4/scene.splinecode"
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [Spline, setSpline] = useState(null);

  useEffect(() => {
    // Dynamically import the Spline component on the client side
    import('@splinetool/react-spline')
      .then((module) => {
        setSpline(() => module.default);
      })
      .catch((error) => {
        console.error('Failed to load Spline:', error);
        setHasError(true);
      });
  }, []);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoaded(true);
  };

  const handleError = (error) => {
    console.error('Spline scene error:', error);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`spline-scene relative overflow-hidden ${className}`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10 flex items-center justify-center">
          <div className="text-center p-6 bg-card rounded-lg shadow-lg border">
            <div className="text-sm text-muted-foreground mb-2">Unable to load 3D scene</div>
            <button 
              onClick={() => {
                setHasError(false);
                setIsLoaded(false);
                window.location.reload();
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!Spline) {
    return (
      <div 
        className={`spline-scene relative overflow-hidden ${className}`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Loading 3D scene...</div>
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`spline-scene relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Spline
        scene={scene}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none'
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Loading overlay */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse flex items-center justify-center pointer-events-none z-10">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Initializing 3D scene...</div>
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
}
