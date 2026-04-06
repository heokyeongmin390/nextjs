
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-secondary/10">
<div className="flex justify-between items-center px-8 py-4 max-w-full">
<div className="text-2xl font-black tracking-tighter font-headline text-gradient">TemplateHub</div>
<div className="hidden md:flex items-center space-x-8 font-headline font-semibold tracking-tight">
<Link className="text-primary border-b-2 border-primary pb-1" href="#">회사 소개</Link>
<Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">마케팅 랜딩</Link>
<Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Corporate</Link>
<Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Marketing</Link>
</div>
<div className="flex items-center space-x-6">
<div className="hidden lg:flex items-center space-x-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">search</span>
</div>
<button className="bg-gradient-creative text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:scale-95 transition-transform duration-200 shadow-lg shadow-primary/20">
                시작하기
            </button>
</div>
</div>
</nav>
<main className="pt-20">

<section className="relative min-h-[921px] flex items-center overflow-hidden px-8 py-20">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-soft"></div>

<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6 block border-l-4 border-primary pl-4">Creative Visionary Agency</span>
<h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[1] mb-8">
                    경계를 허무는 <br />
<span className="text-gradient">예술적 감각</span> <br />
                    미래를 설계하다
                </h1>
<p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-medium">
                    정형화된 디자인의 틀을 깨고, 강렬한 색채와 섬세한 감각으로 브랜드의 가치를 시각적 예술로 승화시킵니다.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-creative text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                        프로젝트 시작하기
                    </button>
<button className="bg-white border-2 border-secondary/20 text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2">
<span className="material-symbols-outlined">play_circle</span>
                        쇼릴 감상하기
                    </button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(103,58,183,0.3)] -rotate-2 hover:rotate-0 transition-transform duration-1000 group">
<img alt="Creative Studio" className="w-full h-full object-cover" data-alt="Modern creative office space with minimalist furniture, large windows, colorful abstract art on walls, and warm natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOu6t7zXDMAiTPlkWv8vC6wt9hl6pRGfhoSEqgRJwbAwW_EAFK_lrlyDTicxQC68LhVERFUQk-vMZUyAm8LBIotUlhBxF3cgep9l92jM7XZ1k29Rq_RUlilos86-kloFv3G0xqF4DQk0bnXvP5IjmhXE2V7A_os5d7K14Q098WI1Avms1XjaZaU-6HZjIjUfde5N-qYv-1sQAUoegLCyh4Ol7bsn4Fflx5ysTvMPFcwDG2mcH5pCsoMiqsoJ7MCOg1WO4xDc_dUk26" />
<div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>

