import { useState, useRef, useEffect } from "react"
import svgPaths from "@/imports/Responsive/svg-nvsh68vy67"
import imgBg12 from "@/imports/Responsive/b64f259876f5b0c70fecc4d55a0938d623cc591e.png"
import imgFrame572 from "@/imports/Responsive/c216d2d4762dc5d4281ddf230d5e29866e8bf429.png"
import imgHero from "@/imports/Responsive/bf0f6ac9973737b6e0605331be09de12d9e8b801.png"
import imgAboutMain from "@/imports/Responsive/3e6472363a415a416746bb958db88b4e5695c01f.png"
import imgAboutSecond from "@/imports/Responsive/215bfd5ac0424c92d8c0cce3d2367268d8e944ef.png"
import imgSwedish from "@/imports/Responsive/3e0f941614a98337409c0559df7bead04f8f27d0.png"
import imgDeepTissue from "@/imports/Responsive/3e6472363a415a416746bb958db88b4e5695c01f.png"
import imgLymphatic from "@/imports/Responsive/346aa5f1114ac1200ecbdf3290c1cc69dd109fb9.png"
import imgPrenatal from "@/imports/Responsive/a6901639dc9fd0a6407c9d1d7cad343233593456.png"
import imgThai from "@/imports/Responsive/6e9d7e97e8e8765d18786bbfd4f2668146d78ee3.png"
import imgTuina from "@/imports/Responsive/60b09fc203554cc1a504a867140a2411a3063606.png"
import imgAshiatsu from "@/imports/Responsive/a44255b26286d7369bea55400404fb6c6aff1723.png"
import imgCraniosacral from "@/imports/Responsive/3ebf883e7fe9420debf6d98872d008b5fe3effdf.png"
import imgGuasha from "@/imports/Responsive/215bfd5ac0424c92d8c0cce3d2367268d8e944ef.png"
import imgFireCupping from "@/imports/Responsive/eb62208e9986441e35b24180a69a223cc057fdd7.png"
import imgReflexology from "@/imports/Responsive/1fe080bdce390d1a1b81bbba6ac05be6e9b1a0a5.png"
import imgFooterBg from "@/imports/Responsive/f31be86b017d3e040e23d59d6ce2f3d31db92341.png"
import imgLogo2 from "@/imports/Responsive/a8f435cbbd13608f551dbb7ec8face70a58ad464.png"

const BOOKING = "https://www.google.com/"

/* ─── SVG icons ─────────────────────────────────────────── */

function CalendarIcon({ stroke = "white" }: { stroke?: string }) {
  return (
    <svg className="shrink-0 size-[27px]" fill="none" viewBox="0 0 27 27">
      <path
        d={svgPaths.p217dbb00}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect fill={stroke} height="5.78571" width="19.2857" x="3.85714" y="5.78571" />
    </svg>
  )
}

function PhoneIcon({ fill = "white" }: { fill?: string }) {
  return (
    <svg className="shrink-0 size-[27px]" fill="none" viewBox="0 0 27 27">
      <path d={svgPaths.p1af40b00} fill={fill} />
      <path d={svgPaths.p13f0c880} fill={fill} />
      <path clipRule="evenodd" d={svgPaths.p258d8580} fill={fill} fillRule="evenodd" />
    </svg>
  )
}

function PhoneIcon2({ fill = "#333" }: { fill?: string }) {
  return (
    <svg className="shrink-0 size-[27px]" fill="none" viewBox="0 0 27 27">
      <path d={svgPaths.p1af40b00} fill={fill} />
      <path d={svgPaths.p2a185f80} fill={fill} />
      <path clipRule="evenodd" d={svgPaths.p15c58100} fill={fill} fillRule="evenodd" />
    </svg>
  )
}

function LocationIcon({ fill = "#333" }: { fill?: string }) {
  return (
    <svg className="shrink-0 size-[27px]" fill="none" viewBox="0 0 27 27">
      <path d={svgPaths.p36296b00} fill={fill} />
    </svg>
  )
}

