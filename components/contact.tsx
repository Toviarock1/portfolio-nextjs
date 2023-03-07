import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const currentForm = form.current;

    if (currentForm == null) return alert('please fill the form');

    emailjs
      .sendForm(
        'contact_form',
        'template_tgbw12l',
        currentForm,
        'user_C7Rc87pDIIjtLoqaZy1uo'
      )
      .then(
        (res) => {
          setLoading(false);
          console.log(res.text);
        },
        (err) => {
          setLoading(false);
          console.log(err.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>simontoviaadama@gmail.com</h5>
            <a
              href="mailto:simontoviaadama@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348056595398</h5>
            <a
              href="https://wa.me/2348056595398"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className={`${
              loading ? 'btndisable btn-disable' : 'btn btn-primary'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
