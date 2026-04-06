
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="text-2xl font-extrabold text-primary tracking-tighter flex items-center gap-2">
<span className="material-symbols-outlined">hub</span> TemplateHub
</div>
<div className="hidden md:flex items-center gap-8">
<Link className="text-slate-600 hover:text-primary font-semibold tracking-tight transition-colors text-sm" href="#">회사 소개</Link>
<Link className="text-primary border-b-2 border-primary pb-1 font-semibold tracking-tight text-sm" href="#">마케팅 랜딩</Link>
<Link className="text-slate-600 hover:text-primary font-semibold tracking-tight transition-colors text-sm" href="#">Corporate</Link>
<Link className="text-slate-600 hover:text-primary font-semibold tracking-tight transition-colors text-sm" href="#">Marketing</Link>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">search</span>
<button className="bg-primary text-white px-5 py-2 rounded-lg font-semibold tracking-tight hover:brightness-110 transition-all text-sm">시작하기</button>
</div>
</nav>
</header>
<main className="pt-20">

<section className="px-8 py-24 bg-surface grid-bg">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary text-[10px] font-extrabold tracking-widest uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span> Platform Excellence
</div>
<h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">비즈니스의 성장을<br />가속화하는 통합 솔루션</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-xl">복잡한 엔지니어링 워크플로우를 데이터 기반으로 최적화하세요. TemplateHub는 효율적인 시스템 구축을 위한 SaaS 인프라를 제공합니다.</p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:shadow-[0_8px_30px_rgb(3,169,244,0.3)] transition-all">지금 무료로 시작하기</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
<span className="material-symbols-outlined text-primary">play_circle</span> 데모 시청하기
                        </button>
</div>
</div>
<div className="relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"></div>
<div className="relative rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xl">
<img alt="Dashboard Preview" className="w-full h-auto object-cover aspect-[4/3]" data-alt="Modern high-tech dashboard interface showing financial analytics and growth charts with clean minimalist blue and white aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIyAEFzey7MgxlpFgw-B6AHD5oPcju6aATzDputj0x9bqfB-7VlzRZEiqHfVid0SoWAK7UPfZtlNQcJikiP73dReTjP7LbRFIw2zSzAHkjXRr4W6m-7Ifx2HAArfnXb4Y1AvzV1_zrimobCl2NVFiBEwZI9iDwTvqUQ8aI1cweqhR2QB4t39tFKgx5sbW3NyTnZj5ubIx8jndUdeBkvkykPgnoJZ6Mek8u1rlLNxZky57yff1193tDVa9y3IxFwqIjbkHPSPBE-Zlj" />
<div className="absolute bottom-4 right-4 bg-slate-900/90 text-[10px] text-white/70 px-3 py-1 rounded backdrop-blur-sm border border-white/10 font-mono tracking-widest">SYSTEM_OPTIMIZED_v2.4</div>
</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">핵심 기능 모듈</h2>
<p className="text-slate-600 max-w-2xl">모든 기능은 명확한 아키텍처 위에서 고성능을 발휘하도록 설계되었습니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white p-10 rounded-xl border border-slate-200 flex flex-col justify-between group hover:border-primary/50 transition-colors">
<div className="max-w-md">
<div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">analytics</span>
</div>
<h3 className="text-2xl font-bold mb-4 text-slate-900">실시간 엔진 분석 및 리포팅</h3>
<p className="text-slate-600 leading-relaxed">복잡한 데이터 파이프라인을 실시간으로 모니터링하고 가독성 높은 엔지니어링 리포트를 즉시 생성합니다.</p>
</div>
<div className="mt-8 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
<img alt="Analytics" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional data visualization screen showing complex bar graphs and line charts in soft corporate blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzcRcRfQud4lwpz_pfzIhHFluW5OOoNl7R_Q8-zr4hbngfNOYLAeJe5k25FX6HzoWtXx15Juo_DLKKvKGb1WNzVxSXRbMnu8oVtAEfvRz7snR6949S8QmgSi2uaG-zgSz0XNV9vkUjOCzZ_zPuJ8DLtuNHMn39IqxONdqCTkt0Z896jbCnpT09tdiHRHumbfXvTyRkLj5ksA9pVXvfpScpwAHTSyEOm73RBpe32NrvpHJM1hCDmVv6pcZ4bGnrdbgctK8EBK9XZ94" />
</div>
</div>

<div className="bg-slate-900 text-white p-10 rounded-xl flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-9xl">security</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
</div>
<h3 className="text-2xl font-bold mb-4">엔터프라이즈 보안 레이어</h3>
<p className="text-slate-400 leading-relaxed">SOC2 Type II 규격 및 종단간 암호화를 지원하여 비즈니스 데이터의 무결성을 보장합니다.</p>
</div>
<div className="mt-8 border-t border-white/10 pt-8 relative z-10">
<p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">Security Standard 256-bit</p>
<p className="text-sm text-slate-300 italic">"Zero Trust Architecture"</p>
</div>
</div>

