
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-primary/20 flex justify-between items-center px-8 py-4 max-w-full">
<div className="text-2xl font-black tracking-tighter font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TemplateHub</div>
<div className="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
<Link className="text-primary border-b-2 border-primary pb-1" href="#">회사 소개</Link>
<Link className="text-slate-400 hover:text-secondary transition-colors duration-300" href="#">마케팅 랜딩</Link>
<Link className="text-slate-400 hover:text-secondary transition-colors duration-300" href="#">Corporate</Link>
<Link className="text-slate-400 hover:text-secondary transition-colors duration-300" href="#">Marketing</Link>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-slate-400">
<span className="material-symbols-outlined hover:text-primary cursor-pointer transition-colors" data-icon="language">language</span>
<span className="material-symbols-outlined hover:text-primary cursor-pointer transition-colors" data-icon="search">search</span>
</div>
<button className="bg-primary text-black px-6 py-2 rounded-full font-headline font-black hover:bg-secondary hover:text-white transition-all duration-300 neon-line-blue hover:neon-line-magenta">시작하기</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/10"></div>
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,245,255,0.1),transparent_70%)]"></div>
</div>
<img className="w-full h-full object-cover opacity-20" data-alt="futuristic digital server room with neon blue light trails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDln_fIesdxyvcH0F0UXdb2S1esrpKChuvQwu0IZh6VTg8iv7puEAVjwE-UYFzlzgtR9zwhA-BQmlpwySMN3S081wTyI9aEdjhcBQhBWPsDB2W7XIA5Z3KkaurosuBA1L-qnuvQOQ7Ng0VwAE5eP52LXZ9elq9ln6kB8XXUT_sPUDcwBDd7j9wZh0WqX5j0lSDJAiN3FtqxPEEXNCfC1-EInd3A-AGJ7ne7REPKMtKPyadcEEv9eUa5UTR1p8xtYm8FHWIUvNoKahA9" />
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                Next-Gen Tech Architecture
            </div>
<h1 className="text-6xl md:text-8xl font-black font-headline leading-tight tracking-tighter text-white">
                미래를 설계하는 <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">첨단 기술 솔루션</span>
</h1>
<p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                데이터의 잠재력을 깨우고 한계를 넘어서는 초정밀 엔지니어링. TemplateHub는 차세대 디지털 생태계를 위한 최첨단 기술 인프라를 제공합니다.
            </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-black px-8 py-4 rounded-lg font-black hover:bg-secondary hover:text-white transition-all neon-line-blue hover:neon-line-magenta">혁신 시작하기</button>
<button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">로드맵 보기</button>
</div>
</div>
<div className="relative hidden lg:block">
<div className="glass-cyber p-8 rounded-2xl relative z-20 border-l-4 border-l-secondary">
<div className="flex justify-between items-center mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<div className="w-3 h-3 rounded-full bg-primary"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="text-[10px] text-primary font-mono tracking-widest uppercase">system_status: optimal</div>
</div>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
<img className="relative rounded-lg w-full aspect-video object-cover mb-6 border border-white/10" data-alt="abstract 3D holographic data visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWeRQX2tre98ERzA4vnNaEJjQ34jf1fA32j_Gz1tatNKF4S3VPvwOHPKd4qA0p0RTpfny0WGbeSHHssmmZg--LDAuuYFrE-2p_a4mjCJUzFU5QdQD1H1p7KQQYHGVOnT4FHI_gS-sOpaT-x7tCCX1i4wAUTi6_OOvny2TV-hiPdqKcqzyGXstyfr2bDYnh2ShE7GXuSmVa3xeC9Z5k5d2drQXD7SQ9rJpfNN8qvMy-7OD5xyMdrxPTgpGUNYWqf2RCPlengaXf_hc" />
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-black/40 border border-primary/20 p-4 rounded-lg">
<div className="text-slate-500 text-xs mb-1 font-mono uppercase">Processing</div>
<div className="text-primary font-black text-2xl font-mono">99.9%</div>
</div>
<div className="bg-black/40 border border-secondary/20 p-4 rounded-lg">
<div className="text-slate-500 text-xs mb-1 font-mono uppercase">Latency</div>
<div className="text-secondary font-black text-2xl font-mono">1.2ms</div>
</div>
</div>
</div>
<div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]"></div>
</div>
</div>
</header>

