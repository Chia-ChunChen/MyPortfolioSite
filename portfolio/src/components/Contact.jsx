export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been recorded (demo).");
  };

  return (
    <div className="page">
      <h2>Contact</h2>
      <p className="muted">
        If you’d like to connect, feel free to send me a message.
      </p>

      <div className="contactGrid">
        {/* Left: info */}
        <div className="contactCard">
          <h3>Contact Details</h3>

          <div className="contactItem">
            <span className="contactLabel">Email</span>
            <a className="contactValue" href="mailto:cchen199@my.centennialcollege.ca">
              cchen199@my.centennialcollege.ca
            </a>
          </div>

          <div className="contactItem">
            <span className="contactLabel">Location</span>
            <span className="contactValue">Toronto, ON</span>
          </div>
        </div>

        {/* Right: form */}
        <div className="contactCard">
          <h3>Send a Message</h3>

          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <div className="field">
                <label>First Name</label>
                <input type="text" placeholder="Chia Chun" required />
              </div>

              <div className="field">
                <label>Last Name</label>
                <input type="text" placeholder="Chen" required />
              </div>
            </div>

            <div className="formRow">
              <div className="field">
                <label>Contact Number</label>
                <input type="tel" placeholder="(xxx) xxx-xxxx" />
              </div>

              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message here..." required />
            </div>

            <button className="btnPrimary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
