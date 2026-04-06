
import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">LUMIÈRE &amp; GRAIN</div>
<div className="hidden md:flex items-center space-gap-8 gap-8">
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Menu</Link>
<Link className="text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-600 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Reservations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Locations</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Story</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-manrope tracking-tight hover:opacity-80 transition-all duration-300" href="#">Contact</Link>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:opacity-80 transition-all duration-300 active:scale-95 duration-200 ease-in-out">
                Book a Table
            </button>
</div>
</nav>
<main>

<section className="pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-8">
<div className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-bold tracking-widest uppercase">Casual &amp; Vibrant</div>
<h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
                        맛있는 즐거움이 <br /> <span className="text-secondary">시작되는 곳.</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                        신선한 재료와 활기찬 에너지가 가득한 LUMIÈRE &amp; GRAIN에서 사랑하는 사람들과 함께 잊지 못할 미식의 순간을 경험하세요.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-secondary-container text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2">
                            지금 바로 예약하기
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-all">
                            메뉴 둘러보기
                        </button>
</div>
</div>
<div className="flex-1 relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Restaurant atmosphere" className="w-full h-[500px] object-cover" data-alt="vibrant casual restaurant interior with diverse group of friends laughing and sharing modern comfort food in bright warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBTiXXhFfFcb4uXGZ-KKBE4JtfnYEeCnwKaeB-INw3D2JAnD38nYm5T4xtoLKXjh5MN1tQ7IiHsJ3eSr3LH7g0HrvtdAE0RXpeFQ2kQ7qjrGFHs2o6Rys1_BFqgw0G2TSvVtT1C4oq4Cqp1lvPZ3sjrO9IQzHdcZ8XQOc6OwzypAle5HjJgoyGQW2ZHpAvX-Qo0B8_cbiEfeRMCT-0e1KNny1EnYvbnbvlsffT3RrMq8q1rOSTrWAFoYmAQiC2NcI4pRE74Q6ehiOc" />
</div>
<div className="absolute -bottom-6 -right-6 z-20 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4">
<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>restaurant</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface-variant">오늘의 추천</p>
<p className="text-lg font-black text-secondary">시그니처 바비큐 플래터</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-4">
<span className="label-md font-bold tracking-widest text-secondary uppercase">Popular Dishes</span>
<h2 className="text-4xl md:text-5xl font-black tracking-tighter">인기 메뉴 베스트</h2>
</div>
<Link className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                        전체 메뉴 보기
                        <span className="material-symbols-outlined">arrow_outward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
<div className="z-10">
<span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Best Seller</span>
<h3 className="text-4xl font-black mb-4">트러플 머쉬룸 버거</h3>
<p className="text-on-surface-variant max-w-sm">깊은 풍미의 트러플 오일과 육즙 가득한 패티가 조화를 이루는 프리미엄 수제버거</p>
</div>
<div className="absolute bottom-0 right-0 w-3/4 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700">
<img alt="Burger" className="w-full h-full object-contain" data-alt="extreme close up of a gourmet juicy burger with melting cheese, mushrooms and truffle sauce on a brioche bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC86LOVh6oxiS7pnhuB16mpdhpmydVtGcz6Tjesh4kjC0hTLWRUOqUK0jZcg_wm9hEox58n4iY_qxIwxyTrzKDF29evsRPP8RNzQfx3BAArHY0hQ_gpi70UFr_ygsEX1mK31WeRdO2tv2Aj8m6xB19WiTqites6E_tvBCZgsadIDdvUV7i9B2-UffpnkYzoYZx_pBC7twwWwoBe0MVTQAKc18KaOw_lIFSxXOjtEXEe6zgUiIxASzswDocF0YMOUJjxgflFp-lbMGnD" />
</div>
<div className="z-10 mt-12">
<p className="text-3xl font-black text-on-surface">₩18,000</p>
</div>
</div>

