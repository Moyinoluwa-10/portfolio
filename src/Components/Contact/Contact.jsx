import React, { useState } from "react";
import "./Contact.css";
import PageLoader from "../Pageloader/PageLoader";

import { useFormik } from "formik";
import toast from "react-hot-toast";

import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1500 });

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please fill out this field";
    } else if (
      values.name.split(" ").length < 2 ||
      values.name.split[1] === " "
    ) {
      errors.name = "Please fill out this field in the proper format";
    }

    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Please fill out this field";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setIsLoading(true);
      const toastId = toast.loading("Loading...");
      const url = "https://mailer-lake.vercel.app/api/v1/send-emai";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === true) {
            // values.name = "";
            // values.email = "";
            // values.message = "";
            setIsLoading(false);
            toast.dismiss(toastId);
            toast.dismiss();
            toast.success(
              JSON.stringify("Message sent successfully", {
                id: toastId,
              })
            );
          } else {
            toast.dismiss(toastId);
            toast.dismiss();
            toast.error(
              JSON.stringify("Message Failed to Send", {
                id: toastId,
              })
            );
            // toast.error(JSON.stringify("Message Failed to Send", null, 2));
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast.dismiss();
          toast.error(
            JSON.stringify("An error occured", {
              id: toastId,
            })
          );
          console.log(err);
        });
    },
  });

  return (
    <div className="contact" id="contact">
      {isLoading && <PageLoader />}
      <h1 className="contact__heading" data-aos="zoom-in">
        Contact Me
      </h1>
      <form onSubmit={formik.handleSubmit} data-aos="zoom-in">
        <div className="feedback-title">
          <p>Need a Service?</p>
          <h3>Send A Message</h3>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="input"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="input"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            required
            placeholder="Message"
            className="textarea"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            Send
          </button>
        </div>

        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
      </form>
    </div>
  );
};

export default Contact;
