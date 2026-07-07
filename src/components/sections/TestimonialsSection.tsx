import { card, container, headingXl, sectionPy, subtext } from "./shared";

const testimonials = [
  {
    name: "Alex Chen",
    role: "SDE II at Google",
    quote:
      "The AI mock interviews were indistinguishable from the real thing. The feedback on my system design diagrams helped me fix critical flaws before my loop.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_amH6oCCyIgrvuK5ic0LY2pOjIhZD-5vqRIn-DP1rWOuBbo2TjmzPyOyg0Ss0arFbARYUgGZlmAgNK66Ocl0D7Mjr8jD2qQ25qALUU6l8-G15Sk2sDP8uhoOftlMjfv5mzdbMu_8ksth0oqLptHxwEAUCEeTo0T1YQX2nUBBtBCNNZNZOZ_PP0gGjm-x-8PU77beS-SHjjqIJP6Y1O2TPgkmAlFdbDqUhdELU6XX35mDXm-fZZESJ",
    featured: false,
  },
  {
    name: "Sarah Jenkins",
    role: "Frontend Lead at Meta",
    quote:
      "I struggled with behavioral questions for years. InterviewAI's tone analysis gave me the confidence to articulate my impact effectively.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAontULDB1O5Un_0lbebH4gOR4LwN0D-4v_bwxfIeMdfSp-xyljv7vfL4iYW9U3j9gUSUJogqSf9dizi9iFK2eUsCj_tMwc2T0GTqBqbJYrS8f0BTk66KrLdyjUNr1-1ng5RdtA0E0-KJ3L3RDg-Mf5B-_hBYigZwI_rTmtZqitXzKZzi2rNhIlSLMcESNI4BjrbHifx0pWDZ0Z0yAeK7PfeOk276tuRvM4dv2m6hQeaHzWFeHva4BB",
    featured: true,
  },
  {
    name: "David Miller",
    role: "Senior Engineer at Stripe",
    quote:
      "The company-specific practice modes are a game changer. The Amazon Leadership Principles module was spot on.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWTmAJpKIA-bmSwOL3qP0G3IIc23_lH526JdXqKExQqQe83wJe1ytnq8v_laZqMgemTnRQRvBfMi45-Inv_14AKJp3Kf4nGVqo4OVMzKn7kKnLYQuzGzhQxNXJp1CMv6xBqFxS1KX3NeZ58YzZhmZezq8kT--KcR4qIDQroOTr5GexO44zNqQwbBlsngtjoU6LkmcYO_ovWdD8gYpX79VAAzX5xqOXx930t2Hn2W3Yb_32HGq7n3ow",
    featured: false,
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section className={`bg-[#F5F5F7] ${sectionPy}`}>
      <div className={container}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className={`${headingXl} mb-4`}>Success Stories from FAANG Engineers</h2>
          <p className={subtext}>Our users have landed offers at the world&apos;s most innovative companies.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className={`${card} p-8 ${t.featured ? "border-[#4F46E5]/30 shadow-sm" : ""}`}
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[#0A0A0A]">{t.name}</p>
                  <p className="text-xs text-[#5B5B65]">{t.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#5B5B65]">&ldquo;{t.quote}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
