import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SixthSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(true);
  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(true);

  const handleClick = () => {
    if (!firstName) {
      setValidFirstName(false);
    } else {
      setValidFirstName(true);
    }

    if (!lastName) {
      setValidLastName(false);
    } else {
      setValidLastName(true);
    }

    if (!email) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }

    if (!message) {
      setValidMessage(false);
    } else {
      setValidMessage(true);
    }

    if (firstName && lastName && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 min-h-screen"
      id="contact"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -1000,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: "all 0.01s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        viewport={{ once: true, margin: "-200px" }}
      >
        <h1 className="text-4xl md:text-5xl py-4 px-4">Contact Us</h1>
        <h3 className="text-xl px-4 text-balance">
          Have questions or need assistance? Contact our friendly support team.
          We're available to help you with anything from product inquiries to
          technical support. <br /> Reach out to us via email, phone, or live
          chat.
        </h3>
      </motion.div>
      {submitted ? (
        <>
          <div className="flex flex-col justify-center items-center mt-24">
            <div className="text-green-600 md:text-2xl font-medium">
              Form has been successfully submitted.
            </div>
            <div className="text-light text-balance mt-8">
              Our team will contact you shortly!
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[350px] md:max-w-[800px] lg:min-w-[900px] mx-auto mt-12 flex flex-col gap-2 md:gap-4 px-4">
            <div className="flex justify-center items-center w-full mx-auto gap-2">
              <div className="flex flex-col w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none py-2 px-1 md:px-4 border border-solid border-black/15 rounded-lg w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div
                  className={`text-sm font-semibold text-red-600 ml-2 ${
                    !validFirstName ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Please enter a valid first name.
                </div>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none py-2 px-1 md:px-4 border border-solid border-black/15 rounded-lg w-full mt-[4px]"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div
                  className={`text-sm font-semibold text-red-600 ml-6 ${
                    !validLastName ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Please enter a valid last name.
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  className="outline-none py-2 px-4 border border-solid border-black/15 rounded-lg w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className={`text-sm font-semibold text-red-600 ml-2 ${
                    !validEmail ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Please enter a valid email.
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col gap-1 w-full">
                <textarea
                  name="xyz"
                  placeholder="Your Message..."
                  cols="30"
                  rows="10"
                  className="outline-none py-2 px-4 border border-solid border-black/15 rounded-lg w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div
                  className={`text-sm font-semibold text-red-600 ml-2 ${
                    !validMessage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Please enter a valid message.
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center ">
              <Button onClick={handleClick}>Submit</Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SixthSection;
