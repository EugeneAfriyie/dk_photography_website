import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or send to an error tracking service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Example: Send to an error tracking service like Sentry
    // Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white text-center py-8">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="text-gray-300">
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};