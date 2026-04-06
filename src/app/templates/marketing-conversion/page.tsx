
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-primary/10 flex justify-between items-center px-8 py-4 max-w-full">
<div className="text-2xl font-black text-primary tracking-tighter flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-3xl">bolt</span>TemplateHub
    </div>
<div className="hidden md:flex gap-8 items-center">
<Link className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">회사 소개</Link>
<Link className="font-headline font-bold tracking-tight text-primary border-b-2 border-primary pb-1" href="#">마케팅 랜딩</Link>
<Link className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">이벤트/세일</Link>
<Link className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">파트너십</Link>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors">language</button>
<button className="ml-2 bg-cta-gradient text-white px-6 py-2.5 rounded-full font-headline font-extrabold text-sm scale-100 hover:scale-105 transition-transform shadow-lg shadow-primary/20">지금 가입하기</button>
</div>
</nav>
<main className="pt-20">

<section className="relative px-8 py-20 lg:py-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/30 via-transparent to-transparent">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<span className="inline-block py-2 px-4 rounded-full bg-secondary text-on-secondary text-xs font-black tracking-widest mb-8 shadow-sm border border-secondary/20">LIMITED TIME OFFER</span>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface mb-8">
                    매출 폭발의 시작, <br />
<span className="text-primary text-glow italic">강렬하게 유혹하세요</span>
</h1>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                    구매를 부르는 강렬한 디자인과 검증된 데이터 프레임워크. <br className="hidden md:block" />TemplateHub가 당신의 비즈니스를 1위로 만듭니다.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="bg-cta-gradient text-white px-10 py-5 rounded-full font-headline font-black text-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-2xl shadow-primary/30 group">
                        혜택 신청하기 
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">local_fire_department</span>
</button>
<button className="bg-white border-2 border-primary/20 text-primary px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-primary/5 transition-all">
                        성공 사례 보기
                    </button>
