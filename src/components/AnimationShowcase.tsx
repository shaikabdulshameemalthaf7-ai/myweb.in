import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Zap,
  MousePointer,
  RotateCcw,
  Sliders,
  Layers,
  Flame,
  CheckCircle2,
  Play,
  ArrowRight,
} from 'lucide-react';

export const AnimationShowcase: React.FC = () => {
  // 1. Tilt Card state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const tiltCardRef = useRef<HTMLDivElement>(null);

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -28;
    setTilt({ x, y });
  };

  const handleTiltLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // 2. Magnetic Button & Particle Burst state
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const magRef = useRef<HTMLButtonElement>(null);

  const handleMagMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magRef.current) return;
    const rect = magRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.45;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.45;
    setMagneticPos({ x, y });
  };

  const handleMagLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  const handleMagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Date.now();
    setBursts((prev) => [...prev.slice(-6), { id, x: magneticPos.x, y: magneticPos.y }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 900);
  };

  // 3. Glow Speed & Hue Slider state
  const [glowSpeed, setGlowSpeed] = useState(3);
  const [glowIntensity, setGlowIntensity] = useState(70);

  // 4. Interactive Counter Trigger
  const [counterVal, setCounterVal] = useState(99.4);
  const [isCounting, setIsCounting] = useState(false);

  const triggerCountAnimation = () => {
    if (isCounting) return;
    setIsCounting(true);
    setCounterVal(0);
    let start = 0;
    const target = 99.8;
    const step = () => {
      start += 2.8;
      if (start >= target) {
        setCounterVal(target);
        setIsCounting(false);
      } else {
        setCounterVal(Number(start.toFixed(1)));
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section id="animations" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Soft Mesh Ambient */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            &lt;/&gt; Web Animation Studio
          </span>
          <span className="text-xs font-mono text-slate-400">· Interactive UI Physics</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
              DESIGN IN MOTION
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Attractive, smooth animations elevate your website from ordinary to unforgettable.
              Test these interactive micro-animations created by ALTHAF.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>60 FPS Hardware-Accelerated CSS</span>
          </div>
        </div>

        {/* 4 Interactive Animation Sandbox Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 3D Spatial Tilt */}
          <div
            ref={tiltCardRef}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between min-h-[320px] transition-all duration-200 hover:shadow-xl hover:border-blue-400 relative overflow-hidden group cursor-pointer"
            style={{
              transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>01 · SPATIAL 3D TILT</span>
                <span className="text-blue-600 font-bold">Gyro-Sim</span>
              </div>
              <h3 className="font-extrabold font-display text-lg text-slate-900">
                Spatial Gyro Card
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Move your cursor across this card to experience 3D depth and dynamic lighting angles.
              </p>
            </div>

            {/* Inner dynamic floating graphic */}
            <div className="my-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                3D
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">Tilt X: {Math.round(tilt.x)}°</span>
                <span className="text-[10px] text-slate-500 font-mono">Tilt Y: {Math.round(tilt.y)}°</span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-blue-600 flex items-center gap-1">
              <MousePointer className="w-3.5 h-3.5" />
              <span>Hover &amp; Move Cursor</span>
            </span>
          </div>

          {/* Card 2: Magnetic Button & Burst */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between min-h-[320px] transition-all hover:shadow-xl hover:border-blue-400 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>02 · KINETIC MAGNET</span>
                <span className="text-emerald-600 font-bold">Physics</span>
              </div>
              <h3 className="font-extrabold font-display text-lg text-slate-900">
                Magnetic Attraction
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                The button tracks your pointer with spring magnetism and releases a burst upon clicking.
              </p>
            </div>

            {/* Magnetic Button Area */}
            <div className="my-6 flex items-center justify-center relative py-4">
              <button
                ref={magRef}
                onMouseMove={handleMagMove}
                onMouseLeave={handleMagLeave}
                onClick={handleMagClick}
                style={{
                  transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)`,
                  transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 active:scale-90 transition-all cursor-pointer flex items-center gap-2 relative z-10"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Click to Trigger</span>
              </button>

              {/* Spark particle burst elements */}
              {bursts.map((b) => (
                <div
                  key={b.id}
                  className="absolute pointer-events-none animate-ping text-blue-500 font-bold text-xs"
                >
                  ✨ +100 XP
                </div>
              ))}
            </div>

            <span className="text-[11px] font-mono text-blue-600 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Magnetic Pull &amp; Click</span>
            </span>
          </div>

          {/* Card 3: Aura Shimmer & Neon Pulse */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between min-h-[320px] transition-all hover:shadow-xl hover:border-blue-400 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>03 · AURA GLOW</span>
                <span className="text-purple-600 font-bold">Luminescence</span>
              </div>
              <h3 className="font-extrabold font-display text-lg text-slate-900">
                Pulsing Neon Shimmer
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Adjust glow intensity and see high-converting ambient accents in real-time.
              </p>
            </div>

            {/* Glowing Orb Box */}
            <div className="my-4 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center relative">
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white transition-all duration-300"
                style={{
                  boxShadow: `0 0 ${glowIntensity / 2}px ${glowIntensity / 5}px rgba(59, 130, 246, 0.45)`,
                  animation: `pulse ${glowSpeed}s infinite`,
                }}
              >
                <Flame className="w-6 h-6" />
              </div>

              <div className="w-full mt-4 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Intensity: {glowIntensity}%</span>
                  <span>Speed: {glowSpeed}s</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            <span className="text-[11px] font-mono text-blue-600 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" />
              <span>Drag Slider to Test Glow</span>
            </span>
          </div>

          {/* Card 4: Kinetic Metric Counter */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between min-h-[320px] transition-all hover:shadow-xl hover:border-blue-400 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>04 · KINETIC DATA</span>
                <span className="text-amber-600 font-bold">Metrics</span>
              </div>
              <h3 className="font-extrabold font-display text-lg text-slate-900">
                Smooth Ticker Counter
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Animated counters captivate attention and highlight key business achievements.
              </p>
            </div>

            {/* Big Ticker Metric */}
            <div className="my-6 p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
              <div className="text-3xl font-black font-display text-blue-600 tracking-tight">
                {counterVal}%
              </div>
              <span className="text-[10px] font-mono text-slate-500 block">
                Average Lighthouse Speed Score
              </span>
              <button
                onClick={triggerCountAnimation}
                disabled={isCounting}
                className="mt-2 text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center justify-center gap-1 mx-auto transition-colors cursor-pointer"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isCounting ? 'animate-spin' : ''}`} />
                <span>Re-run Counter</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Optimized for High Conversions</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