<div className="md:col-span-5 grid grid-rows-2 gap-6">
<div className="bg-surface-container-lowest rounded-[2rem] p-8 flex items-center justify-between group overflow-hidden">
<div className="flex-1">
<h3 className="text-2xl font-black mb-2">프레쉬 연어 샐러드</h3>
<p className="text-on-surface-variant text-sm mb-4">노르웨이산 생연어와 상큼한 유자 드레싱</p>
<p className="text-xl font-black">₩15,000</p>
</div>
<div className="w-32 h-32 group-hover:scale-110 transition-transform duration-500">
<img alt="Salad" className="w-full h-full object-cover rounded-2xl" data-alt="fresh salmon salad with greens, citrus segments, and avocado in a bright ceramic bowl on a light surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEPbfMpufgv13ACy4_uAeYwah3p0ZjHJn93vmZqiZRElRtiFBAjDzzvSaDXPR0VK0l9Vpv4aYitOjwGPdy0HGpHNuu83mywzJVJpy2E-_gC7hy9WY4yM76xvxD8MFpGWQtQ1cGGBGLlku7NTaSyFPl32zxpyMOuE_f-JMl95WKyV09xqju-VnXQi68H6kE02iao23uBob1YuUi4CUQZ-nZM_aXcccsRaeEYl36JIk8tLIZJumOipgoWReVYp16rPd8V65bsSe7D6sE" />
</div>
</div>
<div className="bg-secondary-container text-white rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20">
<span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>local_pizza</span>
</div>
<h3 className="text-3xl font-black mb-2">페퍼로니 폭탄 피자</h3>
<p className="text-white/80 mb-6">빈틈없이 꽉 채운 페퍼로니와 진한 모짜렐라 치즈의 만남</p>
<button className="bg-white text-secondary-container w-fit px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
                                주문하기
                            </button>
</div>
</div>

