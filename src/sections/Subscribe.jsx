import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container justify-center items-center max-lg:flex-col gap-10 w-full" id="contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-4xl m-auto text-center"> Sign Up for <span className="text-coral-red">Updates </span> and <span className="text-coral-red">Newsletter</span></h3>
      <div className="m-auto lg:max-w-[70%] w-full flex items-center justif-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full mt-10">
        <input type="text"
        className="input"
        placeholder="SUBSCRIBE TO NIKE"></input>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="sign up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe