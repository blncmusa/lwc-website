// import { FaBookMedical } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { LiaHospitalSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";

export default function AboutText() {
  return (
    <div>
        <div className='flex items-center mb-2'>
            <h2 className='font-thin text-1xl pr-[10px] whitespace-nowrap text-black'>About LWC</h2>
            <hr className="border-t-1 border-gray-300 my-1 w-[400px]" />
          </div>
        <div>
            <h1 className="text-black text-3xl font-black">Expert Medical Care for Your <br/>Wellbeing</h1>
            <p className="text-black text-sm font-thin my-3 pr-[80px]">London Wellbeing Care offers healthcare services that emphasise accessibility and patient comfort. With streamlined processes, flexible appointments, and efficient care pathways, patients can rely on a hassle-free healthcare experience that prioritises their needs.</p>
            <div>
                <div className="key-feature-container">
                  <div className="icon-container">
                    <IoSchoolSharp className="key-feature-image w-[10px]" />
                  </div>
                  <div className="key-feature-text">
                    <h1 className="key-feature-title">Experienced Medical Team</h1>
                    <p className="key-feature-description">Leading consultants affiliated with renowned hospitals across the UK. From Imperial College hospitals to Royal Brompton, the general physicians at LWC are healthcare specialists that bring expertise and years of experience from the top medical institutions, providing exceptional, personalised care.</p>
                  </div>
                </div>
                <div className="key-feature-container">
                  <div className="icon-container">
                    <PiCalendarFill className="key-feature-image"/>
                  </div>
                  <div className="key-feature-text">
                    <h1 className="key-feature-title">Flexible Appointments</h1>
                    <p className="key-feature-description">Convenient appointment times to fit busy schedules, including same-day and weekend availability, making healthcare accessible when it’s needed most.</p>
                  </div>
                </div>
                <div className="key-feature-container">
                  <div className="icon-container">
                    <LiaStethoscopeSolid className="key-feature-image"/>
                  </div>
                  <div className="key-feature-text">
                    <h1 className="key-feature-title">Comprehensive Care Options</h1>
                    <p className="key-feature-description">From routine consultations to specialized services, London Wellbeing Care provides a broad spectrum of healthcare solutions to address diverse medical needs, all in one convenient location.</p>
                  </div>
                </div>
                <div className="key-feature-container">
                  <div className="icon-container">
                    <LiaHospitalSolid className="key-feature-image"/>
                  </div>
                  <div className="key-feature-text">
                    <h1 className="key-feature-title">Connected Network of Hospitals</h1>
                    <p className="key-feature-description">Linked with some of the UK's most reputable private hospitals and NHS units, offering access to trusted healthcare both virtually and in-person. This extensive network ensures high-quality care is always within reach.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}
