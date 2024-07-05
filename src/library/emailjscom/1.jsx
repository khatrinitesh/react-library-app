import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailJSComApp = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
      });
    
      // HANDLE CHANGE
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // HANDLE SUBMIT
      const sendEmail = (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
          return;
        }
    
        emailjs
          .send(
            "service_60pxdoy",
            "template_i5spdsn",
            formData,
            "a1u_zKxDNiJ_YgFY0"
          )
          .then(
            (response) => {
              toast.success("Email sent successfully!");
              setFormData({ from_name: "", from_email: "", message: "" }); // Reset form after successful submission
            })
            .catch((error) => {
              toast.error("Failed to send email. Please try again.");
            });
      };
    
      // Form validation
      const validateForm = () => {
        if (!formData.from_name.trim()) {
          toast.error("Name is required.");
          return false;
        }
        if (!formData.from_email.trim()) {
          toast.error("Email is required.");
          return false;
        }
        if (!formData.message.trim()) {
          toast.error("Message is required.");
          return false;
        }
        return true;
      };
    
  return (
    <>
      {" "}
      <form onSubmit={sendEmail}>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default EmailJSComApp;
