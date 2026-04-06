# TemplateHub - Vercel 배포 가이드

이 프로젝트는 **Next.js**로 제작되었으며, **Vercel**을 통해 가장 쉽고 빠르게 배포할 수 있도록 최적화되어 있습니다. 처음 Vercel을 사용하시는 분들을 위해 상세한 가이드를 작성했습니다.

## 🚀 Vercel 배포 단계 (가장 추천하는 방법: GitHub 연동)

### 1. GitHub에 프로젝트 올리기
가장 먼저 본인의 GitHub 계정에 이 프로젝트를 업로드해야 합니다.
1. [GitHub](https://github.com/)에 접속하여 새 저장소(Repository)를 만듭니다.
2. 터미널(CMD/PowerShell)에서 다음 명령어를 실행하여 프로젝트를 GitHub에 올립니다:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TemplateHub with 12 templates"
   git branch -M main
   git remote add origin https://github.com/사용자이름/저장소이름.git
   git push -u origin main
   ```

### 2. Vercel 계정 생성 및 로그인
1. [Vercel 공식 사이트](https://vercel.com/signup)에 접속합니다.
2. **Continue with GitHub**를 선택하여 GitHub 계정으로 가입 및 로그인합니다.

### 3. 프로젝트 가져오기 (Import)
1. 로그인 후 대시보드에서 **[+ Add New...]** 버튼을 누르고 **[Project]**를 선택합니다.
2. 'Import Git Repository' 목록에서 방금 올린 `Next_js` (또는 저장소 이름) 프로젝트 옆의 **[Import]** 버튼을 클릭합니다.

### 4. 프로젝트 설정 및 배포
1. **Framework Preset**: 자동으로 `Next.js`가 선택되어 있을 것입니다. (그대로 둡니다)
2. **Root Directory**: `./` (그대로 둡니다)
3. **Build and Output Settings**: 기본 설정 그대로 둡니다.
4. **Environment Variables**: 현재 프로젝트는 별도의 환경 변수가 필요 없으므로 비워둡니다.
5. 모든 확인이 끝나면 하단의 **[Deploy]** 버튼을 클릭합니다.

### 5. 완료!
1. 약 1~2분 정도의 빌드 과정이 끝나면 "Congratulations!" 메시지와 함께 배포된 사이트 주소(URL)가 생성됩니다.
2. 생성된 주소를 클릭하여 고객들에게 공유할 수 있습니다.

---

## 🛠️ Vercel 사용 및 관리 팁

### ✅ 자동 배포 (CI/CD)
Vercel의 가장 큰 장점입니다. 앞으로 코드를 수정하고 GitHub에 `git push`를 하기만 하면, **Vercel이 자동으로 변화를 감지하여 사이트를 다시 빌드하고 업데이트**합니다. 별도의 수동 작업이 필요 없습니다.

### ✅ 커스텀 도메인 연결
1. Vercel 대시보드 -> 해당 프로젝트 선택 -> **[Settings]** -> **[Domains]** 메뉴로 이동합니다.
2. 본인이 구매한 도메인(예: `www.your-template.com`)을 입력하여 연결할 수 있습니다.

### ✅ 프로젝트 구조 설명
- `src/app/page.tsx`: 메인 페이지 (템플릿 목록)
- `src/app/templates/[slug]/page.tsx`: 각 템플릿의 상세 페이지
- `src/app/globals.css`: 전역 디자인 및 테마 설정 (Tailwind CSS v4)

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 배포 중에 에러가 발생해요.**
A: 대부분의 에러는 코드 상의 오타나 타입 오류입니다. 터미널에서 `npm run build`를 실행하여 로컬 환경에서 먼저 오류가 없는지 확인해 보세요.

**Q: 사이트 수정은 어떻게 하나요?**
A: 로컬 컴퓨터에서 코드를 수정하고, `git add .`, `git commit -m "update"`, `git push` 순서로 명령어를 입력하면 자동으로 사이트가 업데이트됩니다.

**Q: 무료인가요?**
A: 개인 프로젝트(Hobby 플랜)는 **평생 무료**로 배포하고 사용할 수 있습니다. (트래픽이 아주 많지 않은 이상 충분합니다)
