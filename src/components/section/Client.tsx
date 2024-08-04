import LargeText from "../text/LargeText"
import { clients } from "../../data"
import Marquee from "react-fast-marquee"


const Client = () => {
  return (
    <div className="bg-yellow-100">
      <LargeText text="Our Client Trust" style="text-center"/>
        <Marquee>
          <div className="flex flex-row mt-4 mb-8 ">
            {clients.map((client) => (
              <img src={client.image} alt="" className="h-32 rounded-lg px-20"/>
            ))}     
          </div>
        </Marquee>
    </div>
  )
}

export default Client