
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
<div className="flex justify-between items-center px-8 py-5 max-w-full">
<div className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-xl">hub</span>
</div>
<span>TemplateHub</span>
</div>

<div className="hidden md:flex items-center gap-10 font-manrope font-medium tracking-tight">
<Link className="text-white/60 hover:text-white transition-colors duration-300" href="#">회사 소개</Link>
<Link className="text-primary border-b-2 border-primary pb-1" href="#">마케팅 랜딩</Link>
<Link className="text-white/60 hover:text-white transition-colors duration-300" href="#">Corporate</Link>
<Link className="text-white/60 hover:text-white transition-colors duration-300" href="#">Marketing</Link>
</div>

<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-white/60 cursor-pointer hover:text-primary transition-colors">language</span>
<span className="material-symbols-outlined text-white/60 cursor-pointer hover:text-primary transition-colors">search</span>
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,39,176,0.4)]">
                시작하기
            </button>
</div>
</div>
</nav>
<main className="pt-20">

<section className="relative min-h-[90vh] flex items-center px-8 overflow-hidden bg-black">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(156,39,176,0.15),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center relative z-10">
<div className="md:col-span-7 space-y-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black tracking-widest uppercase">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Brand Identity &amp; Marketing
                </div>
<h1 className="font-headline text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter text-white">
                    디지털 시대를 리드하는<br />
<span className="text-primary">트렌디한</span> 브랜드 전략
                </h1>
<p className="text-xl text-white/60 max-w-xl leading-relaxed">
                    우리는 단순한 디자인을 넘어 비즈니스의 본질을 꿰뚫는 시각적 언어를 창조합니다. 블랙 &amp; 화이트의 정제미와 바이올렛의 혁신을 경험하세요.
                </p>
<div className="flex flex-wrap gap-5 pt-4">
<button className="px-10 py-5 bg-white text-black rounded-full font-black text-lg hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                        프로젝트 시작하기
                    </button>
<button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-black text-lg hover:border-white transition-all duration-300">
                        포트폴리오 보기
                    </button>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="aspect-square rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(156,39,176,0.2)] relative z-10 border border-white/10 group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="close-up of a modern sleek metallic architectural structure with minimalist lines and soft blue ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk6fvMCiK1WL7Pyr3mBrlVzrC0Rmys12PG522QHv9ZraGKWbecioBMb5mKxrR96KogZPeJq-XStfwxHpNbOfZar23yNMYG4jLbdf0mnVCH0y4FwbPnspn6xXsr-fjXdiJJd0hc4DlJlvDHqP2Gb_HKAor-8NCGtFcVYPsp3-SryHWPfcISfnIEomFCryxNeKclmPjCvqxoVed6aUq3kr98UQFZ9nxbSPfEsAF-4Q3KTSS3z8poFKtF8rIAlQ2Q8xpBb8felTtlmYZX" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>

<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-black border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-2 bg-surface-container-low p-12 rounded-[2.5rem] flex flex-col justify-between group border border-white/5 hover:border-primary/30 transition-all duration-500">
<span className="material-symbols-outlined text-primary text-6xl mb-12 group-hover:rotate-12 transition-transform">bolt</span>
<div>
<h3 className="text-5xl font-black mb-4 text-white">99.9%</h3>
<p className="text-white/50 text-lg font-medium">초고속 로딩 및 사용자 최적화 성능</p>
</div>
</div>
<div className="bg-primary p-12 rounded-[2.5rem] text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(156,39,176,0.3)] hover:-translate-y-2 transition-all duration-500">
<h3 className="text-3xl font-black leading-tight">글로벌<br />디자인<br />철학</h3>
<span className="material-symbols-outlined text-5xl">public</span>
</div>
<div className="bg-white p-12 rounded-[2.5rem] text-black flex flex-col justify-between hover:-translate-y-2 transition-all duration-500">
<h3 className="text-3xl font-black leading-tight">120+<br />성공적인<br />파트너십</h3>
<span className="material-symbols-outlined text-5xl">verified</span>
</div>
</div>
</div>
</section>

<section className="py-40 px-8 bg-black">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<div className="space-y-6">
<label className="text-primary font-black tracking-widest text-sm uppercase">Selected Projects</label>
<h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">최근 진행된 프로젝트</h2>
</div>
<div className="flex gap-4">
<button className="w-16 h-16 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-300">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<button className="w-16 h-16 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-300">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="flex gap-10 overflow-x-auto pb-12 snap-x no-scrollbar">

<div className="min-w-[85vw] md:min-w-[45%] snap-center group">
<div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" data-alt="ultra-minimalist workspace with a single sleek laptop and high-end aesthetic lighting in a concrete studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHDfI-QfBiC4KBKlJ2_CXmFdiTwKpoWcsKTYMXe2yX5cZwHKGFToOrQaWNCG8bN-xKxcVLDWHWV6h-Jn1xPjxtmOKIdHaIO0JA5VZht16i9TLtcS9qYkMsAL2-9OVLpGgAdfYtbDggtUa7CjqlkybnM-D2fVBMP6F1mav_MG4T7xqrMu3faSdfkRNsLjQFwjTtB-kaSplau_xtvAOh0Dtnbj8apZfYP08klgJf9SQmmwb-kJxFfSELr_ulwDKpOY-vVjSmyk4MxlF" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
</div>
<h4 className="text-3xl font-black mb-3 text-white group-hover:text-primary transition-colors">테크니컬 미니멀리즘</h4>
<p className="text-white/40 text-lg">IT 스타트업의 아이덴티티 재정립</p>
</div>

