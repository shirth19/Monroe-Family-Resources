import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function SuggestionForm() {
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('p_qlwYdjujRnsY2EN');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_ne4oltn',
        'template_rsirrz5',
        {
          from_email: email,
          suggestion: suggestion,
          to_email: 'sam.hirth19@gmail.com'
        }
      );

      setSubmitted(true);
      setSuggestion('');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send suggestion. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggestion-form">
      <h3>Suggest a Resource</h3>
      {error && <p className="error-message">{error}</p>}
      {submitted ? (
        <p className="success-message">Thank you for your suggestion! We'll review it soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="suggestion">Your Suggestion:</label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
              placeholder="Tell us about a community resource we should add..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Submit Suggestion'}
          </button>
        </form>
      )}
    </div>
  );
}

export default SuggestionForm;
