import Spline from '@splinetool/react-spline/next';

export default function SplineScene({ 
  className = "", 
  width = "100%", 
  height = "400px",
  scene = "https://prod.spline.design/f-CE0UieSwA6jUz4/scene.splinecode"
}) {
  return (
    <div 
      className={`spline-scene relative overflow-hidden rounded-xl ${className}`}
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
        onLoad={() => console.log('Spline scene loaded successfully')}
        onError={(error) => console.error('Spline scene error:', error)}
      />
      {/* Loading overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse flex items-center justify-center pointer-events-none">
        <div className="text-sm text-muted-foreground">Loading 3D scene...</div>
      </div>
    </div>
  );
}
