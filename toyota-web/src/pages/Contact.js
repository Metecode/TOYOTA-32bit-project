import { Formik, Form, Field, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";
import { useEffect } from "react";
import { SampleSchema, ContactSchema } from "../validations";

const AutoSubmitCode = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {
    if (values.code.length === 6) {
      submitForm();
    }
  }, [values]);
  return null;
};

export default function Contact() {
  return (
    <div>
      Contact page
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SampleSchema}
      >
        {({ values }) => (
          <Form className="hidden">
            <Input label="Kodu Girin" name="code"></Input> 
            <button type="submit">Gonder</button>
            <AutoSubmitCode></AutoSubmitCode>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={{
          name: "",
          about: "",
          accept: false,
          gender: 1,
          avatar: "",
          skills: [],
          level: "sr",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ContactSchema}
      >
        {({ values }) => (
          <Form className="p-6 m-4 shadow=lg grid gap-y-4 border rounded p-4">
            <Input label="ad-soyad" name="name"/> 
            <Textarea label="Hakkimda" rows={5} name="about" /> 
            <Checkbox label="Kurallari kabul ediyorum!" name="accept" />
            <Select
              label="Cinsiyet"
              name="gender"
              options={[
                { key: 1, value: "Kadin" },
                { key: 2, value: "Erkek" },
              ]}
            />{" "}
            
            <Field component="select" name="skills" multiple={true}>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="php">php</option>
              <option value="c++">c++</option>
            </Field>
            <File label="Avatar" name="avatar" />
            <Radio
              label="Seviyenizi secin"
              name="level"
              options={[
                { key: "jr", value: "Jr. Developer" },
                { key: "sr", value: "Sr. Developer" },
                { key: "ninja", value: "Ninja" },
              ]}
            />
            <button
              className="h-10 rounded bg-black text-sm text-white px-5"
              type="submit"
            >
              Gonder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
