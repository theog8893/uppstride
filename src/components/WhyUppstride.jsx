import { Award, Briefcase, Target, Lightbulb } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: '15+ Years of Operating Experience',
    description:
      'Leadership experience across high-growth consumer technology, marketplaces, fintech, travel and FMCG businesses.',
  },
  {
    icon: Briefcase,
    title: 'Business-first Consulting',
    description:
      'We solve business problems first. Marketing, GTM, product, AI and operations are simply levers to deliver outcomes.',
  },
  {
    icon: Target,
    title: 'Execution, Not Just Advice',
    description:
      'From strategy and prioritisation to implementation and review, we work alongside founders and leadership teams.',
  },
  {
    icon: Lightbulb,
    title: 'Growth + AI',
    description:
      'We combine commercial thinking with practical AI implementation to help businesses scale faster and operate smarter.',
  },
];

export default function WhyUppstride() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Why Uppstride
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Operator-led growth consulting built around measurable business outcomes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Uppstride was founded on a simple belief—business growth cannot be
              solved through marketing alone. Sustainable growth comes from
              aligning strategy, customer acquisition, product, operations,
              marketplaces and execution.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our experience spans businesses from early-stage startups to
              enterprises managing multi-crore P&Ls, helping leadership teams
              make better commercial decisions and build repeatable growth
              engines.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
