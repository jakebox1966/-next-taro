# SAZA & GAZA 타로카드 이벤트 페이지

## Project Summary  
- Deployment Environment : Vercel
- Node version : v18.18.2
- Framework : NextJS V14.0.4
- Typescript : V5.3.3
- TailwindCSS : V3.3.0
- Material UI

## Local Build Guide
* 해당 PC에 Node가 설치되어 있는지 확인부탁드립니다. (터미널에 Node -v)
* Node가 없는 경우, 사용하시는 PC(window, mac) 에 맞는 Node를 설치해 주세요. =>  https://nodejs.org/en
1. 사용하고 계시는 IDE(Ex:VScode)에 해당 프로젝트를 로드합니다.
2. 터미널창에 npm install 입력 후, Enter (yarn 사용시, yarn install)
3. node package 설치가 완료되면 터미널창에 npm start 입력 후 Enter(yarn 사용시, yarn dev)
4. 프로젝트가 완전히 실행되면 브라우저에 http://localhost:3000 로 접속

## Caution
- Local 에서 실행 후, http://localhost:3000 접속하시면 화면에 Error를 확인 하실 수 있는데
- 해당 Error는 방문자수를 Counting 하기 위한 Hits API 호출로 인한 Error입니다. (Hits 사이트: https://hits.seeyoufarm.com/)
- 현재 구동중인 사이트에서는 Vercel 배포 플랫폼에 환경변수로 넣어 관리하고 있기 때문에 오류가 없습니다.
- 큰 프로젝트가 아니라 빌드 환경에 따라 env 파일을 나눌 필요성이 있을까 싶어 주석으로만 관리하고 있습니다.
