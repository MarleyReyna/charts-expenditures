import React from "react";
import Data from "../Data";
import "./Main.scss";

const Main = () => {
  const getHeight = (value) => {
    return value * 2.864782276546;
  };

  const maxColor = (value) => {
    if (value !== Math.max(...Data.map((x) => x.amount))) {
      return "orange";
    } else {
      return "blue";
    }
  };

  return (
    <main>
      <h2>Spending - Last 7 days</h2>
      <ul>
        {Data.map((item, index) => {
          return (
            <li key={index}>
              <p className="price">${item.amount}</p>
              <div
                className={maxColor(item.amount)}
                style={{
                  height: getHeight(item.amount),
                }}
              >
                <div className={"inner-contents " + item.day} />
              </div>
              <p className="day">{item.day}</p>
            </li>
          );
        })}
      </ul>
      <div className="seperator" />
      <div className="bottom-costs">
        <h3>
          <span>Total this month</span> $478.33
        </h3>
        <p>
          +2.4%
          <span>from last month</span>
        </p>
      </div>
    </main>
  );
};

export default Main;
