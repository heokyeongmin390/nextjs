
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<Link className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline uppercase" href="#">
                LUMIÈRE &amp; GRAIN
            </Link>
<div className="hidden md:flex items-center space-gap-8 gap-x-8">
<Link className="text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-600 font-manrope tracking-tight py-1" href="#">Menu</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Reservations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Locations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Story</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Contact</Link>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold scale-95 hover:scale-100 duration-200 ease-in-out transition-all">
                Book a Table
            </button>
</div>
</nav>
<main className="pt-20">

<section className="relative min-h-[921px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Cinematic wide shot of a sun-drenched cozy cafe with warm wooden interiors, vintage furniture, and steam rising from a coffee cup" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZqWXpz1Hm4f7hmK3v2X2P2njAKXSRzIuuMY2AZMbuTCGVBSJDnTfz-dhHCMMfUjEAZ9-iPeVI2nRfTlywwd2ooGicFmm5P0RLidhducUNmSB3WJJ0FWEGacDhPOjYYH7iKfsTslKuSv0IALh8OCyhnoyUxRZu6k_yLL-fsb6tCvDHgoPU01V1zZLZzRRBsSuhSZU70khEPTaibuHHIkz2TpfeCejs3u8NzwgWni_hOP7YjyIDua116raDFAfKQmCRX8E56_SF4sb" />
<div className="absolute inset-0 bg-gradient-to-r from-on-surface/40 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl">
<span className="label-md uppercase tracking-[0.2em] text-surface-bright mb-6 block font-medium">Est. 2024 Seoul</span>
<h1 className="text-display-lg font-headline text-white leading-none mb-8 tracking-tighter serif-text text-6xl md:text-8xl">
                        따뜻한 나무 향과<br />깊은 커피의 시간
                    </h1>
<p className="text-xl text-surface-bright/90 mb-10 max-w-lg leading-relaxed font-light">
                        빛과 결이 머무는 공간, 루미에르 에 그랑에서 당신만의 고요한 휴식을 경험하세요. 정성스럽게 볶은 원두와 따스한 우드 톤의 안식처입니다.
                    </p>
<div className="flex gap-4">
<button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                            시그니처 메뉴 보기
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                            공간 투어
                        </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Close-up of expert barista hand-pouring specialty coffee through a glass dripper, warm amber lighting highlighting the water flow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0p_ixRDo-jZD1q7M9RGByCO0mqrqFvVbPZ5hFbhrkcq6Z1nqnsOBA6CGFdTGrDxaCQSQEZ8yJWP92-tEiiohpEeSVPNa2K3IKINEpIkW0lRdE5ZxsacSYWrwLC_PtYFBYjGcHwSpELvuNU9gM0oNxETtVXhzehlDO7egKhMGurBPzkAK0Jy1OMEEnbVlJd_R0gaRQRnKqt-zRAJkZvHvfTCblO3O0U70eP8DWy471FFfFH3FeYLtxJgxJOCL_T6ucsdyd5LnphPJJ" />
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-surface-container-high rounded-2xl p-4 hidden md:block">
<img className="w-full h-full object-cover rounded-xl" data-alt="Macro texture shot of premium dark oak wood grain used in cafe furniture, warm and organic feel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Fc0yS1qXdCUptICfZt57r795oOb8PZwwGO14Ey13trg9rEO8lmiMXn8QB5LE5Jb4XgIqXjZy7__PGGBwV3UCHLVVubQq-ns9O9yEbeFDJpizTwcHvTxHxh1zvBTsWMfivYmjuTn8KRu8KdjNGDXNgOPFmAv1nj1XZNx5rPfJlD7ABxVVAPHnOWoXtnD6ia8LsUU95EFJsKgGkSK47-sB99A9p43S_xAqHu1LRxkJ4xUzsHTfzWueujHyYlw2yeVcZ0ANsTda3rNz" />
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-5xl font-headline font-bold text-on-surface mb-8 leading-tight serif-text">
                            우리가 믿는<br />완벽한 한 잔의 가치
                        </h2>
<div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
<p>
                                루미에르 에 그랑은 단순히 커피를 파는 곳이 아닌, '시간'과 '결'을 선물하는 공간입니다. 우리는 산지에서 직접 선별한 싱글 오리진 원두만을 고집하며, 각 원두가 가진 고유의 이야기를 가장 잘 끌어낼 수 있는 로스팅 프로파일을 연구합니다.
                            </p>
