/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


import { Canvas } from "@react-three/fiber";
// import  Loader  from "../components/Loader";

import Drone from "../components/Drone";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
 
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('walk');
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
          to_name: "Salim",
          from_email: form.email,
          to_email: "salimmattoussi@gmail.com",
          message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        
        hideAlert(false);
        setCurrentAnimation("idle");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, [3000]);




    }).catch( (error) => {
      setLoading(false);
      console.error(error);
      setCurrentAnimation("idle");
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    })
  }
  const handleFocus = () => setCurrentAnimation("idle");
  const handleBlur = () => setCurrentAnimation("idle");
  //Dragon_Boss_05_idle

  return (
   
    <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
    {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className=' sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins;
  }'>Get in Touch</h1>
      <form
        ref={formRef}
         onSubmit={handleSubmit}
        className='w-full flex flex-col gap-7 mt-14'
      >
          <label className='text-black-500 font-semibold'>Name
          <input
            type='text'
            name='name'
            className=' bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card;'
            placeholder='Your Name'
            required
            value={form.name}
             onChange={handleChange}
             onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <label className='text-black-500 font-semibold'>Email
          <input
            type='email'
            name='email'
            className=' bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card;'
            placeholder='Your Email Please '
            required
            value={form.email}
             onChange={handleChange}
             onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <label className='text-black-500 font-semibold'>Message
          <textarea
           
            name='message'
            rows={4}
            className=" block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card;"
          
            placeholder='Your Message Please'
            required
            value={form.message}
             onChange={handleChange}
             onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <button
          type='submit'
           disabled={loading}
          className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center;
        }'
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
          

      </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 0]} intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <Suspense  >
          <Drone
           currentAnimation={currentAnimation}
           position={[0.5, -2, 0]}
           rotation={[12.629, -0.6, 0]}
           scale={[2, 2, 2]}
          />
        </Suspense>
      </Canvas>

      </div>
  </section>



  )
}

export default Contact