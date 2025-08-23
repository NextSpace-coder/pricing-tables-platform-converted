import ThemeToggle from '@/components/ThemeToggle';
const Pricing2 = () => {
  return <>
      <ThemeToggle />
      <section className="relative z-50 mt-10 py-20">
        <div className="container">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="mb-8 text-2xl font-medium tracking-tight md:text-4xl">
              Star today, with free or premium plan, you choose
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">
              With lost of unique and useful features, you can easily mange your
              wallet easily without any problem.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 2xl:px-[380px]">
            <section className="flex flex-col overflow-hidden rounded-xl bg-white p-6 shadow-lg shadow-gray-900/5 dark:bg-neutral-800/70">
              <h3 className="text-sm font-semibold uppercase text-purple-500">
                basic plan
              </h3>
              <p className="relative mt-5 text-3xl tracking-tight text-gray-900 dark:text-gray-500">
                $0 <sub className="text-sm font-medium">Per month</sub>
              </p>
              <p className="mt-5 text-sm text-gray-700 dark:text-gray-400">
                Joy horrible moreover man feelings own shy. Request norland
                neither mistake for yet. Between the for morning assured.
              </p>
              <hr className="mt-6" />
              <div className="mt-6">
                <ul role="list" className="-my-2 text-sm text-gray-700">
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-purple-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-white" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4 dark:text-gray-300">
                      Customer Support
                    </span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-purple-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-white" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4 dark:text-gray-300">
                      Free User Account
                    </span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-red-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-white" d="M14.5 9.5L9.5 14.5M9.49998 9.49998L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="ml-4 text-slate-400">Monthly Reports</span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-red-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-white" d="M14.5 9.5L9.5 14.5M9.49998 9.49998L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="ml-4 text-slate-400">
                      Multiple Devices
                    </span>
                  </li>
                </ul>
              </div>
              <a className="mt-6 inline-flex justify-center rounded-lg border px-3 py-2 text-sm font-semibold text-slate-400 transition-all duration-500 hover:bg-purple-500 hover:text-white" aria-label="Get started with the Starter plan for [object Object]" href="#">
                Join for free
              </a>
            </section>
            <section className="relative flex flex-col rounded-xl bg-purple-500 p-6 shadow-lg shadow-gray-900/5">
              <div className="absolute inset-0 -right-7 -top-3 left-auto">
                <a className="mt-6 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black" aria-label="Get started with the Starter plan for [object Object]" href="#">
                  Best choice
                </a>
              </div>
              <h3 className="text-sm/snug font-semibold uppercase text-white">
                premium plan
              </h3>
              <p className="relative mt-5 text-3xl tracking-tight text-white">
                $49 <sub className="text-sm font-medium">Per month</sub>
              </p>
              <p className="mt-5 text-sm text-white">
                On even feet time have an no at. Relation so in confined
                smallest children unpacked delicate. Why sir end believe.
              </p>
              <hr className="mt-6" />
              <div className="mt-6">
                <ul role="list" className="-my-2 text-sm text-white">
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-purple-500" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4">Customer Support</span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-purple-500" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4">Upto 10 Users</span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-purple-500" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4">Monthly Reports</span>
                  </li>
                  <li className="flex py-2">
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                      <path className="stroke-purple-500" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-4">Multiple Devices Supported</span>
                  </li>
                </ul>
              </div>
              <a className="mt-6 inline-flex justify-center rounded-lg border bg-white px-3 py-2 text-sm font-semibold transition-all duration-500 hover:bg-purple-500 hover:text-white dark:text-gray-900" aria-label="Get started with the Starter plan for [object Object]" href="#">
                Get the premium
              </a>
            </section>
          </div>
        </div>
      </section>
    </>;
};
export default Pricing2;