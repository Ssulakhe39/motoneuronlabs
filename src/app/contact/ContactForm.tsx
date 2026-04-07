"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    useCase: "",
    nda: false,
    notARobot: false,
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

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

    if (!formData.notARobot) {
      newErrors.notARobot = true;
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams();
      body.append("form-name", "contact");
      body.append("firstName", formData.firstName);
      body.append("lastName", formData.lastName);
      body.append("email", formData.email);
      body.append("company", formData.company);
      body.append("projectType", formData.projectType);
      body.append("useCase", formData.useCase);
      body.append("nda", formData.nda ? "yes" : "no");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setSubmitError("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      {/* Hidden form for Netlify to detect at build time */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <select name="projectType"><option value=""></option></select>
        <textarea name="useCase"></textarea>
        <input type="checkbox" name="nda" />
      </form>

      <form className={styles.contactForm} noValidate onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot field for bots */}
        <p className={styles.srOnly} aria-hidden="true">
          <label>Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
        </p>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Jane"
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
              placeholder="Doe"
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
            placeholder="jane@company.com"
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

        <div className={styles.formCheck}>
          <input
            type="checkbox"
            id="notARobot"
            name="notARobot"
            checked={formData.notARobot}
            onChange={handleChange}
            style={errors.notARobot ? { outline: "2px solid var(--color-error, #f43f5e)", outlineOffset: "2px" } : {}}
          />
          <label htmlFor="notARobot">I&apos;m not a robot</label>
          {errors.notARobot && <span className={styles.fieldError} style={{ display: "block", marginTop: "4px" }}>Please confirm you&apos;re not a robot</span>}
        </div>

        {submitError && (
          <p className={styles.fieldError} style={{ textAlign: "center" }}>{submitError}</p>
        )}

        <button type="submit" className={`btn btn-primary ${styles.formSubmit}`} disabled={isSubmitting}>
          <span>{isSubmitting ? "Sending..." : "Send Brief"}</span>
          {!isSubmitting && <Send width={18} height={18} />}
        </button>

        <p className={styles.formPrivacy}>
          We respond within 48 hours. Your details are never sold or shared.
        </p>
      </form>
    </>
  );
}
