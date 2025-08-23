import ThemeToggle from '@/components/ThemeToggle';
const Pricing4 = () => {
  return <>
      <ThemeToggle />
      <section className="relative z-50 mt-10 py-20">
        <div className="container">
          <div className="text-center">
            <h6 className="uppercase">
              Our&nbsp;
              <span className="font-semibold">Pricing</span>
            </h6>
            <div className="mt-3 flex justify-center">
              <h2 className="text-3xl font-semibold leading-10 md:w-2/3 xl:w-2/5">
                Simple Plans For Everyone
              </h2>
            </div>
            <p className="mt-4 dark:text-gray-400">
              Nemo enim ipsam voluptatem that quia voluptas aut fugit
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:px-24">
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-10 w-10 text-purple-500">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                <div className="mb-4 mt-10 flex items-center justify-center">
                  <sub className="align-sub text-xl text-gray-600 dark:text-gray-300">
                    $
                  </sub>
                  <h2 className="items-center text-6xl font-bold text-gray-800/90 dark:text-gray-300">
                    8
                  </h2>
                  <sub className="align-sub text-xl font-semibold text-gray-600 dark:text-gray-300">
                    /mo
                  </sub>
                </div>
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Basic Plan
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    200 Hand-crafted Templates
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Exclusive Support
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    50 + Prebuilt Websites
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Premium Plugins
                  </li>
                </ul>
                <a href="javascript:void(0)#" className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30">
                  Continue
                </a>
              </div>
            </div>
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-10 w-10 text-purple-500">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <div className="mb-4 mt-10 flex items-center justify-center">
                  <sub className="align-sub text-xl text-gray-600 dark:text-gray-300">
                    $
                  </sub>
                  <h2 className="items-center text-6xl font-bold text-gray-800/90 dark:text-gray-300">
                    39
                  </h2>
                  <sub className="align-sub text-xl font-semibold text-gray-600 dark:text-gray-300">
                    /mo
                  </sub>
                </div>
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Business
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    200 Hand-crafted Templates
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Exclusive Support
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    50 + Prebuilt Websites
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Premium Plugins
                  </li>
                </ul>
                <a href="javascript:void(0)#" className="rounded-md bg-gradient-to-r from-[#7551e9]/90 from-0% via-[#c4b5f6] via-100% px-6 py-3 font-medium text-white shadow-lg hover:shadow-purple-500/30">
                  Continue
                </a>
              </div>
            </div>
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-10 w-10 text-purple-500">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                <div className="mb-4 mt-10 flex items-center justify-center">
                  <sub className="align-sub text-xl text-gray-600 dark:text-gray-300">
                    $
                  </sub>
                  <h2 className="items-center text-6xl font-bold text-gray-800/90 dark:text-gray-300">
                    79
                  </h2>
                  <sub className="align-sub text-xl font-semibold text-gray-600 dark:text-gray-300">
                    /mo
                  </sub>
                </div>
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Exclusive
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    200 Hand-crafted Templates
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Exclusive Support
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    50 + Prebuilt Websites
                  </li>
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Premium Plugins
                  </li>
                </ul>
                <a href="javascript:void(0)#" className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Pricing4;