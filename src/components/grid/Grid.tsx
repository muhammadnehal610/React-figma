import type React from "react";
import Grid1 from "../../assets/gride1.png";
import Grid2 from "../../assets/grid2.png";
import Grid3 from "../../assets/grid3.png";
import Grid4 from "../../assets/grid4.png";
import Grid5 from "../../assets/grid5.png";
import Grid6 from "../../assets/grid6.png";
import Grid7 from "../../assets/grid7.png";
import Grid8 from "../../assets/grid8.png";
import Grid9 from "../../assets/grid9.png";

import "./Grid.css";

const Grid: React.FC = () => {
  return (
    <>
      <section>
        <div className="grid-layout">
          <div className="grid-item item-1">
            <img src={Grid1} />
          </div>
          <div className="grid-item item-2">
            <img src={Grid2} />
          </div>
          <div className="grid-item item-3">
            <img src={Grid5} />
          </div>
          <div className="grid-item item-4">
            <img src={Grid6} />
          </div>
          <div className="grid-item item-5">
            <img src={Grid7} />
          </div>
          <div className="grid-item item-6">
            <img src={Grid3} />
          </div>
          <div className="grid-item item-7">
            <img src={Grid4} />
          </div>
          <div className="grid-item item-8">
            <img src={Grid8} />
          </div>
          <div className="grid-item item-9">
            <img src={Grid9} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Grid;