</div>
<div className="flex items-center gap-6 border-t border-outline-variant/30 pt-8">
<div className="flex -space-x-3">
<img alt="close-up portrait of a professional businessman in a grey suit smiling confidently" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" data-alt="close-up portrait of a professional businessman in a grey suit smiling confidently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaCSZDXudl3CmusTSAykICwKzBpP4KCpB6aWEAh-jE6eYy8Ygo6u0rwtRMDZftwGvWtM6b-1pZ9nEKkL-p_kBWsnkV2XA2DfRvo01vlyOG0_me8r_6k70n-CakUU8-lNtMlNfcGIX10hHQLixGDuOirwEqAPeV7R72JVd-mY0rAKN24UCmirKrOneKtBtsDrjUW1w5sfWi-ghozRg75fU0umn0YO6qgmyiAUwGwzNuft5TlBT-4G39z2wpBIG3Cw-20ehuB8VoGKhN" />
<img alt="professional young woman with glasses smiling in a modern office setting" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" data-alt="professional young woman with glasses smiling in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgEDUiw35crQABG6fpj0KX2Mkm7QLNOxjbMT1NMnYICv9atPv27y6PzEg4HCRFSQhiw-GwZGQwph20BIntw9uvSd2zG6LNKttmWzJF0UztACoXhc978GvlB8GJpTSf54KsRr20vAy-irZGmfvUONP3r9ndOg8EKGppwuVB8i3ujmE9doZO1IcZDFEn7PgAzsCqoIo-UCm3qz4ex87OGNpn5M3hgJVK-lovxAdkvK59EA2jQA6Kz7wG5HPEmmx5sHcB4rAf4tkkVg9X" />
<img alt="close-up of a creative professional male looking thoughtfully into the camera" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" data-alt="close-up of a creative professional male looking thoughtfully into the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLwr9X5BOP_BTijtUyZfjDTJA50aeLCsCIQ_fjULCASa3S2tFZ_Edo31UcuXnTgqRL_Aza6AIuFWCKMRF5GEt_bSmSoCMOTzagVfYfJfLU6ku1_T-84Zjof79zCjHT5dDEQWY7xlyPO1owxxBWjtXjGnlmUEic74A4ZJxrXpKuwqtMH3wTkrLkCKzlrjy-CFpAWd_iJ-df_IiwxVGmj5FitdkCirs0Bzz_LQ__XDOT0Z92_h96xf-bqoDrhK3Rkqjdo0t5cI_byoP" />
</div>
<div>
<p className="text-sm text-on-surface-variant font-medium">현재 <span className="font-black text-primary">12,402명</span>이 이용 중</p>
<div className="flex text-secondary text-sm">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary/30 rounded-full blur-[80px]"></div>
<div className="relative bg-white p-2 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(233,30,99,0.2)] border border-primary/5">
<img alt="clean and modern web application dashboard interface showing analytics graphs and conversion charts with blue and orange accents" className="w-full rounded-[2.2rem] shadow-sm border border-outline-variant/10" data-alt="clean and modern web application dashboard interface showing analytics graphs and conversion charts with blue and orange accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1VuyMbdFtQlJZAG6IK-vfNUe85ZCsiS0TD0vHKcUBvrjCAJhxgTW-Y-GNdj1P9Y_9ufodIsU3rxlQ4Z_0EWvY0Z2JpmjSJWUkMnyIE-TTtAdUnMITTMb-ojwGD6OZG4vatu5ScaDonWAiDOHGHPuhaM1kCemlZ0abfRcyNDnJYNf97lJe_WNk4Ysk8jp3VpmIXdZt6k6nJNPYzwIVWpELzn78tnxGc1gLxlLvkRSJEXEU6xTaKbkXlLD6gTiAEAUKFa38i3DJguYE" />
<div className="absolute -bottom-6 -right-6 bg-cta-gradient p-6 rounded-3xl shadow-2xl border-4 border-white transform rotate-3">
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-weight="fill">rocket_launch</span>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider opacity-80">전환 가속도</p>
<p className="text-2xl font-black">+300% <span className="text-sm font-normal ml-1">UP</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-secondary py-3 overflow-hidden whitespace-nowrap border-y-2 border-on-secondary/10">
<div className="flex animate-[marquee_20s_linear_infinite] gap-20">
<span className="text-on-secondary font-black italic">FLASH SALE - 50% OFF TODAY</span>
<span className="text-on-secondary font-black italic">BEST CONVERSION TOOL 2024</span>
<span className="text-on-secondary font-black italic">FLASH SALE - 50% OFF TODAY</span>
<span className="text-on-secondary font-black italic">BEST CONVERSION TOOL 2024</span>
<span className="text-on-secondary font-black italic">FLASH SALE - 50% OFF TODAY</span>
<span className="text-on-secondary font-black italic">BEST CONVERSION TOOL 2024</span>
</div>
</div>
<style dangerouslySetInnerHTML={{ __html: ` @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } ` }} />

<section className="bg-white py-16 border-b border-primary/5">
<div className="max-w-7xl mx-auto px-8">
<p className="text-center text-xs font-black uppercase tracking-[0.3em] text-primary mb-12">Trusted by Global Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale brightness-50 opacity-40">
<div className="font-headline text-2xl font-black italic tracking-tighter">TECHFLOW</div>
<div className="font-headline text-2xl font-black italic tracking-tighter">NEXUS</div>
<div className="font-headline text-2xl font-black italic tracking-tighter">VANTAGE</div>
<div className="font-headline text-2xl font-black italic tracking-tighter">QUANTUM</div>
<div className="font-headline text-2xl font-black italic tracking-tighter">AETHER</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl lg:text-5xl font-black text-on-surface mb-6">압도적인 결과의 비결</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto font-medium">단순한 디자인이 아닙니다. 구매 심리학을 정교하게 타격하는 세일즈 엔진입니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary transition-all duration-500 border border-primary/5 shadow-xl shadow-primary/5">
<div>
<div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
<span className="material-symbols-outlined text-3xl">bolt</span>
</div>
<h3 className="font-headline text-3xl font-black mb-4">비교 불가능한 속도</h3>
<p className="text-on-surface-variant leading-relaxed max-w-md text-lg">망설임을 허용하지 않는 속도. 업계 평균보다 3배 빠른 로딩으로 고객이 이탈할 틈을 주지 않습니다.</p>
</div>
<div className="mt-12 overflow-hidden rounded-2xl border-4 border-surface-container-high">
<img alt="abstract visualization of high speed data transmission with neon blue flowing lines on a dark background" className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700" data-alt="abstract visualization of high speed data transmission with neon blue flowing lines on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvlkMwF71WTt_CVhl9htDwYecX-ctxGeMz2vlybyo1DtD-xQvsk9YF5eOjgEM60NXZRRYNXu8suloMexd4F7TE-XeweGJxSKdy9YsmTk39935Z65AxSFe8Fey9QSEQJI0R8FHVpsPyYk73o8_3qVYptdHrowbgsRb1Z6SVzKRirfjProyKvAWdaf4QlZ46S5Wp63-uyBqXEpFYeYnolYfsyvaR5us1i2s0PaOfjzgoSwJ_3O9raIMfqom4ReZWj237O6qTc-TBGMqR" />
</div>
</div>

