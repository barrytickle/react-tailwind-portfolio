function Timeline() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Vertical Timeline #1 */}
      <div className="-my-6">
        {/* Item #1 */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
          <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">CRO Developer</div>
          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              Oct, 2021
            </time>
            <div className="text-xl font-bold text-dark-300">Journey Further</div>
          </div>
          {/* Content */}
          <div className="text-slate-500">
            At Journey Further, my role required working in a sprint-based environment, developing front-end
            experimentation builds for multiple clients.
          </div>
        </div>
        {/* Item #2 */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>
          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2021
            </time>
            <div className="text-xl font-bold text-slate-900">Reached 5K customers</div>
          </div>
          {/* Content */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam
            vestibulum morbi blandit cursus risus.
          </div>
        </div>

        {/* Item #3 */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2022
            </time>
            <div className="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
          </div>
          {/* Content */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam
            vestibulum morbi blandit cursus risus.
          </div>
        </div>

        {/* Item #4 */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>
          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2023
            </time>
            <div className="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
          </div>
          {/* Content */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam
            vestibulum morbi blandit cursus risus.
          </div>
        </div>
      </div>
      {/* End: Vertical Timeline #1 */}
    </div>
  );
}

export default Timeline;
