import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-blue-600/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-10 md:p-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Ready to Accelerate Growth?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's identify the biggest growth opportunities in your business.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're scaling a D2C brand, SaaS company, marketplace or
            consumer business, we'll help uncover the bottlenecks holding back
            sustainable growth and build a practical roadmap to solve them.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://cal.com/manish-bansal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Book Your Growth Audit
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:hello@uppstride.com"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white hover:border-blue-500"
            >
              hello@uppstride.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