<p>
                                나무의 나이테가 세월을 증명하듯, 저희의 커피 한 잔에는 바리스타의 숙련된 기술과 기다림의 미학이 담겨 있습니다. 당신의 일상에 잔잔한 울림이 되는 온기를 전달하겠습니다.
                            </p>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-12 h-12 rounded-full border-2 border-surface bg-slate-200"></div>
<div className="w-12 h-12 rounded-full border-2 border-surface bg-slate-300"></div>
<div className="w-12 h-12 rounded-full border-2 border-surface bg-slate-400"></div>
</div>
<span className="text-sm font-medium text-on-surface/70">1,200+ Regular Customers Love Our Blend</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low">
<div className="container mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Signature Selection</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">계절의 흐름을 담은 루미에르 에 그랑만의 특별한 메뉴들을 소개합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">

<div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-lowest transition-all hover:shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Aesthetic top-down view of a signature cream latte with artistic latte art on a wooden tray with a small sprig of rosemary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHaHoyxpn2FKj1UHrpaeXXv82rmDyJXLj3txGGucHPdvx85r99IIXFNMGt6f1Prf8lRamS8t3TYc6SdjZ5yXUwk_0dDa6z4RVWHxzF43OUvBzFHRPts5sa1ZFhPCzdr5UXTZ1BnbjFGXhjWIsjv60StPNsT2ZaIGj1sDtNLuGltGpteKtuDJv_LwXoLDeaMivPNCIOvkxz6UFAtxv6ftzlCM9TkPgHr4QpZ8_ri0ygBt3bfKJ-27djB3TBVklLMeYfr-V91_JR6H1Y" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<span className="bg-secondary px-3 py-1 text-xs font-bold rounded-full mb-4 inline-block">BEST SELLER</span>
<h3 className="text-4xl font-bold mb-2">오크 블렌드 시그니처 라떼</h3>
<p className="text-white/80 max-w-md">참나무 향을 머금은 원두로 추출하여 깊고 고소한 풍미가 일품인 시그니처 크림 라떼입니다.</p>
<span className="text-2xl font-bold mt-4 block">₩ 7,500</span>
</div>
</div>

<div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest transition-all hover:shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Exquisite wooden plate with a slice of dark chocolate cake and sea salt caramel drizzle, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Io-zdzI-sjDbQUfnoLlorqpkxobfQKbR1bgri0y8CQUgdvVzLSLIbxdmghHtnYGXdGG5DPZ06FEIwXw7D6WbBwC-wIg9ixuC_0nV26Mb1E_6zfaP3b8q1Mf5hQHrXNt88JwID7tObYsCOcuIbI5bRS0eBy5eHcmi6AMb5Qxa4nJnUAji0UVO3eHncGS2uGTloNdMsIy-AnYvaYnllMeKA1XCmmxEOqVleLf1OVEPC34CXireUI6ZKYyL-7MjqbJQby81m_8aixJI" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 p-8 text-white">
<h3 className="text-2xl font-bold mb-1">메이플 월넛 케이크</h3>
<p className="text-white/70 text-sm">달콤한 메이플과 고소한 호두의 조화</p>
<span className="text-xl font-bold mt-2 block">₩ 6,800</span>
</div>
</div>

<div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest transition-all hover:shadow-xl">
<img alt="Handmade scones served with clotted cream and strawberry jam on a rustic ceramic plate" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv39KLWS1teLAsOgvd78h8oLBwzvPXzaPo_FChdeO8bWpNcbxzxt0ZW2de7qh_ZCoecDfu511MF0mDk2vDZv2mjDQKS2gCfgaPMtrCe-Tlp0AerB0NcInlQqC57LhuVeNKW7cBe3_n9BTRD97oHzH-YhkmFSf4Z_d7t-87kDrCfvAxOuyeoNkv-l461yKmDBugf0OYS9Q-AGELFFiHqQaJcFWnyIFRcRV7V2fpEu3WDBWWrsXzR24g2E9-T3eQuoidYHQQY4w7nSfr" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 p-8 text-white">
<h3 className="text-2xl font-bold mb-1">수제 통밀 스콘</h3>
<p className="text-white/70 text-sm">매일 아침 굽는 건강하고 담백한 스콘</p>
<span className="text-xl font-bold mt-2 block">₩ 4,500</span>
</div>
</div>

