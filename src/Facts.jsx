import React, { useState, useEffect } from "react";

function Facts() {
  const [countExp, setCount] = useState(0);
  const [countMembers, setCountMembers] = useState(0);
  const [countSatisfiedClients, setCountSatisfiedClients] = useState(0);
  const [countCompleteProjects, setCountCompleteProjects] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (countExp < 5) {
        setCount((prevCountExp) => prevCountExp + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [countExp]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countMembers < 30) {
        setCountMembers((prevCountExp) => prevCountExp + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [countMembers]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countSatisfiedClients < 100) {
        setCountSatisfiedClients((prevCountExp) => prevCountExp + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [countSatisfiedClients]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countCompleteProjects < 500) {
        setCountCompleteProjects((prevCountExp) => prevCountExp + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [countCompleteProjects]);

  return (
    <>
      <div
        class="container-xxl bg-primary fact py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container py-5 px-lg-5">
          <div class="row g-4">
            <div
              class="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <i class="fa fa-certificate fa-3x text-secondary mb-3"></i>
              <h1 class="text-white mb-2" data-toggle="counter-up">
                {countExp !== 5 && <div>{countExp}+</div>}
                {countExp === 5 && <div>{countExp}+</div>}
              </h1>
              <p class="text-white mb-0">Years Experience</p>
            </div>
            <div
              class="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <i class="fa fa-users-cog fa-3x text-secondary mb-3"></i>
              <h1 class="text-white mb-2" data-toggle="counter-up">
                {countMembers !== 30 && <div>{countMembers}+</div>}
                {countMembers === 30 && <div>{countMembers}+</div>}
              </h1>
              <p class="text-white mb-0">Total number of Workshops conducted</p>
            </div>
            <div
              class="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <i class="fa fa-users fa-3x text-secondary mb-3"></i>
              <h1 class="text-white mb-2" data-toggle="counter-up">
                {countSatisfiedClients !== 10 && (
                  <div>{countSatisfiedClients}+</div>
                )}
                {countSatisfiedClients === 10 && (
                  <div>{countSatisfiedClients}+</div>
                )}
              </h1>
              <p class="text-white mb-0">Satisfied Clients</p>
            </div>
            <div
              class="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <i class="fa fa-check fa-3x text-secondary mb-3"></i>
              <h1 class="text-white mb-2" data-toggle="counter-up">
                {countCompleteProjects !== 10 && (
                  <div>{countCompleteProjects}+</div>
                )}
                {countCompleteProjects === 10 && (
                  <div>{countCompleteProjects}+</div>
                )}
              </h1>
              <p class="text-white mb-0">Complete Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facts;
