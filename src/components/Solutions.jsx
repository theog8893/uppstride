import {
  Compass,
  Rocket,
  LineChart,
  Store,
  BrainCircuit,
  Workflow,
} from 'lucide-react';

const solutions = [
  {
    icon: Compass,
    title: 'Growth Strategy',
    description:
      'Identify growth bottlenecks, prioritise opportunities and build a clear roadmap for sustainable revenue growth.'
  },
  {
    icon: Rocket,
    title: 'Go-To-Market Strategy',
    description:
      'Launch new products, categories or markets with the right positioning, pricing, channels and execution plan.'
  },
  {
    icon: LineChart,
    title: 'Customer Acquisition',
    description:
      'Improve CAC, conversion and marketing efficiency across paid, organic, partnerships and lifecycle channels.'
  },
  {
    icon: Store,
    title: 'Marketplace Growth',
    description:
      'Scale revenue across Amazon, Flipkart, Quick Commerce and other marketplaces through data-led growth.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-enabled Growth',
    description:
      'Apply AI to automate workflows, improve decision-making and accelerate execution across business functions.'
  },
  {
    icon: Workflow,
    title: 'Growth Operating System',
    description:
      'Build repeatable planning, dashboards, experimentation and review processes that keep teams aligned.'
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Growth Expertise
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Practical consulting focused on measurable business outcomes.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We don't operate like a traditional marketing agency. We work with
            founders and leadership teams to solve the highest-impact growth
            challenges using strategy, execution and AI where it creates real value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
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
