import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { ArrowBigLeft } from "lucide-react";
import { useTheme } from "./ThemeContext";
import axios from "axios";
import Button from "./Button";

{
  /* <ArrowBigLeft /> */
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  terms: Yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});
const initialValues = {
  name: "",
  email: "",
  phone: "",
  terms: false,
};
const MyForm = () => {
  const formik = useFormikContext();

  const fetchPatient = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      console.log(response);

      // Check if formik is defined before calling setFieldValue
      if (formik) {
        formik.setFieldValue("name", response.data.name);
      } else {
        console.error("formik is undefined");
      }
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  const { isDarkTheme } = useTheme();
  return (
    <>
      <h2 className="text-2xl font-semibold">Add Trip</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className="mt-2 mb-4 text-xl font-semibold">
            Patient Information
          </h1>
          <div className="flex items-center mb-2">
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
            {/* <button
              type="button"
              onClick={fetchPatient}
              className={`p-2 ml-2 ${
                isDarkTheme
                  ? "text-black bg-[#9af7a1]"
                  : "text-white bg-blue-500 hover:bg-blue-600"
              }    rounded-md `}
            >
              <ArrowBigLeft />
            </button> */}
            <Button type="button" onClick={fetchPatient}>
              {" "}
              <ArrowBigLeft />
            </Button>
            <ErrorMessage
              name="name"
              component="div"
              className="w-32 ml-1 text-sm text-red-500"
            />
          </div>
          <div className="flex items-center mb-2">
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
            {/* <button
              type="button"
              onClick={() => {
                // Handle button click logic here
                console.log("Button clicked");
              }}
              className={`p-2 ml-2 ${
                isDarkTheme
                  ? "text-black bg-[#9af7a1]"
                  : "text-white bg-blue-500 hover:bg-blue-600"
              }    rounded-md `}
            >
              <ArrowBigLeft />
            </button> */}
            <Button
              type="button"
              onClick={() => {
                console.log("Button clicked");
              }}
            >
              {" "}
              <ArrowBigLeft />
            </Button>
            <ErrorMessage
              name="phone"
              component="div"
              className="w-32 ml-1 text-sm text-red-500"
            />
          </div>
          <div className="flex items-center mb-2">
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

          <div className="mt-2 mb-4">
            <label className="flex items-center justify-end ">
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
            {/* <button
              type="submit"
              className={`p-2 ml-2 ${
                isDarkTheme
                  ? "text-black bg-[#9af7a1]"
                  : "text-white bg-blue-500 hover:bg-blue-600"
              }    rounded-md text-bold`}
            >
              Submit
            </button> */}
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default MyForm;
