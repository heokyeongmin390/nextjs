
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<Link className="text-2xl font-bold tracking-tighter text-slate-50 font-headline" href="/">LUMIÈRE &amp; GRAIN</Link>
<div className="hidden md:flex items-center space-x-10">
<Link className="text-slate-400 hover:text-slate-100 transition-all duration-300 font-manrope tracking-tight text-sm uppercase" href="#">Menu</Link>
<Link className="text-slate-400 hover:text-slate-100 transition-all duration-300 font-manrope tracking-tight text-sm uppercase" href="#">Reservations</Link>
<Link className="text-slate-400 hover:text-slate-100 transition-all duration-300 font-manrope tracking-tight text-sm uppercase" href="#">Locations</Link>
<Link className="text-slate-400 hover:text-slate-100 transition-all duration-300 font-manrope tracking-tight text-sm uppercase" href="#">Story</Link>
<Link className="text-slate-400 hover:text-slate-100 transition-all duration-300 font-manrope tracking-tight text-sm uppercase" href="#">Contact</Link>
</div>
<button className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-all duration-300">
                Book a Table
            </button>
</div>
</nav>
<main>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Dark espresso shot" className="w-full h-full object-cover opacity-60 grayscale" data-alt="close-up of rich dark espresso pouring from a chrome portafilter with dramatic low-key lighting and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqMUuqnlwm7D-xzMB6G_ArkXzWmiWFyAIvgdJOv5besTgyuGRNT1c-eofOy_jAvBS3bE9ZZam0gWZkzQPImlnyumJh2WD5XNsLrGKNh5kCvDfELzXWyjojsLN-8JTbW0w-jTwwDBZEF9Olz1ZqRBfh3F0-xf-EWJzqVNigXvQP0DL9HIzkeBIDG-OJCHgI45SddSRm_905-WpMZ_xKRTKx8WyzSwEGoMkt9CaTM3cboYQKGxUk5HtvJD76_7LmHic2GM-I07KaU-dw" />
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
</div>
<div className="relative z-10 text-center px-6">
<span className="label-md uppercase tracking-[0.4em] text-slate-400 mb-6 block">Premium Extraction</span>
<h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter font-headline mb-8 leading-none">
                    빛과 원두<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">에스프레소의 정점</span>
</h1>
<p className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                    어둠 속에서 피어나는 가장 순수한 향기. <br />루미에르 &amp; 그레인은 커피의 본질만을 남깁니다.
                </p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
<Link className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all" href="#menu">
                        EXPLORE MENU 
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
<span className="material-symbols-outlined text-3xl">expand_more</span>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-20 items-end mb-24">
<div className="md:w-1/2">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter font-headline mb-8">THE EXTRACTION</h2>
<p className="text-slate-400 text-xl leading-relaxed">
                            우리는 단순한 커피가 아닌, 공학적 완벽함을 추구합니다. 9바의 압력, 92도의 수온, 그리고 25초의 미학. 각 단계는 엄격한 기준 아래 통제됩니다.
                        </p>
</div>
<div className="md:w-1/2 text-right hidden md:block">
<span className="text-9xl font-black text-white/5 font-headline leading-none select-none">09 BAR</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="bg-neutral-900/50 p-12 group hover:bg-neutral-900 transition-all duration-500">
<span className="material-symbols-outlined text-4xl mb-8 text-white/50" data-icon="precision_manufacturing">precision_manufacturing</span>
<h3 className="text-2xl font-bold mb-4 font-headline uppercase">Precision</h3>
<p className="text-slate-500 leading-relaxed">0.1g 단위의 정밀한 계량으로 매 순간 일관된 풍미의 프로파일을 완성합니다.</p>
</div>

<div className="bg-neutral-900/50 p-12 group hover:bg-neutral-900 transition-all duration-500 md:mt-12">
<span className="material-symbols-outlined text-4xl mb-8 text-white/50" data-icon="thermostat">thermostat</span>
<h3 className="text-2xl font-bold mb-4 font-headline uppercase">Temperature</h3>
<p className="text-slate-500 leading-relaxed">원두의 산지와 로스팅 포인트에 최적화된 개별 온도 제어 시스템을 가동합니다.</p>
</div>

<div className="bg-neutral-900/50 p-12 group hover:bg-neutral-900 transition-all duration-500">
<span className="material-symbols-outlined text-4xl mb-8 text-white/50" data-icon="water_drop">water_drop</span>
<h3 className="text-2xl font-bold mb-4 font-headline uppercase">Filtration</h3>
<p className="text-slate-500 leading-relaxed">5단계 필터 시스템을 통해 불순물을 제거하고 원두 본연의 노트를 선명하게 살립니다.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl font-bold font-headline mb-2">CURATED SELECTION</h2>
<div className="w-12 h-1 bg-white mx-auto"></div>
</div>
<div className="space-y-16">

<div>
<h4 className="text-xs tracking-[0.5em] text-slate-500 uppercase mb-8 text-center">Black Coffee</h4>
<div className="grid gap-y-8">
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Signature Espresso</h5>
<p className="text-sm text-slate-500">다크 초콜릿과 견과류의 묵직한 바디감</p>
</div>
<span className="text-xl font-light">6.5</span>
</div>
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Long Black</h5>
<p className="text-sm text-slate-500">섬세한 산미가 살아있는 깔끔한 추출</p>
</div>
<span className="text-xl font-light">7.0</span>
</div>
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Pour Over (Seasonal)</h5>
<p className="text-sm text-slate-500">이달의 싱글 오리진 핸드드립</p>
</div>
<span className="text-xl font-light">9.0</span>
</div>
</div>
</div>

<div>
<h4 className="text-xs tracking-[0.5em] text-slate-500 uppercase mb-8 text-center">Milk &amp; Cream</h4>
<div className="grid gap-y-8">
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Flat White</h5>
<p className="text-sm text-slate-500">벨벳 같은 마이크로폼의 정석</p>
</div>
<span className="text-xl font-light">7.5</span>
</div>
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Noir Cortado</h5>
<p className="text-sm text-slate-500">진한 리스트레또와 적은 양의 우유</p>
</div>
<span className="text-xl font-light">7.0</span>
</div>
<div className="flex justify-between items-end group border-b border-white/5 pb-4">
<div>
<h5 className="text-xl font-medium group-hover:text-secondary transition-colors uppercase">Einspänner</h5>
<p className="text-sm text-slate-500">수제 바닐라 빈 크림과 딥 로스팅 커피</p>
</div>
<span className="text-xl font-light">8.5</span>
</div>
</div>
</div>
</div>
<div className="mt-24 text-center">
<button className="border border-white/20 px-12 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                        Full Menu Download
                    </button>
</div>
</div>
</section>

<section className="py-32 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="aspect-square bg-neutral-900 relative grayscale contrast-125">
<img className="w-full h-full object-cover opacity-50" data-alt="monochrome urban map-like view of a city street at night with high contrast streetlights" data-location="Seoul" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWJgf68NiaCN3BMqxn6WHFMpNfNTW8XNoHvsoWUFyBVq9bQ2l9BrL6KxGqgBDTkTFd51wGWEV6Nv_Qp3z9ygQs76Mick5rIVtIC1lkgy-v2hVRSTXtplmCGGeP70apcux43F3KI8STp8iBCZ6C43CCqqzh6YWj1CmZsWwrfWB7--J93tKGROOQPA1hK7yM4ImfACO5k5WBoLztcNCpOR9CuHtdtYqfC-Ry8AQnC_KFyJDDxyONGVdH3DK6UfySJdzmknTywsgqAUjP" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
<div className="absolute w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-5xl font-bold font-headline mb-8 uppercase tracking-tighter">LOCATE US</h2>
<div className="space-y-12">
<div>
<p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Address</p>
<p className="text-2xl font-light text-slate-200">서울특별시 강남구 테헤란로 427, 1F</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Hours</p>
<div className="flex justify-between max-w-xs">
<span className="text-slate-400">Weekdays</span>
<span className="text-slate-200">08:00 — 22:00</span>
</div>
<div className="flex justify-between max-w-xs mt-2">
<span className="text-slate-400">Weekends</span>
<span className="text-slate-200">10:00 — 21:00</span>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Contact</p>
<p className="text-2xl font-light text-slate-200">02. 512. 0000</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-900 py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-lg font-black text-slate-50 font-headline uppercase tracking-widest">LUMIÈRE &amp; GRAIN</span>
<p className="font-manrope text-[10px] uppercase tracking-widest text-slate-500">© 2024 Gastronomy Group. Designed with Editorial Architect.</p>
</div>
<div className="flex gap-8">
<Link className="font-manrope text-xs uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors" href="#">Privacy Policy</Link>
<Link className="font-manrope text-xs uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors" href="#">Terms of Service</Link>
<Link className="font-manrope text-xs uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors" href="#">Accessibility</Link>
<Link className="font-manrope text-xs uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors" href="#">Careers</Link>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white" data-icon="share">share</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white" data-icon="language">language</span>
</div>
</footer>

    </div>
  );
}
  