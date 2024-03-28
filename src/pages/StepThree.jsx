import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../Redux/infoSLice";

const options = [
  {
    name: "Online Service",
    info: "Access to multiplayer games",
    price: 1,
  },
  { name: "Larger storage", info: "Extra 1TB of cloud save", price: 2 },
  {
    name: "Customizable profile",
    info: "custome theme on your Profile",
    price: 3,
  },
];

const StepThree = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selection, setSelection] = useState([]);
  const { services } = useSelector((state) => state.info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions,
      ...services.map((item) => item.name),
    ]);
    setSelection(services)
  }, [services]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const a = options.find((item) => item.name === name);
    if (checked) {
      setSelectedOptions([...selectedOptions, name]);
      setSelection([...selection, a]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== name));
      setSelection(selection.filter((item) => item.name !== a.name));
    }
    console.log(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setServices(selection));
    navigate("/stepFour");
  };
  return (
    <Layout
      indexNum={3}
      info={"Pick add-ons"}
      msg={"Add-ons help enhance your gaming experience"}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className="d-flex flex-column gap-2">
            {options.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex justify-content-between p-3"
                  style={{
                    border: selectedOptions.includes(item.name)
                      ? "1px solid blue"
                      : "1px solid var(--lightGray)",
                  }}
                >
                  <div>
                    <Form.Check
                      type="checkbox"
                      name={item.name}
                      label={item.name}
                      checked={selectedOptions.includes(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <Form.Text>{item.info}</Form.Text>
                  </div>
                  <p className="text-primary">+${item.price}/mo</p>
                </div>
              );
            })}
          </div>
        </Form.Group>
        <div className="d-flex justify-content-between mt-5">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/steptwo"
          >
            Go Back
          </Link>
          <div>
            <Button type="submit">Next Step</Button>
          </div>
        </div>
      </Form>
    </Layout>
  );
};

export default StepThree;
