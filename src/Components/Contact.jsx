import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please fill out this field";
    } else if (
      values.name.split(" ").length < 2 &&
      values.name.split[1] !== ""
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
      setIsSubmitting(true);
      const url = "https://mailer-lake.vercel.app/api/v0/send-email";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      })
        .then((response) => response.json())
        .then((result) => {
          setIsSubmitting(false);
          // console.log(result);
          if (result.status === true) {
            resetForm({ values: "" });
            values = formik.initialValues;
            toast.success("Message sent successfully", {
              id: toastId,
            });
          } else {
            toast.error("An error occurred", {
              id: toastId,
            });
          }
        }) // eslint-disable-next-line
        .catch((err) => {
          setIsSubmitting(true);
          toast.error("An error occurred", {
            id: toastId,
          });
          // console.log(err);
        });
    },
  });

  return (
    <div
      className="contact py-12 px-8 md:px-12 bg-light dark:bg-dark text-black dark:text-white"
      id="contact"
    >
      <h1
        className="text-4xl md:text-5xl text-center mb-5 md:mb-0 text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        Contact Me
      </h1>

      <form
        className="form w-full px-0 md:px-12 pb-10 md:py-9 placeholder:text-sm placeholder:opacity-90 placeholder:text-faded-black dark:placeholder:text-faded-white font-normal"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-1 text-black dark:text-white">
          <p data-aos="fade-up">
            Need a service, want to collaborate or just want to say hello?
          </p>
          <h3 className="mb-5 text-2xl" data-aos="fade-up">
            Send A Message
          </h3>
        </div>
        <div className="mb-5" data-aos="zoom-in">
          <div className="flex flex-col-reverse">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Full Name"
              className="input px-5 py-3 border border-black dark:border-white text-black rounded-xl w-full text-base font-medium transition-normal focus:border-2"
              {...formik.getFieldProps("name")}
            />
            <label
              htmlFor="name"
              className="label text-black dark:text-white mb-1 font-semibold block transition-normal"
            >
              Full Name
            </label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-5" data-aos="zoom-in">
          <div className="flex flex-col-reverse">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="input px-5 py-3 border border-black dark:border-white text-black rounded-xl w-full text-base font-medium transition-normal focus:border-2"
              {...formik.getFieldProps("email")}
            />
            <label
              htmlFor="email"
              className="label text-black dark:text-white mb-1 font-semibold block transition-normal"
            >
              Email Address
            </label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-5" data-aos="zoom-in">
          <div className="flex flex-col-reverse">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
              placeholder="Message"
              className="textarea px-5 py-3 border border-black dark:border-white text-black rounded-xl w-full text-base font-medium transition-normal focus:border-2 resize-none h-64"
              {...formik.getFieldProps("message")}
            ></textarea>
            <label
              htmlFor="message"
              className="label text-black dark:text-white mb-1 font-semibold block transition-normal"
            >
              Message
            </label>
          </div>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="mb-5" data-aos="zoom-in">
          <button
            type="submit"
            className="btn px-10 py-4 bg-blue-very-light dark:bg-blue-dark border border-blue-dark dark:border-blue-very-light outline-none font-bold transition-normal cursor-pointer relative h-14 disabled:cursor-not-allowed text-blue-very-light dark:text-blue-dark z-[2] overflow-hidden before:bg-blue-dark dark:before:bg-blue-very-light before:absolute before:top-0 before:left-0 before:w-full before:h-full translate-x-[0%] before:z-[-1] hover:text-blue-dark dark:hover:text-blue-very-light hover:before:translate-x-[100%] active:scale-95"
            disabled={isSubmitting}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
