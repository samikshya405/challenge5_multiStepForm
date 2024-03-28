import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../component/CustomInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../Redux/infoSLice";

const inputs = [
  {
    name: "name",
    label: "Name",
    placeholder: "e.g. john",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "abc@gmail.com",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "e.g. 68757586758",
    type: "number",
    required: true,
  },
];

const StepOne = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {info} = useSelector(state=>state.info)
  const [formData, setformData] = useState({
    name:info?.name,
    email:info?.email,
    phone:info?.phone
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInfo(formData))

    navigate("/steptwo");
  };

  return (
    <Layout
      indexNum={1}
      info={"Personal Info"}
      msg={"Please provide your name, email address and phone number "}
    >
      <Form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          return (
            <CustomInput key={input.name} {...input} onChange={handleChange} value={formData[input.name]}  />
          );
        })}

        <div className="text-end mt-5">
          <Button type="submit">Next step</Button>
        </div>
      </Form>
    </Layout>
  );
};

export default StepOne;
