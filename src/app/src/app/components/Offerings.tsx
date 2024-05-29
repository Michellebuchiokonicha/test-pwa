export default function Offerings() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-10 flex max-w-2xl gap-x-2 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:flex-cols-3">
                    <article className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            {/* <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time> */}
                            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Guidance</a>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    Talk to a Councelor or meet a mentor
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Meet a councelor / guidance/ mentor to help you navigate
                                various aspects of your life be it career, relationsships or life in general. We have got you covered</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Proceed here
                                    </a>
                                </p>
                                {/* <p className="text-gray-600">Co-Founder / CTO</p> */}
                            </div>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            {/* <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time> */}
                            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Resources / Books</a>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    Get free resources, physical and online books
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Resource and books are a funcamental aspect of your growth and development. As one who has been transformed by reading, the aim is to provide you with this same avenue to live fully.</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Proceed here
                                    </a>
                                </p>
                                {/* <p className="text-gray-600">Co-Founder / CTO</p> */}
                            </div>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            {/* <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time> */}
                            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Financial Aid</a>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    Get Scholarships and financial support
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Let us know your financial burden and recommend proper aids for you. Need scholarships, put it across so we can help you with the latest scholarships.</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Michael Foster
                                    </a>
                                </p>
                                <p className="text-gray-600">Co-Founder / CTO</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    )
}