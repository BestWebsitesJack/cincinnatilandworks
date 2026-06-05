import { Link } from "react-router";
import { ArrowRight, Warehouse, Building2, ShieldCheck, Truck, Heart, GraduationCap, Landmark, HardHat } from "lucide-react";

export function Projects() {
  const markets = [
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: "Warehousing & Distribution",
      keywords: "Industrial Concrete Floors — Cincinnati Tri-State Area",
      description: "Cincinnati Landworks specializes in industrial concrete floors for warehouses and distribution centers across Southwest Ohio, Northern Kentucky, and Southeast Indiana. From high-PSI slabs to laser-leveled surfaces for automated systems, we build floors that handle forklifts, heavy racking, and constant traffic.",
      services: [
        "Industrial warehouse concrete floors",
        "Concrete slab on grade",
        "Loading dock installation & repair",
        "Concrete flatwork contractor Cincinnati"
      ]
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Manufacturing & Industrial",
      keywords: "Industrial Concrete Contractor — OH, KY & IN",
      description: "We serve manufacturing plants, automotive facilities, and heavy industrial operations across the Cincinnati Tri-State area. Our industrial concrete solutions are engineered for chemical resistance, heavy machinery loads, and the demanding conditions of active production environments.",
      services: [
        "Heavy-duty industrial concrete floors",
        "Chemical-resistant concrete finishes",
        "Concrete footings for industrial equipment",
        "Commercial concrete maintenance contracts"
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Retail & Shopping Centers",
      keywords: "Commercial Parking Lot Contractor Cincinnati",
      description: "From shopping centers to strip malls and big-box retail, Cincinnati Landworks delivers commercial pavement, parking lot concrete, curb and gutter, and ADA-compliant sidewalks for retail properties across Hamilton County OH, Boone County KY, and surrounding tri-state counties.",
      services: [
        "Commercial parking lot concrete",
        "Commercial pavement replacement",
        "Curb and gutter installation",
        "ADA-compliant concrete sidewalks"
      ]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Office & Commercial Buildings",
      keywords: "Commercial Concrete Footings & Foundations Cincinnati",
      description: "We provide commercial concrete footings, foundations, walls, and flatwork for office buildings, corporate campuses, and commercial developments throughout the Cincinnati Tri-State area. Every pour is engineered for structural integrity and long-term durability.",
      services: [
        "Commercial concrete footings & foundations",
        "Structural concrete walls",
        "Commercial concrete flatwork",
        "Concrete slab on grade Cincinnati OH"
      ]
    },
    {
      icon: <Landmark className="w-12 h-12" />,
      title: "Municipal & Government",
      keywords: "Commercial Concrete Contractor Hamilton County OH",
      description: "Cincinnati Landworks works with municipalities, townships, and government agencies across Hamilton County, Boone County, and surrounding areas on commercial concrete sidewalks, drainage systems, storm sewer repair, and public infrastructure projects.",
      services: [
        "Commercial concrete sidewalks",
        "Storm sewer concrete repair Cincinnati",
        "Commercial drainage systems",
        "Concrete replacement & restoration"
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Healthcare & Medical",
      keywords: "Commercial Concrete Cincinnati — Healthcare Facilities",
      description: "We deliver commercial concrete solutions for hospitals, medical centers, and healthcare campuses across the Cincinnati area. From loading docks and parking structures to foundations and flatwork, we work around operational schedules to minimize disruption.",
      services: [
        "Loading dock installation Cincinnati",
        "Commercial parking lot concrete",
        "Concrete footings & foundations",
        "Commercial concrete drainage"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Education & Institutions",
      keywords: "Commercial Concrete Contractor Southwest Ohio",
      description: "Schools, universities, and institutional facilities throughout Southwest Ohio and Northern Kentucky trust Cincinnati Landworks for commercial concrete flatwork, parking lots, sidewalks, and drainage. We schedule around academic calendars to keep disruption minimal.",
      services: [
        "Commercial sidewalk contractor Cincinnati",
        "Parking lot concrete replacement",
        "Commercial concrete drainage Cincinnati",
        "ADA-compliant flatwork"
      ]
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "General Contractors & Subcontractors",
      keywords: "Commercial Concrete Subcontractor Cincinnati",
      description: "Cincinnati Landworks is a trusted commercial concrete subcontractor for general contractors across Ohio, Kentucky, and Indiana. We bring the crew, equipment, and expertise to keep your project on schedule — from footings and foundations to flatwork and finishing.",
      services: [
        "Commercial concrete subcontractor Cincinnati",
        "Concrete footings & walls",
        "Commercial flatwork & slabs",
        "Concrete contractor Northern Kentucky"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/75 via-zinc-900/50 to-zinc-900/10 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')"}}></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl bg-zinc-900/60 p-8 rounded-lg backdrop-blur-sm text-white">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
              Who We Serve
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Markets We Serve — Commercial & Industrial Concrete Cincinnati
            </h1>
            <p className="text-xl text-zinc-300">
              Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants to retail centers, municipalities, and general contractors — we are the commercial concrete contractor Cincinnati businesses trust.
            </p>
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {markets.map((market, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="text-[#E8510A] mb-4">
                  {market.icon}
                </div>
                <div className="text-[#E8510A] uppercase tracking-wider text-xs mb-2">
                  {market.keywords}
                </div>
                <h2 className="text-3xl mb-4">{market.title}</h2>
                <p className="text-zinc-600 mb-6">{market.description}</p>
                <ul className="space-y-2 mb-6">
                  {market.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-2 text-zinc-700">
                      <div className="w-2 h-2 bg-[#E8510A] rounded-full flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-[#E8510A] hover:text-[#C8420A] inline-flex items-center gap-2 transition-colors"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
            Our Service Area
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Serving the Cincinnati Tri-State Area
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Cincinnati Landworks serves commercial and industrial clients across Hamilton County, Butler County, Warren County, and Clermont County in Ohio — plus Boone County, Kenton County, and Campbell County in Northern Kentucky — and Dearborn County in Southeast Indiana.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Cincinnati, OH",
              "Northern Kentucky",
              "West Chester, OH",
              "Covington, KY",
              "Mason, OH",
              "Florence, KY",
              "Hamilton, OH",
              "Lawrenceburg, IN"
            ].map((city, index) => (
              <div key={index} className="bg-zinc-800 rounded px-4 py-2 text-zinc-300 text-sm">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8510A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Cincinnati Landworks works with all types of commercial and industrial clients across the Tri-State area. Contact us to discuss your project — if it's commercial concrete in Cincinnati OH, KY or IN, we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-zinc-100 text-[#E8510A] px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            
              <a              href="tel:5136732888"
              className="border-2 border-white hover:bg-white hover:text-[#E8510A] text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              Call (513) 673-2888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
