import React from "react";
import "./Contact.css";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Aos from "aos";

Aos.init({ duration: 1500 });

const Contact = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please fill out this field";
    } else if (
      values.name.split(" ").length < 2 ||
      values.name.split[1] === " "
    ) {
      errors.name =
        'Please fill out this field in the format "Firstname Lastname"';
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
    onSubmit: (values, { resetForm }) => {
      const toastId = toast.loading("Loading...");
      const url = "https://mailer-lake.vercel.app/api/v1/send-email";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          if (result.status === true) {
            resetForm({ values: "" });
            values = formik.initialValues;
            toast.success("Message sent successfully", {
              id: toastId,
            });
          } else {
            toast.error("An error occured", {
              id: toastId,
            });
          }
        })
        .catch((err) => {
          toast.error("An error occured", {
            id: toastId,
          });
          console.log(err);
        });
    },
  });

  return (
    <div className="contact" id="contact">
      <h1 className="contact__heading" data-aos="zoom-in">
        Contact Me
      </h1>

      <form className="form" onSubmit={formik.handleSubmit} data-aos="zoom-in">
        <div className="feedback-title">
          <p>Need a service, want to collaborate or just want to say hello?</p>
          <h3>Send A Message</h3>
        </div>
        <div className="form-group">
          <div className="form-control">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Full Name"
              className="input"
              {...formik.getFieldProps("name")}
            />
            <label htmlFor="name" className="label">
              Full Name
            </label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <div className="form-control">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="input"
              {...formik.getFieldProps("email")}
            />
            <label htmlFor="email" className="label">
              Email Address
            </label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <div className="form-control">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
              placeholder="Message"
              className="textarea"
              {...formik.getFieldProps("message")}
            ></textarea>
            <label htmlFor="message" className="label">
              Message
            </label>
          </div>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="form-group">
          <button type="submit" className="btn">
            <p>Send</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
