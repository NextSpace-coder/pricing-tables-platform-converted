import ThemeToggle from '@/components/ThemeToggle';
const Pricing6 = () => {
  return <>
      <ThemeToggle />
      <section className="z-50 py-36">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-xl text-center">
              <h1 className="mb-5 text-3xl font-light">Simple Pricing</h1>
              <p className="font-medium text-gray-500 dark:text-gray-400">
                Constituto voluptatibus mei ex. Eum soleat lorem Ipsum is simply
                dummy text of the printing and typesetting industry.{' '}
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <div className="p-6 text-center">
                <h6 className="uppercase">Professional Pack</h6>
                <div className="mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/20 text-2xl text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h2 className="mb-6 text-3xl">
                  $19{' '}
                  <span className="text-sm font-medium uppercase text-gray-400">
                    / Month
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                  <div>10 GB Storage</div>
                  <div>500 GB Bandwidth</div>
                  <div>No Domain</div>
                  <div>1 User</div>
                  <div>Email Support</div>
                  <div>24x7 Support</div>
                </div>
                <div className="mt-14">
                  <button type="button" className="w-full rounded-md bg-purple-500 py-2 text-white">
                    Change Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <div className="p-6 text-center">
                <h6 className="uppercase">Business Pack</h6>
                <div className="text-danger mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-full border border-red-500/50 bg-red-500/20 text-2xl text-red-500">
                  <i className="uil uil-briefcase-alt" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h2 className="mb-6 text-3xl">
                  $29{' '}
                  <span className="text-sm font-medium uppercase text-gray-400">
                    / Month
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                  <div>50 GB Storage</div>
                  <div>900 GB Bandwidth</div>
                  <div>2 Domain</div>
                  <div>10 User</div>
                  <div>Email Support</div>
                  <div>24x7 Support</div>
                </div>
                <div className="mt-14">
                  <button type="button" className="w-full rounded-md bg-red-500/50 py-2 text-white">
                    Current Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <div className="p-6 text-center">
                <h6 className="uppercase">Enterprise Pack</h6>
                <div className="mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/20 text-2xl text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <h2 className="mb-6 text-3xl">
                  $39{' '}
                  <span className="text-sm font-medium uppercase text-gray-400">
                    / Month
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                  <div>100 GB Storage</div>
                  <div>Undivmited Bandwidth</div>
                  <div>10 Domain</div>
                  <div>Undivmited User</div>
                  <div>Email Support</div>
                  <div>24x7 Support</div>
                </div>
                <div className="mt-14">
                  <button type="button" className="w-full rounded-md bg-purple-500 py-2 text-white">
                    Change Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Pricing6;