<div className="min-w-[85vw] md:min-w-[45%] snap-center group">
<div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" data-alt="artistic macro shot of liquid metal flowing with deep blue and amber reflections in a high-tech lab setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZzUMosQrW6wFXTJMAyZLHjsBKHuX5B-mBl0El96D3jovzTAHLwhK9EjS2piKWcaM5-xpCrnl98oV2qzAfCEJ99K88xGR9bA0Mf8E_twNQEAJHsQfRm77csXaxdgOmwQA_wCQ5VlpqC8Nt-W7MTipuY_OF5Qay8hQ3D909zZM2z_7eORsVDUS4HrUyeFYxLaBaE0MBANlwtkErt0hVQ11Sb8JBOebT-EzAH8mx7ICebYHMmkNaB0QyU8asg-ng33R3wOAJyhlK7-mw" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
</div>
<h4 className="text-3xl font-black mb-3 text-white group-hover:text-primary transition-colors">디지털 플로우</h4>
<p className="text-white/40 text-lg">커머스 플랫폼의 새로운 비주얼 가이드</p>
</div>

<div className="min-w-[85vw] md:min-w-[45%] snap-center group">
<div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" data-alt="elegant high-fashion editorial photo with geometric shadows and minimalist architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVx27X_XtQFSrpUdyJrEhDsQhuBjfJCnA8kNrHf4sJnKbZpHt1iPHCPU7QTNdZ-I6Q32yUVzb_C7u4ZERanHSpP5qtfjsJovlNDuhNhpDGnQtlPpNtHtpBx-ttFwUxHjrRF0pn8HYkVITM8ONTCPPNL6XAmiVIepW-tJpTGaW9rB7y7e9HBwcftaKL-6hWltFHj_ZmXIwhoxiulgWbNu0T3ZrEloUsoi9GxJuyM6AgdqOruj5x2f8ydH2qpau6FzcWiAZGaEM8noqi" />
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
</div>
<h4 className="text-3xl font-black mb-3 text-white group-hover:text-primary transition-colors">프리미엄 에센스</h4>
<p className="text-white/40 text-lg">럭셔리 브랜드의 모던 리브랜딩</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-black">
<div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(156,39,176,0.4)]">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
<div className="relative z-10 space-y-12">
<h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">함께 비즈니스의 가치를<br />극대화할 준비가 되셨나요?</h2>
<p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">지금 문의를 남겨주시면, 전문 컨설턴트가 24시간 이내에 브랜드 맞춤형 로드맵을 제안해 드립니다.</p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
<input className="bg-black/20 border-2 border-white/20 rounded-full px-10 py-6 text-white placeholder:text-white/50 focus:ring-0 focus:border-white w-full text-lg font-bold" placeholder="이메일 주소를 입력하세요" type="email" />
<button className="bg-white text-black px-12 py-6 rounded-full font-black text-lg hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto whitespace-nowrap shadow-xl">
                        무료 컨설팅 신청
                    </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black w-full py-24 px-8 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto font-manrope text-sm">
<div className="md:col-span-1 space-y-8">
<div className="text-2xl font-black text-white flex items-center gap-2">
<div className="w-6 h-6 bg-primary rounded flex items-center justify-center"></div>
                TemplateHub
            </div>
<p className="text-white/40 leading-relaxed text-base">당신의 브랜드가 가진 잠재력을 디지털 공간에서 완벽하게 구현합니다. 우리는 기술과 예술의 교차점에서 혁신을 디자인합니다.</p>
</div>
<div className="space-y-6">
<h5 className="font-black text-white text-lg">회사 정보</h5>
<ul className="space-y-4 text-white/40 text-base">
<li className="hover:text-primary transition-colors cursor-pointer">서비스 소개</li>
<li className="hover:text-primary transition-colors cursor-pointer">팀 멤버</li>
<li className="hover:text-primary transition-colors cursor-pointer">채용 공고</li>
</ul>
</div>
<div className="space-y-6">
<h5 className="font-black text-white text-lg">고객지원</h5>
<ul className="space-y-4 text-white/40 text-base">
<li className="hover:text-primary transition-colors cursor-pointer">문의하기</li>
<li className="hover:text-primary transition-colors cursor-pointer">자주 묻는 질문</li>
<li className="hover:text-primary transition-colors cursor-pointer">개인정보처리방침</li>
</ul>
</div>
<div className="space-y-6">
<h5 className="font-black text-white text-lg">언어 설정</h5>
<div className="flex gap-6">
<button className="font-black text-primary">KO</button>
<button className="text-white/40 hover:text-white transition-colors">EN</button>
<button className="text-white/40 hover:text-white transition-colors">JP</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center text-white/20 text-sm font-medium">
        © 2024 TemplateHub. All rights reserved. Designed for Excellence.
    </div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl border-t border-white/10 z-50">
<div className="flex justify-around items-center py-4">
<div className="flex flex-col items-center text-primary">
<span className="material-symbols-outlined font-variation-fill">home</span>
<span className="text-[10px] font-black mt-1">홈</span>
</div>
<div className="flex flex-col items-center text-white/40">
<span className="material-symbols-outlined">grid_view</span>
<span className="text-[10px] font-black mt-1">프로젝트</span>
</div>
<div className="flex flex-col items-center text-white/40">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="text-[10px] font-black mt-1">문의</span>
</div>
<div className="flex flex-col items-center text-white/40">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-black mt-1">프로필</span>
</div>
</div>
</div>

    </div>
  );
}
  