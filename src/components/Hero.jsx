import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-slate-950'>
      <div className='mx-auto max-w-7xl px-6 py-24 lg:py-32'>
        <div className='max-w-4xl'>
          <span className='inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300'>
            Operator-led Growth Consulting
          </span>

          <h1 className='mt-6 text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white'>
            Helping ambitious businesses build
            <span className='block text-cyan-400'>repeatable growth engines.</span>
          </h1>

          <p className='mt-8 max-w-3xl text-lg leading-8 text-slate-300'>
            Uppstride partners with founders and leadership teams to solve growth bottlenecks across Go-To-Market, customer acquisition, marketplaces, pricing, retention and AI-enabled execution.
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <a href='#contact' className='inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-400'>
              Book Growth Audit <ArrowRight size={18}/>
            </a>

            <a href='#case-studies' className='inline-flex items-center rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white'>
              View Case Studies
            </a>
          </div>

          <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              ['15+','Years Experience'],
              ['₹5,000 Cr+','Business Scale'],
              ['0→1 & 100→1000','Growth Journey'],
              ['Growth + AI','Execution Focus']
            ].map(([v,l])=>(
              <div key={l} className='rounded-2xl border border-white/10 bg-white/5 p-5'>
                <TrendingUp className='mb-3 h-5 w-5 text-cyan-400'/>
                <div className='text-2xl font-bold text-white'>{v}</div>
                <div className='mt-1 text-sm text-slate-400'>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
