import React, { useEffect } from "react";
import Layout from "../component/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const StepFour = () => {
    const navigate=useNavigate()
    const {plan,services} = useSelector(state=>state.info)
    const handleClick=()=>{
        navigate('/success')

    }
    
    const sum = services.reduce((a,b)=>{
      return a+b.price

    },0)
    const total = plan.price + sum
  return (
    <Layout
      indexNum={4}
      info={"Finishing up"}
      msg={"Double-check everything looks OK before confirming."}
    >
        <div className="p-4 rounded " style={{background:'var(--mangolia)'}}>
      <div className="d-flex justify-content-between">
        <div >
          <h5 className="text-primary fs-bold">{plan.name}({plan.time})</h5>
          <Link>Change</Link>
        </div>
        <p className="text-primary">${plan.price}/mo</p>
      </div>
      <hr />
      
      {
        services.map((item,index)=>{
          return <div key={index} className="d-flex justify-content-between">
          <p className="text-secondary">{item.name}</p>
          <p>+${item.price}/mo</p>
        </div>
        })
      }
      
      </div>
      <div className="p-4 d-flex justify-content-between">
        <p className="text-secondary">Total (per month)</p>
        <p className="text-primary">+${total}/mo</p>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <Link style={{textDecoration:'none', color:'inherit'}} to='/stepThree'>Go Back</Link>
        <div>
        <Button onClick={handleClick}>Confirm</Button>

        </div>
        
      </div>
    </Layout>
  );
};

export default StepFour;
