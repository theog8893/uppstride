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
    <section id="industries" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Where We've Worked
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            The same operating model, applied across business types.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our diagnose-prioritise-execute approach isn't industry-specific —
            it's grounded in commercial fundamentals that hold across sectors.
            That's let us take on growth and execution mandates across
            consumer internet, D2C, marketplaces, fintech, travel, healthcare
            and technology businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
