class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Что-то пошло не так</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-white text-black rounded"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-black text-white"
        data-name="app" 
        data-file="app.js"
      >
        <div className="max-w-3xl px-10 py-16 text-center leading-relaxed">
          <div className="mb-8">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzB0aWN6MnFuZHFxYzY4anpjZDRtNXh5ZWh5OHN6ZGZ6Y3RsbWRlayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JIX9t2j0ZTN9S/giphy.gif"
              alt="funny cat"
              className="mx-auto rounded-lg"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal mb-8">
            Домен зарезервирован.
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Чтобы обсудить возможность покупки или аренды,
          </p>
          <p className="text-xl md:text-2xl mb-8">
            пишите в Telegram — и мы всё обсудим.
          </p>
          <a 
            href="https://t.me/neurocraftsru" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl font-bold mt-8 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            💬 Написать в Telegram
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);