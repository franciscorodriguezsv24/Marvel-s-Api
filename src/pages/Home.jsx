import { Facebook, Instagram, Youtube, Twitch } from "react-feather"


export default function Home(){

  return(
    <>
      <div className="bg-red-700 w-4/4 lg:min-h-screen  relative">
        <img src="https://wallpapercave.com/wp/DDec0uo.jpg" alt="heroes" className="h-full"/>
        <div className="absolute bottom-0 bg-black bg-opacity-50 right-0 text-white w-full h-full flex flex-row">
          <div className="w-8/12 lg:w-6-12 ps-10 pt-10 flex flex-col gap-5">
            <p className="text-2xl lg:text-8xl">So, till next time, hang loose, face front, think Marvel, and hey - why not take a troll to dinner?</p>
            <a href="https://en.wikipedia.org/wiki/Stan_Lee" target="_blank" className="transition ease-in-out delay-150 px-5 py-2 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-yellow-200 hover:text duration-300 w-1/4">Stan Lee</a>
          </div>
        </div>
      </div>
      <footer className="bg-black min-h-32 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-10">
          <a className="flex flex-row gap-1"
            href="https://www.facebook.com/Marvel/">
            <Facebook style={{color:"white"}}/>
            <p className="text-white">Facebook</p>
          </a>
          <a className="flex flex-row gap-1"
            href="https://www.instagram.com/marvel/?hl=en">
            <Instagram style={{color:"white"}}/>
            <p className="text-white">Instagram</p>
          </a>
          <a className="flex flex-row gap-1"
            href="https://www.youtube.com/user/MARVEL">
            <Youtube style={{color:"white"}}/>
            <p className="text-white">Youtube</p>
          </a>
          <a className="flex flex-row gap-1"
            href="https://www.twitch.tv/marvel">
            <Twitch style={{color:"white"}}/>
            <p className="text-white">Twitch</p>
          </a>
        </div>
      </footer>
    </>
  )
}