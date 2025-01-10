"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContactData from "./contactData";
import Link from "next/link";
import Spinner from "@/icons/spinner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false); // Hide the message after 5 seconds
      }, 5000); // 5000 milliseconds (5 seconds)

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setResponseMessage("Your message has been sent successfully!");
      } else {
        setResponseMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Failed to send the message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full sm:py-12 py-5 px-6">
      <section className="space-y-12">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 place-content-center sm:px-12">
          <div className={`p-6 text-left space-y-4`}>
            <h1 className="font-extrabold sm:text-[35px] text-[25px] text-center bg-opacity-35 bg-blend-multiply bg-gray-300 w-fit px-3 shadow-lg  text-gray-800 mb-8 font-shantell relative littleLine">
              Let&apos;s Connect 🧑‍🤝‍🧑🤝
            </h1>
            <div className="text-gray-600 space-y-4 text-lg leading-relaxed text-left pt-3">
              <p>
                I’m always excited to connect and collaborate on innovative
                software projects. Whether you have a question, want to discuss
                a potential opportunity, or just want to say hello, feel free to
                reach out.
              </p>
              <p>Let’s build something amazing together! </p>
              <div className="grid sm:grid-cols-7 grid-cols-4 place-content-center ">
                {ContactData.map((contact, index) => (
                  <Link
                    href={contact.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[40px] w-[40px]"
                  >
                    <Image
                      src={contact.icon}
                      height={50}
                      width={50}
                      alt={contact.name}
                      loading="lazy"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <form
            className={`flex flex-col sm:items-start sm:justify-start items-center justify-center  px-6 gap-5`}
            onSubmit={handleSubmit}
            method="POST"
            name="contact"
          >
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="h-[47px] w-full border-[1.5px] border-gray-400 rounded-md p-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="h-[47px] border-[1.5px] border-gray-400 rounded-md p-2 w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              className=" border-[1.5px] border-gray-400 rounded-md p-2 w-full"
              placeholder="Please enter your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="border-2 sm:p-3 p-2 w-fit flex items-center justify-center gap-2 font-bold rounded-[10px] border-[#7144d2] bg-[#7144d2] text-white  transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {isLoading && 
              <Spinner />
              }

              Get in touch
            </button>

            {showMessage && responseMessage && (
              <p className="text-[#7144d2] font-[500] animate-zoom">
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
