import Image1 from "../../../assets/doctor-board.jpg"
import Image2 from "../../../assets/doctor-chart.jpg"
import Image3 from "../../../assets/doctor-xray.jpg"


export default function AboutImages() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-3 w-full h-[100%] pb-[120px]">
      <div className="col-span-1">
        <img src={Image1} alt="Doctor Board" className="w-full h-auto rounded-lg" style={{ display: 'block' }} />
      </div>
      <div className="col-span-1">
        <img src={Image2} alt="Doctor Chart" className="w-full h-auto rounded-lg" style={{ display: 'block' }} />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={Image3} alt="Doctor Feet" className="w-full h-auto rounded-lg" style={{ display: 'block' }} />
      </div>
    </div>
  )
}
