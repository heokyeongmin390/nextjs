
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
<div className="flex justify-between items-center px-8 py-4 max-w-full">
<div className="text-2xl font-black text-primary tracking-tighter">TemplateHub</div>
<div className="hidden md:flex gap-8 items-center">
<Link className="font-manrope font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">회사 소개</Link>
<Link className="font-manrope font-semibold tracking-tight text-primary border-b-2 border-primary pb-1" href="#">마케팅 랜딩</Link>
<Link className="font-manrope font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Corporate</Link>
<Link className="font-manrope font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Marketing</Link>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="language">language</span>
</button>
<button className="bg-primary hover:bg-tertiary text-white px-6 py-2 rounded-full font-bold transition-all active:scale-95 duration-200">
                    시작하기
                </button>
</div>
</div>
</nav>
<main className="pt-20">

<section className="relative h-[921px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale-[20%]" data-alt="serene morning fog lifting over a calm lake surrounded by deep green pine forests in a minimalist cinematic style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMIC0ezF4uM2FunmRdCd80aoYlGuf0OxeutCMOHS0iu6hmNWQS2DsjdNcnLljZJVNpEvCsN5COgYXkSJYhmmjyAKpDnXRSjsqlpW8ZDatiOgM6tYP1lHHos78tRCG9McYzmm-2qtdx1zYLt-G3wvp_ln8wwEMvighyHWDH-AoajktQhmA9JxLfsTuKgazXyNzXhxsQyYViv8ZcTYgU0B73_INpe_O5vtbikb9UdcAEKJ5rZ74UDcz6lED1YUiwlwFe3qp823Gd9Sh3" />
<div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/10 to-surface"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6 block">OUR STORY</span>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
                    기술과 인간의 <br />
<span className="text-gradient">따뜻한 연결</span>
</h1>
<p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-medium">
                    차가운 숫자보다 따뜻한 마음을 먼저 생각합니다. 우리는 단순한 툴을 넘어, 당신의 이야기가 세상에 닿는 가장 아름다운 통로를 만듭니다.
                </p>
</div>
</section>

<section className="py-32 px-8 bg-surface">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="close up of human hands carefully crafting ceramic pottery with soft natural light and subtle earth tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0GHEbFS8k8uSyRDFfJlEYhtvjoHz3gWQZ_0dXr71fkr9rcyw53248hQjXbN-Fz7xCt82V41cScBvpmyglQs1CL97Jeb7WcRswCNY-RDwvGimAQ4VSZvJ1v0x6CT_zOzMzRXNjcmUFKoCQSb_C41TSKToPvPzGb6kIrCjz0xVQz5Ty0AlbOwYRhvSy5OjtaleXVhOivGkZxPRjC5c2beDubrQGDbGsnwumi8efd3vdIYyw0P2RtGy9DNP9JxTI4ZtnmCNWK67kDpSU" />
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<label className="text-sm font-bold text-outline uppercase tracking-widest">CHAPTER 01</label>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-snug text-on-surface">디테일에 담긴 <br />진심의 가치</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">
                        모든 픽셀 하나하나에 목적이 있습니다. 불필요한 장식은 걷어내고, 오직 사용자의 경험에만 집중했습니다. 진심은 화려함보다 본질에서 빛나기 때문입니다.
                    </p>
<div className="pt-4">
<button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                            철학 더 알아보기 
                            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-8 text-center mb-20">
