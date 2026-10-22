
import { useEffect, useState } from 'react';

const initialForm = {
  userName: '',
  userPhone: '',
  bottleSize: '500ml',
  bottleQty: '500',
  userAddress: '',
};

export default function OrderModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !loading) onClose();
    };

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, loading, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage('');
    setMessageType('');

    const order = {
      ...form,
      userName: form.userName.trim(),
      userPhone: form.userPhone.trim(),
      bottleQty: Number(form.bottleQty),
      userAddress: form.userAddress.trim(),
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });


        const responseText = await response.text();

        let result = {};

        try {
        result = responseText ? JSON.parse(responseText) : {};
        } catch {
        throw new Error(
            `Server returned an invalid response (HTTP ${response.status}). Check the backend server and API route.`
        );
        }

        if (!response.ok || !result.success) {
        throw new Error(
            result.message || `Request failed with status ${response.status}.`
        );
        }


      setMessage(result.message || 'Your enquiry has been submitted successfully!');
      setMessageType('success');
      setForm(initialForm);
    } catch (error) {
      setMessage(
        error.message || 'Server connection failed. Please try again.'
      );
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal-overlay active"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) onClose();
      }}
    >
      <section
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        <button
          className="modal-close-btn"
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Close order form"
        >
          &times;
        </button>

        <span className="modal-subheading">KAVELT PREMIUM WATER</span>

        <h2 className="modal-title" id="order-modal-title">
          Place an order enquiry
        </h2>

        <p className="modal-description">
          Tell us what you need and we&apos;ll contact you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Name *</label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              maxLength={100}
              value={form.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userPhone">Phone *</label>
            <input
              id="userPhone"
              name="userPhone"
              type="tel"
              placeholder="10-digit mobile number"
              inputMode="numeric"
              autoComplete="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              value={form.userPhone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label htmlFor="bottleSize">Bottle Size *</label>
              <select
                id="bottleSize"
                name="bottleSize"
                value={form.bottleSize}
                onChange={handleChange}
                required
              >
                <option value="200ml">200 ML</option>
                <option value="500ml">500 ML</option>
                <option value="1 Liter">1 Litre</option>
                <option value="2 Liter">2 Litre</option>
                <option value="5 Liter">5 Litres</option>
                <option value="20 Liter">20 Litre Jar</option>
              </select>
            </div>

            <div className="form-group flex-1">
              <label htmlFor="bottleQty">Quantity *</label>
              <input
                id="bottleQty"
                name="bottleQty"
                type="number"
                min="100"
                max="100000"
                value={form.bottleQty}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="userAddress">Delivery / Requirement</label>
            <textarea
              id="userAddress"
              name="userAddress"
              rows={3}
              placeholder="Address, business requirements, etc."
              maxLength={2000}
              value={form.userAddress}
              onChange={handleChange}
            />
          </div>

          {message && (
            <p
              className={`modal-message ${messageType}`}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="modal-submit-btn"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Send Order Enquiry →'}
          </button>
        </form>
      </section>
    </div>
  );
}
