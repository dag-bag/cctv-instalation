'use client';

import React, { useState } from 'react';
import styles from '../app/[slug]/page.module.css';

type Props = {
  defaultService: string;
};

export default function BookingForm({ defaultService }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className={styles.bookingCard}>
      <h3 className={styles.cardTitle}>Request a Callback</h3>
      {isSubmitted ? (
        <div style={{ textAlign: 'center', color: '#22c55e', padding: '2rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h4>Request Sent!</h4>
          <p>We will call you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ borderColor: errors.name ? '#ef4444' : undefined }}
            />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{ borderColor: errors.phone ? '#ef4444' : undefined }}
            />
            {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.phone}</span>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Service Needed</label>
            <select
              className={styles.select}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value={defaultService}>{defaultService}</option>
              <option value="other">Other Service</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Get Free Quote
          </button>
        </form>
      )}
      <p className={styles.secureText}>
        No spam. Your data is secure.
      </p>
    </div>
  );
}