<h2 className="text-3xl md:text-5xl font-bold mb-8 text-on-surface">함께 만드는 변화</h2>
<p className="text-lg text-on-surface-variant italic font-serif">"사용자가 겪는 작은 불편함 하나를 해결하는 것이 세상을 더 나은 곳으로 만드는 시작이라고 믿습니다."</p>
</div>
<div className="flex gap-8 px-8 overflow-x-auto no-scrollbar pb-10">
<div className="min-w-[300px] md:min-w-[600px] aspect-video rounded-2xl overflow-hidden bg-white shadow-xl">
<img className="w-full h-full object-cover" data-alt="modern minimalist home office with large window showing a lush garden at sunrise soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMXHLzc9-Yxw5mggGOgKYaY5isLX2WwPj5oqKrEB9RGVO0AJEhcqIP3V6MQ1an06OecsrE5iW8RBnQElBwzh26FQnnPGP04fMp_C7I8avNeqBiHXYsXV9bd1i-EVhA5pw0qDgUm6IJ5GKMxIoCPLljEjhMnQrr8Lm5oK7i_bDnwCG_hDsz-VMNpv4vs6mcThbXeio1zOQuWAq8GSNWKjqQu_hIFQ1E0b5y8VtRnnWlRRVD-10RmAJJJuiTUNOYn1BMNcWyitpsQ6l" />
</div>
<div className="min-w-[300px] md:min-w-[600px] aspect-video rounded-2xl overflow-hidden bg-white shadow-xl">
<img className="w-full h-full object-cover" data-alt="team collaborating around a wooden table in a bright airy studio with many green plants and sketches" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVneUjDGaUadjGDW0twzJ-xfAP9saiGzaymYX-bbiQ0p4bRkWC2XzOzZt5BTIu_F94Qb4Bq1nvwUaGBwjxqO19A3EvUt_2AhIhJnA_3R4_3K4vvbhvUf1DpmVVJYROVtGcSFn6CC7-m35q7mHUN5AMpyVzIl4RgnHdaprKSLFhGNlJSWake1GNWb-12Bjx0PoXRaAYLK_9HCa2AUiFY2VIKj7Rn_bShQl9tXC-xqOEPs6rspemDfngOYw1OaV5SkBkzgiJwB6mtEW" />
</div>
<div className="min-w-[300px] md:min-w-[600px] aspect-video rounded-2xl overflow-hidden bg-white shadow-xl">
<img className="w-full h-full object-cover" data-alt="macro shot of high quality stationery and fountain pen on textured paper with dramatic evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqShBRNZUy4wHLA_jpq9LMNwXObybFQcZHbklgpGWs12K2TH7KA7_VkoR-oQub7LCATeZ7KMM2bvWsARx0YyEdFJu72CCxO9dPGRhE5cnL1vhm8TTKdpPbvHN2dW13jThFOrspTy2dtjh_2o1fRlNZfdwTOsYYOeNocFKoZ1paxnC91C-0mnDeIpSKWexHFrQHzRu3OdV72uD6C5VtbARrYkIB9eUy85vXPG4arGMX4McOajLDPfdgYyOSoeKfZhPSw0D4ZfhmiOA" />
</div>
</div>
</section>

<section className="py-32 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center md:text-left">
<label className="text-sm font-bold text-primary uppercase tracking-widest">TESTIMONIALS</label>
<h2 className="text-4xl font-bold mt-4 text-on-surface">진심이 닿은 이야기들</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl text-primary/30 mb-6" data-icon="format_quote">format_quote</span>
<p className="text-2xl font-semibold leading-relaxed mb-8 text-on-surface">
                                "단순한 비즈니스 파트너 그 이상이었습니다. 우리의 가치를 이해하고 그것을 브랜드 이미지로 구현해내는 과정은 정말 감동적이었습니다."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="portrait of a professional creative woman smiling in a bright art studio soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFKbiMGd_A6-euVm-by90RKyh5LK7SQR2ADxQitCW1S8T8hHlp3U6TgKE1xXCozVHvfGS-Tc2WOoLK8dlEalXcXOMJKJyVSxyDIXsLpPWlebQKAtiG76p5xnuxiGvxmYHSrFS_c9fqB4BOPug81bzVdcmtyy_IOV2GCPm6yHowgqaBbDE1siCBMqR10zsl4lp2VZ_8MA8VUDg5zpef9MnR51pmVM1lqLoW1AdyU26qeutmuV51E2yKwr808bV3wVuq4in1m-O6ozyk" />