<div className="absolute -bottom-10 -right-4 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-primary/10 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-creative flex items-center justify-center">
<span className="material-symbols-outlined text-white text-xl">bolt</span>
</div>
<span className="font-extrabold text-lg tracking-tight">Real-time Impact</span>
</div>
<p className="text-sm font-medium text-on-surface-variant leading-relaxed">전 세계 150여 개 브랜드와 함께 디자인의 새로운 역사를 쓰고 있습니다.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-5xl font-headline font-extrabold tracking-tight mb-4">Masterpieces</h2>
<p className="text-on-surface-variant text-xl font-medium border-l-2 border-primary pl-6">단순한 작업물을 넘어선, 우리의 예술적 발자취입니다.</p>
</div>
<div className="flex gap-4">
<button className="p-4 rounded-2xl border-2 border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-all group">
<span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">west</span>
</button>
<button className="p-4 rounded-2xl bg-gradient-creative text-white shadow-xl shadow-primary/20 hover:scale-110 transition-all group">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] aspect-[16/9] shadow-2xl">
<img alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi4ZK-SQx-OnygiAEEi8o8vl7vNah8MWo4nF-JO8TGU5hNR0m-uHP_N2XwTfsm1PTV5Z2I36ciJ-KfmxqGRwTcpprwV6E_ugPfKUAS5qX3FzYpYfNnyspPooFxnD998HhXW-nuEGQNOANX1rhkrrv_GczeJn6z6vtG8R-6bs29zjBA2Uy0hiIadrYsC21ODlv-jr_bd5C3WdNyPnMYT1AzJpHkSe3wU6VM92TaSKcOySdVT5V_NSnvqZH15zGksRBsvzMeEtjSmHDK" />
<div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
<span className="text-primary font-bold text-sm mb-3 tracking-widest uppercase">Brand Evolution</span>
<h3 className="text-white text-4xl font-black mb-2">Aura Identity</h3>
<p className="text-white/70 text-lg">혁신적인 뷰티 브랜드를 위한 시각적 언어의 재탄생</p>
</div>
</div>
<div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] aspect-square md:aspect-auto shadow-xl">
<img alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6cPrUoMDtp9sNGxI6OI3HjSOTBlwzVpJn7teov-8HL0SHKH2axH281G8lwPyrZgp-EKUAg0SJx8Ldv-fcpYSMNtrRN6VWygA928U4KB9wTrTxUTyh0SHbcKJvxuuNsh-uvgu6TthupDcQ0qxUxFRs_mkqWj6cSvX18vOOj0eG-v6YDRnQ5e5AC3PXIgJ28mf9mkYnXHMaMCz0iLe4NgvAelj79fuLdvplY2gGBvYbDghxMkt7Qobw01QIQaAGUxtCODmMkvDhS84" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
<span className="text-white font-bold text-sm mb-2 uppercase tracking-widest">3D Motion</span>
<h3 className="text-white text-2xl font-black">Future Motion</h3>
</div>
</div>
<div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] aspect-square shadow-xl">
<img alt="Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoQN7mqWUk5-MutUyQEvk4IrBfjg5JeREQ2iCwGTQBaWar2_lBB3J0EbXrWOM_a8bLqee1Oe9-0EbRE382x6IADUI2mEx1RfN5u0A_iNFKoYNYyyNikN2AW_gBrWdFFS6-e_Ux5MobaefRC_ME6Lf1GmPQhU78Q6crr9jbp_iXyl8xTggg0sKyIwygVJa_6RYbHz-rZL9uk65TlPrdRnxEm442uDWUspfiyrqzXW1PoSdwGlZGnFwQa1pFRP9II185qW2fOv8PAvQA" />
<div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
<span className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">Digital Interface</span>
<h3 className="text-white text-2xl font-black">Zenith UX</h3>
</div>
</div>
<div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] aspect-[16/9] md:aspect-auto shadow-2xl">
<img alt="Project 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDudIZYca1oK9YkIrLa3J28mFN0tq6m7nP8R54pvihRunqJNN09KCWLwBzJ159W8TD_tTNDuYWZ-wLt0VWSeBM5zB8mE7NQnGl2XpBEmOFOvVzPc7seKvhlVx8pbpCLleqOoVC43znpAgXR4C650MtiOSChmoiEvlRO_TnFsNnpoDu12QCG3KsjOaG5yxeuP9vBKh4EjfHpnGZ44a52H5In9_2RAR3YUIExS8kRkCV_kS2hnUQyufhuAp80acN3up9OZ1H-TKdEtIc2" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
<span className="text-white font-bold text-sm mb-3 uppercase tracking-widest">Global Campaign</span>
<h3 className="text-white text-4xl font-black">Connect 2024</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-secondary/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="text-center mb-24">
<h2 className="text-5xl font-headline font-extrabold tracking-tight mb-6">Our Creative DNA</h2>
<p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-medium">이성적인 전략과 감성적인 디자인이 만나는 지점에서 최상의 가치가 창조됩니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group creative-card-hover border-t-8 border-primary">
<div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-10 transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl">lightbulb</span>
</div>
<span className="text-6xl font-black text-primary/10 mb-6 block group-hover:text-primary/20 transition-colors">01</span>
<h4 className="text-2xl font-bold mb-4">Insight</h4>
<p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed font-medium">심층적인 분석을 통해 숨겨진 브랜드의 본질을 발견합니다.</p>
</div>