<section className="py-24 bg-black relative border-y border-white/10">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center p-8 bg-surface/50 border border-primary/10 hover:border-primary/50 transition-colors group">
<div className="text-5xl font-black font-headline text-white mb-2 group-hover:text-primary transition-colors">120<span className="text-primary text-2xl">+</span></div>
<div className="text-slate-500 text-xs font-bold tracking-widest uppercase">글로벌 파트너</div>
</div>
<div className="text-center p-8 bg-surface/50 border border-secondary/10 hover:border-secondary/50 transition-colors group">
<div className="text-5xl font-black font-headline text-white mb-2 group-hover:text-secondary transition-colors">99.9<span className="text-secondary text-2xl">%</span></div>
<div className="text-slate-500 text-xs font-bold tracking-widest uppercase">서비스 가동률</div>
</div>
<div className="text-center p-8 bg-surface/50 border border-primary/10 hover:border-primary/50 transition-colors group">
<div className="text-5xl font-black font-headline text-white mb-2 group-hover:text-primary transition-colors">250<span className="text-primary text-2xl">M</span></div>
<div className="text-slate-500 text-xs font-bold tracking-widest uppercase">데이터 처리량</div>
</div>
<div className="text-center p-8 bg-surface/50 border border-secondary/10 hover:border-secondary/50 transition-colors group">
<div className="text-5xl font-black font-headline text-white mb-2 group-hover:text-secondary transition-colors">15<span className="text-secondary text-2xl">ms</span></div>
<div className="text-slate-500 text-xs font-bold tracking-widest uppercase">평균 응답속도</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center">
<h2 className="text-5xl md:text-6xl font-black font-headline text-white mb-6">Core Technology Stack</h2>
<div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
<p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">최첨단 머신러닝 아키텍처와 분산 컴퓨팅 기술을 결합하여 전례 없는 성능의 기술 생태계를 구축합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6">

<div className="md:col-span-8 glass-cyber p-8 rounded-3xl relative group overflow-hidden border border-primary/30">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-primary text-5xl mb-6 neon-text" data-icon="neurology">neurology</span>
<h3 className="text-3xl font-bold text-white mb-4">Neural Network Integration</h3>
<p className="text-slate-400 leading-relaxed mb-8 max-w-md">실시간 데이터 분석과 예측 모델링을 지원하는 자체 개발 AI 엔진으로 비즈니스 의사결정의 패러다임을 바꿉니다.</p>
<div className="flex gap-4">
<span className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-xs font-mono text-primary">TensorFlow</span>
<span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/30 text-xs font-mono text-secondary">PyTorch</span>
<span className="px-3 py-1 rounded bg-white/5 border border-white/20 text-xs font-mono text-slate-400">Kubernetes</span>
</div>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" data-alt="stylized 3D rendering of an AI chip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxwmdudLN73IMRpso8Tpce2bPwRFjVXI5Ksjn036DSO5tC9bwpIyvKHxVAE26cEXUnrm4CsGcs80wdDSy-y7RHYeVzMANgWcQXzK3GVaO0MIVHGKyw7Xx_zY6EJPTGr0ADuVzFKQHhtQnJr4odo3ZKcM7YHB7ir0iE8nFqXOdiXZahhumvjp72L9QVd7igkwD6wko5dBmiSAgsOh4YkolsKfUNrhk8u-Tj1cPtatiawVdREd3cr7WXAM7DYFqAnforx9s5iFos4VD" />
</div>
</div>

<div className="md:col-span-4 bg-surface border border-white/10 p-8 rounded-3xl group hover:border-secondary/50 transition-all">
<span className="material-symbols-outlined text-secondary text-5xl mb-6" data-icon="cloud_sync">cloud_sync</span>
<h3 className="text-2xl font-bold text-white mb-4">Edge Computing</h3>
<p className="text-slate-400 leading-relaxed text-sm">지연 시간 없는 로컬 처리를 위한 분산 엣지 서버 네트워크 아키텍처.</p>
</div>

<div className="md:col-span-4 bg-surface border border-white/10 p-8 rounded-3xl group hover:border-primary/50 transition-all">
<span className="material-symbols-outlined text-primary text-5xl mb-6" data-icon="encrypted">encrypted</span>
<h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
<p className="text-slate-400 leading-relaxed text-sm">양자 내성 암호화를 통한 최고 수준의 보안 인프라 제공.</p>
</div>

<div className="md:col-span-8 glass-cyber p-8 rounded-3xl border border-secondary/30 group">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<span className="material-symbols-outlined text-secondary text-5xl mb-6" data-icon="database">database</span>
<h3 className="text-3xl font-bold text-white mb-4">Hyper-Scale DB</h3>
<p className="text-slate-400 leading-relaxed text-sm">페타바이트급 데이터를 지연 없이 처리하는 고성능 분산 데이터베이스 클러스터링 솔루션.</p>
</div>
<div className="flex-1 grid grid-cols-2 gap-2">
<div className="h-20 bg-black border border-white/10 flex items-center justify-center font-mono text-xs text-primary group-hover:border-primary/30 transition-colors">NOSQL</div>
<div className="h-20 bg-black border border-white/10 flex items-center justify-center font-mono text-xs text-secondary group-hover:border-secondary/30 transition-colors">SQL</div>
<div className="h-20 bg-black border border-white/10 flex items-center justify-center font-mono text-xs text-slate-500">GRAPH</div>
<div className="h-20 bg-black border border-white/10 flex items-center justify-center font-mono text-xs text-slate-500">VECTOR</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="max-w-xl">
<h2 className="text-5xl font-black font-headline text-white mb-6">Innovation Roadmap</h2>
<p className="text-slate-400 leading-relaxed text-lg">우리는 오늘에 안주하지 않습니다. 더 나은 내일을 위해 계획된 혁신의 발자취를 확인하세요.</p>
</div>
<div className="text-primary font-mono text-sm tracking-[0.3em] border-l-4 border-primary pl-6 py-2">
                ESTABLISHED 2024.V1
            </div>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden lg:block"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative pt-12 lg:pt-0">
<div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-primary flex items-center justify-center mb-6 lg:mb-0 z-10 neon-line-blue">
<div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
</div>
<div className="lg:mt-16 bg-surface p-8 border border-white/10 hover:border-primary/50 transition-all rounded-xl">
<div className="text-primary font-black mb-4 font-mono">Q1 2024</div>
<h4 className="text-white font-black text-xl mb-3">Foundational Engine</h4>
<p className="text-slate-500 text-sm leading-relaxed">코어 엔진 아키텍처 구축 및 초기 하이퍼스케일 노드 배포 완료.</p>
</div>
</div>

<div className="relative pt-12 lg:pt-0">
<div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center mb-6 lg:mb-0 z-10">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
</div>
<div className="lg:mt-16 bg-surface p-8 border border-white/10 hover:border-secondary/50 transition-all rounded-xl">
<div className="text-secondary font-black mb-4 font-mono">Q3 2024</div>
<h4 className="text-white font-black text-xl mb-3">AI Model X-1 Launch</h4>
<p className="text-slate-500 text-sm leading-relaxed">자체 학습 알고리즘 X-1 상용화 및 엔터프라이즈 API 공개.</p>
</div>
</div>

<div className="relative pt-12 lg:pt-0">
<div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center mb-6 lg:mb-0 z-10">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
</div>
<div className="lg:mt-16 bg-surface p-8 border border-white/10 rounded-xl">
<div className="text-slate-600 font-black mb-4 font-mono">Q1 2025</div>
<h4 className="text-white font-black text-xl mb-3">Quantum Security v2</h4>
<p className="text-slate-500 text-sm leading-relaxed">차세대 양자 암호 체계 전면 도입 및 하이브리드 클라우드 보안 강화.</p>
</div>
</div>

<div className="relative pt-12 lg:pt-0">
<div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center mb-6 lg:mb-0 z-10">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
</div>
<div className="lg:mt-16 bg-surface p-8 border border-white/10 rounded-xl">
<div className="text-slate-600 font-black mb-4 font-mono">Q4 2025</div>
<h4 className="text-white font-black text-xl mb-3">Global Ecosystem</h4>
<p className="text-slate-500 text-sm leading-relaxed">글로벌 통합 기술 허브 구축 및 분산 자율 생태계 완성.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-primary/20 w-full py-20 px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto font-manrope text-sm">
<div className="col-span-1 md:col-span-1">
<div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">TemplateHub</div>
<p className="text-slate-500 mb-8 leading-relaxed">첨단 기술을 통해 새로운 미래의 기준을 정의합니다. 우리는 멈추지 않는 혁신으로 세계를 연결합니다.</p>
<div className="flex gap-4">
<span className="w-10 h-10 rounded border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black cursor-pointer transition-all"><span className="material-symbols-outlined">public</span></span>
<span className="w-10 h-10 rounded border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white cursor-pointer transition-all"><span className="material-symbols-outlined">share</span></span>
</div>
</div>
<div className="space-y-6">
<h4 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-8">Explore</h4>
<Link className="block text-slate-500 hover:text-primary transition-colors" href="#">회사 정보</Link>
<Link className="block text-slate-500 hover:text-primary transition-colors" href="#">고객지원</Link>
<Link className="block text-slate-500 hover:text-primary transition-colors" href="#">블로그</Link>
</div>
<div className="space-y-6">
<h4 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-8">Legal</h4>
<Link className="block text-slate-500 hover:text-secondary transition-colors" href="#">개인정보처리방침</Link>
<Link className="block text-slate-500 hover:text-secondary transition-colors" href="#">서비스 이용약관</Link>
</div>
<div className="space-y-6">
<h4 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-8">Global</h4>
<div className="flex items-center gap-2 text-slate-500 hover:text-primary cursor-pointer transition-colors">
<span className="material-symbols-outlined text-sm">language</span>
<span>Language: Korean (KR)</span>
</div>
<div className="pt-12">
<p className="text-slate-700 text-xs font-mono">© 2024 TEMPLATEHUB_TECH. ALL_RIGHTS_RESERVED.</p>
</div>
</div>
</div>
</footer>


    </div>
  );
}
  