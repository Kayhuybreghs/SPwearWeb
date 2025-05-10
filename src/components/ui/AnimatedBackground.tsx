const AnimatedBackground = () => {
  return (
    <div
      className="animated-background"
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: -1,
        background: 'linear-gradient(135deg, #ffffff 0%, #f2faff 60%, #cce8ff 100%)', // More white, then subtle blue
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground;