<div className="bg-cta-gradient p-10 rounded-[2.5rem] text-white flex flex-col justify-between shadow-2xl shadow-primary/30 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl mb-8">psychology</span>
<h3 className="font-headline text-3xl font-black mb-4">심리 기반 <br />UX 설계</h3>
<p className="text-white/80 leading-relaxed text-lg font-medium">인간의 본능과 시각적 위계를 활용하여 가장 효과적인 구매 경로로 고객을 안내합니다.</p>
</div>
<div className="pt-8 text-7xl font-black opacity-30 italic">99.9%</div>
</div>

<div className="bg-white p-10 rounded-[2.5rem] flex flex-col group border border-primary/5 shadow-xl shadow-primary/5">
<div className="w-16 h-16 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined text-3xl">analytics</span>
</div>
<h3 className="font-headline text-2xl font-black mb-4">A/B 테스트 자동화</h3>
<p className="text-on-surface-variant leading-relaxed mb-8">무의미한 추측은 그만하십시오. 실제 유저 데이터를 바탕으로 최적의 성과를 내는 소재를 자동으로 노출합니다.</p>
<div className="mt-auto pt-8 flex items-center text-primary font-black gap-2 cursor-pointer group-hover:gap-4 transition-all">
                        상세 기능 확인 <span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>

<div className="md:col-span-2 bg-promo-gradient p-1 rounded-[2.5rem] shadow-xl shadow-secondary/20">
<div className="bg-white p-10 rounded-[2.3rem] h-full flex flex-col md:flex-row gap-10 items-center">
<div className="flex-1">
<h3 className="font-headline text-3xl font-black mb-4">전략적 데이터 대시보드</h3>
<p className="text-on-surface-variant leading-relaxed text-lg font-medium">유입부터 전환까지 전 과정을 한눈에. 직관적인 UI로 마케팅 인사이트를 즉시 도출할 수 있습니다.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-on-surface font-bold">
<span className="material-symbols-outlined text-primary font-black">check_circle</span> 원클릭 채널 연동
                                </li>
<li className="flex items-center gap-3 text-on-surface font-bold">
<span className="material-symbols-outlined text-primary font-black">check_circle</span> 실시간 ROAS 분석
                                </li>
</ul>
</div>
<div className="flex-1 w-full">
<img alt="modern glassmorphism UI element showing a colorful bar chart with soft shadows and elegant typography" className="w-full rounded-2xl shadow-2xl border-4 border-surface-container-low" data-alt="modern glassmorphism UI element showing a colorful bar chart with soft shadows and elegant typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNIaWPrtFHilMnTYuLcspTxpS8JN9f3t804ABPsuQpeTIlwsyo9cZiuGzNzb_Vkm4Rz2-je8p2cIxR7JmBk0_RB6KoYVvk6mX1m3aGVrlpel3UeIGnW0FKREU0HNVu5HKkAfUu1TSc81LV-A4aPLJQkTi1CRou11sDyMPZCBr8dw5Xs7S1K7sjz_SnngXwHPXAZoro3KTkJ7iVXNFeT6pihVAJXU4wCE0d2HyIOYCYDWCFg5rQfVh2GBfyD03TmlM_kI9Wm6dLWH-q" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-32"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<span className="text-primary font-black tracking-widest uppercase mb-4 block">LIMITED OFFER</span>
<h2 className="font-headline text-5xl lg:text-6xl font-black text-on-surface mb-8 leading-tight">
                        선착순 100명 <br />
