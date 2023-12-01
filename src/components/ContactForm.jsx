
const ContactForm = () => {
  return (
    <form method="post" action="https://formsubmit.co/innovtechclub.fstm@gmail.com" className="needs-validation" id="contact-form"
      novalidate>
      <div className="row gap-1">
        <div className="col-lg-12 col-12" data-aos="fade-right">
          <input type="text" className="form-control" name="name" placeholder="Your Name" id="validationCustom01" required />
          <div className="invalid-feedback">
            Please provide a valid name.
          </div>
        </div>
        <div className="col-lg-12 col-12" data-aos="fade-right">
          <input type="email" className="form-control" name="email" placeholder="Email" id="validationCustom02" required />
          <div className="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div className="col-lg-12 col-12" data-aos="fade-right">
          <input type="subject" className="form-control" name="subject" placeholder="Subject" id="validationCustom03"
            required />
          <div className="invalid-feedback">
            Please provide a valid subject.
          </div>
        </div>
        <div className="col-12" data-aos="fade-right">
          <textarea name="message" rows="6" className="form-control" id="validationCustom04" placeholder="Message"
            required></textarea>
          <div className="invalid-feedback">
            Please provide a valid message.
          </div>
        </div>
        <div className="ml-lg-auto col-lg-5 col-12" data-aos="fade-right">
          <button type="submit" className="form-control submit-btn btn btn-info">Send</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm