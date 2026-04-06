
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-manrope tracking-tight">
<Link className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 uppercase" href="#">LUMIÈRE &amp; GRAIN</Link>
<div className="hidden md:flex items-center gap-10">
<Link className="text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-600 transition-all duration-300" href="#">Menu</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300" href="#">Reservations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300" href="#">Locations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300" href="#">Story</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300" href="#">Contact</Link>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-80 transition-all duration-300 active:scale-95">
                Book a Table
            </button>
</div>
</nav>
<main>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Grand Hero Image" className="w-full h-full object-cover" data-alt="Luxurious dark fine dining interior with crystal chandeliers, velvet seating, and elegant table settings with dramatic low lighting and warm glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJdd2x3gQsxe8i8YYN67n06uyQuL7F58xG7NIlwntqO9p5Z5aPnr1ZICe441blu6-rZOkasrNDPh66mW1euRayQ0NGrfUQtC9PVC5XSm5Js6MXdnTHdGSA7o4JdTa4iWEHxUIayeeIVLA5Xj5fjy2uGYXC0odqXRGxU3j8QJXbF4CAlTjdht-Htw5LZRF_g_pnH31e9PaMuoOpOBQEllPvaD_h9jPVa6D3-wz-3i8qt4Ffr9X2pMZ9e11W3tG-54MZnMn_gEYxBQai" />
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-on-background/40 to-on-background/90"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<span className="label-md uppercase tracking-[0.4em] text-secondary-fixed mb-6 block font-headline">Since 1984</span>
<h1 className="text-5xl md:text-8xl font-headline font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
                    미식의 정점,<br />고귀한 순간의 기록
                </h1>
<p className="text-lg md:text-xl text-surface-variant font-light max-w-2xl mx-auto leading-relaxed mb-12">
                    LUMIÈRE &amp; GRAIN은 빛과 질감을 테마로 한 현대적 파인 다이닝의 정수를 선보입니다. 
                    계절의 깊이를 담은 예술적인 요리를 경험하십시오.
                </p>
<div className="flex flex-col md:flex-row gap-6 justify-center">
<button className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all">예약하기</button>
<button className="backdrop-blur-md bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">메뉴 보기</button>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-surface-bright overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-7 relative">
<div className="aspect-[4/5] overflow-hidden rounded-xl editorial-shadow">
<img alt="Chef's Table" className="w-full h-full object-cover" data-alt="Professional chef in white uniform meticulously plating a gourmet dish with tweezers in a high-end minimalist kitchen environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4GxQqv4BENkDsg9DNu0hYyBouvHOtOkZiF1wDUIenK1nIjl-SPjjJ9RX_uokK9R23DNw5nlfoP_61gJUrFUoXQvh66pGDCpQdR4xDpnkAdwHUGzzUx_N5DJow_0091kT0LUXVvfie99akB6-iWx-_vwynV-dv7SUZAzINwfY7gE01cbMw7KynwpJYVrWQkeM0f66XE_FXTWssg7OjHflKR6IHihgxSgCLsOSymrJJU8aq2jyJchjKV9csuAapVO_w7C-3e988qZNi" />
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-container rounded-xl flex items-end p-8 hidden md:flex">
<p className="text-white font-headline text-2xl font-bold leading-tight">Mastering the Art of Gastronomy</p>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-center">
<span className="text-secondary font-headline font-bold tracking-widest uppercase mb-4">The Artisan</span>
<h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8 leading-tight">셰프의 테이블,<br />철학을 담다</h2>
<div className="space-y-6 text-on-surface-variant leading-relaxed">
<p>총괄 셰프 이안 킴은 식재료 본연의 질감을 극대화하고 빛의 조화를 통해 시각적 즐거움을 완성하는 'Lumière' 철학을 고수합니다.</p>
<p>전통적인 기법과 현대적인 감각이 교차하는 지점에서, 우리는 단순한 식사를 넘어선 하나의 예술적 서사를 완성합니다.</p>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant/30">
<h4 className="font-headline font-bold text-on-surface mb-2">Executive Chef Ian Kim</h4>
<p className="text-sm text-outline">Michelin 3-Star Excellence Award Winner</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-on-background text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-secondary-fixed-dim font-headline tracking-[0.3em] uppercase mb-4 block">Season Selection</span>
<h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-6">겨울 시그니처 코스</h2>
<div className="w-24 h-px bg-secondary-container mx-auto"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="space-y-16">
<div className="flex gap-8 group">
<div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-white/10">
<img alt="Amuse-bouche" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Exquisite amuse-bouche appetizer with microgreens and gold leaf garnish on a black stone plate, minimalist professional food photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxv-jJXZ8U4tyF9LLAZB8sz1_Hv_VmiCFLtIdzYAY_UN7-qXYTE0rg3-dAr_6hbQMLFiB36cGFQ1V5oYA_OYwjXq223HyDBDknqjWYGvMBcqVDdugFdzlD9IXf-rOo0aCI3pQd6WGj0BdcolwcyITxskmSTRqZ9TRj5oT4VvxTjF1XtsSSPo9H1_7f2yCXNjnuSAuIQ80wOFxDoSxlWtYqE9MERviXtWrWF6IhwrDjOJBq5S6IMYk-fHxK-s1B9vPU3-OSDunFpN40" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-baseline mb-3">
<h3 className="text-xl font-headline font-bold text-secondary-fixed">Amuse-bouche</h3>
<span className="text-secondary-fixed-dim font-headline font-light">Lumière Start</span>
</div>
<p className="text-surface-variant leading-relaxed font-light">입맛을 돋우는 세 가지 작은 전채 요리. 바다의 향을 담은 굴 폼과 트러플 향의 비스크.</p>
</div>
</div>
<div className="flex gap-8 group">
<div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-white/10">
<img alt="Main Entrée" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Medium-rare Wagyu beef steak with red wine reduction and seasonal root vegetables, elegant plating in a luxury restaurant setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhl-swUlgj7c7KoQWpMjnv3OQh8_Mm4m3B5jUCPmrDqbQzHvdznH3IItx_EPaTe8LBtmbbmQJAEYxaBhueYFc21SZ9vzyx7esvvdKOF-t-WJDHSrtQYBvDgBKWhWGpf4wLzky2z0_ZNUZhGWO0OTwteeKYsFIjLYpEk69lURsNbl_AoR0ozcX3wdKWM7Q8UYRgVCUkmXqTBBZGLhoxH6GuTt2xknPJ4dCdz5PMOUWHsdlXFSPY4GvSrTk8oio_CUKcbWSndDeRUDtQ" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-baseline mb-3">
<h3 className="text-xl font-headline font-bold text-secondary-fixed">Wagyu Rossini</h3>
<span className="text-secondary-fixed-dim font-headline font-light">The Main</span>
</div>
<p className="text-surface-variant leading-relaxed font-light">최상급 와규 안심과 팬 프라이드 푸아그라. 페리구 소스와 구운 뿌리 채소의 완벽한 조화.</p>
</div>
</div>
</div>

<div className="space-y-16 lg:mt-24">
<div className="flex gap-8 group">
<div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-white/10">
<img alt="Dessert" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern geometric chocolate dessert with gold leaf and raspberry coulis, high-contrast lighting on a dark ceramic plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ1_Wrn4yBJacy91jJLiOSDUBq8b80Be3pNkJ76D-Fcza3DVwRgaQ-xanY_cla7NesYF6mXCF2lVxPs5FuGdif7F-2HkBJa8ZceNCQzEDGZV-X3o-4jpih_J4F1tEdpwhSOkWg_LEYlXZSeeOyJyTJX30Z56noLyKYtF6UxBoNQnaNjV_OQHF3a5TSgTtHhXAxRn8qlf2idj3z1sJ0_n3jeo9nQ4JQ1SbewvYM6wR5eUZBQYPoMf-c86qKfHnNlMoNN9v1ttEkPBsm" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-baseline mb-3">
<h3 className="text-xl font-headline font-bold text-secondary-fixed">Midnight Cocoa</h3>
<span className="text-secondary-fixed-dim font-headline font-light">Sweet Finale</span>
</div>
<p className="text-surface-variant leading-relaxed font-light">다크 초콜릿 무스와 샴페인 젤리. 금박으로 장식된 예술적인 피날레.</p>
</div>
</div>

<div className="bg-surface-container-low/10 p-10 rounded-xl border border-white/5 backdrop-blur-sm">
<h4 className="text-lg font-headline font-semibold mb-2">Winter Tasting Menu</h4>
<p className="text-secondary-fixed text-3xl font-bold mb-6">245,000 KRW</p>
<p className="text-sm text-surface-variant mb-8 font-light">* 와인 페어링 서비스 이용 시 추가 비용이 발생합니다.</p>
<button className="w-full py-4 border border-secondary-fixed text-secondary-fixed font-bold hover:bg-secondary-fixed hover:text-on-background transition-all">코스 전체 보기</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-surface">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-full mb-8">
<span className="material-symbols-outlined text-primary text-4xl">calendar_month</span>
</div>
<h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">특별한 순간을 위한 예약</h2>
<p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
                    품격 있는 서비스와 잊지 못할 미식 경험을 약속합니다.<br />프라이빗 룸 및 단체 예약은 유선으로 문의 주시기 바랍니다.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
<Link className="flex items-center justify-center gap-3 bg-on-background text-white py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-all" href="#">
                        온라인 예약하기
                    </Link>
<Link className="flex items-center justify-center gap-3 bg-surface-container-highest text-on-surface py-5 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-all" href="tel:02-1234-5678">
                        전화 예약 02.123.4567
                    </Link>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
</section>
</main>

<footer className="bg-slate-50 dark:bg-slate-900 border-t border-outline-variant/10">
<div className="w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-lg font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase font-headline">LUMIÈRE &amp; GRAIN</span>
<p className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">© 2024 Gastronomy Group. Designed with Editorial Architect.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Privacy Policy</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Terms of Service</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Accessibility</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Careers</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Press Kit</Link>
</div>
</div>
</footer>

    </div>
  );
}
  