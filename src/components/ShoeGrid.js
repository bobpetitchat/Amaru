import React from "react"
import Shoe from "./Shoe"
const ShoeGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-x-9 gap-y-28">
          <div className="flex flex-column justify-center items-center" style={{ width: "270px" }}>
    <div className="">
      <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
        <img className="border-transparent rounded-t-2xl rounded-b"
          src="https://raw.githubusercontent.com/css-for-js/sole-and-ankle/main/public/assets/legend-academy.jpg"></img>
      </div>
      <div style={{ height: "20px" }}>
        <div className="flex flex-column gap-4 font-black justify-around items-center">
        <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
        <p style={{ fontSize: "13px" }}> 156$ </p>
        </div>
        <div className="flex flex-column gap-4 font-black justify-start items-center">
        <p style={{ fontSize: "13px" }}> Available in 2 colors</p>
      </div>
      </div>
    </div>
      </div> 
      <div className="flex flex-column justify-center items-center" style={{ width: "270px" }}>
    <div className="">
      <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
        <img className="border-transparent rounded-t-2xl rounded-b"
          src="https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/phantom-flyknit.jpg?raw=trueg"></img>
      </div>
      <div style={{ height: "20px" }}>
        <div className="flex flex-column gap-4 font-black justify-around items-center">
        <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
        <p style={{ fontSize: "13px" }}> 156$ </p>
        </div>
        <div className="flex flex-column gap-4 font-black justify-start items-center">
        <p style={{ fontSize: "13px" }}> Available in 2 colors</p>
      </div>
      </div>
    </div>
      </div> 
      <div className="flex flex-column justify-center items-center" style={{ width: "270px" }}>
    <div className="">
      <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
        <img className="border-transparent rounded-t-2xl rounded-b"
          src="https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/joyride.jpg?raw=true"></img>
      </div>
      <div style={{ height: "20px" }}>
        <div className="flex flex-column gap-4 font-black justify-around items-center">
        <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
        <p style={{ fontSize: "13px" }}> 156$ </p>
        </div>
        <div className="flex flex-column gap-4 font-black justify-start items-center">
        <p style={{ fontSize: "13px" }}> Available in 2 colors</p>
      </div>
      </div>
    </div>
  </div> 
    </div>
  )
}

export default ShoeGrid

