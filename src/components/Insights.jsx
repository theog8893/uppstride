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
    <section id="insights" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Growth Insights
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Practical insights from operators who have built and scaled businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore frameworks, GTM strategies, customer acquisition playbooks,
              marketplace growth, AI adoption and leadership lessons designed for
              founders and growth teams.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {insights.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
            >
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {article.category}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
