import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import { Particles } from "../components/Particles";
import { Model } from "../components/Macbook";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section id="contact" className="relative py-20">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={160}
        ease={100}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Card/Form side - left on large screens */}
          <div className="w-full flex items-center justify-center order-2 lg:order-1">
            <div className="relative z-10 w-full max-w-md">
              <div className="p-8 rounded-3xl backdrop-blur-lg bg-black/40 border border-white/6 shadow-2xl">
                <h3 className="text-3xl font-semibold mb-2">Say Hello</h3>
                <p className="text-neutral-400 mb-6">I'm available for freelancing or full-time opportunities. Drop a message and I'll reply as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/8 placeholder-white/50 focus:ring-2 focus:ring-lavender outline-none"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/8 placeholder-white/50 focus:ring-2 focus:ring-lavender outline-none"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/8 placeholder-white/50 focus:ring-2 focus:ring-lavender outline-none resize-none"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-lavender to-royal text-white font-medium hover:opacity-95 disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-between text-sm text-neutral-400">
                  <div>Or reach me on</div>
                  <div className="flex gap-4">
                    <a href="#"><img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-5 h-5" /></a>
                    <a href="#"><img src="/assets/socials/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
                    <a href="#"><img src="/assets/socials/whatsApp.svg" alt="WhatsApp" className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Model side - right on large screens */}

        </div>
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Contact;