<div className="bg-white p-10 rounded-xl border border-slate-200 flex flex-col hover:border-primary/50 transition-colors">
<div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-slate-700 text-3xl">settings_input_component</span>
</div>
<h3 className="text-xl font-bold mb-4 text-slate-900">API 기반 도구 통합</h3>
<p className="text-slate-600 leading-relaxed text-sm">기존 스택과 매끄럽게 연결되는 전용 SDK 및 REST API를 지원합니다.</p>
</div>

<div className="md:col-span-2 bg-white p-10 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-10 items-center hover:border-primary/50 transition-colors">
<div className="flex-1">
<div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-slate-700 text-3xl">terminal</span>
</div>
<h3 className="text-2xl font-bold mb-4 text-slate-900">엔지니어 협업 워크플레이스</h3>
<p className="text-slate-600 leading-relaxed">Git 스타일의 버전 관리와 협업 툴로 팀 전체의 생산성을 체계적으로 관리합니다.</p>
</div>
<div className="flex-1 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
<img alt="Collaboration" className="w-full h-56 object-cover" data-alt="Collaborative workspace with people working on laptops around a bright modern office table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHXZA4fUc655Dn7DZ2sodn3B4vty3J88_awLc9GZ8fRBMYMBV8r03i4PoV0yE65Xr88HEXzqLHxI5vD7yIKitT36zKuF6rYqGFDSKRDx5Sr5Z4LcccuYVVMITytQlEJ7HbDuJf31tPttN02BKrQi6DquuMNb_Nhyq2lPpfS16-abtEPEu3dByWgKELgYRo0qLkIaU4TvV_2X9KLy_-ZLqe2osLuehguajWx33gbTrwKeFD1_LncQmhJzNZXfkNrgWc0JwNhCKHfIzx" />
</div>
</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-white">
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">시스템 아키텍처 확인</h2>
<p className="text-slate-600">단 3단계의 프로세스로 최적의 시스템 환경을 구축하세요.</p>
</div>
<div className="max-w-4xl mx-auto relative group">
<div className="absolute -inset-1 bg-slate-200 rounded-2xl"></div>
<div className="relative rounded-xl bg-slate-900 aspect-video flex items-center justify-center overflow-hidden border border-slate-800">
<img alt="Video Cover" className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125" data-alt="Close up of high-quality laptop screen displaying creative software code and modern user interface elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqhNGQ7RDh_K8uV7lD0r4JdTJ3xVOBLcb1SNYJEwrjeDagEUNRQXEaHU5xAWfc_swacLuNhih9ysjZWWmlCj96oJy7DoI7X5lZpRzPScOBruGtecxY-Mo5aOdhsjFJbgqrOdmb0dPsYqxOH0dA1T8g2LFf5penXCboEMDKf4FF4bzg2SHaMkXzUMa91Jx1tKRlD3bV_vK1B6j5OqeaBAiGt2kaIo8Z3Way4ekonD1DrzCBv_RMG9K57S261uarh2DMK5hmERfMFtDk" />
<button className="z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(3,169,244,0.5)] hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
</button>
</div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-extrabold tracking-tight text-center mb-16 text-slate-900">엔지니어링 퍼포먼스 비교</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
<thead>
<tr className="bg-slate-900 text-white">
<th className="p-6 text-sm font-bold uppercase tracking-wider">Parameters</th>
<th className="p-6 text-sm font-bold text-primary uppercase tracking-wider">TemplateHub Core</th>
<th className="p-6 text-sm font-bold opacity-60 uppercase tracking-wider">Competitor A</th>
<th className="p-6 text-sm font-bold opacity-60 uppercase tracking-wider">Competitor B</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-6 font-semibold text-slate-700">실시간 동기화 레이턴시</td>
<td className="p-6 text-primary font-bold bg-primary/5">&lt; 100ms</td>
<td className="p-6 text-slate-500">~ 1,500ms</td>
<td className="p-6 text-slate-500">~ 2,000ms</td>
</tr>
<tr>
<td className="p-6 font-semibold text-slate-700">사용자 지정 대시보드</td>
<td className="p-6 text-primary bg-primary/5"><span className="material-symbols-outlined text-sm align-middle mr-1" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span> Unlimited</td>
<td className="p-6 text-slate-500">Paid Option</td>
<td className="p-6 text-slate-500">Not Supported</td>
</tr>
<tr>
<td className="p-6 font-semibold text-slate-700">데이터 저장 스토리지</td>
<td className="p-6 text-primary font-bold bg-primary/5">Scalable (Unlimited)</td>
<td className="p-6 text-slate-500">Max 100GB</td>
<td className="p-6 text-slate-500">Max 50GB</td>
</tr>
<tr>
<td className="p-6 font-semibold text-slate-700">API 가용 범위</td>
<td className="p-6 text-primary bg-primary/5"><span className="material-symbols-outlined text-sm align-middle mr-1" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span> Full RESTful SDK</td>
<td className="p-6 text-slate-500">Limited Public</td>
<td className="p-6 text-slate-500">Internal Only</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="px-8 py-24 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-extrabold tracking-tight mb-4 text-slate-900">합리적인 비용 체계</h2>
<p className="text-slate-600">시스템 규모에 최적화된 플랜을 확인하세요.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border border-slate-200 bg-white flex flex-col hover:border-primary transition-colors">
<h3 className="text-lg font-bold mb-1 text-slate-900">Developer</h3>
<p className="text-slate-500 mb-6 text-xs font-medium">개인 엔지니어를 위한 기초 세트</p>
<div className="mb-8">
<span className="text-4xl font-extrabold text-slate-900">Free</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 1 User Account</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Standard Dashboard</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Community Support</li>
</ul>
<button className="w-full py-3 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all text-sm">무료로 시작하기</button>
</div>

