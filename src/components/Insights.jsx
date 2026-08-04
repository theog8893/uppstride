import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: 'Growth Strategy',
    title: 'Why Growth Stalls After Product-Market Fit',
    description:
      'Common reasons businesses plateau and the frameworks leaders can use to restart sustainable growth.',
    link: '/insights/why-growth-stalls-after-product-market-fit',
  },
  {
    category: 'Go-To-Market',
    title: 'Building a GTM Strategy That Actually Scales',
    description:
      'A practical guide to ICP selection, positioning, pricing and channel prioritisation.',
    link: '/insights/building-a-scalable-gtm-strategy',
  },
  {
    category: 'Customer Acquisition',
    title: 'Reducing CAC Without Slowing Growth',
    description:
      'Improve marketing efficiency through experimentation, attribution and lifecycle optimisation.',
    link: '/insights/reducing-customer-acquisition-cost',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Growth Insights
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Practical insights from operators who have built and scaled businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Explore frameworks, GTM strategies, customer acquisition playbooks,
              marketplace growth, AI adoption and leadership lessons designed for
              founders and growth teams.
            </p>
          </div>

          <a
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            View All Insights
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {insights.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {article.category}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {article.description}
              </p>

              <a
                href={article.link}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Read Article
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