function LocationIconSm({ fill = "#ccc" }: { fill?: string }) {
  return (
    <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3d368a00} fill={fill} />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="shrink-0 size-[28px] transition-transform duration-300"
      fill="none"
      viewBox="0 0 28 28"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M14 19L5 10L23 10L14 19Z" fill="#333333" />
    </svg>
  )
}

/* ─── Service data ───────────────────────────────────────── */

const services = [
  {
    name: "Swedish",
    price: "From $60 / 60 mins",
    img: imgSwedish,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          Swedish massage helps to relax your entire body. It reduces stress, relieves muscle tension, improves blood and lymph circulation, enhanced mood and promotes better sleep.
        </p>
        <p className="text-[#333] text-[18px] leading-[25px]">
          It is perfect for beginners, people with muscle soreness, sensitiveness or anyone needing to relieve daily stress.
        </p>
      </>
    ),
  },
  {
    name: "Deep Tissue",
    price: "From $70 / 60 mins",
    img: imgDeepTissue,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          {`As a "next-level" massage, deep tissue massage helps you with a specific problem like chronic pain or long-term pain, stiffness, limited movement, or an injury.`}
        </p>
        <p className="text-[#333] text-[18px] leading-[25px]">
          If you are desk workers, drivers, students… dealing with chronic pains like neck, shoulder, lower back, arms, legs… and needing increased mobility, post-workout recovery, easing stress and curbing anxiety, {"let's"} schedule now.
        </p>
      </>
    ),
  },
  {
    name: "Lymphatic Drainage",
    price: "From $65 / 60 mins",
    img: imgLymphatic,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          Lymphatic Drainage massage is not for muscles. {"It's"} a gentle, rhythmic technique designed to reduce swelling and clear fluid waste from your body, improved lymphatic circulation and clearing toxins, inflammation and immune system support.
        </p>
        <p className="text-[#333] text-[18px] leading-[25px]">Good candidates for lymphatic massage treatment include:</p>
        <ul className="list-disc pl-6 space-y-1">
          {["People recovering from surgery (cosmetic or medical)", "Those dealing with chronic swelling, fatigue, or water retention", "Individuals with lymphedema", "Wellness-minded folks who want to support detox and circulation", "Athletes or active individuals seeking faster recovery"].map(b => (
            <li key={b} className="text-[#333] text-[18px] leading-[25px]">{b}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    name: "Prenatal",
    price: "From $65 / 60 mins",
    img: imgPrenatal,
    content: (
      <p className="text-[#333] text-[18px] leading-[25px]">
        Prenatal massage focuses on relieving common pregnancy discomforts like lower back pain, swollen joints, muscle tension, and anxiety.
      </p>
    ),
  },
  {
    name: "Traditional Thai",
    price: "From $75 / 60 mins",
    img: imgThai,
    content: (
      <p className="text-[#333] text-[18px] leading-[25px]">
        Thai massage is ideal for active individuals, athletes, and desk workers. Because it combines assisted stretching, acupressure, and yoga-like poses, it is highly beneficial for anyone looking to increase flexibility, improve posture, relieve chronic muscle tension, or reduce stress.
      </p>
    ),
  },
  {
    name: "Chinese Tuina",
    price: "From $70 / 60 mins",
    img: imgTuina,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          Chinese tuina focuses on restoring the flow of energy (Qi) through meridian lines.
        </p>
        <p className="text-[#333] text-[18px] leading-[25px]">
          You are seeking a holistic treatment that combines pain relief with energetic rebalancing, or if you are dealing with general fatigue, poor circulation, and stress-related tension. Make an appointment with Chinese Tuina massage.
        </p>
      </>
    ),
  },
  {
    name: "Ashiatsu",
    price: "From $70 / 60 mins",
    img: imgAshiatsu,
    content: (
      <p className="text-[#333] text-[18px] leading-[25px]">
        Ashiatsu or walking on the back with barefoot massage, it helps you reduce chronic pain and improve flexibility and reach deeper than deep tissue.
      </p>
    ),
  },
  {
    name: "Craniosacral Therapy",
    price: "From $40 / 30 mins",
    img: imgCraniosacral,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          {"Craniosacral therapy helps to release deep physical and emotional tension in the head, neck, and back. It's benefits including:"}
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {["Headaches and migraines", "Chronic neck and back pain", "Fibromyalgia", "Temporomandibular joint (TMJ) disorders", "Stress, anxiety, and insomnia"].map(b => (
            <li key={b} className="text-[#333] text-[18px] leading-[25px]">{b}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    name: "Facial / Body Guasha",
    price: "From $40 / 30 mins",
    img: imgGuasha,
    content: (
      <>
        <p className="text-[#333] text-[18px] leading-[25px]">
          {`Guasha is a muscle scraping technique rooted in traditional Chinese medicine, is called as "scraping away illness" or "scraping sand".`}
        </p>
        <p className="text-[#333] text-[18px] leading-[25px]">Body Guasha: Used to treat chronic pain, inflammation, and tight muscles.</p>
        <p className="text-[#333] text-[18px] leading-[25px]">Facial Guasha: Used primarily as a cosmetic and relaxation ritual, to promote lymphatic drainage and reduce puffiness.</p>
      </>
    ),
  },
  {
    name: "Fire Cupping Therapy",
    price: "From $30 / 20 mins",
    img: imgFireCupping,
    content: (
      <p className="text-[#333] text-[18px] leading-[25px]">
        {`Fire cupping creates localized suction on the skin using heated glass cups to expand blood vessels, improve blood flow, and loosen tight connective tissues. This "reverse massage" used to relieve muscle tension and short-term musculoskeletal pain, increases range of motion.`}
      </p>
    ),
  },
  {
    name: "Face/Foot Reflexology",
    price: "From $25 / 20 mins",
    img: imgReflexology,
    content: (
      <p className="text-[#333] text-[18px] leading-[25px]">
        Reflexology is when pressure is applied to specific points of the foot, hand and face to release energy blockages, promote healing, and restore systemic balance.
      </p>
    ),
  },
]

/* ─── Testimonials ───────────────────────────────────────── */

const testimonials = [
  {
    name: "Markisha Edwards",
    text: `"Thu, was a good massage therapist, she made sure I was comfortable, she massage my face something I never had before... I would come again. Thank you!"`,
  },
  {
    name: "Steven Jaboro",
    text: `"I had an incredible massage with cupping, and it was hands down the best massage I've ever had. From the moment I walked in, I felt welcomed and comfortable. The therapist was professional, attentive, and really took the time to focus on the areas that needed the most work.The cupping therapy made a huge difference-it relieved so much tension, improved my mobility, and left me feeling completely refreshed. I walked out feeling better than I have in a long time. If you're looking for a massage that truly delivers results, I can't recommend this place enough. I'll definitely be coming back!"`,
  },
  {
    name: "Olivia Harper",
    text: `"My cupping and massage was absolutely amazing. I felt like a new person by the end."`,
  },
]

/* ─── Service card ───────────────────────────────────────── */

function ServiceItem({
  service,
  open,
  onToggle,
  isLast,
}: {
  service: typeof services[0]
  open: boolean
  onToggle: () => void
  isLast: boolean
}) {
  return (
    <div className={!isLast ? "border-b border-[#ccc]" : ""}>
      {/* Accordion header */}
      <button
        className="w-full flex items-center justify-between py-[14px] text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span
          className="text-[#333] text-[21px] leading-normal"
          style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700 }}
        >
          {service.name}
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* Accordion body */}
      <div
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
        style={{ maxHeight: open ? "1100px" : "0px" }}
      >
        <div className="flex flex-col gap-[8px] pb-[24px]">
          {/* Image with pink-border offset */}
          {/* mx-auto */}
          <div className="relative h-[350px] w-[305px]">
            {/* Pink border offset box */}
            <div className="absolute top-[30px] left-[24px] w-[250px] h-[310px] border-[3px] border-[#e83e93] rounded-[12px]" />
            {/* Image card */}
            <div className="absolute top-0 left-0 w-[250px] h-[310px] rounded-[12px] overflow-hidden bg-white">
              <img
                alt={service.name}
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Price */}
          <p
            className="text-[#eeb23b] text-[21px] leading-normal"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900 }}
          >
            {service.price}
          </p>

          {/* Description */}
          <div className="flex flex-col gap-[8px]">
            {service.content}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main App ───────────────────────────────────────────── */

