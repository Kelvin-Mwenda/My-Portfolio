import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSending(true);
      try {
        // Send email using EmailJS
        await emailjs.send(
          "service_a3qsnwt", // Replace with your EmailJS Service ID
          "template_1jljpop", // Replace with your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "q2mp6RoJzyhngPMAL" // Replace with your EmailJS Public Key
        );

        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormErrors({
          name: "",
          email: "",
          message: "Failed to send message. Please try again.",
        });
      } finally {
        setIsSending(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kelvinmwendadoreen@gmail.com",
      link: "mailto:kelvinmwendadoreen@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 746917394",
      link: "tel:+254746917394",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "#",
    },
  ];

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="inline-block rounded-full bg-[#8B4513]/10 px-3 py-1 text-sm font-medium text-[#8B4513] mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's work together</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B4513]/10 text-[#8B4513]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <a href={item.link} className="text-muted-foreground hover:text-[#8B4513] transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Follow me</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/jinx_vinke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Kelvin-Mwenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelvin-mwenda-b4a632262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="glass p-12 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-[#8B4513]">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-muted-foreground max-w-md">
                  Your message has been sent successfully. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass p-8 rounded-2xl shadow-sm"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border ${formErrors.name ? "border-red-500" : "border-[#8B4513]/20"} bg-white/50 dark:bg-black/10 px-4 py-3 text-sm outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-colors`}
                        placeholder="Your name"
                      />
                      {formErrors.name && (
                        <div className="mt-1 flex items-center gap-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          <span>{formErrors.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border ${formErrors.email ? "border-red-500" : "border-[#8B4513]/20"} bg-white/50 dark:bg-black/10 px-4 py-3 text-sm outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-colors`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <div className="mt-1 flex items-center gap-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          <span>{formErrors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`block w-full rounded-lg border ${formErrors.message ? "border-red-500" : "border-[#8B4513]/20"} bg-white/50 dark:bg-black/10 px-4 py-3 text-sm outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-colors`}
                        placeholder="Your message..."
                      />
                      {formErrors.message && (
                        <div className="mt-1 flex items-center gap-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          <span>{formErrors.message}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-hover-effect w-full rounded-lg bg-[#8B4513] px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#8B4513]/90 focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20 disabled:opacity-70 transition-all"
                  >
                    {isSending ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;