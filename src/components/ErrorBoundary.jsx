import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { console.error("ErrorBoundary:", err, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl font-semibold">Something went wrong.</h2>
          <p>Please refresh or contact the admin.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
