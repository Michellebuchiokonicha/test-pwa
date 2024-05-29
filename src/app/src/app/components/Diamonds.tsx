export default function Diamonds() {
  return (
    // <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    //     <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    //     <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    //         <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //         ></div>
    //     </div>
    //     <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    //         <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //         ></div>
    //     </div>
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //         <div className="mx-auto max-w-2xl lg:mx-0">
    //             <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Diamond of the month</h2>
    //             <p className="mt-6 text-lg leading-8 text-gray-300">See the possibilities that are available that other women are riding on. See what other women have done, be inspired.</p>
    //         </div>
    //         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
    //             <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
    //                 <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
    //                 <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
    //                 <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
    //                 <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
    //             </div>
    //             <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
    //                 <div className="flex flex-col-reverse">
    //                     <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
    //                     <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
    //                 </div>
    //                 <div className="flex flex-col-reverse">
    //                     <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
    //                     <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
    //                 </div>
    //                 <div className="flex flex-col-reverse">
    //                     <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
    //                     <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
    //                 </div>
    //                 <div className="flex flex-col-reverse">
    //                     <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
    //                     <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
    //                 </div>
    //             </dl>
    //         </div>
    //     </div>
    // </div>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-blue-600.svg" alt="" /> */}
        <div className="text-center font-lg">Meet our Diamond of the month</div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              See the possibilities that are available that other women are
              riding on. See what other women have done, be inspired.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
