import { useState } from "react";
import "reactjs-popup/dist/index.css";

function App() {
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Select any");
  const [address, setAddress] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fnameError, setfNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [pinCodeError, setpinCodeError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");

  const validate = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phoneNumber === "" ||
      password === "" ||
      fname === "" ||
      dob === "" ||
      address === "" ||
      pinCode === ""
    ) {
      setEmptyError("**All fields are mandatory");
      setUsername("");
      return false;
    }
    if (!name.match(/^[A-Za-z0-9]+$/)) {
      setNameError("!!Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!fname.match(/^[A-Za-z0-9]+$/)) {
      setfNameError("!!Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!email.includes("@")) {
      setEmailError("!!Email must contain @");
      setUsername("");
      return false;
    }
    if (!email.includes(".com" || ".in")) {
      setEmailError("!!Email is invalid");
      setUsername("");
      return false;
    }
    if (
      !dob.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
    ) {
      setDobError("!!Invalid Date of Birth");
      setUsername("");
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("!!Please select gender");
      setUsername("");
      return false;
    }
    if (!address.match(/^[A-Za-z0-9]+$/)) {
      setAddressError("!!Address is not alphanumeric");
      setUsername("");
      return false;
    }
    if (pinCode.length !== 6 || !pinCode.match(/^[0-9]+$/)) {
      setpinCodeError("!!Invalid Pin Code");
      setUsername("");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]+$/)) {
      setPhoneNumberError("!!Phone Number must contain only digits");
      setUsername("");
      return false;
    }
    if (phoneNumber.length !== 10) {
      setPhoneNumberError("!!Phone Number must contain 10 digits");
      setUsername("");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("!!Password must contain atleast 6 digits");
      setUsername("");
      return false;
    }
    return true;
  };
  const resetErrorDefault = () => {
    setNameError("");
    setfNameError("");
    setEmptyError("");
    setEmailError("");
    setDobError("");
    setGenderError("");
    setAddressError("");
    setpinCodeError("");
    setPhoneNumberError("");
    setPasswordError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if (isValid) {
      setName("");
      setfName("");
      setEmail("");
      setDob("");
      setGender("Select Any");
      setPassword("");
      setAddress("");
      setpinCode("");
      setPhoneNumber("");
      resetErrorDefault();
      setUsername(name);
    }
  };
  return (
    <section className="section-center">
      <div className="App">
        <h2
          style={{ textAlign: "center", marginBottom: "2rem", color: "brown" }}
        >
          SCHOOL REGISTRATION FORM
        </h2>
        <form onSubmit={handleSubmit}>
          <strong>
            <label for="name">Name : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "8rem" }}
            type="text"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <h6
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {nameError}
          </h6>
          <br />
          <strong>
            <label for="fname">Father's Name : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "4.1rem" }}
            className="space"
            type="text"
            placeholder="Full Name"
            id="fname"
            value={fname}
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />{" "}
          <h6
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {fnameError}
          </h6>
          <br />
          <strong>
            <label for="email">Email : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "8.3rem" }}
            className="space"
            id="email"
            placeholder="Email Address"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <h6
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {emailError}
          </h6>
          <br />
          <strong>
            <label for="dob">Date of Birth : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "4.8rem" }}
            className="space"
            id="dob"
            value={dob}
            placeholder="dd-mm-yyyy"
            type="text"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />{" "}
          <h6
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {dobError}
          </h6>
          <br />
          <strong>
            <label for="gender">Gender : </label>{" "}
          </strong>
          <select
            style={{ marginLeft: "10.8rem" }}
            className="space"
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="Select Any" selected>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <h6
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {genderError}
          </h6>
          <br />
          <strong>
            <label for="address">Address : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "7.1rem" }}
            className="space"
            type="text"
            placeholder="Residential Address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />{" "}
          <h6
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {addressError}
          </h6>
          <br />
          <strong>
            <label for="pincode">Pin Code : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "6.7rem" }}
            className="space"
            type="text"
            placeholder="Pin Code"
            id="pincode"
            value={pinCode}
            onChange={(e) => {
              setpinCode(e.target.value);
            }}
          />{" "}
          <h6
            className="space"
            style={{ display: "inline", float: "right", marginRight: "1rem" }}
          >
            {pinCodeError}
          </h6>
          <br />
          <strong>
            <label for="number">Phone Number : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "3.8rem" }}
            className="space"
            id="number"
            placeholder="### ### ####"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <h6
            className="space"
            style={{
              display: "inline",
              float: "right",
              marginRight: "1rem",
              marginTop: "0.7rem",
            }}
          >
            {phoneNumberError}
          </h6>
          <br />
          <strong>
            <label for="passwd">Password : </label>{" "}
          </strong>
          <input
            style={{ marginLeft: "6.5rem" }}
            className="space"
            id="passwd"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h6
            className="space"
            style={{
              display: "inline",
              float: "right",
              marginRight: "1rem",
              marginTop: "0.7rem",
            }}
          >
            {passwordError}
          </h6>
          <br />
          <br />
          <br />
          <div className="text-center">
            <button className="btn btn-info" type="submit">
              SUBMIT
            </button>
          </div>
          <h6 style={{ textAlign: "center" }}>{emptyError}</h6>
        </form>
        <div>
          <h2 style={{ textAlign: "center", color: "crimson" }}>
            {username ? "Details submitted successfully!!!" : ""}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default App;