<div className="md:col-span-12 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden group">
<div className="md:w-1/2">
<img alt="BBQ" className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" data-alt="large platter of slow-cooked smoky beef brisket and ribs with sides of coleslaw and cornbread" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuyZKAAnOciSB2wEwudZ2nAoy5Cevu2nlmXprPe8InbY4uaqiUq1qZwqbEPJzfiTxNI893eB1rBKOVraoyGYQ_yYZK5R9ibG_2OAthOymP_hSSZYyS3K4_yv2CdUb4LS0Mk6X8xRMcyQXaYc8lxlVuoCkBXmOSrqpdpYo71rFy6oP5qskluQW0YkRuke8eb5H7RsvYJ8-VDgqEeEYuCgMDE8ndAr0-JDu5QTUsAdX-ged9Rr93aUUj3shuKNjSIL8hs2GphmJJ2sjv" />
</div>
<div className="md:w-1/2 space-y-4">
<span className="text-secondary font-bold uppercase tracking-widest text-sm">Chef's Choice</span>
<h3 className="text-4xl font-black">쉐프 시그니처 스테이크</h3>
<p className="text-on-surface-variant leading-relaxed">최고급 한우 본연의 맛을 살린 시어링 기법과 쉐프만의 특제 소스가 어우러진 최고의 스테이크입니다.</p>
<div className="flex items-center gap-6">
<span className="text-3xl font-black">₩45,000</span>
<div className="flex gap-1 text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<h2 className="text-4xl font-black tracking-tighter">리얼 보이스 💬</h2>
<p className="text-on-surface-variant">LUMIÈRE &amp; GRAIN을 다녀가신 고객님들의 솔직한 후기</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 text-orange-500 mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<p className="text-lg leading-relaxed mb-8 italic">"분위기도 너무 좋고 음식 비주얼이 미쳤어요! 특히 트러플 버거는 인생 버거입니다. 친구들이랑 또 오려구요. 😍"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
<img alt="Reviewer" className="w-full h-full object-cover" data-alt="portrait of a smiling young woman in casual wear with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlO_BMPfmig50e-fti9PRK625p-_oU5Uh1jPJD95dUiLsyhOfLSSWtCuF20RDJvHsQhMWlsEq9U2flRA36S3ctydC65dfaTXTIRgHXFdH-VR8ZEO5rDm1FTC_hkkXK6umLzpBEX31UII-wjumfoqzFHpEBAuPzw3-IqHl5KmWNA2HYzSeS4jEKjOqV0TmpuwE4V90ugyuRamJuY1E6C1M7xwJzyMorLAM5f2_uAO5pw1O_GxDWMBYDhwWiGSa2THqxHVTC-SDA0Ay8" />
</div>
<div>
<p className="font-bold">김민지 님</p>
<p className="text-xs text-on-surface-variant">Local Guide</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 text-orange-500 mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
</div>
<p className="text-lg leading-relaxed mb-8 italic">"주말 데이트 장소로 최고였어요. 직원분들도 너무 친절하시고 음악 선곡까지 완벽했습니다. 피자가 정말 맛있어요! 🍕"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
<img alt="Reviewer" className="w-full h-full object-cover" data-alt="professional portrait of a young man smiling against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHKRD-y8Kh-IglXB-XKhkKbwJi1d2lTeBG8T5NYmBarSybR-fcp0uyATVM0VKO9nKC8V-IQJ89w5LRXY9bD2K1xrZR3TH7UoPYhkGq1AgkdK_GW7Au17WqcIHgSf0076pSE8ygwGPvjrj_CT1rQogF8ruYcMMUl7B9i9_mIijaa3gzItufhUSJbGMDe-xfiT0aa3jtyAlAAZL119dnsgyRM6p9At12pdQb_FHDU2e9LdM2asFu2_j6CjdklU8EZpqcamM0Yqnk7Br" />
</div>
<div>
<p className="font-bold">이정후 님</p>
<p className="text-xs text-on-surface-variant">Foodie Traveler</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 text-orange-500 mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>star_half</span>
</div>
<p className="text-lg leading-relaxed mb-8 italic">"가족 모임으로 방문했는데 남녀노소 다 좋아할 만한 메뉴들이라 만족스러웠어요. 고기 질이 정말 좋네요. 강추! 🍖"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
<img alt="Reviewer" className="w-full h-full object-cover" data-alt="candid portrait of a cheerful woman with warm backlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-0T2g3LvJGZRKr3YA_QivA85HD-B-ajWoNpShimwCCUKJtVfZVRmKBhCHeTgdjDwBIsmvnFwWUzN53-60LdWZlkzcBOTenzwxe6dgtoqjvYnGoZFMtgceiJh5tp3Yp3woiQyUnVgqirDDTv3XplvdyZc3wqGALJTPf5P3ZCC6zgfHIro1GghZRw5R3wvBIfrv6uVje3BTiCrWbO9RWoGVKatkCEZtXANW1n1N3G8r8DJbfnL21dadzv04WXeV_Ahf8d-kmmESCKir" />
</div>
<div>
<p className="font-bold">박지현 님</p>
<p className="text-xs text-on-surface-variant">Home Chef</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-highest">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
<div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
<h2 className="text-5xl font-black tracking-tighter leading-tight text-on-surface">기다림 없이 즐기세요 <br /><span className="text-secondary">지금 바로 예약하기</span></h2>
<p className="text-on-surface-variant text-lg">원하시는 날짜와 시간을 선택하시면 최상의 테이블로 준비해 드립니다.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="label-md font-bold text-on-surface-variant">성함</label>
<input className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="홍길동" type="text" />
</div>
<div className="space-y-2">
<label className="label-md font-bold text-on-surface-variant">연락처</label>
<input className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="010-0000-0000" type="tel" />
</div>
<div className="space-y-2">
<label className="label-md font-bold text-on-surface-variant">예약 인원</label>
<select className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-secondary/40 transition-all">
<option>2명</option>
<option>4명</option>
<option>6명 이상 (단체)</option>
</select>
</div>
<div className="space-y-2">
<label className="label-md font-bold text-on-surface-variant">예약 일시</label>
<input className="w-full px-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-secondary/40 transition-all" type="datetime-local" />
</div>
</div>
<button className="w-full bg-secondary-container text-white py-5 rounded-2xl font-black text-xl hover:shadow-lg transition-all active:scale-95" type="submit">예약 확정하기</button>
</form>
</div>
<div className="lg:w-1/2 relative h-[400px] lg:h-auto">
<img alt="Restaurant interior" className="w-full h-full object-cover" data-alt="wide shot of a sunlit modern casual dining room with wooden furniture and warm inviting atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_0iiDM0Doo8FNLkWnBNeXVjWSmXXAery6rQUC64AfFn29_qdt7maJ8oTYu_fyA9RGlW9N8Wcp_7XUT40rCKsT190cLrTKqa-4KLYZOgi62i2bYLsqYqAtKmTf9VI29Ju-6PwWufwYr1CtrQ-czmQXlwo9eWjL-VJ4BzTcaYMxV-ll4r4C4bn55kmLtHVTu85psxYCsiWE9Eb5L3cZkWavUXiirlpLzh7uOE25PvYAzq2cSKbgxZjV8FqGUbTSDIBtLPkuIZITz35" />
<div className="absolute inset-0 bg-secondary/10 backdrop-none"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-50 dark:bg-slate-900 w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="text-lg font-black text-slate-900 dark:text-slate-50 font-headline uppercase tracking-tighter">LUMIÈRE &amp; GRAIN</div>
<p className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">© 2024 Gastronomy Group. Designed with Editorial Architect.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Privacy Policy</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Terms of Service</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Accessibility</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Careers</Link>
<Link className="font-manrope text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors opacity-100 hover:opacity-70" href="#">Press Kit</Link>
</div>
</footer>

    </div>
  );
}
  