<div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-lowest transition-all hover:shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Spacious cafe interior with long wooden communal table and minimalist pendant lights, peaceful atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy-F9FhPovjmsMx8sxkvQ1uyg1WTRWByVOJV2kcX-kIKSpDhaUZ-cj2dbtKoFWdjmr0-s7Z6IHegxsaNoDLPCBZcHoPsde2kzGo-JFEVydQ1F7dU108HVG9XRX3Ck8qmu2J9L_aLLA_x1uX4Ibikdhyb2xwxSAKz4yb9AzzK_nNvg5fVLv8fOalPZh20H_-L7q1l9I9C2eBfucADsFcT9AGGXTk9-S8PTtRiyoQwJVH6u97jXg-Lpb-pOtz26Mpi5BaRbTVzRzX-cx" />
<div className="absolute inset-0 bg-secondary/20 mix-blend-multiply transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
<span className="text-on-surface font-bold">공간 전체보기</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="container mx-auto px-6">
<div className="bg-surface-container-high rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch">
<div className="lg:w-1/2 p-12 lg:p-20">
<span className="label-md text-secondary font-bold tracking-widest mb-6 block">CONNECT</span>
<h2 className="text-4xl lg:text-5xl font-headline font-bold mb-8 serif-text">당신의 이야기를<br />들려주세요</h2>
<form className="space-y-6">
<div>
<label className="block text-sm font-bold text-on-surface mb-2 uppercase tracking-wide">이름</label>
<input aria-label="이름" className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="성함을 입력하세요" type="text" />
</div>
<div>
<label className="block text-sm font-bold text-on-surface mb-2 uppercase tracking-wide">이메일</label>
<input aria-label="이메일" className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="email@example.com" type="email" />
</div>
<div>
<label className="block text-sm font-bold text-on-surface mb-2 uppercase tracking-wide">문의내용</label>
<textarea aria-label="문의내용" className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="궁금하신 점이나 대관 문의를 남겨주세요" rows="4"></textarea>
</div>
<button className="w-full bg-on-surface text-surface py-5 rounded-xl font-bold hover:bg-secondary transition-colors text-lg" type="submit">
                                메시지 보내기
                            </button>
</form>
</div>
<div className="lg:w-1/2 relative min-h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="Stylized map showing a peaceful neighborhood street with cafe location marked subtly, aesthetic and clean" data-location="Seoul, South Korea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKr2P93bcO-cMlsZ8T7sSpE0u6fpjuS-0NFImZbfqYkzSeyn2V8JrOv2XQ60pBF4hOTbJUMnwWXZqnnPFbdEA1wv144teg1OwyVY_HPpAV1eENYpkRQzlOEpg7e1_iLg4ADP2c8WEdUidXhx5ZPFeP4-wTtf0NWEPtp-VrpoAIyQINXx9aU4cs9XP-Bfm7J44Ib9cV9KWSM6zXcpCR1tK3fpbUnM4dYiNNuYPyrO7sC-B_sahpy0XEbj9ffNpCYE6Q2rQcPvwEELc2" />
<div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary">location_on</span>
<div>
<h4 className="font-bold text-on-surface text-lg">서울 강남구 결대로 123, 1층</h4>
<p className="text-on-surface-variant text-sm mt-1 italic">평일 09:00 - 21:00 | 주말 10:00 - 22:00</p>
</div>
</div>
<div className="flex items-center gap-4 mt-6 pt-6 border-t border-on-surface/10">
<span className="material-symbols-outlined text-secondary">call</span>
<span className="font-medium">02-1234-5678</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-50 dark:bg-slate-900 w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-lg font-black text-slate-900 dark:text-slate-50 font-headline uppercase tracking-tighter">LUMIÈRE &amp; GRAIN</span>
<p className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">© 2024 Gastronomy Group. Designed with Editorial Architect.</p>
</div>
<div className="flex gap-x-8">
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Privacy Policy</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Terms of Service</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Accessibility</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Careers</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Press Kit</Link>
</div>
<div className="flex gap-4">
<Link className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform" href="#">
<span className="material-symbols-outlined text-slate-600 text-xl">share</span>
</Link>
<Link className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform" href="#">
<span className="material-symbols-outlined text-slate-600 text-xl">mail</span>
</Link>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-40">
<button className="bg-secondary text-on-secondary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group">
<span className="material-symbols-outlined text-3xl">calendar_month</span>
<span className="absolute right-full mr-4 bg-on-surface text-surface px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                예약하기
            </span>
</button>
</div>

    </div>
  );
}
  