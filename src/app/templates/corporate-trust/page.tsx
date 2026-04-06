
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 flex justify-between items-center px-8 py-5 max-w-full">
<div className="text-2xl font-extrabold text-primary tracking-tighter">TemplateHub</div>
<div className="hidden md:flex items-center gap-10">
<Link className="font-manrope font-bold text-primary border-b-2 border-secondary pb-1 transition-colors duration-300" href="#">회사 소개</Link>
<Link className="font-manrope font-medium text-slate-600 hover:text-primary transition-colors duration-300" href="#">마케팅 랜딩</Link>
<Link className="font-manrope font-medium text-slate-600 hover:text-primary transition-colors duration-300" href="#">Corporate</Link>
<Link className="font-manrope font-medium text-slate-600 hover:text-primary transition-colors duration-300" href="#">Marketing</Link>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined hover:text-primary cursor-pointer text-[20px]">language</span>
<span className="material-symbols-outlined hover:text-primary cursor-pointer text-[20px]">search</span>
</div>
<button className="bg-primary text-on-primary px-7 py-2.5 font-bold hover:bg-primary-container transition-all duration-200">시작하기</button>
</div>
</nav>
<main className="pt-[73px]">

<section className="relative min-h-[750px] flex items-center bg-primary overflow-hidden">
<div className="absolute inset-0 bg-primary/40 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" data-alt="professional modern corporate office building with glass facade reflecting blue sky and soft clouds at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgN1RPVWIRTnm3-8rNLGSZCprQIG0OnsGXE3W-laXkI2TJkWn2yB5osK9QQdDdim0jM8Alm9EiqbQ4rTVDPpLMPyxHdPW-RjFUO3JMjOfXQilulcfERj8LuFTMFJrV2jAoXpCWVjoJ9TpCPta2HUcUeS28rESQsqI4jWNyUyTUymwNtpA5KxEVqzdi3A79zJqhDBTY6npelb-c88nmGVrqz2FEtU2kIHgQvkZfdddX9iyeisjqnLydRJnUvqYxIt0Z7bQPaHwfZdj7" />
<div className="container mx-auto px-8 relative z-20">
<div className="max-w-3xl">
<div className="w-12 h-1 bg-secondary mb-8"></div>
<h1 className="text-5xl md:text-7xl font-extrabold text-on-primary leading-tight mb-8">
                    신뢰를 바탕으로<br />내일의 가치를 실현합니다
                </h1>
<p className="text-xl text-on-primary/80 leading-relaxed max-w-2xl font-light mb-12">
                    TemplateHub는 정직과 원칙을 최고의 가치로 여기며, <br />혁신적인 기술력으로 글로벌 시장의 지속 가능한 성장을 견인합니다.
                </p>
<div className="flex gap-4">
<button className="bg-secondary px-10 py-4 text-on-primary font-bold hover:bg-opacity-90 transition-all flex items-center gap-3">
                        기업 정보 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="container mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
<div className="max-w-xl">
<h2 className="text-4xl font-extrabold text-primary mb-6">Our Values</h2>
<p className="text-on-surface-variant text-lg">우리가 지켜가는 핵심 가치는 단순한 성장을 넘어 사회적 신뢰와 혁신적 마인드셋에 뿌리를 두고 있습니다.</p>
</div>
<div className="text-secondary font-bold tracking-widest uppercase text-sm">Integrity &amp; Excellence</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">

<div className="p-12 border-b md:border-b-0 md:border-r border-slate-200 group hover:bg-primary transition-colors duration-500">
<div className="w-14 h-14 border border-secondary flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">shield_with_heart</span>
</div>
<h3 className="text-2xl font-bold mb-5 text-primary group-hover:text-white">절대적 신뢰</h3>
<p className="text-on-surface-variant group-hover:text-white/70 leading-relaxed">투명한 경영과 원칙 준수를 통해 고객과 파트너에게 변하지 않는 신뢰를 제공합니다.</p>
</div>

<div className="p-12 border-b md:border-b-0 md:border-r border-slate-200 group hover:bg-primary transition-colors duration-500">
<div className="w-14 h-14 border border-secondary flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">bolt</span>
</div>
<h3 className="text-2xl font-bold mb-5 text-primary group-hover:text-white">창조적 혁신</h3>
<p className="text-on-surface-variant group-hover:text-white/70 leading-relaxed">기존의 틀을 깨는 사고방식으로 기술적 한계를 극복하고 새로운 솔루션을 제안합니다.</p>
</div>

