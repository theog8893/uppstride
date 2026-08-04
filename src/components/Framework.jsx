import {
  Search,
  Compass,
  Rocket,
  BarChart3,
} from 'lucide-react';

const framework = [
  {
    step: '01',
    title: 'Diagnose',
    icon: Search,
    description:
      'Understand the business, identify growth bottlenecks, analyse data, customer behaviour and market dynamics before recommending any solution.',
  },
  {
    step: '02',
    title: 'Prioritise',
    icon: Compass,
    description:
      'Identify the highest-impact opportunities across GTM, customer acquisition, pricing, retention, marketplaces and AI-led execution.',
  },
  {
    step: '03',
    title: 'Execute',
    icon: Rocket,
    description:
      'Work alongside leadership teams to implement initiatives, establish operating rhythms and drive measurable execution.',
  },
  {
    step: '04',
    title: 'Measure & Scale',
    icon: BarChart3,
    description:
      'Track business KPIs, review experiments, optimise performance and build repeatable systems for long-term growth.',
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Growth Framework
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            A structured approach to building sustainable growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every engagement follows a simple but rigorous operating model—
            understand the business, focus on the highest-impact opportunities,
            execute with discipline and continuously optimise based on data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {framework.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
              >
                <span className="text-5xl font-bold text-slate-100">
                  {item.step}
                </span>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
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
