import { TrendingDown, Target, BarChart3, Users } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: 'Growth Has Plateaued',
    description:
      'Revenue growth slows despite increasing investments in marketing, sales and product.'
  },
  {
    icon: Target,
    title: 'Customer Acquisition Is Expensive',
    description:
      'CAC continues to rise while conversion rates and marketing efficiency remain flat.'
  },
  {
    icon: BarChart3,
    title: 'No Clear GTM Direction',
    description:
      'Teams execute campaigns without a unified growth strategy, clear positioning or measurable priorities.'
  },
  {
    icon: Users,
    title: 'Teams Work in Silos',
    description:
      'Marketing, sales, product and operations are not aligned around common business outcomes.'
  }
];

export default function Problems() {
  return (
    <section id='problems' className='bg-slate-950 py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-widest text-cyan-400'>
            Why Businesses Stop Growing
          </p>

          <h2 className='mt-3 text-4xl font-bold text-white md:text-5xl'>
            Growth challenges are rarely caused by a single channel.
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-300'>
            Sustainable growth comes from aligning strategy, execution,
            measurement and leadership. We help founders identify the real
            bottlenecks before recommending solutions.
          </p>
        </div>

        <div className='mt-14 grid gap-6 md:grid-cols-2'>
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className='rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10'>
                  <Icon className='h-6 w-6 text-cyan-400' />
                </div>

                <h3 className='mt-6 text-2xl font-semibold text-white'>
                  {item.title}
                </h3>

                <p className='mt-4 leading-7 text-slate-300'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
