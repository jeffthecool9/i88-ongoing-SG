/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "motion/react";

// Scroll Reveal Component
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const playSFX = (_type: "alert" | "click" | "success") => {
  // Safe no-op fallback to prevent runtime crashes
  // Replace later with your real sound logic if needed
  return;
};

const sectionTitle3DClass =
  "text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.28)]";

const sectionTitleCyan3DClass =
  "text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.25em] text-[#8fefff] [text-shadow:0_1px_6px_rgba(0,191,255,0.12)]";
const sectionSubtitleClass =
  "mt-4 text-base sm:text-lg text-[#c8d5e6] font-medium [text-shadow:0_1px_0_rgba(255,255,255,0.03)]";

const statNumberClass =
  "text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-b from-[#ffffff] via-[#f3fbff] to-[#92e9ff] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(70,120,150,0.22)] [text-shadow:0_1px_0_rgba(255,255,255,0.14),0_8px_18px_rgba(0,191,255,0.12)]";

const cyanShineClass =
  "bg-gradient-to-r from-[#c0f8ff] via-[#55e6ff] to-[#00c8ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,191,255,0.22)]";

const mediumTitleClass =
  "text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight bg-gradient-to-b from-[#ffffff] via-[#f8fbff] to-[#d8ebff] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(110,135,165,0.24)] [text-shadow:0_1px_0_rgba(255,255,255,0.14),0_8px_18px_rgba(0,0,0,0.18)]";



const CyberBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #00BFFF 1px, transparent 1px),
                           linear-gradient(to bottom, #00BFFF 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <motion.div
        style={{ y: y1 }}
        animate={{
          x: [-50, 50, -50],
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        style={{ y: y2 }}
        animate={{
          x: [30, -30, 30],
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]"
      />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [0, -100],
            x: [0, 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const ExperienceBackground = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.02]"
        initial={{
          backgroundImage: `linear-gradient(to right, #00BFFF 1px, transparent 1px),
                             linear-gradient(to bottom, #00BFFF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

const AnimatedUnderline = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative inline-block"
    >
      {children}
   <motion.span
  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-[#5ee9ff] via-[#11cfff] to-[#5ee9ff] shadow-[0_0_10px_rgba(0,191,255,0.22)]"
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
/>
    </motion.span>
  );
};

type PayLogo = {
  name: string;
  src: string;
  scale?: number;
};

const PaymentLogo = ({ logo }: { logo: PayLogo }) => {
  const scale = logo.scale ?? 0.9;

  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 0 25px rgba(0,191,255,0.18)",
      }}
      className="
        relative flex-shrink-0
        h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44
        rounded-xl
        bg-white
        border border-white/20
        flex items-center justify-center
        px-4 py-3
        transition-all duration-300
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      "
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="h-full w-full object-contain"
        style={{ transform: `scale(${scale})` }}
      />
    </motion.div>
  );
};

const LiveTransactions = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const malaysianNames = [
    "eagle99",
    "nurifi98",
    "ahmad1919",
    "players85",
    "dragon19",
    "tiger88",
    "siti_92",
    "ali_king",
    "lion_sg",
    "malay_pro",
    "sg_gamer",
    "hacker7",
    "rizal_88",
    "fatimah_z",
    "chong_win",
    "tan_huat",
    "kumar_v",
    "meena_p",
    "syed_top",
    "wan_boss",
    "lim_kopi",
    "abu_bakar",
    "zulkifli",
    "leong_88",
    "fadhli_99",
    "shafiq_01",
    "azman_88",
    "hafiz_z",
    "khairul_p",
    "najib_boss",
  ];

  const depositPool = [50, 50, 50, 200, 200, 100, 500, 1000, 50, 100, 50];

  const getSpins = (deposit: number) => {
    if (deposit >= 100) return 188;
    if (deposit >= 50) return 88;
    return 0;
  };

  const generateMemberActivity = (timeStr?: string) => {
    const deposit = depositPool[Math.floor(Math.random() * depositPool.length)];
    const spins = getSpins(deposit);

    return {
      id: Math.random().toString(36).slice(2, 13),
      user: malaysianNames[Math.floor(Math.random() * malaysianNames.length)],
      deposit,
      spins,
      time: timeStr || "Just now",
    };
  };

  const [activity, setActivity] = useState<any[]>([]);

  useEffect(() => {
    const initial: any[] = [
      {
        id: Math.random().toString(36).slice(2, 13),
        user: malaysianNames[Math.floor(Math.random() * malaysianNames.length)],
        deposit: 30,
        spins: 0,
        time: "Just now",
      },
      {
        id: Math.random().toString(36).slice(2, 13),
        user: malaysianNames[Math.floor(Math.random() * malaysianNames.length)],
        deposit: 30,
        spins: 0,
        time: "2 mins ago",
      },
    ];

    for (let i = 0; i < 5; i++) {
      initial.push(generateMemberActivity(`${(i + 1) * 3 + 2} mins ago`));
    }

    setActivity(initial);

    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextUpdate = () => {
      const randomDelay =
        Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;

      timeoutId = setTimeout(() => {
        setActivity((prev) => {
          const newEntry = generateMemberActivity();
          playSFX("alert");
          return [newEntry, ...prev.slice(0, 6)];
        });

        scheduleNextUpdate();
      }, randomDelay);
    };

    scheduleNextUpdate();

    return () => clearTimeout(timeoutId);
  }, []);

  const maskUser = (user: string) => user.substring(0, 5) + "***";
  const recentActivity = activity.slice(0, 10);

  return (
    <section
      ref={ref as any}
      className="py-12 sm:py-20 bg-[#0B1120] relative overflow-hidden border-t border-white/5"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #00BFFF 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center mb-12"
>
  <h2 className={sectionTitle3DClass}>
    <AnimatedUnderline>Recent Joiners</AnimatedUnderline>
  </h2>
  <p className="mt-2 text-[#bcd3ea] text-sm font-sans">
    Real-time deposits unlocking Free Tokens
  </p>
</motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <h3 className={sectionTitleCyan3DClass}>Recent Joins & Deposits</h3>
          </div>

          <div className="rounded-none overflow-hidden border border-white/5">
            <div className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 items-center gap-4 bg-white/5 border-b border-white/10">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                Member
              </span>
              <span className="hidden sm:block text-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                Deposit
              </span>
              <span className="text-right text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                Free Tokens
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {recentActivity.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    opacity: { duration: 0.2 },
                  }}
                  className={`p-3 sm:p-5 flex sm:grid sm:grid-cols-3 items-center justify-between gap-4 hover:bg-white/5 transition-all duration-300 group border-b border-white/5 last:border-0 ${
                    idx % 2 === 0 ? "bg-[#1e293b]/40" : "bg-[#1e293b]/10"
                  } backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/10 bg-[#0B1120] flex-shrink-0 hidden xs:flex">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tx.user}`}
                        alt={tx.user}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-sm sm:text-base md:text-lg font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                        {maskUser(tx.user)}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                          {tx.time}
                        </span>
                        <span className="text-[9px] text-gray-700 sm:hidden">
                          •
                        </span>
                        <span className="text-[9px] sm:hidden font-bold text-gray-400">
                          Deposited $ {tx.deposit.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex justify-center">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] border px-4 py-1.5 rounded-none transition-all duration-500 text-white/80 border-white/5 bg-white/5">
                      $ {tx.deposit.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-right whitespace-nowrap">
                    <div
                      className={`text-sm sm:text-lg md:text-xl font-black font-sans tracking-tighter ${
                        tx.spins > 0 ? cyanShineClass : "text-gray-500"
                      }`}
                    >
                      {tx.spins > 0 ? `${tx.spins} Free Tokens` : "No Bonus"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentRiver = () => {
  const logos = [
    { name: "Maybank", src: "/paynow.jpg", scale: 1 },
    { name: "CIMB", src: "/uob.png", scale: 1 },
    { name: "FPX", src: "/posb.jpg", scale: 1 },
    { name: "DuitNow", src: "/ocbc.jpg", scale: 1 },
    { name: "PublicBank", src: "/dbs.png", scale: 1 },
    {
      name: "Bitcoin",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      scale: 1,
    },
    {
      name: "USDT",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Tether_USDT.png/1200px-Tether_USDT.png",
      scale: 1,
    },
  ];

  const loopedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h3 className={sectionTitleCyan3DClass}>
            Supported Payment Methods
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            }}
          >
            {loopedLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center
                w-[140px] sm:w-[160px] md:w-[180px]
                h-[76px] sm:h-[84px] md:h-[96px]
                rounded-2xl
                bg-white/90
                shadow-[0_0_20px_rgba(255,255,255,0.08)]
                px-4 sm:px-5"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 sm:h-11 md:h-12 w-auto object-contain"
                  style={{ transform: `scale(${logo.scale || 1})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Bridge");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 40;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) onComplete();
  }, [progress, onComplete]);

  useEffect(() => {
    if (progress < 30) setLoadingText("Securing Connection");
    else if (progress < 60) setLoadingText("Loading Gaming Assets");
    else if (progress < 90) setLoadingText("Syncing Live Data");
    else setLoadingText("Ready to Play");
  }, [progress]);

  const icons = [
    { icon: "fa-gamepad", delay: 0 },
    { icon: "fa-dice", delay: 0.1 },
    { icon: "fa-trophy", delay: 0.2 },
    { icon: "fa-coins", delay: 0.3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-[#0B1120] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <div className="w-32 h-32 border-2 border-cyan-500/20 rounded-none flex items-center justify-center relative overflow-hidden group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-cyan-500 rounded-none"
            />
            <span className="text-5xl font-black text-white tracking-tighter italic">
              i88
            </span>
          </div>

          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
          />
        </motion.div>

        <div className="flex gap-6 mb-8">
          {icons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.2, 1] }}
              transition={{
                delay: item.delay,
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="text-cyan-500/60 text-2xl"
            >
              <i className={`fas ${item.icon}`}></i>
            </motion.div>
          ))}
        </div>

        <div className="w-64 text-center">
          <motion.h2 className="text-sm font-bold text-white uppercase tracking-[0.3em] mb-4 h-5">
            {loadingText}
          </motion.h2>

          <div className="h-1 w-full bg-white/5 rounded-none overflow-hidden relative border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            />
          </div>

          <motion.p className="mt-3 text-[10px] font-mono text-cyan-500/50 tracking-widest">
            {Math.round(progress)}% COMPLETE
          </motion.p>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00BFFF 1px, transparent 1px),
                           linear-gradient(to bottom, #00BFFF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const pastEvents = [
    {
      id: 1,
      title: "The 8 Immortals Treasure",
      subtitle: "CNY Special Event",
      date: "Feb 2026",
      icon: "Coins",
      color: "from-red-600 to-amber-500",
      accent: "#ef4444",
      image: "/cny.png",
      prizes: [
        "RM38,888 Free Credit Pool",
        "Limited Edition Gold Tokens",
        "Angpow Surprises",
      ],
      winners: [
        { name: "ami**9*", prize: "$38,888" },
        { name: "lucky**w*", prize: "$38,888" },
        { name: "u*z***zi*", prize: "$38,888" },
      ],
      featured: true,
      desc: "Our most recent lunar celebration where 8 lucky immortals shared a massive credit pool.",
    },
    {
      id: 2,
      title: "Xmas Monopoly Mini Game",
      subtitle: "Christmas 2025",
      date: "Dec 2025",
      icon: "Gift",
      color: "from-blue-600 to-cyan-400",
      accent: "#00BFFF",
      image: "/xmas.png",
      prizes: [
        "Rolex Luxury Watch",
        "iPhone 17 Pro Max",
        "iPad Pro",
        "Cruise Tickets",
        "Apple Watch",
      ],
      winners: [
        { name: "rolex_owner", prize: "Rolex Cosmograph Daytona" },
        { name: "cruise_lucky", prize: "iPhone 17 Pro Max" },
        { name: "apple_fan", prize: "iPad Pro" },
      ],
      featured: false,
      desc: "A festive board game experience where players traveled through a winter map to claim luxury physical prizes.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const scrollTo =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B1120] font-display text-white selection:bg-[#00BFFF] selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Stats */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
              <CyberBackground />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-8"
                  >
                    {[
                      { label: "Active Players", value: "50K+" },
                      { label: "Daily Winners", value: "12K+" },
                      { label: "Games Available", value: "1000+" },
                      { label: "Payout Rate", value: "98.5%" },
                    ].map((stat, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className={statNumberClass}>{stat.value}</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="py-8 sm:py-12 bg-[#0B1120] border-y border-white/5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PaymentRiver />
              </div>
            </section>

            {/* Live */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <LiveTransactions />
            </motion.div>

            {/* Past Events */}
            <section className="relative py-24 bg-[#0f172a] overflow-hidden">
              <ExperienceBackground />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              >
                {/* Title */}
         <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-center mb-16"
>
  <h2 className={sectionTitle3DClass}>
    <AnimatedUnderline>Past Big Events</AnimatedUnderline>
  </h2>
  <p className="mt-4 text-base sm:text-lg text-[#d3e3f5] font-medium [text-shadow:0_1px_0_rgba(255,255,255,0.05)]">
    Celebrating our past winners and events
  </p>
</motion.div>

                {/* Carousel Container */}
                <div className="relative group/carousel">
                  {/* Left Arrow */}
                  <div className="absolute top-1/2 left-0 sm:-left-8 -translate-y-1/2 z-20 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => scroll("left")}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all shadow-lg"
                    >
                      <i className="fas fa-chevron-left text-sm sm:text-base"></i>
                    </button>
                  </div>

                  {/* Right Arrow */}
                  <div className="absolute top-1/2 right-0 sm:-right-8 -translate-y-1/2 z-20 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => scroll("right")}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all shadow-lg"
                    >
                      <i className="fas fa-chevron-right text-sm sm:text-base"></i>
                    </button>
                  </div>

                  {/* Cards Row */}
                  <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
                    style={
                      { scrollbarWidth: "none", msOverflowStyle: "none" } as any
                    }
                  >
                    {pastEvents.map((event, idx) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{
                          y: -8,
                          scale: 1.01,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        className="relative flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[600px] snap-center group overflow-hidden bg-[#1e293b]/40 border border-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 transition-all duration-500"
                      >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${event.color} shadow-lg`}
                              >
                                {event.subtitle}
                              </span>
                              <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
                                {event.date}
                              </span>
                            </div>

                            <h3 className={mediumTitleClass}>{event.title}</h3>
                          </div>

                          {event.featured && (
                            <div className="flex items-center gap-2 text-amber-400">
                              <i className="fas fa-star animate-pulse text-xs"></i>
                              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                                Most Recent
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="mb-8 sm:mb-10"
                        >
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                            <img
                              src={event.image}
                              alt={`${event.title} showcase`}
                              className="w-full h-[160px] sm:h-[220px] md:h-[260px] object-cover"
                              loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                            <div className="absolute bottom-3 left-3">
                              <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.25em] bg-black/50 border border-white/10 text-white/90 backdrop-blur">
                                Event Highlight
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Winners */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent -ml-6 -mr-6 sm:-ml-12 sm:-mr-12 pointer-events-none" />

                          <h4 className={sectionTitleCyan3DClass}>
                            Top Winners Spotlight
                          </h4>

                          <div className="space-y-3 relative z-10 mt-4">
                            {event.winners.map((winner, wIdx) => (
                              <motion.div
                                key={wIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + wIdx * 0.08 }}
                                whileHover={{
                                  scale: 1.015,
                                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                                  boxShadow:
                                    "0 0 26px rgba(34, 211, 238, 0.18)",
                                  borderColor: "rgba(34, 211, 238, 0.9)",
                                }}
                                className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-black/25 border border-white/10 border-l-[3px] border-l-cyan-400/70 backdrop-blur-sm transition-all duration-300"
                              >
                                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[11px] sm:text-xs font-black tracking-widest text-white/80">
                                      {String(wIdx + 1).padStart(2, "0")}
                                    </span>
                                  </div>

                                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/10 bg-[#1e293b] flex-shrink-0">
                                    <img
                                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${winner.name}`}
                                      alt={winner.name}
                                      className="w-full h-full object-cover"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <div className="text-sm sm:text-base md:text-lg font-black text-white uppercase tracking-tight truncate">
                                      {winner.name.substring(0, 3)}***
                                      {winner.name.slice(-2)}
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] font-bold text-white/50 uppercase tracking-[0.22em] mt-0.5">
                                      Winner
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right flex-shrink-0 w-[120px] sm:w-[170px] md:w-[220px]">
                                  <div
                                    className={`text-sm sm:text-base md:text-xl font-black tracking-tight leading-tight break-words ${cyanShineClass}`}
                                  >
                                    {winner.prize}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] font-bold text-white/50 uppercase tracking-[0.22em] mt-0.5">
                                    Prize
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Big Background Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                          <i
                            className={`fas fa-${event.icon.toLowerCase()} text-[200px]`}
                          ></i>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {pastEvents.map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/10"
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom caption */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-16 text-center"
                >
                  <p className="text-gray-500 text-xs font-sans uppercase tracking-[0.4em]">
                    New events launching every month. Stay tuned
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* CTA */}
            <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-[#0f172a]" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"
              />

              <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-cyan-500/30 rounded-none p-10 sm:p-16 text-center shadow-[0_0_50px_rgba(0,191,255,0.1)] relative overflow-hidden"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      className={sectionTitle3DClass}
                    >
                      Unlock Your Welcome
                      <br />
                      Reward
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className={sectionSubtitleClass}
                    >
                      Choose a tier. Rewards activate instantly after deposit
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
                    >
                      {/* $50 */}
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:bg-white/10 transition-colors"
                        onMouseEnter={() => playSFX("click")}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-gray-200 border border-white/10">
                              STARTER
                            </div>

                            <h3
                              className="
                                mt-5 text-[34px] md:text-[40px]
                                font-black leading-[0.95] tracking-tight
                                bg-gradient-to-b from-white via-[#f4f8ff] to-[#b9c7dc]
                                bg-clip-text text-transparent
                                drop-shadow-[0_2px_0_rgba(120,140,170,0.35)]
                                [text-shadow:0_1px_0_rgba(255,255,255,0.12),0_10px_22px_rgba(0,0,0,0.28)]
                              "
                            >
                              Deposit
                              <br />
                              <span className="inline-block mt-1">$50</span>
                            </h3>

                            <p className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#d3dceb] leading-snug">
                              Activate{" "}
                              <span className={cyanShineClass}>
                                88 FREE TOKENS
                              </span>
                            </p>
                          </div>

                          <div className="text-right">
                            <div
                              className="
                                text-[54px] md:text-[62px]
                                font-black leading-none tracking-tight
                                bg-gradient-to-b from-white via-[#eef7ff] to-[#9fb9d9]
                                bg-clip-text text-transparent
                                drop-shadow-[0_2px_0_rgba(110,130,155,0.35)]
                                [text-shadow:0_1px_0_rgba(255,255,255,0.14),0_12px_24px_rgba(0,0,0,0.28)]
                              "
                            >
                              88
                            </div>
                            <div className="text-[13px] font-bold text-[#8eb3d8] tracking-[0.18em] mt-1 uppercase">
                              Tokens
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* $100 */}
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-white/5 backdrop-blur-sm p-7 shadow-[0_0_45px_rgba(0,191,255,0.18)] hover:from-cyan-500/15 transition-colors"
                        onMouseEnter={() => playSFX("click")}
                      >
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-cyan-500/10 text-cyan-200 border border-cyan-400/20">
                              BEST VALUE
                            </span>
                            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-cyan-500/15 text-cyan-100 border border-cyan-400/25">
                              MOST CHOSEN
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              className="
                                text-[34px] md:text-[40px]
                                font-black leading-[0.95] tracking-tight
                                bg-gradient-to-b from-white via-[#f4fbff] to-[#b9dfff]
                                bg-clip-text text-transparent
                                drop-shadow-[0_2px_0_rgba(100,145,175,0.35)]
                                [text-shadow:0_1px_0_rgba(255,255,255,0.12),0_10px_22px_rgba(0,0,0,0.25)]
                              "
                            >
                              Deposit
                              <br />
                              <span className="inline-block mt-1">$100</span>
                            </h3>

                            <p className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#d7e8f4] leading-snug">
                              Activate{" "}
                              <span className={cyanShineClass}>
                                188 FREE TOKENS
                              </span>
                            </p>
                          </div>

                          <div className="text-right">
                            <div
                              className="
                                text-[54px] md:text-[62px]
                                font-black leading-none tracking-tight
                                bg-gradient-to-b from-white via-[#eefcff] to-[#9fd8ff]
                                bg-clip-text text-transparent
                                drop-shadow-[0_2px_0_rgba(80,130,160,0.35)]
                                [text-shadow:0_1px_0_rgba(255,255,255,0.14),0_12px_24px_rgba(0,191,255,0.18)]
                              "
                            >
                              188
                            </div>
                            <div className="text-[13px] font-bold text-cyan-300/80 tracking-[0.18em] mt-1 uppercase">
                              Tokens
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.45,
                      }}
                      className="mt-10"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -8 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => playSFX("success")}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg md:text-xl px-12 py-5 rounded-full uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                      >
                        Start Winning Now
                      </motion.button>

                      <p className="mt-8 text-xs text-gray-500 font-sans uppercase tracking-[0.2em]">
                        * Limited to New Member only
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0B1120] border-t border-white/5 py-12 sm:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/i882.png"
                    alt="i88 Logo"
                    className="mx-auto mb-6 w-20 sm:w-24 md:w-28 lg:w-32 opacity-95 brightness-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]"
                  />

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                    i88 is the leading online gaming platform in Asia,
                    providing a secure and fair gaming experience for all players
                  </p>

                  <p className="text-gray-500 text-sm mt-10">
                    © 2026 i88 Gaming Group. All rights reserved
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
