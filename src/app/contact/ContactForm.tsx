"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    useCase: "",
    nda: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    const requiredFields = ["firstName", "lastName", "email", "company", "projectType", "useCase"];
    const newErrors: { [key: string]: boolean } = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = true;
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className={styles.formSuccess}>
        <CheckCircle2
          width={48}
          height={48}
          color="var(--color-primary)"
          style={{ marginBottom: "var(--space-4)", display: "inline-block" }}
        />
        <h3>Brief received.</h3>
        <p>We&apos;ll review it and come back with a scoped proposal within 48 hours.</p>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} noValidate onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Priya"
            value={formData.firstName}
            onChange={handleChange}
            style={errors.firstName ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
          />
          {errors.firstName && <span className={styles.fieldError}>First name is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Ramesh"
            value={formData.lastName}
            onChange={handleChange}
            style={errors.lastName ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
          />
          {errors.lastName && <span className={styles.fieldError}>Last name is required</span>}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Work Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="priya@company.com"
          value={formData.email}
          onChange={handleChange}
          style={errors.email ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
        />
        {errors.email && <span className={styles.fieldError}>Valid work email is required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="Acme Industries"
          value={formData.company}
          onChange={handleChange}
          style={errors.company ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
        />
        {errors.company && <span className={styles.fieldError}>Company name is required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="projectType">What are you looking to do?</label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          style={errors.projectType ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
        >
          <option value="" disabled>
            Select a project type
          </option>
          <option value="integration">Model integration into existing product</option>
          <option value="custom_app">Custom AI application development</option>
          <option value="rag">RAG / Enterprise search implementation</option>
          <option value="consulting">AI strategy and roadmap consulting</option>
          <option value="on_prem">On-premise / air-gapped AI deployment</option>
          <option value="fine_tuning">Fine-tuning an existing foundation model</option>
          <option value="other">Something else</option>
        </select>
        {errors.projectType && <span className={styles.fieldError}>Please select a project type</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="useCase">Describe your use case</label>
        <textarea
          id="useCase"
          name="useCase"
          rows={5}
          placeholder="What's the problem you're solving? What does success look like? Any constraints we should know about?"
          value={formData.useCase}
          onChange={handleChange}
          style={errors.useCase ? { borderColor: "var(--color-error, #f43f5e)" } : {}}
        />
        {errors.useCase && <span className={styles.fieldError}>Please provide some details</span>}
      </div>

      <div className={styles.formCheck}>
        <input
          type="checkbox"
          id="nda"
          name="nda"
          checked={formData.nda}
          onChange={handleChange}
        />
        <label htmlFor="nda">I&apos;d like to discuss under NDA before sharing details</label>
      </div>

      <button type="submit" className={`btn btn-primary ${styles.formSubmit}`} disabled={isSubmitting}>
        <span>{isSubmitting ? "Sending..." : "Send Brief"}</span>
        {!isSubmitting && <Send width={18} height={18} />}
      </button>

      <p className={styles.formPrivacy}>
        We respond within 48 hours. Your details are never sold or shared.
      </p>
    </form>
  );
}
