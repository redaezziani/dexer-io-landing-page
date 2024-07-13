import React from 'react'

const SetepSection = () => {
    // herne-the-hunter.png  knife.png  success.png
    const steps = [
        {
            title: 'Create an account',
            icon : 'herne-the-hunter.png',
            description: 'Create an account with us by providing your details and verifying your email address.'  
        },
        {
            title: 'Subscribe to a plan',
            icon : 'knife.png',
            description: 'Choose a plan that suits your needs and subscribe to it. You can always upgrade or downgrade your plan.'  
        },
        {
            title: 'Get Started',
            icon : 'success.png',
            description: 'Once you have subscribed to a plan, you can start using our services and enjoy the benefits.'         
        }
    ]
    return (
        <div className="w-full
        flex flex-col justify-center items-center gap-3 mt-10 md:max-w-5xl">
            <h2
            className='text-2xl font-bold text-center text-slate-700'
            >
                How it works
            </h2>
            <p
            className='text-center text-slate-500 max-w-2xl text-[0.80rem]'
            >
                We have a simple process for you to get started with us. Here are the
            </p>
            <div className=" mt-5 grid min-h-96  w-full grid-co md:grid-cols-3  gap-3">
               {steps.map((step, index) => {
                return(
                    <section className="w-full rounded-lg p-6 col-span-1 flex justify-start flex-col gap-3 items-center border border-dashed  aspect-video ">
                    <div className="w-full flex justify-between items-center">
                        <img src={`/step/${step.icon}`} alt={step.title} className="w-12 h-12 object-cover" />
                            <p className="text-slate-500/30 font-bold text-2xl text-center">
                               0{index+1}
                            </p>
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center">
                      <p
                      className=' text-slate-400 max-w-2xl text-[0.80rem]'
                      >
                            {step.description}
                      </p>
                    </div>
                </section>
                );
               })
                }
            </div>
        </div>
    )
}

export default SetepSection