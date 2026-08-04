import { ArrowRight } from 'lucide-react';

const stats = [
  ['200Cr+', 'Incremental Revenue'],
  ['25+', 'Brands Scaled'],
  ['3-5x', 'Avg. RoI Uplift'],
  ['30-40%', 'Efficiency Improvement'],
];

const companies = [
  'Haanum', 'Beaatho', 'P&G', 'Pepsi', 'Bambrew', 'Osfin.ai', 'Zomato',
  'Tickertape', 'Tripole', 'Yatra', 'Sangeetha Mobiles', 'AmPm', 'Wheelseye',
  'Lilly', 'Great Learning', 'Hotstar', 'Otto Money', 'Samsung',
];

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-slate-950'>
      <div className='mx-auto max-w-7xl px-6 py-24 lg:py-32'>
        <div className='max-w-4xl'>
          <span className='inline-flex rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-1 text-sm font-medium text-blue-400'>
            Operator-led Growth Consulting & Execution
          </span>

          <h1 className='mt-6 text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white'>
            Helping ambitious businesses build
            <span className='block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
              repeatable growth engines.
            </span>
          </h1>

          <p className='mt-6 text-2xl font-semibold text-slate-300'>
            For businesses from ₹10–100 Cr to ₹100–1000 Cr.
          </p>

          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-300'>
            Uppstride partners with founders and leadership teams to solve growth bottlenecks across Go-To-Market, customer acquisition, marketplaces, pricing, retention and AI-enabled execution.
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <a href='https://cal.com/manish-bansal' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-7 py-3.5 font-semibold text-white transition hover:opacity-90'>
              Book Growth Audit <ArrowRight size={18}/>
            </a>

            <a href='#case-studies' className='inline-flex items-center rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white'>
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4'>
            {stats.map(([v, l], i) => (
              <div
                key={l}
                className={`border-b md:border-b-0 border-white/10 py-8 px-2 text-center ${i !== stats.length - 1 ? 'md:border-r' : ''}`}
              >
                <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent'>
                  {v}
                </div>
                <div className='mt-1 text-sm text-slate-400'>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 bg-slate-900/40 py-6 overflow-hidden'>
        <p className='text-center text-xs font-semibold uppercase tracking-widest text-slate-500'>
          Our Team Has Worked With
        </p>
        <div className='mt-5 flex overflow-hidden'>
          <div className='flex flex-none animate-marquee items-center gap-14 pr-14'>
            {[...companies, ...companies].map((c, i) => (
              <span key={c + i} className='shrink-0 text-lg font-semibold text-slate-400'>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
