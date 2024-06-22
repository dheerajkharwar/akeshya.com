import { Card, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, subject, message]);

  // Validate form
  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!subject) {
      errors.subject = "Subject is required.";
    }
    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 20) {
      errors.message = "Lenght of the message is less than 20 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (e) => {
    validateForm();
    if (isFormValid) {
      e.preventDefault();
      let data = {
        name,
        email,
        subject,
        message,
      };
      fetch("https://akeshya-com-e0x.pages.dev/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-form">
      <div className="h-5">
        {submitted && (
          <p className="absolute top-70 right-0 text-green-900 font-bold px-5 py-2 w-fit bg-orange-50 rounded-md">
            Message Sent Successfully!
          </p>
        )}
      </div>
      <form method="post" className="mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <div className="h-5">
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <div className="h-5">
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="Subject"
          />
          <div className="h-5">
            {errors.subject && <p style={styles.error}>{errors.subject}</p>}
          </div>
          <textarea
            rows={3}
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Message"
          />
          <div className="h-5">
            {errors.message && <p style={styles.error}>{errors.message}</p>}
          </div>
        </div>
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="mt-2 bg-blue-900"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "25px",
    color: "green",
    textAlign: "center",
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
    transition: "border-color 0.2s ease",
  },
  button: {
    backgroundColor: "green",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    width: "40%",
    transition: "opacity 0.2s ease",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "6px",
  },
};
