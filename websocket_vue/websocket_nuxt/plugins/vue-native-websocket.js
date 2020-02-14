import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'ws://15.164.96.121:8000', { //서버의 IP주소와 port기입
    connectManually: true,
})