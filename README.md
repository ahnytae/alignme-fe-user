## AI운동자세 User APP(Alignme) V2 - Frontend

---

### 소개

Pose Detection API 와 자체 개발한 두 자세간 유사성 비교 모듈을 활용하여 사용자의 운동 자세가 강사의 모범 운동자세와 같은지 피드백을 제공합니다.

**_V2 버전에서는 모바일 디바이스에 중점을 두기 위해 기존 React-router-dom 방식에서 [Stackflow](https://stackflow.so/ko/docs/get-started/introduction) 도입._**

<div float="left">
<img src="https://github.com/user-attachments/assets/5f65a047-ed36-4bda-8afc-ac3c52d75f16" width="180" height="250" alt="left"> 
<img src="https://github.com/user-attachments/assets/5e253e55-9e19-43a3-ae44-2db54525ca0f" width="180" height="250" alt="right">
<img src="https://github.com/user-attachments/assets/2da4e961-9489-4a53-80d9-cb61e352b968" width="180" height="250" alt="right"> 
<img src="https://github.com/user-attachments/assets/8f5e4eef-1c6a-4a70-bac0-64f8d1987c72" width="180" height="250" alt="right"> 
</div>
<div float="left">
<img src="https://github.com/user-attachments/assets/1175f0e5-5456-4c42-9613-27da44d6ae74" width="180" height="250" alt="right">
<img src="https://github.com/user-attachments/assets/eb9fca03-3fba-4547-8968-fd647ac4eecd" width="180" height="250" alt="right"> 
<img src="https://github.com/user-attachments/assets/1f7fca9a-9196-49ec-bbe6-25cacee65723" width="180" height="250" alt="right">
<img src="https://github.com/user-attachments/assets/c1ab9897-2f12-475e-a9fd-a4dfd96a6c15" width="180" height="250" alt="right">
</div>
<div float="left">
<img src="https://github.com/user-attachments/assets/4dbc3c32-e920-4427-b0f8-709276a3b412" width="400" height="200" alt="right">
<img src="https://github.com/user-attachments/assets/9c72900f-2d71-4742-b8e1-96979c3b205b" width="400" height="200" alt="right">
</div>

---

### 서비스 구조

![Image](https://github.com/user-attachments/assets/0122178b-7c2d-4197-8d54-a2d8187148d2)

- Alignme Core API는 Private NPM에 배포 되어 각 프론트엔드에 API 형태로 연동 중.
- Alignme Core API는 Pose Detaection API를 사용하여 데이터 추출 후 자체 알고리즘으로 자세 유사성 비교.

---

### 인프라

- ### Frontend

  - **Hosting**: AWS S3
  - **Framework**: React.js
  - **Distribution**: CloudFront CDN

  ### Backend

  - **Hosting**: AWS EC2
  - **Framework**: Nest.js

  ### Database

  - **Service**: AWS RDS
  - **Type**: PostgreSQL, TypeORM
  - **Tool**: DBeaver

  ### Network & Security

  - **DNS Management**: Route 53
  - **Domain Management**: Route 53
  - **SSL Certificate**: AWS Certificate Manager

---

### 기능

- PWA 방식으로 앱 설치 / 웹뷰 이용 가능
- Stackflow 프레임워크 적용으로 자연스러운 화면 이동, 뒤로가기 제어 등 모바일 중심의 서비스
- JWT, 카카오 Oauth
- 회원 가입시 레슨장 선택 및 강사 선택 기능
- 가입승인 받을 시 서비스 이용 가능
- 운동 화면에서 사용자 모바일 강제 가로모드 체크 및 유도
- 강사의 운동컨텐츠 데이터를 API로 부터 받아와 온디바이스 형태로 AI 운동피드백 제공
- 자세분석 Core 모듈 연동과 requestanimationframe을 사용해 매 프레임마다 자세 분석 시각화

---
