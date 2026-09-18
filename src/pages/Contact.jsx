import { profile } from '../data/profile';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <div className="content-header"><h2 className="page-title">Contact</h2></div>
      <div className="page-body">
        <section className="contact">
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input placeholder="Full name" required type="text" name="name" />
                <input placeholder="Email address" required type="email" name="email" />
              </div>
              <input placeholder="Subject" required type="text" name="subject" />
              <textarea name="message" placeholder="Your message..." rows="6" required />
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            <div className="map-wrap">
              <iframe
                title={profile.location}
                src="https://www.google.com/maps?q=Ho%20Chi%20Minh%20City%2C%20Vietnam&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                style={{ border: 0, borderRadius: 14 }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
