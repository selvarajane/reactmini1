function GreetingApp({ name }) {
  const greetingStyle = {
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#646cff',
    color: '#ffffff',
    borderRadius: '8px',
    fontSize: '1.5em',
    fontWeight: '600',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={greetingStyle}>
      Hello, {name}!
    </div>
  );
}

export default GreetingApp;

