# [node <-> vue] websocket example
소켓을 활용한 네트워크 프로그래밍(2020.01.13 - 2020.01.20)

## 0. Results
![second_vue](https://user-images.githubusercontent.com/46476398/72707916-ec19a380-3ba4-11ea-97c2-ebc13daedd95.PNG)
>node에서 비동기로 보내주는 난수들을 실시간으로 보여주는 Vue 구현 

## 1. Directory description

### 1.1 /websocket_node
    <required to>
    $npm init
    $npm install websocket
    (8000번 포트 사용)

### 1.2 /websocket_vue
    <required to>
    1. npm install -g @vue/cli @vue/cli-init
    2. vue init nuxt-community/starter-template vue_nuxt_study
    3. cd vue_nuxt_study
    4. npm install --save nuxt
    5. npm install vue-native-websocket
    6. npm install chart.js vue-chartjs
    (3000번 포트 사용)

### 1.3 /node-vue(websocket).pptx
    간단한 코드 설명이 들어있는 개발 문서
    
## 2. Websocket vs. HTTP communication
![websocket_http](https://coconauts.net/images/posts/2017-11-20-websocket-vs-rest/protocols.png)

>동기와 비동기 통신의 차이로 인해 속도를 최적화할 수 있는 장점이 있다.


## 3. Contact
    e-mail: peterhyun1234@gmail.com