<span className="text-primary underline decoration-secondary decoration-8 underline-offset-8">첫 달 50% 페이백</span>
</h2>
<div className="space-y-10">
<div className="flex gap-6 items-start">
<div className="w-14 h-14 shrink-0 rounded-full bg-secondary-container flex items-center justify-center shadow-lg shadow-secondary/10">
<span className="material-symbols-outlined text-on-secondary-container font-black">verified</span>
</div>
<div>
<h4 className="font-black text-xl mb-2">업계 최고 사후 지원</h4>
<p className="text-on-surface-variant text-lg font-medium">구축 완료 후에도 전담 컨설턴트가 캠페인 안정화까지 밀착 관리해드립니다.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-14 h-14 shrink-0 rounded-full bg-primary-container flex items-center justify-center shadow-lg shadow-primary/10">
<span className="material-symbols-outlined text-primary font-black">support_agent</span>
</div>
<div>
<h4 className="font-black text-xl mb-2">24시간 비상 대기</h4>
<p className="text-on-surface-variant text-lg font-medium">캠페인 중 발생하는 모든 변수에 대해 30분 이내 대응을 보장합니다.</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-12 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(233,30,99,0.15)] border-4 border-surface-container-high relative">
<div className="absolute -top-6 -left-6 bg-secondary text-on-secondary px-6 py-2 rounded-full font-black text-sm shadow-xl">지금 42명 남음!</div>
<h3 className="font-headline text-3xl font-black mb-10 text-center">무료 컨설팅 신청</h3>
<form className="space-y-6">
<div>
<label className="block text-sm font-black text-on-surface-variant mb-3 uppercase tracking-wider">성함</label>
<input className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-5 focus:border-primary focus:ring-0 transition-all outline-none font-medium text-lg" placeholder="홍길동" type="text" />
</div>
<div>
<label className="block text-sm font-black text-on-surface-variant mb-3 uppercase tracking-wider">이메일 주소</label>
<input className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-5 focus:border-primary focus:ring-0 transition-all outline-none font-medium text-lg" placeholder="example@company.com" type="email" />
</div>
<div>
<label className="block text-sm font-black text-on-surface-variant mb-3 uppercase tracking-wider">관심 분야</label>
<select className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-5 focus:border-primary focus:ring-0 transition-all outline-none font-medium text-lg appearance-none">
<option>폭발적 매출 성장 패키지</option>
<option>브랜드 전환 최적화</option>
<option>바이럴 캠페인 구축</option>
</select>
</div>
<div className="pt-6">
<button className="w-full bg-cta-gradient text-white py-6 rounded-2xl font-headline font-black text-2xl shadow-2xl shadow-primary/40 hover:-translate-y-2 hover:scale-[1.02] active:scale-100 transition-all duration-300" type="submit">
                                50% 혜택받고 지금 시작
                            </button>
<p className="text-center text-xs font-bold text-on-surface-variant mt-6">
                                상담 신청은 무료이며 언제든지 중단하실 수 있습니다.
                            </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-on-surface text-white py-16 px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div className="md:col-span-1">
<div className="text-2xl font-black text-primary mb-6 italic tracking-tighter flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-3xl">bolt</span>TemplateHub
            </div>
<p className="font-medium text-white/60 leading-relaxed text-sm">
                우리는 단순한 웹사이트가 아닌,<br />
                귀사의 비즈니스를 위한 최상의 세일즈<br />
                파트너를 구축합니다.
            </p>
</div>
<div className="flex flex-col gap-4">
<p className="font-black text-lg text-primary mb-2">QUICK LINKS</p>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">회사 소개</Link>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">이용약관</Link>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">개인정보처리방침</Link>
</div>
<div className="flex flex-col gap-4">
<p className="font-black text-lg text-primary mb-2">SUPPORT</p>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">고객 지원 센터</Link>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">1:1 문의하기</Link>
<Link className="text-white/80 hover:text-secondary transition-colors font-medium" href="#">자주 묻는 질문</Link>
</div>
<div className="flex flex-col gap-4">
<p className="font-black text-lg text-primary mb-2">NEWSLETTER</p>
<p className="text-sm text-white/60 mb-2">최신 마케팅 트렌드를 무료로 받으세요.</p>
<div className="flex bg-white/10 p-1.5 rounded-xl border border-white/10">
<input className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-1 text-white placeholder:text-white/30" placeholder="이메일 입력" type="email" />
<button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-black hover:bg-secondary hover:text-on-secondary transition-colors">구독</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center">
<p className="text-sm font-bold text-white/30 tracking-widest italic">© 2024 TEMPLATEHUB PERFORMANCE ENGINE. ALL RIGHTS RESERVED.</p>
</div>
</footer>

    </div>
  );
}
  