import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowBigLeft } from "lucide-react";
import { useTheme } from "./ThemeContext";

{
  /* <ArrowBigLeft /> */
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  terms: Yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});

const MyForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    terms: false,
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  const { isDarkTheme } = useTheme();
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">Add Trip</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Patient Information</h1>
          <div className="flex items-center mb-4">
            <label
              htmlFor="name"
              className={`block w-24 text-sm font-medium  ${
                isDarkTheme ? "text-white" : "text-gray-600"
              }`}
            >
              Patient Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-[80%] p-2 mt-1 border rounded-md"
            />
            <button
              type="button"
              onClick={() => {
                // Handle button click logic here
                console.log("Button clicked");
              }}
              className="p-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              <ArrowBigLeft />
            </button>
            <ErrorMessage
              name="name"
              component="div"
              className="w-32 ml-1 text-sm text-red-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="name"
              className={`block w-24 text-sm font-medium  ${
                isDarkTheme ? "text-white" : "text-gray-600"
              }`}
            >
              Patient Phone No:
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-[80%] p-2 mt-1 border rounded-md"
            />
            <button
              type="button"
              onClick={() => {
                // Handle button click logic here
                console.log("Button clicked");
              }}
              className="p-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              <ArrowBigLeft />
            </button>
            <ErrorMessage
              name="phone"
              component="div"
              className="w-32 ml-1 text-sm text-red-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="name"
              className={`block w-24 text-sm font-medium ${
                isDarkTheme ? "text-white" : "text-gray-600"
              }`}
            >
              Email
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className="w-[80%] p-2 mt-1 border rounded-md"
            />

            <ErrorMessage
              name="email"
              component="div"
              className="w-32 ml-1 text-sm text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <Field
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2 border rounded-md"
              />
              <span className="text-sm text-gray-600">
                I accept the terms and conditions
              </span>
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default MyForm;
