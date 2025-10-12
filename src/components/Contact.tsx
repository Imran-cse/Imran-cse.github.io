import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Sending message..." });

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mr-4">
            <span className="font-mono text-[var(--accent-primary)]">04.</span>{" "}
            What's Next?
          </h2>
          <div className="flex-1 h-px bg-[var(--border-light)]"></div>
        </div>

        <div className="space-y-8">
          {/* Main heading */}
          <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] text-center">
            Get In Touch
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed text-center">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-vertical"
                  placeholder="Hi Imran, I'd like to talk about..."
                />
              </div>

              {/* Form Status */}
              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-900/20 text-green-400 border border-green-400/20"
                      : formStatus.type === "error"
                      ? "bg-red-900/20 text-red-400 border border-red-400/20"
                      : "bg-blue-900/20 text-blue-400 border border-blue-400/20"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!isFormValid || formStatus.type === "loading"}
                  className={`inline-block px-8 py-4 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded font-mono text-sm transition-all ${
                    isFormValid && formStatus.type !== "loading"
                      ? "hover:bg-[var(--accent-primary)] hover:bg-opacity-10 hover:scale-105"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {formStatus.type === "loading"
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Alternative CTA */}
          <div className="text-center pt-8">
            <p className="text-[var(--text-secondary)] mb-4">
              Or simply send me an email:
            </p>
            <a
              href="mailto:imran.cse.ku@gmail.com"
              className="inline-block px-8 py-4 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded font-mono text-sm hover:bg-[var(--accent-primary)] hover:bg-opacity-10 transition-colors"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