<div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group creative-card-hover md:mt-16 border-t-8 border-secondary">
<div className="w-16 h-16 rounded-2xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center mb-10 transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-white text-4xl">palette</span>
</div>
<span className="text-6xl font-black text-secondary/10 mb-6 block group-hover:text-secondary/20 transition-colors">02</span>
<h4 className="text-2xl font-bold mb-4">Creation</h4>
<p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed font-medium">발견된 본질을 독창적인 시각적 언어로 형상화합니다.</p>
</div>

<div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group creative-card-hover border-t-8 border-primary">
<div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-10 transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl">auto_fix_high</span>
</div>
<span className="text-6xl font-black text-primary/10 mb-6 block group-hover:text-primary/20 transition-colors">03</span>
<h4 className="text-2xl font-bold mb-4">Refinement</h4>
<p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed font-medium">모든 디테일을 정교하게 다듬어 완벽한 경험을 제공합니다.</p>
</div>

<div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group creative-card-hover md:mt-16 border-t-8 border-secondary">
<div className="w-16 h-16 rounded-2xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center mb-10 transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-white text-4xl">diamond</span>
</div>
<span className="text-6xl font-black text-secondary/10 mb-6 block group-hover:text-secondary/20 transition-colors">04</span>
<h4 className="text-2xl font-bold mb-4">Signature</h4>
<p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed font-medium">세상에 단 하나뿐인 브랜드만의 서명을 완성합니다.</p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden relative bg-white">
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="absolute -top-16 -left-16 text-[15rem] font-black text-gradient opacity-10 select-none">“</div>
<h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter leading-tight mb-10">
                        우리의 예술적 실험은 <br />
<span className="text-gradient">비즈니스의 승리</span>로 <br />
                        증명되었습니다.
                    </h2>
<div className="flex items-center gap-6">
<div className="w-20 h-20 rounded-[2rem] bg-gradient-creative flex items-center justify-center shadow-2xl">
<span className="material-symbols-outlined text-white text-4xl">format_quote</span>
</div>
<div>
<p className="font-black text-3xl text-secondary">200+</p>
<p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold">Awards &amp; Partners</p>
</div>
</div>
</div>
<div className="space-y-10">
<div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-secondary/5 creative-card-hover transition-all duration-500">
<p className="text-2xl font-medium italic mb-10 leading-relaxed text-on-surface">
                            "TemplateHub는 단순한 디자인 회사가 아닙니다. 그들은 우리의 영혼을 꿰뚫어 보고, 그것을 가장 아름다운 형태로 세상에 내놓아 주었습니다."
                        </p>
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
<img alt="Client" data-alt="Portrait of a professional male executive in a modern grey blazer, soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWKp5R4e2X3JRd3pKXTKY4p1Pb0ZC85C4JmDGQLewhQgYqQS0lKjwhhoK3WfkC31Jx0rS4qFp4bCpLtUvgN77ENHmp5LSU59Jw3lorT21XWmef_bSSObuSx993qoaQnmti1fMvQj2qFdGwTtJb2Z295jtet6m2-Mmg9g8HIVuWLxxlaP5lFN-CF0tVoXHgPZ3o1sCckqBCc6-y1wKysODFFqquhCqU-z5ZZDMbBRPJugtEKSfwV6HcdXF8GqfTiuBsOyx4x_uCNdUt" />
</div>
<div>
<p className="font-extrabold text-lg">김지훈 대표</p>
<p className="text-sm font-bold text-primary">Nexus Tech Solutions</p>
</div>
</div>
</div>
<div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-primary/5 creative-card-hover transition-all duration-500 ml-12">
<p className="text-2xl font-medium italic mb-10 leading-relaxed text-on-surface">
                            "그들의 컬러 활용 능력과 공간감은 독보적입니다. 결과물뿐만 아니라 과정 자체가 하나의 예술적인 여행이었습니다."
                        </p>
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary">
<img alt="Client" data-alt="Portrait of a smiling creative female professional with a warm natural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4e6QoWhfz0I7UUwNkWMNquXztjOq0LWqcdEwU5iPHTN_bB5IveeU4Y2RsiPAvHR6waOd3oih0qu3eESZlUBB9BioCKKb9QFePahUjDGjm5I7d3o2MrgW5cmBEqXuxuL6ELgTtzWt-1gVuQ2T3aidJq3aH4wpgTSxZ8MpaTQFUlaDj2V5Kew_L914gBhkp1OgIXeoFhrVu77pPAaIsyOvRIz1XSaVAj-ZWBXrtMFlEDmYHpP1A-0FDzJzKW-k4Vend0haT99M8RURs" />
</div>
<div>
<p className="font-extrabold text-lg">이서연 팀장</p>
<p className="text-sm font-bold text-secondary">Starlight Marketing Group</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-8 py-24 bg-background">
<div className="max-w-7xl mx-auto relative overflow-hidden rounded-[4rem] bg-gradient-creative p-16 md:p-32 text-center shadow-[0_50px_100px_-20px_rgba(255,87,34,0.4)]">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter mb-10 leading-[1.1]">
                    당신의 브랜드에 <br /> 예술적 생명력을 불어넣으세요
                </h2>
