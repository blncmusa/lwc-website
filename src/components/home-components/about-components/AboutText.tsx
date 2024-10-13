import { FaBookMedical } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";
import { LiaStethoscopeSolid } from "react-icons/lia";

export default function AboutText() {
  return (
    <div>
        <div className="text-black">
        About LWC
        </div>
        <div>
            <h1 className="text-black text-3xl font-black">Expert Medical Care for Your <br/>Wellbeing</h1>
            <p className="text-black text-sm font-thin my-3 pr-[80px]">London Wellbeing Care offers healthcare services that emphasise accessibility and patient comfort. With streamlined processes, flexible appointments, and efficient care pathways, patients can rely on a hassle-free healthcare experience that prioritises their needs.</p>
            <div>
                <div className="key-feature-container">
                  <div className="icon-container">
                    <FaBookMedical className="key-feature-image"/>
                  </div>
                  <div className="key-feature-text">
                    <h1 className="key-feature-title">Experienced Medical Team</h1>
                    <p className="key-feature-description">Highly skilled GPs and healthcare specialists bring years of experience to every consultation, ensuring patients are in the best hands possible.</p>
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
            </div>
        </div>
    </div>
  );
}
