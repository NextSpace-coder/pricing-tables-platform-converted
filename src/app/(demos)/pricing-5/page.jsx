import ThemeToggle from '@/components/ThemeToggle';
const Pricing5 = () => {
  return <>
      <ThemeToggle />
      <section className="z-50 py-16 sm:py-36">
        <div className="container relative">
          <div className="text-center">
            <h1 className="mb-4 text-3xl/tight font-medium">Pricing</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Pricing that <span className="text-purple-500">works </span> for
              everyone
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            <div data-aos="fade-up" data-aos-duration={500}>
              <div className="pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]">
                <div className="h-full w-full rounded border border-gray-300 bg-white p-5 text-center dark:border-gray-700/50 dark:bg-neutral-800/70">
                  <span className="text-lg text-purple-500">Starter</span>
                  <h1 className="mt-3 text-3xl/tight font-semibold">
                    <sup className="text-sm font-normal text-gray-500">$</sup>{' '}
                    49{' '}
                    <sub className="text-sm font-normal text-gray-500">
                      /month
                    </sub>
                  </h1>
                  <div className="my-7 w-full border-b border-gray-200 dark:border-gray-700" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Up to 600 minutes usage time
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Use for personal only
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Add up to 10 attendees
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="mt-[120px] flex">
                      <a href="#" className="w-full rounded-lg border border-transparent bg-purple-500/10 py-3 text-purple-500/90 transition-all duration-300 hover:border hover:border-purple-500/20 dark:bg-neutral-900/70 dark:hover:border-neutral-700/50">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={700}>
              <div className="pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]">
                <div className="h-full w-full rounded border border-gray-300 bg-white p-5 text-center dark:border-gray-700/50 dark:bg-neutral-800/70">
                  <span className="text-lg text-purple-500">Professional</span>
                  <h1 className="mt-3 text-3xl/tight font-semibold">
                    <sup className="text-sm font-normal text-gray-500">$</sup>{' '}
                    99{' '}
                    <sub className="text-sm font-normal text-gray-500">
                      /month
                    </sub>
                  </h1>
                  <div className="my-7 w-full border-b border-gray-200 dark:border-gray-700" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Up to 6000 minutes usage time
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Add up to 100 attendees
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Up to 5 teams
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="mt-20 flex">
                      <a href="#" className="w-full rounded-lg border border-transparent bg-purple-500 py-3 text-white transition-all duration-300 hover:border hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 focus:shadow-none focus:outline focus:outline-purple-500/40">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={900}>
              <div className="pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]">
                <div className="h-full w-full rounded border border-gray-300 bg-white p-5 text-center dark:border-gray-700/50 dark:bg-neutral-800/70">
                  <span className="text-lg text-purple-500">Enterprise</span>
                  <h1 className="mt-3 text-3xl/tight font-semibold">
                    <sup className="text-sm font-normal text-gray-500">$</sup>{' '}
                    599{' '}
                    <sub className="text-sm font-normal text-gray-500">
                      /month
                    </sub>
                  </h1>
                  <div className="my-7 w-full border-b border-gray-200 dark:border-gray-700" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Unlimited usage time
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Add Unlimited attendees
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        24x7 Technical support via phone
                      </p>
                      <p className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <i className="fa-solid fa-check text-lg text-green-500" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="mt-20 flex">
                      <a href="#" className="w-full rounded-lg border border-transparent bg-purple-500/10 py-3 text-purple-500/90 transition-all duration-300 hover:border hover:border-purple-500/20 dark:bg-neutral-900/70 dark:hover:border-neutral-700/50">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Pricing5;