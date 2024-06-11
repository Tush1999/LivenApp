import { IoIosGift } from "react-icons/io";

import icon from "./images/icon.png";
import iconLeave from "./images/icon-leave.png";

import "./App.css";

const LIST = [
  {
    id: 1,
    buyLabel: "Buy",
    buyPrice: "$30",
    bonusLabel: "Bonus",
    bonusPrice: "$10",
  },
  {
    id: 2,
    buyLabel: "Buy",
    buyPrice: "$30",
    bonusLabel: "Bonus",
    bonusPrice: "$10",
  },
  {
    id: 3,
    buyLabel: "Buy",
    buyPrice: "$30",
    bonusLabel: "Bonus",
    bonusPrice: "$10",
  },
  {
    id: 4,
    buyLabel: "Buy",
    buyPrice: "$30",
    bonusLabel: "Bonus",
    bonusPrice: "$10",
  },
  {
    id: 5,
    buyLabel: "Buy",
    buyPrice: "$30",
    bonusLabel: "Bonus",
    bonusPrice: "$10",
  },
];

function App() {
  return (
    <div className="container">
      <header>
        <a className="logo-container" href="https://liven.love/">
          <img src="https://cdn.prod.website-files.com/624c1c01e0470d7d4ceea43c/624c1c01e0470d2849eeabe5_Liven%20Logo1%201.svg" alt="logo" />
        </a>
        <a className="app-btn" href="https://app.liven.com.au/">
          Get app
        </a>
      </header>
      <div className="second-container">
        <div className="content-container">
          <div className="san-dollars">San Dollars</div>
          <div className="pay-now-text">
            Pay now, eat more later! Earn a bonus when you buy food upfront. Tap
            now to purchase.
          </div>
        </div>
        <div className="purchase-gift">
          <div className="purchase-giftInner">
            <IoIosGift />
            <span> Purchase as gift</span>
          </div>

          <div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round" />
            </label>
          </div>
        </div>
        <div className="content-wrapper">
          {LIST.map(({ id, buyLabel, buyPrice, bonusLabel, bonusPrice }) => (
            <a className={`card ${id === 1 && "first-card"}`} key={id} href="https://liven.love/">
              <div className="content">
                <span className="buy">{buyLabel}</span>
                <span className="dollar">{buyPrice}</span>
              </div>
              <div className="icon">
                {" "}
                <img src={icon} width={50} alt={id}/>
              </div>
              <div className="content">
                <span className="bonus">{bonusLabel}</span>
                <span className="bonus-dollar">{bonusPrice}</span>
              </div>
              {id === 1 && (
                <div className="app-exclusive">
                  <img src={iconLeave} alt="icon-leave"/>
                  App exclusive
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
      <footer>
        <div className="logo-container">
          <img src="https://cdn.prod.website-files.com/624c1c01e0470d7d4ceea43c/624c1c01e0470d2849eeabe5_Liven%20Logo1%201.svg" alt="logo"/>
        </div>
      </footer>
    </div>
  );
}

export default App;
