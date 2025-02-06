import { div } from "motion/react-client";
export default function Home() {
  return (
    <div>
       <div className='w-screen min-h-screen fixed  flex justify-center px-6 py-40  pointer-event-none'>
        <div className="absolute inset-0 bg-[url('/griddy.svg')] bg-cover opacity-20"></div>
        <img src='/mesh.svg' 
        className='opacity-60s absolute h-[1000] w-2000' />
      </div>
      <div className=' justify-center '>
        <nav className=" flex p-5 m-5 justify-evenly">
          <a href="/" className="text-black font-bold text-2xl">Eventa</a>
          <ul className="px-5 space-x-5">
          <a href="" className="text-black font-bold text-xl bg-gray-200 p-3 bg-opacity-30">Explore events</a>
          <a href="" className="text-black font-bold text-xl bg-opacity-30 bg-gray-200 p-3">Signin</a>
          </ul>

        </nav>
        <br/>
          
        <div className='flex container mx-auto justify-center items-center'>
          <main></main>
        </div>
      </div>
    </div>
  );
}
