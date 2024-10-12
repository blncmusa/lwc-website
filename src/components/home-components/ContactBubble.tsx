export default function ContactBubble() {
  return (
    <div className="p-6 bg-dark text-white rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300 max-w-[25%] md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Consult With Our Doctor</h2>
      <p className="mb-6">
        Ready to book a consultation? Get in touch with us and let our experienced healthcare professionals assist you with your medical needs.
      </p>
      <div className="flex items-center">
        <span className="text-3xl mr-4">📞</span>
        <span className="text-lg">(020) 3633 5114</span>
      </div>
    </div>
  );
}