<p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                    더 이상 평범함에 안주하지 마세요. <br />
                    감각적인 디자인 전문가들이 당신의 다음 혁신을 기다리고 있습니다.
                </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">
<button className="bg-white text-secondary px-12 py-6 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl transition-all">
                        무료 컨설팅 신청
                    </button>
<Link className="text-white font-black text-xl border-b-4 border-white/30 hover:border-white transition-all pb-2" href="mailto:hello@templatehub.com">
                        hello@templatehub.com
                    </Link>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-secondary/10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto py-24 px-8">
<div className="col-span-1 md:col-span-1">
<div className="text-2xl font-black mb-8 font-headline text-gradient">TemplateHub</div>
<p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8">
                예술과 기술의 융합을 통해 <br />
                세상에 없던 새로운 시각적 질서를 만듭니다.
            </p>
<div className="flex gap-4">
<span className="w-10 h-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center cursor-pointer hover:bg-gradient-creative hover:text-white transition-all">
<span className="material-symbols-outlined text-lg">share</span>
</span>
<span className="w-10 h-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center cursor-pointer hover:bg-gradient-creative hover:text-white transition-all">
<span className="material-symbols-outlined text-lg">public</span>
</span>
</div>
</div>
<div>
<h4 className="font-black text-on-surface mb-8 font-headline uppercase tracking-widest text-sm">Explore</h4>
<ul className="space-y-4 text-on-surface-variant font-medium text-sm">
<li><Link className="hover:text-primary transition-all flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>회사 소개</Link></li>
<li><Link className="hover:text-primary transition-all flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>팀 멤버</Link></li>
<li><Link className="hover:text-primary transition-all flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>채용 정보</Link></li>
<li><Link className="hover:text-primary transition-all flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>연락처</Link></li>
</ul>
</div>
<div>
<h4 className="font-black text-on-surface mb-8 font-headline uppercase tracking-widest text-sm">Support</h4>
<ul className="space-y-4 text-on-surface-variant font-medium text-sm">
<li><Link className="hover:text-secondary transition-all" href="#">고객지원 센터</Link></li>
<li><Link className="hover:text-secondary transition-all" href="#">FAQ</Link></li>
<li><Link className="hover:text-secondary transition-all" href="#">개인정보처리방침</Link></li>
<li><Link className="hover:text-secondary transition-all" href="#">이용약관</Link></li>
</ul>
</div>
<div>
<h4 className="font-black text-on-surface mb-8 font-headline uppercase tracking-widest text-sm">Presence</h4>
<button className="flex items-center gap-3 border-2 border-secondary/10 px-6 py-3 rounded-2xl text-sm font-bold text-on-surface-variant hover:bg-secondary/5 transition-colors">
<span className="material-symbols-outlined text-xl text-secondary">language</span>
                한국어 (KR)
            </button>
<p className="mt-12 text-on-surface-variant/40 text-xs font-bold tracking-tighter">
                © 2024 TEMPLATEHUB CREATIVE. <br />ALL ARTISTIC RIGHTS RESERVED.
            </p>
</div>
</div>
</footer>

    </div>
  );
}
  