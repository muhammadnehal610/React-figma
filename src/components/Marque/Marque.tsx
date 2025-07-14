import type React from "react";
import "./Marque.css";
import trophyIcon from "../../assets/trophy-icon.png";
import guarantrrIcon from "../../assets/guarantee-icon.png";
import shippingIcon from "../../assets/shipping-icon.png";
import supportIcon from "../../assets/support-icon.png";
const Marque: React.FC = () => {
  return (
    <>
      <section>
        <div className="marque-container flex align-center gap-3 justify-center">
          <div>
            <div className="flex gap-1">
              <img src={trophyIcon} />
              <div>
                <h3 className="m-0 fs-xl font-weight-600 lh-1-5">High Quality</h3>
                <p className="m-0 fs-md font-weight-500 lh-1-5">crafted from top materials</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              <img src={guarantrrIcon} />
              <div>
                <h3 className="m-0 fs-xl font-weight-600 lh-1-5">Warranty Protection</h3>
                <p className="m-0 fs-md font-weight-500 lh-1-5">Over 2 years</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              <img src={shippingIcon} />
              <div>
                <h3 className="m-0 fs-xl font-weight-600 lh-1-5">Free Shipping</h3>
                <p className="m-0 fs-md font-weight-500 lh-1-5">Order over 150 $</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              <img src={supportIcon} />
              <div>
                <h3 className="m-0 fs-xl font-weight-600 lh-1-5">24 / 7 Support</h3>
                <p className="m-0 fs-md font-weight-500 lh-1-5">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Marque;
