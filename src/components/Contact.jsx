import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    // Don't submit if there are errors
    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }
    
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ayush",
          from_email: form.email,
          to_email: "ayushrajputsingh.08@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitStatus('success');
          setErrors({});
          setTouched({});

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setSubmitStatus('error');
          console.error(error);

          // Clear error message after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        }
      );
  };

  return (
    <div className="xl:mt-12">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <h2 className="typography-h2 uppercase tracking-wide" style={{color: 'white'}}>Contact</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h3 className="typography-h3 text-body mb-40">Let's turn your 'what ifs' into 'it works'</h3>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="typography-body text-body">+49 1525 9857962</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="typography-body text-body">ayushrajputsingh.08@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="typography-body text-body">Berlin, Germany</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                    className={`py-3 px-4 placeholder:text-accent text-body rounded-lg outline-none border transition-colors duration-200 typography-body ${
                      errors.name && touched.name
                        ? "border-red-500 bg-red-50 focus:border-red-500"
                        : "bg-accent-subtle border-accent/20 focus:border-accent/40"
                    }`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={`py-3 px-4 placeholder:text-accent text-body rounded-lg outline-none border transition-colors duration-200 typography-body ${
                      errors.email && touched.email
                        ? "border-red-500 bg-red-50 focus:border-red-500"
                        : "bg-accent-subtle border-accent/20 focus:border-accent/40"
                    }`}
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full py-3 px-4 placeholder:text-accent text-body rounded-lg outline-none border bg-accent-subtle border-accent/20 focus:border-accent/40 transition-colors duration-200 typography-body"
                />
                
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                  className={`w-full py-3 px-4 placeholder:text-accent text-body rounded-lg outline-none border transition-colors duration-200 typography-body resize-none ${
                    errors.message && touched.message
                      ? "border-red-500 bg-red-50 focus:border-red-500"
                      : "bg-accent-subtle border-accent/20 focus:border-accent/40"
                  }`}
                  required
                />
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : submitStatus === 'error'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-accent text-white hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed'
                  }`}
                >
                  {loading ? "Sending..." : 
                   submitStatus === 'success' ? "Message Sent!" :
                   submitStatus === 'error' ? "Try Again" :
                   "Submit"}
                </button>
              </form>
            </div>
          </div>

        {/* Success/Error Status Messages */}
        {submitStatus && (
          <div className={`mt-6 p-4 rounded-lg border transition-all duration-300 ${
            submitStatus === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <p className="typography-body font-medium">
                {submitStatus === 'success' 
                  ? 'Thank you! I\'ll get back to you as soon as possible.' 
                  : 'Something went wrong. Please try again or contact me directly.'}
              </p>
            </div>
          </div>
        )}

        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
