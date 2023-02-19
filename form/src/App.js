import FormInput from "./component/FormInput";
import { useState } from "react";
import "./app.css";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMassage:
        "Username should be 3-16 characters and should not contain any special characters ",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Your Email Address ",
      errorMassage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Birthday",
      type: "date",
      placeholder: "Birthday",
      errorMassage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter Your Password",
      errorMassage:
        "Password should be 8-20 characters and should include at least 1 letter character, 1 number and 1 special character",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "conformPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      errorMassage: "Passwords don't match ",
      label: "conform Password",
      pattern:values.password,
      required: true,
    },
  ];

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values )
  return (
    <div className="app">
      <form onSubmit={handelSubmit}>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
