import { Link } from "react-router";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Sun,
  Footprints,
  Sparkles,
  Wrench,
  Building,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
} from "lucide-react";

export function Residential() {
  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Concrete Driveways",
      description:
        "A new driveway is one of the biggest curb-appeal upgrades you can make. We pour and finish driveways that look great on day one and hold up through Cincinnati winters for decades.",
      features: [
        "Proper sub-base prep for frost resistance",
        "Broom, exposed aggregate, or smooth finish",
        "Expansion joints to prevent cracking",
        "Clean edges and apron tie-ins",
      ],
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Patios & Outdoor Living",
      description:
        "Turn your backyard into a space you actually use. We design and pour patios sized and shaped for your yard — whether you want a simple slab or an outdoor room with built-in features.",
      features: [
        "Custom shapes and sizes",
        "Smooth, broom, or decorative finishes",
        "Proper slope away from the house",
        "Steps, walls, and edging included",
      ],
    },
    {
      icon: <Footprints className="w-10 h-10" />,
      title: "Sidewalks & Walkways",
      description:
        "Safe, level walks from the street to your front door — or anywhere around your property. We replace sunken, cracked, or frost-heaved sections and tie everything in cleanly.",
      features: [
        "Public sidewalk replacement",
        "Backyard and garden path pours",
        "Step and landing installation",
        "Smooth finish for easy shoveling",
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Stamped Concrete",
      description:
        "Get the look of stone, brick, or slate at a fraction of the cost. Stamped concrete is poured and textured in one pour — ideal for patios, walkways, and pool decks.",
      features: [
        "Dozens of patterns available",
        "Custom color matching",
        "Sealant included for longevity",
        "Slip-resistant texture options",
      ],
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Crack Repair & Leveling",
      description:
        "Don't live with that tripping hazard or water-collecting crack. We assess what caused it, fix it right, and — when a section is too far gone — replace only what needs replacing.",
      features: [
        "Crack injection and routing",
        "Slab leveling for sunken sections",
        "Full panel replacement when needed",
        "Honest assessment before any work",
      ],
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Footers & Foundations",
      description:
        "Additions, sheds, garages, retaining walls — whatever you're building needs a solid base. We form and pour footers and foundations built to code and engineered for the load.",
      features: [
        "Garage and addition footers",
        "Shed slabs and piers",
        "Retaining wall footings",
        "Rebar reinforcement standard",
      ],
    },
  ];

  return (
    <div>
      <section className="relative h-[420px] flex items-center">
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(0,0,0,0.60)" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Residential-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div
              style={{ color: "#E8510A" }}
              className="uppercase tracking-wider text-sm mb-4"
            >
              Residential Concrete — Cincinnati Tri-State Area
            </div>
            <h1 className="text-5xl md:text-6xl mb-5" style={{ color: "#fff" }}>
              Driveways, Patios & Concrete Work for Cincinnati Homeowners
            </h1>
            <p className="text-lg mb-8" style={{ color: "#e0e0e0" }}>
              Cincinnati Landworks serves homeowners across Greater Cincinnati,
              Northern Kentucky, and Southeast Indiana. Free estimates, no surprises,
              and a crew that shows up when they say they will.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-lg font-medium text-white transition-colors"
              style={{ background: "#E8510A" }}
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-zinc-100 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-sm text-zinc-600">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-7 h-7" style={{ color: "#E8510A" }} />
              <span className="font-medium text-zinc-800">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-7 h-7" style={{ color: "#E8510A" }} />
              <span className="font-medium text-zinc-800">Free Estimate in 24 hrs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-7 h-7" style={{ color: "#E8510A" }} />
              <span className="font-medium text-zinc-800">OH, KY & IN</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="w-7 h-7" style={{ color: "#E8510A" }} />
              <span className="font-medium text-zinc-800">No Surprise Pricing</span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
              <CheckCircle2 className="w-7 h-7" style={{ color: "#E8510A" }} />
              <span className="font-medium text-zinc-800">We Show Up On Time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="uppercase tracking-wider text-sm mb-3"
                style={{ color: "#E8510A" }}
              >
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                A Crew You Can Trust With Your Property
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                We've spent years pouring concrete across the Cincinnati area and we
                know what it takes to do the job right — proper sub-base, the right
                mix, clean finishes, and joints in the right places so it lasts.
              </p>
              <p className="text-lg text-zinc-600 mb-8">
                When you call us for an estimate, you get a straight answer on what
                the job takes and what it costs. No pressure, no gimmicks — just an
                honest assessment and fair pricing.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-white font-medium transition-colors"
                style={{ background: "#E8510A" }}
              >
                Request Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-zinc-50 rounded-xl p-8 border border-zinc-200">
              <h3 className="text-xl font-semibold mb-6 text-zinc-800">
                What every homeowner gets with Cincinnati Landworks:
              </h3>
              <ul className="space-y-4">
                {[
                  "Free on-site estimate — no charge, no obligation",
                  "Written quote before any work begins",
                  "Licensed and fully insured on every job",
                  "Honest advice on repair vs. replacement",
                  "Properly prepared base — not just concrete on dirt",
                  "Clean job site when we're done",
                  "Warranty on our work",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#E8510A" }}
                    />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div
              className="uppercase tracking-wider text-sm mb-2"
              style={{ color: "#E8510A" }}
            >
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Residential Concrete Services
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              From a single walkway to a full driveway replacement — we handle it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ background: "#e4e4e7" }}
                >
                  <span className="text-zinc-400 text-sm">Photo coming soon</span>
                </div>
                <div className="p-6">
                  <div className="mb-3" style={{ color: "#E8510A" }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-zinc-600 mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "#E8510A" }}
                        />
                        <span className="text-zinc-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "#E8510A" }}
                  >
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-5">
            Serving Greater Cincinnati
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We work throughout Hamilton County, Clermont County, Warren County, and
            Butler County in Ohio — plus Boone County, Kenton County, and Campbell
            County in Northern Kentucky — and Dearborn County in Southeast Indiana.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-wider text-sm mb-2"
              style={{ color: "#E8510A" }}
            >
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Simple Process</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              From first call to finished project — here's what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Call or Email",
                description:
                  "Reach out and tell us what you're thinking. We'll ask a few questions and set up a time to come look.",
              },
              {
                step: "02",
                title: "Free On-Site Estimate",
                description:
                  "We come to you, assess the job, and give you a written quote — no obligation, no sales pressure.",
              },
              {
                step: "03",
                title: "We Do the Work",
                description:
                  "Our crew shows up on the scheduled day and pours it right. You'll know what's happening and when.",
              },
              {
                step: "04",
                title: "Enjoy It",
                description:
                  "We clean up, walk you through the cure timeline, and leave you with a result you're proud of.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-6xl mb-4 opacity-25"
                  style={{ color: "#E8510A" }}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-white" style={{ background: "#E8510A" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-5">
            Ready for a Free Estimate?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
            to schedule a free on-site estimate. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-zinc-100 px-8 py-4 rounded text-lg font-medium inline-flex items-center justify-center gap-2 transition-colors"
              style={{ color: "#E8510A" }}
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:5136144190"
              className="border-2 border-white hover:bg-white px-8 py-4 rounded text-lg font-medium inline-flex items-center justify-center transition-colors"
              style={{ color: "#fff" }}
            >
              Call (513) 614-4190
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
