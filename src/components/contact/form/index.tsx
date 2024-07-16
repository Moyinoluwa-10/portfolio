"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button, Input, Inputs } from "@/ui";
import { TelInput } from "@/ui/inputs/tel-input";

const ContactForm = () => {
  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          message: Yup.string().required("Required"),
          companyName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phoneNumber: Yup.string().test((value, ctx) => {
            if (!value) {
              return ctx.createError({ message: "Required" });
            } else if (!isPossiblePhoneNumber(value)) {
              return ctx.createError({ message: "Invalid phone number" });
            }
            return true;
          }),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const toastId = toast.loading("Sending your request...", {
            position: "top-right",
          });
          try {
            const response = await fetch("/api/waitlist", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ ...values }),
            });
            if (response.status === 500) {
              toast.error("An error occurred", {
                id: toastId,
              });
              setSubmitting(false);
              return;
            }
            const data = await response.json();
            if (data.code === 200) {
              toast.success(data.message, {
                id: toastId,
              });
              resetForm();
              setSubmitting(false);
            } else {
              toast.error(data.message || "An error occurred", {
                id: toastId,
              });
              setSubmitting(false);
            }
          } catch (error) {
            toast.error("An error occurred", {
              id: toastId,
            });
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleChange, errors, touched }) => (
          <Form className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Input
                type={Inputs.text}
                name="firstName"
                id="firstName"
                label={"First Name"}
                placeholder="First Name"
              />
              <Input
                type={Inputs.text}
                name="lastName"
                id="lastName"
                label={"Last Name"}
                placeholder="Last Name"
              />
            </div>
            <Input
              type={Inputs.email}
              name="email"
              id="email"
              label={"Email"}
              placeholder="example@email.com"
            />
            <TelInput
              errors={errors}
              touched={touched}
              onChange={async (phone) =>
                handleChange({
                  target: { name: "phoneNumber", value: phone },
                })
              }
              value={values.phoneNumber}
              label={"Phone Number:"}
              name={"phoneNumber"}
              id={"phoneNumber"}
            />
            <Input
              type={Inputs.textarea}
              name="message"
              id="message"
              label={"Message"}
              rows={7}
              placeholder="Leave me a message......."
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 max-w-80"
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
