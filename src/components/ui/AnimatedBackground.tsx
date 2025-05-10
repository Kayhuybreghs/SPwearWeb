const AnimatedBackground = () => {
  return (
    <div
      className="animated-background"
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: -1,
        background: 'linear-gradient(135deg, #d0d0d0 0%, #a0a0a0 60%, #4a4a4a 100%)', // Light grey to medium-dark
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground;
