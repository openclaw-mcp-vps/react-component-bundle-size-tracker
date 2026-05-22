export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Know Exactly What's Bloating Your Bundle
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your React project or paste a GitHub repo URL. Get a per-component bundle size breakdown and instant suggestions for lighter alternatives.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📦", title: "Per-Component Breakdown", desc: "See exactly how many KB each component adds to your final bundle." },
          { icon: "💡", title: "Lighter Alternatives", desc: "Curated suggestions to swap heavy libs for smaller equivalents." },
          { icon: "🔗", title: "GitHub Integration", desc: "Analyze any public repo by URL — no local setup needed." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited project analyses",
              "Per-component size reports",
              "Lighter alternative suggestions",
              "GitHub repo URL support",
              "Export reports as JSON/CSV"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the bundle analysis work?",
              a: "We run webpack-bundle-analyzer on your project and parse the output to attribute bundle size to individual React components and their dependencies."
            },
            {
              q: "Can I analyze private GitHub repositories?",
              a: "Currently we support public GitHub repos and direct project uploads. Private repo support via GitHub OAuth is on the roadmap."
            },
            {
              q: "What frameworks are supported?",
              a: "We support React projects using webpack, Vite, or Next.js. Create React App and custom webpack configs are fully supported."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} React Bundle Tracker. Built for frontend teams.
      </footer>
    </main>
  );
}
