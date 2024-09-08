import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Island from "../models/Island"
import Sky from "../models/Sky"

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    CHOPPER
</div> */}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerwidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      
    }else{
      screenScale = [1, 1, 1];
      
    }

    return [screenScale, screenPosition , rotation];
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">

      <Canvas 
      className="w-full h-screen bg-transparent"
      camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
        {/* directionlight is used to manage lighting  */}
        <directionalLight position={[1, 1, 1]} intensity={0.5}/>
        <ambientLight />  {/* ambient light illuminates all object in the scene equally without casting shadow  */}
        
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} /> {/* it iluminates the scene with a gradient */}
        <Island 
        position = {islandPosition}
        scale = {islandScale}
        rotation = {islandRotation}
        />

        <Sky />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
