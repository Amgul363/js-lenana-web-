import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Reach out with any questions, concerns, or feedback.</p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h3>School Contact Info</h3>
          <p><strong>Phone:</strong> +254 712 345678</p>
          <p><strong>Email:</strong> lenanajss@school.ac.ke</p>
          <p><strong>Address:</strong> Lenana Area, Narok County, Kenya</p>
        </div>
      </section>

      <section className="map-placeholder">
        <p>Map Location (Coming soon)</p>
      </section>
    </div>
  )
}