</div>
<div>
<p className="font-bold text-on-surface">김지우</p>
<p className="text-sm text-on-surface-variant">스튜디오 무드 대표</p>
</div>
</div>
</div>
<div className="bg-primary text-white p-10 rounded-2xl shadow-sm flex flex-col justify-between">
<p className="text-xl font-medium leading-relaxed italic">
                            "사용자 중심의 디자인이란 무엇인지 결과물로 증명해주었습니다. 매출 성장보다 더 중요한 고객의 신뢰를 얻었습니다."
                        </p>
<div className="mt-8">
<p className="font-bold text-white">박성현</p>
<p className="text-sm text-white/80">테크웨이브 디자인 리드</p>
</div>
</div>
<div className="bg-surface-container-high p-10 rounded-2xl flex flex-col justify-between border border-outline-variant/40">
<p className="text-lg text-on-surface leading-relaxed">
                            "작은 피드백 하나도 놓치지 않는 세심함에 놀랐습니다. 우리 브랜드의 스토리가 이렇게 아름답게 전달될 수 있다니 놀라워요."
                        </p>
<div className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-outline-variant/30"></div>
<div>
<p className="font-bold text-on-surface">이하늘</p>
<p className="text-sm text-on-surface-variant">슬로우 마켓 마케터</p>
</div>
</div>
</div>
<div className="md:col-span-2 relative rounded-2xl overflow-hidden group h-[300px]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="diverse group of people sitting together in a circles sharing stories in a warm sunlit community center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZYFYVB-F177SI8NCoNaOPrJvJKt8xu1I7He3thFSdABMXpKFu9whIOfPm1riQdUDeVRhLrI7PxsD7dqM_dKQM_Ya4GTQP5pjp4uE13_lhdjOzVUk4npQx3qzSsg5MDReSMKzawgEKYGELD4BqFYT8sE-9FlSDrbGJznx4phz5PVuUn91S09dDoDzntC8Hf7I6WKObJCUgKIe8pnO1UFtTQqlFYszDMvvs0s_G_-p6txUoAt39nL2m5rgqJEkofIP7vAARAxq6Ovea" />
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
<div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-10">
<h3 className="text-2xl font-bold mb-2">커뮤니티와 함께 성장하기</h3>
<p className="text-white/90">우리는 1,000개 이상의 브랜드와 함께 걷고 있습니다.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-8 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-10 text-on-surface">
                    당신의 이야기도 <br /> <span className="text-gradient">작품이 될 수 있습니다.</span>
</h2>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
                        지금 시작하기
                    </button>
<button className="w-full md:w-auto border-2 border-primary text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">
                        상담 요청하기
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-low border-t border-outline-variant/30 w-full py-12 px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
<div className="space-y-4">
<div className="text-lg font-bold text-primary">TemplateHub</div>
<p className="font-manrope text-sm leading-relaxed text-on-surface-variant">
                    © 2024 TemplateHub. All rights reserved. <br />
                    디자인을 통해 세상의 모든 가치를 <br />더 가치 있게 만듭니다.
                </p>
</div>
<div>
<h4 className="font-bold text-on-surface mb-4">회사 정보</h4>
<ul className="space-y-2">
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">소개</Link></li>
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">팀</Link></li>
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">채용</Link></li>
</ul>
</div>
<div>
<h4 className="font-bold text-on-surface mb-4">고객지원</h4>
<ul className="space-y-2">
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">개인정보처리방침</Link></li>
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">서비스 이용약관</Link></li>
<li><Link className="font-manrope text-sm text-on-surface-variant hover:text-primary underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">문의하기</Link></li>
</ul>
</div>
<div>
<h4 className="font-bold text-on-surface mb-4">언어 설정</h4>
<div className="flex items-center gap-2 text-on-surface-variant font-manrope text-sm cursor-pointer hover:text-primary">
<span className="material-symbols-outlined text-sm" data-icon="language">language</span>
<span>한국어 (KR)</span>
</div>
</div>
</div>
</footer>

    </div>
  );
}
  