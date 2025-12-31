'use client';

import React, { useState } from 'react';
import styles from '../app/contact/page.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.service.trim()) newErrors.service = 'Service is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            email: formData.email,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.sectionTitle}>Send Us a Message</h2>
      <p className={styles.sectionDescription}>
        Fill out the form below and we&apos;ll respond as soon as possible.
      </p>

      {isSubmitted ? (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3>Message Sent Successfully!</h3>
          <p>We&apos;ve received your message and will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ borderColor: errors.name ? '#ef4444' : undefined }}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                className={styles.input}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ borderColor: errors.email ? '#ef4444' : undefined }}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                className={styles.input}
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ borderColor: errors.phone ? '#ef4444' : undefined }}
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service-select-contact" className={styles.label}>
                Service Needed <span className={styles.required}>*</span>
              </label>
              <select
                id="service-select-contact"
                className={styles.select}
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{ borderColor: errors.service ? '#ef4444' : undefined }}
                aria-label="Service Needed"
              >
                <option value="">Select a service</option>
                <option value="CCTV Installation">CCTV Installation</option>
                <option value="CCTV Repair">CCTV Repair</option>
                <option value="Access Control">Access Control</option>
                <option value="Video Door Phone">Video Door Phone</option>
                <option value="Security Camera Repair">Security Camera Repair</option>
                <option value="AMC Services">AMC Services</option>
                <option value="Electrical Services">Electrical Services</option>
                <option value="Other">Other</option>
              </select>
              {errors.service && <span className={styles.error}>{errors.service}</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Tell us about your requirements..."
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ borderColor: errors.message ? '#ef4444' : undefined }}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}


