import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">TemplateHub</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1 font-manrope tracking-tight" href="#">Company</Link>
            <Link className="text-slate-600 dark:text-slate-400 font-medium pb-1 font-manrope tracking-tight hover:text-blue-500 transition-colors duration-200" href="#">Marketing</Link>
            <Link className="text-slate-600 dark:text-slate-400 font-medium pb-1 font-manrope tracking-tight hover:text-blue-500 transition-colors duration-200" href="#">Cafe</Link>
            <Link className="text-slate-600 dark:text-slate-400 font-medium pb-1 font-manrope tracking-tight hover:text-blue-500 transition-colors duration-200" href="#">Restaurant</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface py-24 md:py-32">
          <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary bg-primary-container/20 rounded-full">PREMIUM TEMPLATES</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-on-surface mb-8">
                당신의 비즈니스에 <br /><span className="text-primary">완벽한 템플릿</span>을 선택하세요
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-light">
                성공적인 온라인 브랜딩의 시작. 각 분야별 최고의 전문가들이 설계한 12가지 독보적인 디자인을 지금 만나보세요.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all" href="#templates">
                  템플릿 탐색하기
                  <span className="material-symbols-outlined">arrow_downward</span>
                </Link>
                <button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold hover:bg-surface-container-high transition-all">
                  커스텀 문의하기
                </button>
              </div>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-20 z-40 bg-surface/80 backdrop-blur-md border-y border-outline-variant/10" id="templates">
          <div className="max-w-screen-2xl mx-auto px-8 py-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-semibold whitespace-nowrap">전체보기</button>
              <button className="px-6 py-2 bg-surface-container text-on-surface-variant rounded-full font-semibold hover:bg-surface-container-high transition-all whitespace-nowrap">회사 소개</button>
              <button className="px-6 py-2 bg-surface-container text-on-surface-variant rounded-full font-semibold hover:bg-surface-container-high transition-all whitespace-nowrap">마케팅 랜딩</button>
              <button className="px-6 py-2 bg-surface-container text-on-surface-variant rounded-full font-semibold hover:bg-surface-container-high transition-all whitespace-nowrap">카페</button>
              <button className="px-6 py-2 bg-surface-container text-on-surface-variant rounded-full font-semibold hover:bg-surface-container-high transition-all whitespace-nowrap">음식점</button>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined">tune</span>
              <span className="text-sm font-medium">정렬 기준: 최신순</span>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img alt={template.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={template.image} />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-white text-[10px] font-bold rounded uppercase tracking-widest backdrop-blur-sm ${template.tagColor}`}>
                        {template.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-on-surface mb-2">{template.title}</h3>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">{template.description}</p>
                    <Link href={template.href} className="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                      Preview
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-container/10 py-24 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6">찾으시는 스타일이 없으신가요?</h2>
            <p className="text-lg text-on-surface-variant mb-10">귀사만의 특별한 브랜드 정체성을 담은 1:1 맞춤형 템플릿 제작도 가능합니다.</p>
            <button className="px-10 py-4 bg-primary text-on-primary rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              전문가와 상담하기
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">TemplateHub</div>
            <p className="font-manrope text-sm text-slate-500 dark:text-slate-400">© 2024 TemplateHub. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="font-manrope text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all hover:underline" href="#">Privacy Policy</Link>
            <Link className="font-manrope text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all hover:underline" href="#">Terms of Service</Link>
            <Link className="font-manrope text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all hover:underline" href="#">Cookie Settings</Link>
            <Link className="font-manrope text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all hover:underline" href="#">Contact Us</Link>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

const templates = [
  {
    title: "회사 소개 (신뢰형)",
    description: "비즈니스의 전문성과 신뢰를 강조하는 견고한 레이아웃입니다.",
    tag: "Corporate",
    tagColor: "bg-blue-500/90",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWIVvJEiSbtk6scHtgmq0Yp8G8ht7jAXoBajRT3Bvt5kTr4b6vdPnIPS3lef-cDZU98XYVo0FPWO6y_7-QLv5xxxfaK8e3-27GTGqlZJOGeA4zl-zpb8JH05-E4seCrwZ_uUZqACA88DQCsreLMmI5lYeN64KyRkFvjGus0Act2eP6Kf2bOFikCq_h1ginPRmwN_K0o0jWu52Iq8QcmGiOHMKBfZj3ZDeRRuJQeS7_bRpqMdR1vgd5iATHSSfV02vn52kA9P80PqK1",
    href: "/templates/corporate-trust"
  },
  {
    title: "회사 소개 (미니멀형)",
    description: "여백의 미를 살린 고급스러운 브랜딩을 위한 최적의 선택입니다.",
    tag: "Minimalist",
    tagColor: "bg-blue-500/90",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbDQXMR5aefI3IP9HffZ_Ny9aw727c9sKtSTzBDEbmuFf3CwGeesMiq0RthLXzjHP632KL1TyITpuKtLRPufOT2-4_1U7l8SohmzSGXfuIs_2xQTiNLmHyntyxTShfuqrCo2TQ1DMMGdzpHuwdCGGKhI2WmahbqUSkKeH31_vZFcmHt3_faQIckZBP-BkpuKPkbjFiJrurm4p9BkdoIT3r0U5tHf0WHDebpkCoowjfGKVT5e0D2cc_9rlDDx3rqocHNUDTMi9ti6vL",
    href: "/templates/corporate-minimal"
  },
  {
    title: "회사 소개 (창의형)",
    description: "독창적인 아이디어와 영감을 전달하는 변칙적 레이아웃입니다.",
    tag: "Creative",
    tagColor: "bg-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzxc6OD3z7qkCdBiubio_MNwyGpRyabeQVwjwAn5PHMFL8e-k-dsT_GAaPd3BoADhcuhCcvRE3_r6u7astReXiv0TYfeUk8I0zSEde-aHbWT3vdalLd1332wK4cQPd6hkweK2Ur7hHRv3gTOA-6bTkZ0h2XQaJMKvBzOE0ydtSlTXZqHsR2nlqz-JtLCwTTvoOGM7KJZ2UzWYouzZs0totPxBUBhvR4xfH1LNYmCu8g6FfNSo_ga75YdUzZvexRLRpU4N5pzWPG8nD",
    href: "/templates/corporate-creative"
  },
  {
    title: "회사 소개 (기술형)",
    description: "데이터와 기술력을 효과적으로 보여주는 다크 테마 디자인입니다.",
    tag: "Tech",
    tagColor: "bg-primary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZS9UBvsMklXqso24saqmMOq1W3Wgbf1fMiP5FLD8N3AsRDAK2qQV0eGexMiaWSMKj7Rz-MVyAm-uaqZ4Ua58LXEUy_3mVRAewjn_qMjKdf3ozMWzuP9STKyrQbBQnw2pNMw_eYXY5qAb-CLmUI8NcMmrjcvdSuMDuCzZJuNz1Diq9QlLvDsYu7rC3eTIy95KGCXuK8QH1X9UOUdJ1t4T0tOZlzzGlReR9jcoIx7-VktEcEt1YLtDeNmPvtOo0ZK7ueB841kUIEEM",
    href: "/templates/corporate-tech"
  },
  {
    title: "마케팅 랜딩 (전환형)",
    description: "클릭과 구매 전환율을 극대화하도록 설계된 CTA 중심 랜딩입니다.",
    tag: "Marketing",
    tagColor: "bg-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeBezbFPmzuwvJYUY9j4AFpAYetM0Ib_ug_WZd1MMj6cmUDET4ll2rsTB6K-P1aYCXAWVM7Lfor0LZolzifjotSuJnaS4i6f10A-Dzz_jYWGiSwpmI-E87pZf5sYrfA85YxX6YlDzhqwJuVdWHZTbD9xWJXuKKSCLA5Va_T3sBUTNiDXOqgCMpNAESg9xs0kmw1VSc9DnfoRTnb8tQ6LLGGCG8jAWp_XtMa9szksgo6Lxfs24RjpUWumP53ivgPsjJrf_r_BIs3zVD",
    href: "/templates/marketing-conversion"
  },
  {
    title: "마케팅 랜딩 (스토리형)",
    description: "브랜드의 서사를 감각적인 비주얼로 풀어내는 템플릿입니다.",
    tag: "Branding",
    tagColor: "bg-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qJ4N2z0C-Y2VsFMhZ28bmM3lwhRVCofK5uSlk8TXPJQV5c1wcxjcpmpACY8EA9wzihq6t8JQnwJFrCVOo2XY0NbkMF5eAWZOcBxFOLM9Qio21cBI8WR0ynk4MEunIFTcMqULj8jLZ6vI5FQKQ7jru0m7FINE9jpt-YQvGEsjDKosqXmkzYni50Uv3g4CZzVPivPvFU61-fWskG5CtlG0T2iGVNYuzgZiD9ZC0M0VVsS-N0VH6u4GEiefZ6ss3_E88188-KBqhDxs",
    href: "/templates/marketing-story"
  },
  {
    title: "마케팅 랜딩 (기능형)",
    description: "복잡한 서비스의 핵심 기능을 일목요연하게 전달합니다.",
    tag: "SaaS",
    tagColor: "bg-tertiary-container text-on-tertiary-container",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeeIpr96Z4HCqdyC0iULJisjnAWG1u9Cf-fsVgB1x8H9qCImbv1ddxFVH5zvIbzYh8Uw3zmss9LeFjzHuFFTKrzc8DBHtW9Rr3Fyplat-G4P2MEyQJZ35VXGbS87pVjrZA_D3McsvVLUkCX32QLIsX97YCKcT2boSgBjgMsNz-d1Nep0iTX6H5y0DKHsDhuJklkNyeaDus7AggyK66zQ8lUoeDr6e6Ll4C9J-WL4QV1QwDOKiF0HQr6-PJvpMDqHwdc1LHsUCcxTVb",
    href: "/templates/marketing-feature"
  },
  {
    title: "마케팅 랜딩 (원페이지형)",
    description: "가장 빠르고 효율적으로 핵심 메시지를 전달하는 단일 페이지입니다.",
    tag: "Single Page",
    tagColor: "bg-primary-fixed-dim text-primary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_0wV33HfzccAmabiq-A0PTonQ61a_9deG4b9Nv00pqOA2zNAYh1LCdG78LcPM0B9COzlMf90tUfU-r1hhejy2Unwlaw0zZzTtxwn8Fe_O8TyDjUVzQ2pBFWq_FkkgADTSLNm7Y4uhVOcHzTKQNkFsssjRPnzh35D5APOW92arH6jyJGgwl0WthB9f6KWQ7F_Q52psV56b5E6brvkmmuQMuxVlyp_ZPLCalFFGUT3XsDkHYAz12vUylLbDFSa2hs_e0mqVy8vnp35N",
    href: "/templates/marketing-onepage"
  },
  {
    title: "카페 (감성 우드)",
    description: "따뜻하고 아늑한 분위기를 전달하는 우드 톤의 디자인입니다.",
    tag: "Cafe",
    tagColor: "bg-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72GiR1wdywKRNPmCWSs9B_8iGQU5EsBm4M7Dkqmsh4wYQSXdSxHalZNu03pKYWuQjOZpJC-mVjQBH8KlYmJ2feMj4Cl7Ea99y5hzCB_1xcH4ALy8OryzMCpewaowmUCIrgNGMV0swr_4vABhIHi9kfsGm2hh039MNECrPNvlxSvshu4qzz6WgHTb0raYl2i_2HIbJfEM2f2-a3Wudfa-49JCuejWI8GqSC2famBF_hkHG6qan86KGzyLBFTNt1t6YAVlJGYml0N7k",
    href: "/templates/cafe-wood"
  },
  {
    title: "카페 (모던 다크)",
    description: "세련된 도시적 감각을 강조하는 블랙 & 그레이 테마입니다.",
    tag: "Modern",
    tagColor: "bg-inverse-surface",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPdsc7cMTTQWkdGiTlk45A2BNMeoCZgpeVkHgc-LukUQygod6RrQxPPEGdmKScSkU55NkRADyFhpEvnNjM52VezBsz9HOhEWtwo7A0jYCRL0XbLp9MVjEqivRrzvBhXD3t8m6IvUaeHeRJ-JgWVC2XOxEmjRB-uN5tenQwbN7X5p8lDu2y8LF0w3xXPtr6JhEvRi7Y3XEsH91lK2_yTJQ6FJcFoLyrxG7Zx8MWVNIVoezfJK1r5icJF32n_BM83uUmVMvVd46DE12h",
    href: "/templates/cafe-dark"
  },
  {
    title: "음식점 (파인 다이닝)",
    description: "고품격 다이닝의 가치를 담아낸 우아하고 절제된 디자인입니다.",
    tag: "Luxury",
    tagColor: "bg-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9gb0TTeu-VmCSKmHe5mNdIANOOYjiwB5dtOWUyknjXfymonbRj1fQhc2zkSk_HC1M9LSFiOJdnnYwWwG5ac9RE7ZMhObW9u1aP5i2pK_L3eKJ1DfzF71PHwLiG_mqOPUxUBqpKeK3JgdLSYXLRN_xE1QBGtcqk0rp_989_AcAimVFhTosWA_PTrg0-_K-xYC-QHR3qOjaPEFotebKzYmkJkMJzLMAqBwtvlKJaIsjWzGOFuPcilQJT1WQ8qhaVvCqkQMka5FtYA8Y",
    href: "/templates/restaurant-fine"
  },
  {
    title: "음식점 (캐주얼 다이닝)",
    description: "누구나 편하게 방문할 수 있는 밝고 활기찬 분위기의 템플릿입니다.",
    tag: "Casual",
    tagColor: "bg-tertiary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUVqHjWYlwdvN_eJylp0YJ6fS5YYJwOCgFkYqQeDmdkVUUgMeELtZk1ivs-yEzzb_CUOARiRBhx_WnuWw2ngE_8Tc4lyGujtdFfVIqwIe6i6jenZdJn38BLua0MIcJBYoOGgju2gY_PjJ5eOrtaO6sV0chD5xAxdUP_BVv-U6YpDzi335_FSIyjgvCPsT-0rVltua55Pobnr18_HfLP6L5yjUyU1ecFfz9qdncwP-6-QPvwub7xf36tnzAJsEDRbHRiF1QixmM7Vzm",
    href: "/templates/restaurant-casual"
  }
];
