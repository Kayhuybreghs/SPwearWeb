const AnimatedBackground = () => {
  return (
    <div
      className="animated-background"
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: -1,
        background: 'linear-gradient(135deg, #2e2e2e 0%, #1c1c1c 60%, #000000 100%)', // Dark grey to black
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground;
