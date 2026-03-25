import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mgopwnyj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="row">
        <div className="twelve columns">
          <h2>Contact Me</h2>
          <p>
            Have a question or want to get in touch? Fill out the form below and
            I'll get back to you.
          </p>

          {status === "success" ? (
            <p><strong>Thanks for reaching out! I'll be in touch soon.</strong></p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="six columns">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Your message"
                rows="6"
                style={{ width: "100%" }}
              />

              {status === "error" && (
                <p style={{ color: "red" }}>
                  Something went wrong. Please try again or email me directly at{" "}
                  <a href="mailto:stmcallister@gmail.com">stmcallister@gmail.com</a>.
                </p>
              )}

              <button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
