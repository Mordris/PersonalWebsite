// contact.js
import React, { useState } from "react";

const Contact = () => {
  const [error, setError] = useState(null);

  const handleSendEmail = () => {
    try {
      const receiverEmail = "yemregultepe@gmail.com";
      window.location.href = `mailto:${receiverEmail}`;
    } catch (error) {
      console.error("Error sending email:", error);
      setError("An error occurred while sending the email.");
    }
  };

  const handleCall = () => {
    try {
      const phoneNumber = "+90 538 072 8983";
      window.location.href = `tel:${phoneNumber}`;
    } catch (error) {
      console.error("Error initiating phone call:", error);
      setError("An error occurred while initiating the phone call.");
    }
  };

  return (
    <section className="py-10">
      <div>
        <h3
          className="text-4xl py-2"
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          Contact
        </h3>
        <p
          className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200"
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          Have a question or want to discuss a project? Feel free to reach out
          to me by email or phone. Click the buttons below to send me an email
          or give me a call.
        </p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 rounded-md hover:shadow-2xl hover:shadow-cyan-600 text-white cursor-pointer dark:hover:shadow-teal-500 hover:text-gray-800 transition duration-500 mr-4"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 rounded-md hover:shadow-2xl hover:shadow-cyan-600 text-white cursor-pointer dark:hover:shadow-teal-500 hover:text-gray-800 transition duration-500"
          onClick={handleCall}
        >
          Call Now
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-800 dark:text-gray-200">
          Email: yemregultepe@gmail.com
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          Tel: +90 538 072 8983
        </p>
      </div>
    </section>
  );
};

export default Contact;
