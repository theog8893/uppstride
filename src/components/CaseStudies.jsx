import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    industry: 'Consumer Tech',
    title: 'Built a scalable acquisition engine',
    outcome: '3x qualified lead growth',
    description:
      'Designed an integrated GTM strategy, performance marketing roadmap and growth operating cadence that accelerated customer acquisition while improving marketing efficiency.',
  },
  {
    industry: 'D2C Brand',
    title: 'Improved marketplace profitability',
    outcome: '40% improvement in contribution margin',
    description:
      'Optimised pricing, marketplace operations, media investments and inventory planning to unlock sustainable profitability.',
  },
  {
    industry: 'FinTech',
    title: 'Scaled product adoption',
    outcome: 'Higher activation & retention',
    description:
      'Introduced lifecycle journeys, onboarding improvements and data-driven experimentation to improve customer engagement.',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Selected Engagements
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Business outcomes over marketing metrics.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our work focuses on solving business problems—not just running campaigns.
            Every engagement is measured through commercial outcomes such as revenue,
            profitability, customer acquisition, retention and operational efficiency.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {item.industry}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-lg font-semibold text-cyan-400">
                {item.outcome}
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Discuss Similar Challenge
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
