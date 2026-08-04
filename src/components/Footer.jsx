import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const industries = [
  'D2C',
  'Consumer Tech',
  'SaaS',
  'Marketplaces',
  'Healthcare',
  'Travel',
];

const insights = [
  'Growth Strategy',
  'Go-To-Market',
  'Customer Acquisition',
  'AI for Growth',
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Upp<span className="text-cyan-400">stride</span>
            </h3>
            <p className="mt-5 leading-7 text-slate-400">
              Operator-led growth consulting helping ambitious businesses build
              repeatable growth engines through strategy, GTM and AI-enabled execution.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="mailto:hello@uppstride.com" className="text-slate-400 hover:text-cyan-400">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Industries</h4>
            <ul className="mt-5 space-y-3">
              {industries.map((item) => (
                <li key={item}>
                  <a href={'/industries/' + item.toLowerCase().replace(/\s+/g,'-')} className="text-slate-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Insights</h4>
            <ul className="mt-5 space-y-3">
              {insights.map((item) => (
                <li key={item}>
                  <a href="/insights" className="text-slate-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Get Started</h4>
            <p className="mt-5 text-slate-400">
              Book a growth audit to identify your biggest growth opportunities.
            </p>

            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Book Growth Audit
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Uppstride. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-slate-500 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-slate-500 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
