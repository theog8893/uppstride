const faqs = [
  {
    question: 'Who is Uppstride best suited for?',
    answer:
      'We work with founders, leadership teams and growth-stage businesses looking to accelerate revenue, improve GTM execution and build repeatable growth systems.'
  },
  {
    question: 'How is Uppstride different from a marketing agency?',
    answer:
      'We focus on business outcomes first. Marketing is only one lever. We also work on GTM, pricing, customer acquisition, marketplaces, AI adoption and operating rhythms.'
  },
  {
    question: 'Do you work as a Fractional CGO or Growth Advisor?',
    answer:
      'Yes. We partner closely with leadership teams through advisory, fractional leadership and execution-focused consulting engagements.'
  },
  {
    question: 'Which industries do you work with?',
    answer:
      'We work across D2C, Consumer Tech, SaaS, Marketplaces, FinTech, Healthcare, Travel and other high-growth businesses. Our approach is built on commercial fundamentals that apply across sectors, rather than a single-industry playbook.'
  },
  {
    question: 'How do engagements typically begin?',
    answer:
      'Every engagement starts with a Growth Audit to identify bottlenecks, prioritise opportunities and define a practical roadmap.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Answers to common founder questions.
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