<div className="p-12 group hover:bg-primary transition-colors duration-500">
<div className="w-14 h-14 border border-secondary flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white">diversity_3</span>
</div>
<h3 className="text-2xl font-bold mb-5 text-primary group-hover:text-white">함께하는 상생</h3>
<p className="text-on-surface-variant group-hover:text-white/70 leading-relaxed">사회적 책임을 다하며 공동체의 발전과 함께 성장하는 지속 가능한 모델을 구축합니다.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low">
<div className="container mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<div className="sticky top-32">
<span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase block mb-4">Milestones</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-8">Corporate<br />History</h2>
<div className="w-16 h-1 bg-primary mb-8"></div>
<p className="text-on-surface-variant leading-relaxed">2014년부터 시작된 우리의 여정은 불가능을 가능으로 바꾸는 도전의 연속이었습니다.</p>
</div>
</div>
<div className="lg:col-span-8 space-y-16">
<div className="flex gap-12 items-start group">
<div className="text-4xl font-extrabold text-primary w-24 shrink-0">2024</div>
<div className="pt-2 border-t border-secondary w-full">
<h4 className="text-xl font-bold text-primary mb-3">Global Expansion 3.0</h4>
<p className="text-on-surface-variant leading-relaxed">북미 및 유럽 시장 통합 데이터 센터 설립 및 AI 기반 맞춤형 솔루션 런칭을 통한 글로벌 리더십 강화.</p>
</div>
</div>
<div className="flex gap-12 items-start group">
<div className="text-4xl font-extrabold text-primary w-24 shrink-0">2021</div>
<div className="pt-2 border-t border-slate-300 w-full group-hover:border-secondary transition-colors">
<h4 className="text-xl font-bold text-primary mb-3">Innovation Award</h4>
<p className="text-on-surface-variant leading-relaxed">국제 산업 기술 혁신 대상 수상 및 누적 투자 5,000억 원 달성으로 독보적인 경쟁력 입증.</p>
</div>
</div>
<div className="flex gap-12 items-start group">
<div className="text-4xl font-extrabold text-primary w-24 shrink-0">2018</div>
<div className="pt-2 border-t border-slate-300 w-full group-hover:border-secondary transition-colors">
<h4 className="text-xl font-bold text-primary mb-3">Strategic Pivot</h4>
<p className="text-on-surface-variant leading-relaxed">클라우드 컴퓨팅 및 데이터 보안 분야 비즈니스 확장, 국내 점유율 1위 달성 및 중견기업 도약.</p>
</div>
</div>
<div className="flex gap-12 items-start group">
<div className="text-4xl font-extrabold text-primary w-24 shrink-0">2014</div>
<div className="pt-2 border-t border-slate-300 w-full group-hover:border-secondary transition-colors">
<h4 className="text-xl font-bold text-primary mb-3">Founding Day</h4>
<p className="text-on-surface-variant leading-relaxed">'인간 중심의 기술'을 슬로건으로 TemplateHub 공식 설립 및 핵심 엔진 개발 착수.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="container mx-auto px-8">
<div className="text-center mb-24">
<h2 className="text-4xl font-extrabold text-primary mb-6">Executive Leadership</h2>
<div className="w-12 h-1 bg-secondary mx-auto mb-8"></div>
<p className="text-on-surface-variant max-w-2xl mx-auto">전 세계 시장에서 검증된 전문성과 리더십을 갖춘 핵심 경영진을 소개합니다.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group">
<div className="aspect-[4/5] overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of CEO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuLcTaZL-uw4DKXi0GPRGpgy_m-g93eBEjnayB7mmxt6hqnz17NjoxdAusgok7F42zF48G4qcMZMRzXOOUY5BecL8VP-EEhQdQUo8mcP_8IMDryfnUSeYivuWjb31QYlp6dV5xR7rCv75qvUg4jZe0gB9AmqiOK025U9M_ulhOvsjBhl6s5VsP7lyXAjm9fj2rG4RPFiII0MtoMJHTFnWrVjbOYDDoznyYq9zz2EF-U85VGumWGqgn3CYFtk6CWAzVJR_cKw1exB22" />
</div>
<div className="border-l-2 border-secondary pl-4">
<div className="text-secondary font-bold text-xs tracking-widest mb-1 uppercase">CEO</div>
<h4 className="text-lg font-bold text-primary">James Kim</h4>
<div className="text-on-surface-variant text-sm">김준수 대표이사</div>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of CTO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd7HWLQJJw2T0NOPlAGVBpIU0DtHkG5aS9iSn4e4S-ddhQ257XNqIp0jXSviYUTRKEzhaSp5MKoEOqxjyf4nr6vXWjKo4qI2TCrD0R6_b6Me2tubThNegBLyeGmIhgijbNPhcekjumDP5YnVoVH-uQgvFF6q-9Gon56uqD2H0ZV3ZcPnLQD1a0aqox_XGCqG40CpU3gdalXfzgfAA1H0hWwINHoK2SX2lj03fUjquGX0EsCVJNSy6y-M6pw8BbYk-KgMA-wHVkBugT" />
</div>
<div className="border-l-2 border-secondary pl-4">
<div className="text-secondary font-bold text-xs tracking-widest mb-1 uppercase">CTO</div>
<h4 className="text-lg font-bold text-primary">Sarah Lee</h4>
<div className="text-on-surface-variant text-sm">이민아 최고기술책임자</div>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of CFO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB-vNMb0sb7Kppr18jkxeNPxuN21ZGBI_BU89TyyPVb5IJEtXcW0_8N9zbbGRCB9cyFQZa7cfymW_gE5nHbqRJ-c1Ao918fh-wGLZnqtTW6ZZ_1b4q6XCs7VysOlaBw6DNQaUcwp-wKBu0vg_LIG7cvsP4eXpdAJKai_yELreAEW-Y-fe001fP-S1yEeoPs1Bt-9k91Z7sQ9iYfQ-s5eE5mlMmAOXIXdVSpUs1cdGdk-yqSunhtbZPt_7Kw5DtFpADFlVVE9hy22v7" />
</div>
<div className="border-l-2 border-secondary pl-4">
<div className="text-secondary font-bold text-xs tracking-widest mb-1 uppercase">CFO</div>
<h4 className="text-lg font-bold text-primary">David Park</h4>
<div className="text-on-surface-variant text-sm">박서준 최고재무책임자</div>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of COO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbTtKyFvDDXueLVg7BjQkcr4iiydhAy5LEXgvO6csxbW6KaKlv3UpSY0JHkEXh3vnb_IhrvPdZCbnPFu5itTI6_JpUpGbrIy_xYdKwfqF66Rc87k1gn_-gZ3v44zdVyttA1SvhkLugg7Cu7KM9Iy9IxLIjwt9d8uIBha8X3l2XNdbr7YE_pxlP8di6q_6qCVys0fGP7wZAZmflJvvTHg23GfiL_LAN-IeRN2DP6LpLw2NvCxMYpo8WOaTSswCDmqj8ZSfVsgJalZd8" />
</div>
<div className="border-l-2 border-secondary pl-4">
<div className="text-secondary font-bold text-xs tracking-widest mb-1 uppercase">COO</div>
<h4 className="text-lg font-bold text-primary">Elena Jung</h4>
<div className="text-on-surface-variant text-sm">정호연 최고운영책임자</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary relative overflow-hidden">
<div className="container mx-auto px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tracking-tight mb-8">성공적인 미래를 위한 최적의 파트너십</h2>
<p className="text-on-primary/70 text-xl mb-12 max-w-2xl mx-auto font-light">지금 TemplateHub의 전문가들과 함께 귀사의 비즈니스 잠재력을 실현하세요.</p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<button className="bg-secondary text-white px-12 py-5 font-bold text-lg hover:bg-opacity-90 transition-all">파트너십 문의하기</button>
<button className="border border-white/30 text-white px-12 py-5 font-bold text-lg hover:bg-white/10 transition-all">채용 정보 확인</button>
</div>
</div>
</section>
</main>

