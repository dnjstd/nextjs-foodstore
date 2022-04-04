# Purpleio - AWESOME FOOD STORE

퍼플아이오 맛집 리스트 구현 코딩테스트입니다.
<br/><br/>

## 🛠 기술 스택

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/STYLED--COMPONENTS-DB7093?style=flat-square&logo=STYLED-COMPONENTS&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/>

<br/><br/>

## 💻 기능 구현

### ✔️ json-server 생성 api 연동

- 개발 PC에서 json-server 실행
- db.json 파일 사용 (9000 port)

### ✔️ 맛집 리스트 UI 구현

- 헤더, 푸터 구현
- ABOUT, STORE 페이지 구현
- STORE페이지 맛집 리스트 grid로 표현
- 부트스트랩 아이콘 사용

### ✔️ 모달 구현

- 리스트 중 하나의 아이템 클릭 시 팝업창 표시
- 맛집 이름, 사진, 설명, 홈페이지 바로가기 링크 표현
- db에 url정보가 없는 경우 나타나지 않음
- 팝업창 오른쪽 위 X버튼 클릭 시 팝업 닫힘

### ✔️ 404 에러 페이지

- 404.js 파일 작성하여 400 에러 페이지 생성
- 정의하지 않은 url로 접근시 에러 페이지 노출하고 5초 후 메인 페이지로 이동

<br/><br/>

## 💿 설치 및 실행 방법

1. Project Clone
   `$ git clone`

2. Project Setup
   `$ yarn install`

3. Project Start For Development
   `$ yarn dev`

<br/><br/>

## 📍 프로젝트 구조

```
🗂Purpleio
 ┣ 📂components
 ┃ ┣ 📄Footer.js
 ┃ ┣ 📄Header.js
 ┃ ┣ 📄LayoutForm.js
 ┃ ┗ 📄Modal.js
 ┣ 📂pages
 ┃ ┣ 📄_app.js
 ┃ ┣ 📄_document.js
 ┃ ┣ 📄404.js
 ┃ ┣ 📄about.js
 ┃ ┣ 📄index.js
 ┃ ┗ 📄store.js
 ┣ 📂styles
 ┃ ┗ 📄globals.css
 ┣ 📄.babelrc
 ┣ 📄.eslintrc
 ┣ 📄.gitignore
 ┣ 📄.prettierrc
 ┣ 📄db.json
 ┣ 📄next.config.js
 ┣ 📄package.json
 ┣ 📄README.md
 ┗ 📄yarn.lock
```