export default function App() {
  const [openService, setOpenService] = useState<number | null>(null)
  const [slideIdx, setSlideIdx] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchX = useRef(0)

  function toggleService(i: number) {
    setOpenService(prev => (prev === i ? null : i))
  }

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(i, testimonials.length - 1))
    setSlideIdx(clamped)
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: clamped * carouselRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      const w = el.offsetWidth
      if (w) setSlideIdx(Math.round(el.scrollLeft / w))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  const RC = { fontFamily: "'Roboto Condensed', sans-serif" }

  return (
    <div
      className="relative w-full min-h-screen"
      style={RC}
    >
      {/* ── Page background ── */}
      <div className="fixed inset-0 -z-10">
        <img
          alt=""
          src={imgBg12}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Outer centering shell ── */}
      {/* max-w-[402px] */}
      <div className="w-full mx-auto flex flex-col">
        {/* ══ HEADING (header bar) ══ */}
        <div
          className="bg-[#1e726f] px-[24px] py-[16px] flex flex-col gap-[8px] w-full"
        >
          <div className="flex items-center gap-[8px]">
            <CalendarIcon stroke="white" />
            <span
              className="text-white text-[18px] leading-normal"
              style={{ fontWeight: 600 }}
            >
              Monday-Saturday: 10:00 AM - 07:00 PM
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <PhoneIcon fill="white" />
            <span
              className="text-white text-[18px] leading-normal"
              style={{ fontWeight: 600 }}
            >
              (734) 560 4445
            </span>
          </div>
        </div>

        {/* ══ LOGO BAR ══ */}
        {/* px-[60px] */}
        <div className="bg-[rgba(255,255,255,0.3)] flex items-center justify-center py-[16px] w-full">
          <div className="h-[140px] w-[268px] relative">
            <img
              alt="Holistic Therapy Massage"
              src={imgFrame572}
              className="absolute inset-0 w-full h-full object-cover overflow-visible"
            />
          </div>
        </div>

        {/* ══ HERO ══ */}
        <div className="relative h-[400px] w-full overflow-hidden bg-white">
          {/* Hero image — flipped as in original */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              alt="Holistic wellness center"
              src={imgHero}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: "scaleY(-1) rotate(180deg)" }}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.36)]" />
          {/* Centered text + button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[21px] px-[24px]">
            <p
              className="text-[#eeb23b] text-[32px] text-center leading-normal w-full"
              style={{ fontWeight: 900 }}
            >
              Personalized Care for Your Body, Mind, and Spirit.
            </p>
            <a
              href={BOOKING}
              target="_self"
              rel="noopener noreferrer"
              className="bg-[#1e726f] text-white text-[28px] text-center px-[40px] py-[10px] rounded-[1000px] leading-normal hover:bg-[#175f5d] active:scale-95 transition-all"
              style={{ fontWeight: 700 }}
            >
              Schedule Now
            </a>
          </div>
        </div>

        {/* ══ ABOUT US ══ */}
        <div className="flex flex-col gap-[60px] w-full">
          {/* About text + image */}
          <div className="flex flex-col gap-[24px] px-[24px] pt-[60px]">
            {/* Title */}
            <div className="flex flex-col w-full">
              <p className="text-[#1e726f] text-[28px] leading-[35px]" style={{ fontWeight: 900 }}>Why Choose</p>
              <p className="text-[#1e726f] text-[28px] leading-[35px]" style={{ fontWeight: 900 }}>Holistic Therapy Massage?</p>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-0 w-full">
              <p className="text-[#333] text-[18px] leading-[25px]">
                Welcome to Holistic Therapy Massage, located in 33425 Grand Rive Ave, Farmington, 48335, Michigan. We are always to put efforts to combine Asia Massage therapy (traditional healing and bodywork techniques rooted in China, Japan, Thailand, India and Vietnam) with Western Massage therapy to offer the best therapeutic healing massage therapy that balancing the {"body's"} energy pathways to stimulate natural healing and alleviate pain to help you literally Relax, Refresh and Renew you body.
              </p>
              <p className="text-[#333] text-[18px] leading-[25px] mt-[25px]">
                Our services are designed just for you, emphasize a personalized treatment plan {"that's"} tailored to meet you unique needs and preferences.
              </p>
            </div>

            {/* Image collage — faithful to original grid layout */}
            <div className="relative" style={{ height: "430px", width: "100%" }}>
              {/* Large image — top-left, 269 × 326 */}
              <div
                className="absolute bg-white rounded-[12px] overflow-hidden"
                style={{ top: 0, left: 0, width: "269px", height: "326px" }}
              >
                <img
                  alt="Massage therapy"
                  src={imgAboutMain}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Pink border box — offset from top-left of grid */}
              <div
                className="absolute border-[3px] border-[#e83e93] rounded-[20px]"
                style={{ top: "24%", left: "24%", width: "213px", height: "263px" }}
              />

              {/* Blur glow */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "147px",
                  left: "103px",
                  width: "168px",
                  height: "186px",
                  background: "rgba(177,135,63,0.23)",
                  filter: "blur(50px)",
                }}
              />

              {/* Second image — offset 130 × 174 */}
              {/* top: "40%" */}
              <div
                className="absolute bg-white rounded-[12px] overflow-hidden"
                style={{ bottom: 0, left: "32%", width: "224px", height: "248px" }}
              >
                <img
                  alt="Relaxing massage session"
                  src={imgAboutSecond}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ══ OUR SERVICES ══ */}
          <div className="px-[24px] w-full">
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[16px] px-[24px] py-[24px] flex flex-col gap-[24px]">
              {/* Section title */}
              <p
                className="text-[#1e726f] text-[28px] text-center leading-[35px]"
                style={{ fontWeight: 900 }}
              >
                Our Services
              </p>

              {/* Accordion list */}
              {services.map((svc, i) => (
                <ServiceItem
                  key={svc.name}
                  service={svc}
                  open={openService === i}
                  onToggle={() => toggleService(i)}
                  isLast={i === services.length - 1}
                />
              ))}
            </div>
          </div>

          {/* ══ TESTIMONIALS ══ */}
          <div className="px-[24px] w-full">
            <div className="flex flex-col gap-[24px] rounded-[16px]">
              <p
                className="text-[#1e726f] text-[28px] text-center leading-[35px]"
                style={{ fontWeight: 900 }}
              >
                What Our Client Says
              </p>

              <div className="bg-[rgba(255,255,255,0.24)] rounded-[16px] flex flex-col items-center gap-[24px] p-[24px]">
                {/* Slide track */}
                <div
                  ref={carouselRef}
                  className="w-full overflow-x-auto flex snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none" }}
                  onTouchStart={e => { touchX.current = e.touches[0].clientX }}
                  onTouchEnd={e => {
                    const diff = touchX.current - e.changedTouches[0].clientX
                    if (Math.abs(diff) > 40) goTo(diff > 0 ? slideIdx + 1 : slideIdx - 1)
                  }}
                >
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="min-w-full snap-center flex flex-col gap-[8px]"
                    >
                      <p
                        className="text-[#333] text-[21px] leading-normal"
                        style={{ fontWeight: 700 }}
                      >
                        {t.name}
                      </p>
                      <p className="text-[#333] text-[18px] leading-[25px]" style={{ fontWeight: 400 }}>
                        {t.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Dot indicators */}
                <div className="flex gap-[8px] items-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="h-[4px] rounded-[1000px] transition-all duration-300"
                      style={{
                        width: "48px",
                        backgroundColor: slideIdx === i ? "#1e726f" : "#ccc",
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-[24px] w-full">
          </div>
        </div>{/* end Frame21 */}
        {/* gap-[60px] */}
        <div className="flex flex-col w-full">
          {/* ══ CTA FOOTER SECTION ══ */}
          <div className="relative w-full overflow-hidden" style={{ minHeight: "551px" }}>
            {/* Background image — flipped as in original */}
            <div className="absolute inset-0">
              <img
                alt=""
                src={imgFooterBg}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: "scaleY(-1) rotate(180deg)", transformOrigin: "center" }}
              />
            </div>
            {/* Dark overlay to ensure legibility */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]" />
            {/* CTA content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-[72px] px-[32px] py-[32px] min-h-[551px]">
              <div className="flex flex-col gap-[16px] text-center w-full">
                <p
                  className="text-[#eeb23b] text-[32px] leading-normal w-full"
                  style={{ fontWeight: 900 }}
                >
                  Ready to Feel the Difference?
                </p>
                <p
                  className="text-white text-[21px] leading-normal w-full"
                  style={{ fontWeight: 700 }}
                >
                  Book your appointment today and begin your healing journey at Holistic Therapy Massage.
                </p>
              </div>
              <a
                href={BOOKING}
                target="_self"
                rel="noopener noreferrer"
                className="bg-[#1e726f] text-white text-[28px] text-center px-[40px] py-[10px] rounded-[1000px] leading-normal hover:bg-[#175f5d] active:scale-95 transition-all"
                style={{ fontWeight: 700 }}
              >
                Schedule Now
              </a>
            </div>
          </div>

          {/* ══ CONTACT US ══ */}
          {/* rounded-[24px] */}
          <div className="px-0 w-full">
            <div className="bg-[rgba(255,255,255,0.24)] px-[24px] py-[48px] flex flex-col items-center gap-[48px]">
              {/* Contact info */}
              <div className="flex flex-col gap-[24px] w-full">
                <p
                  className="text-[#1e726f] text-[28px] text-center leading-[35px] w-full"
                  style={{ fontWeight: 900 }}
                >
                  CONTACT US
                </p>

                {/* Working hours */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <CalendarIcon stroke="#333" />
                    <span className="text-[#333] text-[21px] leading-[25px]" style={{ fontWeight: 700 }}>Working Hours:</span>
                  </div>
                  <ul className="list-disc pl-[27px] text-[#333] text-[18px] leading-[25px]">
                    <li>Monday - Saturday: 10:00 AM - 07:00 PM</li>
                    <li>Sunday: OFF</li>
                  </ul>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <LocationIcon fill="#333" />
                    <span className="text-[#333] text-[21px] leading-[25px]" style={{ fontWeight: 700 }}>Address:</span>
                  </div>
                  <p className="text-[#333] text-[18px] leading-[25px]">
                    33425 Grand Rive Ave, Farmington, 48335, MI
                  </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <PhoneIcon2 fill="#333" />
                    <span className="text-[#333] text-[21px] leading-[25px]" style={{ fontWeight: 700 }}>Phone Number:</span>
                  </div>
                  <p className="text-[#333] text-[18px] leading-[25px]">(734) 560 4445</p>
                </div>
              </div>

              {/* Logo */}
              <div className="h-[238px] w-[268px] relative">
                <img
                  alt="Holistic Therapy Massage"
                  src={imgLogo2}
                  className="absolute inset-0 w-full h-full object-cover overflow-visible"
                />
              </div>
            </div>
          </div>

          {/* ══ BOTTOM BAR ══ */}
          {/* px-[60px] */}
          <div className="bg-[#1e726f] py-[18px] flex items-center justify-center w-full">
            <div className="flex items-center gap-[4px]">
              <LocationIconSm fill="#ccc" />
              <p className="text-[#ccc] text-[16px] leading-normal">
                2026 Holistic Therapy Massage. All rights reserved.
              </p>
            </div>
          </div>

        </div>{/* end Frame21 */}
      </div>{/* end centering shell */}
    </div>
  )
}