<footer className="bg-slate-50 border-t border-slate-200 w-full py-16 px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div className="col-span-1">
<div className="text-xl font-extrabold text-primary mb-8">TemplateHub</div>
<p className="text-slate-500 text-sm leading-relaxed mb-8">전 세계 고객에게 최상의 비즈니스 가치를 제공하는 글로벌 스탠다드 기업입니다.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors cursor-pointer">social_leaderboard</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors cursor-pointer">linked_camera</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors cursor-pointer">group</span>
</div>
</div>
<div className="col-span-1">
<div className="font-bold text-primary mb-8">회사 정보</div>
<ul className="space-y-4">
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">경영 철학 및 비전</Link></li>
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">ESG 경영</Link></li>
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">IR 자료실</Link></li>
</ul>
</div>
<div className="col-span-1">
<div className="font-bold text-primary mb-8">고객지원</div>
<ul className="space-y-4">
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">공지사항</Link></li>
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">1:1 문의</Link></li>
<li><Link className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">오시는 길</Link></li>
</ul>
</div>
<div className="col-span-1">
<div className="font-bold text-primary mb-8">뉴스레터 구독</div>
<div className="mt-4">
<div className="flex">
<input className="bg-white border border-slate-200 px-4 py-3 text-sm w-full focus:ring-1 focus:ring-primary focus:outline-none" placeholder="이메일 주소" type="email" />
<button className="bg-primary text-white px-6 py-3 font-bold text-sm hover:bg-primary-container transition-colors">구독</button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-400 text-xs">© 2024 TemplateHub Corp. All rights reserved.</div>
<div className="flex gap-8">
<Link className="text-slate-400 text-xs hover:text-primary transition-colors" href="#">개인정보처리방침</Link>
<Link className="text-slate-400 text-xs hover:text-primary transition-colors" href="#">이용약관</Link>
</div>
</div>
</footer>

    </div>
  );
}
  