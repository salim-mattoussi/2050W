/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Land from "../models/Land"
import Avatar from "../models/Avatar"
import { OrbitControls } from "@react-three/drei"


const Exemples = () => {

  const [currentAnimation,setCurrentAnimation]=useState('hello')
  return (
    <>
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] ">
      
<a href="https://sm-land.netlify.app/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Armed Land 2024</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try our new modern 3D portfolio , you can now be the owner just Take a look and contact us </p>
    </div>
</a>
    <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
      <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}>
        <Suspense fallback={null}>
        <directionalLight position={[0, 0, 1]} intensity={0} />
        <ambientLight intensity={2} />
        <pointLight position={[5, 10, 0]} intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
          <Land
               position={[0.5, -0.5, 0]}
               rotation={[12.629, -0.6, 0]}
               scale={[0.2, 0.2, 0.2]}/>
        </Suspense>

      </Canvas>
    </div>
    </section>
        <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] ">
      
        <a href="https://salim-cv.netlify.app/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Avatar Potfolio 2024</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try our new modern 3D portfolio , you can now be the owner just Take a look and contact us .</p>
            </div>
        </a>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
              <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}>
                <Suspense fallback={null}>
                <directionalLight position={[0, 0, 1]} intensity={0} />
                <ambientLight intensity={2} />
                <pointLight position={[5, 10, 0]} intensity={1} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                />
                <OrbitControls/>
                  <Avatar
                  currentAnimation={currentAnimation}
                       position={[0.5, -4, 0]}
                       rotation={[12.629, -0.6, 0]}
                       scale={[4, 4, 4]}/>
                </Suspense>
        
              </Canvas>
            </div>
            </section>
            </>
  )
}

export default Exemples