"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

const Counters = () => {
  useEffect(() => {
    displayCounts();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="p-5">
          <i className="fa-regular fa-face-smile text-4xl pr-5"></i>
          <span className="num font-bold text-4xl" data-val="3835039">
            000
          </span>
          <h5 className="pt-2">
            Organic Reach <span className="text">(Global)</span>
          </h5>
        </div>
        <div className="p-5">
          <i className="fa-regular fa-clock text-4xl pr-5"></i>
          <span className="num font-bold text-4xl" data-val="1481">
            000
          </span>
          <h5 className="pt-2">
            Watch Hours <span className="text">(Asia)</span>
          </h5>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-5">
          <i className="fa-solid fa-campground text-4xl pr-5"></i>
          <span className="num font-bold text-4xl" data-val="85">
            000
          </span>
          <h5 className="pt-2">Campaigns</h5>
        </div>
        <div className="p-5">
          <i className="fa-solid fa-globe text-4xl pr-5"></i>
          <span className="num font-bold text-4xl" data-val="17">
            000
          </span>
          <h5 className="pt-2">
            Excellent CTR % <span className="text">(Asia)</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

function displayCounts() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    // let duration = Math.floor(interval / endValue);
    let duration = 0.0005;
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

export default Counters;
