export default function InfoBubble() {
  const services = [
    "GP Consultations",
    "Family Planning",
    "Minor Surgery",
    "Skin Clinic",
    "Mental Wellbeing Support",
    "Aches & Pains Management",
    "Referrals",
    "Travel Certificates"
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl max-w-[90%] md:max-w-[50%] flex flex-col justify-between h-[300px] md:min-w-[722px]">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">Your Health, Our Priority: How We Can Help?</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          <p className="text-black mb-4 font-extralight text-base md:text-lg">
            Whether you need routine healthcare or specialized medical advice, we are here to help. Our services are designed to provide quick access to trusted GPs, tailored medical care, and health support at your convenience.
          </p>
          <a href="/services" className="text-blue-500 hover:text-blue-700 font-semibold">
            Explore Services ➞
          </a>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <div className="grid grid-cols-2 gap-x-2 text-gray-700 mb-4">
            {services.map((item, index) => (
              <div key={index} className="flex items-center mb-2 font-extralight">
                <span className="mr-2 text-green-500 bg-green-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
