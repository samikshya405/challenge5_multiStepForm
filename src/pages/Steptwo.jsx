import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

import "./StepTwo.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlan, setTime } from "../Redux/infoSLice";

const plans = [
  { name: "Arcade", price: 9, img: arcade },
  { name: "Advanced", price: 12, img: advanced },
  { name: "Pro", price: 15, img: pro },
];
const Steptwo = () => {
  const [selection, setSelection] = useState("Monthly");
  const [selectedPlan, setSelectedPlan] = useState(0);
  const {plan} = useSelector(state=>state.info)
  const navigate = useNavigate();
  const dispatch=useDispatch()

  useEffect(()=>{
    const index = plans.findIndex(item=>item.name ===plan.name)
    setSelectedPlan(index)
    setSelection(plan.time)

  },[])
  const handleSelection=()=>{
    if(selection==="Monthly"){
      setSelection("Yearly")
    }else{
      setSelection("Monthly")
    }

  }
  const handleClick = () => {
    

    dispatch(setPlan({...plans[selectedPlan],time:selection}))


    navigate("/stepThree");
  };
  return (
    <Layout
      indexNum={2}
      info={"Select your plan"}
      msg={"You have the option of monthly or yearly billing"}
    >
      <div className="d-flex grid gap-2 py-3 ">
        {/* <div className=" grid-box w-100 rounded px-3">
          <div>
            <img src={arcade} alt="" />
          </div>

          <div>
            <h5 className="fw-bold m-0">Arcade</h5>
            <p className="text-secondary">$9/mo</p>
          </div>
        </div> */}
        {plans.map((plan, index) => {
          return (
            <div
              key={index}
              className=" grid-box w-100 rounded px-3"
              style={{
                borderColor:
                  selectedPlan === index
                    ? "var(--purplishBlue)"
                    : "var(--lightGray)",
                backgroundColor:
                  selectedPlan === index ? "var(--mangolia)" : "inherit",
              }}
              onClick={() => setSelectedPlan(index)}
            >
              <div>
                <img src={plan.img} alt="" />
              </div>

              <div>
                <h5 className="fw-bold m-0">{plan.name}</h5>
                <p className="text-secondary">${plan.price}/mo</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="yearly d-flex justify-content-center align-items-center gap-3 rounded">
        <p
          className="m-0"
          style={{ fontWeight: selection ? "bold" : "inherit" }}
        >
          Monthly
        </p>
        <i
          className={`bi bi-toggle2-${selection==="Monthly" ? "off" : "on"} fs-3`}
          onClick={handleSelection}
        ></i>

        <p
          className="m-0"
          style={{ fontWeight: selection==="Yearly" ? "bold" : "inherit" }}
        >
          Yearly
        </p>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          Go Back
        </Link>
        <div>
          <Button onClick={handleClick}>Next Step</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Steptwo;
