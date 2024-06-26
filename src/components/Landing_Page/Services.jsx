import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faBuildingWheat } from "@fortawesome/free-solid-svg-icons";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

function Services() {
  let data = [
    {
      icon: faTruck,
      title: "Fast Delivery",
      description:
        "Efficient delivery services to ensure your package reaches you promptly. We prioritize speed and reliability in every shipment.",
    },
    {
      icon: faBuildingWheat,
      title: "Local Pickup Points",
      description:
        "Convenient local pickup points available for those who prefer to collect their packages in person. Find a nearby location for easy access.",
    },
    {
      icon: faRoute,
      title: "Track and Trace",
      description:
        "Stay informed about your delivery with our advanced tracking system. Monitor your package's journey from the dispatch point to your doorstep.",
    },
  ];

  return (
    <>
      {/* <h1 className='plans_h1'>Our Services...</h1> */}

      <main className="py-5 " id="services">
        <article className="container px-5 my-5">
          <div className="row gx-5">
            {data.map((data, i) => {
              return (
                <section key={i} className="col-lg-4 mb-5 mb-lg-0">
                  <div className="service_icon bg-success bg-gradient text-white rounded-3 mb-3">
                    <FontAwesomeIcon icon={data.icon} />
                  </div>
                  <h2 className="h4 fw-bolder">{data.title}</h2>
                  <p>{data.description}</p>
                  <a className="text-decoration-none" href="#!">
                    Explore {data.title}
                  </a>
                </section>
              );
            })}

            <section className="col-lg-12 mt-5">
              <h2 className="h2 fw-bolder">About Our Delivery Service</h2>
              <p>
                We are dedicated to providing exceptional delivery services,
                ensuring your packages are handled with care and delivered to
                you in the most efficient manner.
              </p>
              <p>
                Our team is committed to customer satisfaction, and we strive to
                exceed your expectations with every delivery. Whether it's fast
                shipping, convenient local pickup, or advanced tracking, we've
                got you covered.
              </p>
              <a className="text-decoration-none" href="#!">
                Learn More About Us
                <i className="bi bi-arrow-right" />
              </a>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

export default Services;
