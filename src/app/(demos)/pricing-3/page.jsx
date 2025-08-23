import ThemeToggle from '@/components/ThemeToggle';
const Pricing3 = () => {
  return <>
      <ThemeToggle />
      <section className="relative z-50 mt-10 py-20">
        <div className="container">
          <div className="text-center">
            <h6 className="text-lg font-semibold text-purple-500">Pricing</h6>
            <div className="mt-3 flex justify-center">
              <h2 className="text-2xl font-semibold leading-10 sm:text-4xl md:w-2/3 xl:w-2/5">
                Special offer
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="mt-8 font-medium text-gray-500 dark:text-gray-400 sm:text-lg lg:w-2/4">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:px-24">
            <div>
              <div className="rounded-md bg-white p-10 shadow-md dark:bg-neutral-900 dark:shadow-slate-800">
                <div>
                  <h2 className="text-center text-xl font-semibold sm:text-2xl xl:text-3xl">
                    Basic Package
                  </h2>
                  <p className="mt-6 text-center font-medium text-gray-500 dark:text-gray-400">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                  </p>
                  <div className="mt-7 flex items-center justify-center">
                    <sub className="align-sub text-xl text-purple-500">$</sub>
                    <h2 className="items-center text-6xl font-bold text-gray-800/80 dark:text-gray-300">
                      50
                    </h2>
                    <sub className="align-sub text-xl font-semibold text-purple-500">
                      /month
                    </sub>
                  </div>
                  <div className="flex justify-center">
                    <ul className="mb-14 mt-7 flex list-disc flex-col gap-y-3 marker:text-purple-500">
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        {' '}
                        1 Hour Massage
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        30 Minutes Relax
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Aromatherapy
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Free Body Lotion
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="javascript:void(0)" className="rounded-full border border-purple-500 bg-purple-500 px-6 py-3 font-medium text-white shadow-lg hover:bg-purple-500 hover:shadow-purple-500/30">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md bg-white p-10 shadow-md dark:bg-neutral-900 dark:shadow-gray-800">
                <div className="mb-5">
                  <h2 className="text-center text-xl font-semibold sm:text-2xl xl:text-3xl">
                    Regular Package
                  </h2>
                  <p className="mt-6 text-center font-medium text-gray-500 dark:text-gray-400">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                  </p>
                  <div className="mt-7 flex items-center justify-center">
                    <sub className="align-sub text-xl text-purple-500">$</sub>
                    <h2 className="items-center text-6xl font-bold text-gray-800/80 dark:text-gray-300">
                      60
                    </h2>
                    <sub className="align-sub text-xl font-semibold text-purple-500">
                      /month
                    </sub>
                  </div>
                  <div className="flex justify-center">
                    <ul className="mb-14 mt-7 flex list-disc flex-col gap-y-3 marker:text-purple-500">
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        {' '}
                        1 Hour Massage
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        30 Minutes Relax
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Aromatherapy
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Free Body Lotion
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="javascript:void(0)" className="rounded-full border border-purple-500 bg-purple-500 px-6 py-3 font-medium text-white shadow-lg hover:bg-purple-500 hover:shadow-purple-500/30">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md bg-white p-10 shadow-md dark:bg-neutral-900 dark:shadow-gray-800">
                <div>
                  <h2 className="text-center text-xl font-semibold sm:text-2xl xl:text-3xl">
                    Premium Package
                  </h2>
                  <p className="mt-6 text-center font-medium text-gray-500 dark:text-gray-400">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                  </p>
                  <div className="mt-7 flex items-center justify-center">
                    <sub className="align-sub text-xl text-purple-500">$</sub>
                    <h2 className="items-center text-6xl font-bold text-gray-800/80 dark:text-gray-300">
                      120
                    </h2>
                    <sub className="align-sub text-xl font-semibold text-purple-500">
                      /month
                    </sub>
                  </div>
                  <div className="flex justify-center">
                    <ul className="mb-14 mt-7 flex list-disc flex-col gap-y-3 marker:text-purple-500">
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        {' '}
                        1 Hour Massage
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        30 Minutes Relax
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Aromatherapy
                      </li>
                      <li className="text-lg text-gray-500 dark:text-gray-400">
                        Free Body Lotion
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="javascript:void(0)" className="rounded-full border border-purple-500 bg-purple-500 px-6 py-3 font-medium text-white shadow-lg hover:bg-purple-500 hover:shadow-purple-500/30">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Pricing3;