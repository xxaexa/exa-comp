import a from './../../assets/icons/fb.png'
import b from './../../assets/icons/ig.png'
import c from './../../assets/icons/x.png'
import d from './../../assets/icons/call.png'

const Footer = () => {
  return (
  <div className="md:h-52 bg-blue-900 mt-24 text-white">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row h-full">

      <div className="w-full md:w-1/3 flex flex-col justify-between">
      <div className="flex gap-8 md:justify-between">
        <div>
          <p className="mb-2">Tentang Kami</p>
          <p className="mb-2">Product</p>
          <p className="mb-2">Client</p>
        </div>

        <div>
          <p className="mb-2">Product</p>
          <p className="mb-2">Review</p>
          <p className="mb-2">Article</p>
        </div>

        <div>
          <p>Footer</p>  
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3">
        <img src={d} alt="" className='w-8 h-8'/>
        <div>
          <p>Number</p>
          <p>0-123-456-1109</p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3"></div>

    <div className="w-full md:w-1/3 flex flex-col justify-between">
      <div>
        <p className="mt-4 md:mt-0 mb-4">Exa Comp</p>
        <p className="mb-2">Our Social Media</p>
        <div className="flex flex-row gap-4">
          <img src={a} alt="" className='w-6 h-6 cursor-pointer'/>
          <img src={b} alt="" className='w-6 h-6 cursor-pointer'/>
          <img src={c} alt="" className='w-6 h-6 cursor-pointer'/>
        </div>
      </div>

      <div className="mt-auto">
        <p>	&copy; Develop By</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer