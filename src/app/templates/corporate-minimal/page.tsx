
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/30">
<nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="text-2xl font-black text-primary tracking-tighter font-headline">TemplateHub</div>
<div className="hidden md:flex items-center gap-10 font-semibold tracking-tight">
<Link className="text-primary border-b-2 border-primary pb-1 transition-colors duration-300" href="#">회사 소개</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">마케팅 랜딩</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Corporate</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Marketing</Link>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="language">language</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="search">search</span>
</div>
<button className="bg-primary text-white px-6 py-2 rounded-full font-headline font-bold text-sm transition-all duration-200 hover:brightness-110">
                시작하기
            </button>
</div>
</nav>
</header>
<main className="pt-24">

<section className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center max-w-7xl mx-auto">
<div className="mb-8">
<span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full font-label text-xs font-bold tracking-widest uppercase">Sustainable Growth</span>
</div>
<h1 className="font-headline text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.1] tracking-tighter text-on-surface mb-10">
            우리는 기술의 <br className="hidden md:block" /> 가치를 <span className="text-primary">자연스럽게</span> 연결합니다.
        </h1>
<p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed opacity-80">
            복잡한 문제를 직관적인 솔루션으로 풀어내는 디자인 스튜디오. 우리는 비즈니스와 사용자, 그리고 환경이 조화롭게 성장하는 미래를 설계합니다.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-10 py-4 bg-primary text-white rounded-2xl font-headline font-bold tracking-tight hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">문의하기</button>
<button className="px-10 py-4 bg-surface-container text-on-surface rounded-2xl font-headline font-bold tracking-tight hover:bg-surface-container-high transition-all">포트폴리오 보기</button>
</div>
</section>

<section className="py-16 bg-surface-container-low/50 border-y border-outline-variant/20 overflow-hidden">
<div className="flex whitespace-nowrap animate-scroll opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-24 px-12 text-2xl font-headline font-black text-on-surface-variant/40">
<span>STRIPE</span>
<span>AIRBNB</span>
<span>FIGMA</span>
<span>NOTION</span>
<span>LINEAR</span>
<span>VERCEL</span>
<span>STRIPE</span>
<span>AIRBNB</span>
<span>FIGMA</span>
<span>NOTION</span>
<span>LINEAR</span>
<span>VERCEL</span>
</div>
</div>
</section>

<section className="py-32 px-8 max-w-7xl mx-auto">
<div className="mb-20 text-center md:text-left">
<h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-6">핵심 역량</h2>
<p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">우리는 본질에 집중합니다. 과하지 않은 디자인과 견고한 기술력으로 최상의 가치를 전달합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
<div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl" data-icon="brush">brush</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4">비주얼 시스템</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">브랜드의 핵심 가치를 담은 정교하고 일관된 시각 체계를 구축하여 신뢰를 높입니다.</p>
</div>

<div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
<div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl" data-icon="eco">eco</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4">지속 가능한 디자인</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">유행을 타지 않는 타임리스 디자인으로 장기적인 서비스 운영 효율을 극대화합니다.</p>
</div>

<div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
<div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4">사용자 경험 설계</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">데이터를 기반으로 사용자의 행동을 예측하고 최적의 동선을 설계합니다.</p>
</div>
</div>
</section>

<section className="py-32 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] bg-surface-container-high rounded-[2.5rem] overflow-hidden shadow-sm">
<img className="w-full h-full object-cover mix-blend-multiply opacity-90" data-alt="clean minimalist home office with white desk wood accents and large window soft natural morning lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBphdQXQsUDvCrB9QF_8nL1dM0Qwzp3k3W-1TgP6j_VJ2e7hmGcDJMU0x4mhgY7HdCx8HUfGoTAFLtRA1G8iD2__oxG6O1NZN8Pm2AQ8UWRL8frxtvWg9NJLDtNPsbOP7NG3p4P-X_nA9MNzt9W0kazpxHB45IvZGH4Jf8wx7DZXlKPs5whxpNN0O1tT4vhRX6Q_4EjoLFfNyC0WQ7ZANY3vYYAl-TXu6IOU0uvi-N9EPR8YC6Roe38anxolw4RX2yaz1qYsKYswF1T" />
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden lg:block border border-outline-variant/10">
<p className="font-headline text-lg font-medium leading-relaxed italic text-on-surface-variant">"기술은 인간의 감성을 방해하지 않고 자연스럽게 스며들어야 합니다."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-px bg-primary"></div>
<p className="text-sm text-primary font-bold">Design Director</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
<h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-10 leading-snug">왜 TemplateHub가 <br />특별한가요?</h2>
<ul className="space-y-10">
<li className="flex items-start gap-5">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg font-bold" data-icon="check">check</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg mb-2">본질을 꿰뚫는 미니멀리즘</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">불필요한 요소를 걷어내고 가장 핵심적인 메시지에 집중합니다.</p>
</div>
</li>
<li className="flex items-start gap-5">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg font-bold" data-icon="check">check</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg mb-2">기민한 실행력</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">유연한 프로세스로 아이디어를 빠르게 프로토타입으로 구현합니다.</p>
</div>
</li>
<li className="flex items-start gap-5">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg font-bold" data-icon="check">check</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg mb-2">함께 성장하는 파트너십</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">단순한 대행이 아닌 팀의 일원이 되어 비즈니스 고민을 나눕니다.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-8 max-w-3xl mx-auto text-center">
<h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-4">함께 미래를 그려볼까요?</h2>
<p className="text-on-surface-variant mb-16 opacity-70">당신의 소중한 프로젝트를 저희에게 들려주세요.</p>
<form className="space-y-4 text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Name</label>
<input className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none text-sm" placeholder="홍길동" type="text" />
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Email</label>
<input className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none text-sm" placeholder="hello@world.com" type="email" />
</div>
</div>
<div className="space-y-1.5">
    <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Project Details</label>
    <textarea className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none text-sm" placeholder="어떤 프로젝트를 계획 중이신가요?" rows={4}></textarea>
</div><button className="w-full py-4 bg-primary text-white rounded-2xl font-headline font-bold text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/10">보내기</button>
</form>
</section>
</main>

<footer className="bg-surface-container-low w-full py-16 px-8 border-t border-outline-variant/20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div className="col-span-1">
<div className="text-xl font-black text-primary mb-6 font-headline">TemplateHub</div>
<p className="text-sm leading-relaxed text-on-surface-variant opacity-70">
                정제된 디자인으로 세상을 더 아름답고 단순하게 변화시킵니다.
            </p>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-bold text-on-surface mb-2 font-headline text-sm uppercase tracking-wider">Company</h5>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">회사 소개</Link>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">브랜드 가이드</Link>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">채용 정보</Link>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-bold text-on-surface mb-2 font-headline text-sm uppercase tracking-wider">Support</h5>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">자주 묻는 질문</Link>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">개인정보처리방침</Link>
<Link className="text-on-surface-variant hover:text-primary text-sm transition-colors" href="#">서비스 이용약관</Link>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-bold text-on-surface mb-2 font-headline text-sm uppercase tracking-wider">Connect</h5>
<div className="flex items-center gap-2 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-lg" data-icon="language">language</span>
<span>Korea (KR)</span>
</div>
<p className="text-sm text-on-surface-variant mt-2">Instagram</p>
<p className="text-sm text-on-surface-variant">LinkedIn</p>
</div>
</div>
<div className="mt-16 pt-8 border-t border-outline-variant/10 max-w-7xl mx-auto text-center">
<p className="text-xs text-on-surface-variant opacity-50">© 2024 TemplateHub Studio. All rights reserved.</p>
</div>
</footer>

    </div>
  );
}
  