import {
  ShoppingBag,
  Boxes,
  Smartphone,
  Building2,
  HeartPulse,
  GraduationCap,
  Truck,
  Plane,
} from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    title: 'D2C & Consumer Brands',
    description:
      'Scale customer acquisition, retention, marketplaces, quick commerce and profitability.'
  },
  {
    icon: Smartphone,
    title: 'Consumer Tech',
    description:
      'Build GTM strategies, growth loops, monetisation and product adoption.'
  },
  {
    icon: Boxes,
    title: 'Marketplaces',
    description:
      'Improve GMV, seller acquisition, buyer activation and marketplace economics.'
  },
  {
    icon: Building2,
    title: 'SaaS',
    description:
      'Accelerate MRR growth through pricing, acquisition, activation and retention.'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Design scalable growth models for clinics, diagnostics, healthtech and wellness businesses.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Improve enrolments, lead conversion, retention and lifecycle engagement.'
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description:
      'Drive operational efficiency, customer growth and digital transformation.'
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description:
      'Grow bookings, repeat customers, ancillary revenue and customer experience.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Industry Expertise
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Growth strategies tailored for different business models.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every industry scales differently. Our experience spans consumer
            internet, D2C, marketplaces, fintech, travel, healthcare and
            technology businesses, enabling us to build growth strategies that
            fit each business model rather than applying generic playbooks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {industry.description}
                </p>

                <a
                  href={"/industries/" + industry.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
                  className="mt-5 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Explore Industry →
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
