import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Plans() {
  let plans = [
    {
      plan: "Standard",
      type: "Delivery in 2 Days",
      price: "$5",
      availability: "Everywhere in India",
      weight: "Max 25 kg",
      locations: "Everywhere in India",
      advantage: "Tracking status",
      reward: "Rewards",
      isReward: false,
      support: "Dedicated Phone Support",
      isSupport: false,
      delivery: "Home delevery",
      isDelivery: false,
      country: "All countries",
      isCountry: false,
    },
    {
      plan: "Priority",
      type: "Delivery in 2 Days",
      price: "$25",
      availability: "Everywhere in India",
      weight: "Max 25 kg",
      locations: "Everywhere in India",
      advantage: "Tracking status",
      reward: "Rewards",
      isReward: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      delivery: "Home delevery",
      isDelivery: true,
      country: "All countries",
      isCountry: false,
    },
    {
      plan: "express",
      type: "Delivery in 2 Days",
      price: "$49",
      availability: "Everywhere in India",
      weight: "Max 25 kg",
      locations: "Everywhere in India",
      advantage: "Tracking status",
      reward: "Rewards",
      isReward: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      delivery: "Home delevery",
      isDelivery: true,
      country: "All countries",
      isCountry: true,
    },
  ];

  return (
    <>
      <h1 className="plans_h1">Our best plans for you!</h1>

      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {plans.map((plans, i) => {
              return (
                <div key={i} className="col-lg-4">
                  <div id="plans" className="card mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-muted text-uppercase text-center">
                        {plans.plan}
                      </h5>
                      <h6 className="card-price text-center">
                        {plans.price}
                        <span className="period">/month</span>
                      </h6>
                      <hr />
                      <ul className="fa-ul">
                        <li>
                          <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          {plans.type}{" "}
                        </li>
                        <li>
                          <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>{" "}
                          {plans.availability}{" "}
                        </li>
                        <li>
                          <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>{" "}
                          {plans.weight}{" "}
                        </li>
                        <li>
                          <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>{" "}
                          {plans.locations}{" "}
                        </li>
                        <li>
                          <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>{" "}
                          {plans.advantage}{" "}
                        </li>
                        <li className={plans.isReward ? "" : "text-muted"}>
                          <span className="fa-li">
                            <FontAwesomeIcon
                              icon={plans.isReward ? faCheck : faXmark}
                            />{" "}
                          </span>{" "}
                          {plans.reward}{" "}
                        </li>
                        <li className={plans.isSupport ? "" : "text-muted"}>
                          <span className="fa-li">
                            <FontAwesomeIcon
                              icon={plans.isSupport ? faCheck : faXmark}
                            />{" "}
                          </span>{" "}
                          {plans.support}{" "}
                        </li>
                        <li className={plans.isDelivery ? "" : "text-muted"}>
                          <span className="fa-li">
                            <FontAwesomeIcon
                              icon={plans.isDelivery ? faCheck : faXmark}
                            />{" "}
                          </span>{" "}
                          {plans.delivery}{" "}
                        </li>
                        <li className={plans.isCountry ? "" : "text-muted"}>
                          <span className="fa-li">
                            <FontAwesomeIcon
                              icon={plans.isCountry ? faCheck : faXmark}
                            />{" "}
                          </span>{" "}
                          {plans.country}{" "}
                        </li>
                      </ul>
                      <div className="d-grid">
                        <a href="#" className="btn btn-success text-uppercase">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Plans;