<div className="p-8 rounded-xl bg-white border-2 border-primary flex flex-col relative shadow-[0_20px_50px_rgba(3,169,244,0.15)]">
<div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Scale up</div>
<h3 className="text-lg font-bold mb-1 text-slate-900">SaaS Professional</h3>
<p className="text-slate-500 mb-6 text-xs font-medium">중소형 비즈니스 최적화 솔루션</p>
<div className="mb-8">
<span className="text-4xl font-extrabold text-primary">₩49,000</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-700 font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Unlimited Users</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> AI Advanced Reporting</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Full API Access</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Priority Support</li>
</ul>
<button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all text-sm">14일 무료 체험</button>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-slate-50 flex flex-col hover:border-primary transition-colors">
<h3 className="text-lg font-bold mb-1 text-slate-900">Custom Enterprise</h3>
<p className="text-slate-500 mb-6 text-xs font-medium">대규모 아키텍처 지원</p>
<div className="mb-8">
<span className="text-3xl font-extrabold text-slate-900">별도 문의</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Dedicated Clusters</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Account Manager</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 24/7 Hotline</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> SLA Guarantee</li>
</ul>
<button className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all text-sm">영업팀 컨설팅</button>
</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-extrabold tracking-tight text-center mb-12 text-slate-900">기술 문의 FAQ</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="text-base font-bold text-slate-800">기존 인프라 데이터를 마이그레이션할 수 있나요?</span>
<span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            네, 대량의 데이터 세트를 위한 전용 ETL 도구와 CSV/JSON 임포트 툴을 제공합니다. 클라우드 기반 API 연동을 통해 무중단 마이그레이션이 가능하도록 엔지니어링 지원팀이 가이드합니다.
                        </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="text-base font-bold text-slate-800">배포 속도 및 가동률 보증(SLA)은 어떻게 되나요?</span>
<span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            엔터프라이즈 플랜의 경우 99.99%의 가동률 SLA를 보장합니다. 글로벌 CDN과 멀티 리전 아키텍처를 통해 전 세계 어디서나 안정적인 서비스를 제공합니다.
                        </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="text-base font-bold text-slate-800">데이터 보안 및 규정 준수 현황을 알려주세요.</span>
<span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            ISO/IEC 27001 인증을 획득하였으며, 모든 데이터는 정기적으로 외부 보안 감사를 받고 있습니다. 데이터 암호화는 기본으로 적용되며 접근 제어(RBAC)를 통한 정밀한 권한 관리가 가능합니다.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 w-full py-16 px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-sm leading-relaxed">
<div className="space-y-6">
<div className="text-xl font-black text-primary tracking-tighter flex items-center gap-2">
<span className="material-symbols-outlined">hub</span> TemplateHub
</div>
<p className="text-slate-500 font-medium">시스템 최적화를 위한<br />SaaS 엔지니어링 플랫폼.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">public</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">terminal</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">mail</span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Technology</div>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Core Engine</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">API Reference</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">SDK Downloads</Link>
</div>
<div className="flex flex-col gap-4">
<div className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Company</div>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Engineering Blog</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Security Docs</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Contact Sales</Link>
</div>
<div className="flex flex-col gap-4">
<div className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Support</div>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">System Status</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Help Center</Link>
<Link className="text-slate-500 hover:text-primary transition-all" href="#">Dev Community</Link>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 font-mono text-[10px] tracking-widest">
            © 2024 TEMPLATEHUB SYSTEMS INC. ALL RIGHTS RESERVED.
        </div>
</footer>

    </div>
  );
}
  