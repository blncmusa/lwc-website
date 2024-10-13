export default function ContactBubble() {
  return (
    <div className="p-6 bg-dark text-white rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300 max-w-[90%] md:max-w-[25%] flex flex-col justify-between h-[300px] md:min-w-[360px]">
      <h2 className="text-xl md:text-2xl font-bold">Consult With Our Doctor</h2>
      <p className="mb-4 text-base md:text-lg">
        Ready to book a consultation? Get in touch with us and let our experienced healthcare professionals assist you with your medical needs.
      </p>
      <div className="flex items-center">
        <span className="text-3xl mr-2">📞</span>
        <span className="text-lg">(020) 3633 5114</span>
      </div>
    </div>
  );
}
