import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 items-start flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <img src={footerLogo} width={150} height={46}></img>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, obcaecati. Magnam iusto placeat explicabo rem reprehenderit officiis consequuntur praesentium delectus?
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}></img>
                </div>
            ))}
          </div>
        </div>
        <div className="felx flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 font-montserrat text-white text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}><a>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start font-montserrat items-center cursor-pointer gap-2">
          <img src={copyrightSign} alt="copyrightsign"
          width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Condition</p>
      </div>
    </footer>
  )
}

export default Footer