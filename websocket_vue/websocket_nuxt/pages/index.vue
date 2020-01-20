<template>
  <div id="Home">
    <div class="header">
    </div>
    <div class="container">
      <div class="sampleUI">
        <div class="graphControl" style="color:white; font-size: 30px; margin: 0px 0px 50px;">
          <button class="simpleButton" v-on:click="connect" style="background-color:blue; margin: 0px 20px 0px;">Connect</button>
          <button class="simpleButton" v-on:click="disconnect" style="background-color:red; margin: 0px 20px 0px;">Disconnect</button>
          <button class="simpleButton" v-on:click="start" style="background-color:green; margin: 0px 20px 0px;">Start</button>
        </div>
        <div class="graphContainer" style="">
          <div class="graph">
            <div>
              <p style="font-size: 30px;">
                recvnum: {{recvnum}}
              </p>
            </div>
            <div>
              <line-chart v-if="dataChanged" :chart-data="datacollection" :options="chartOptions"></line-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LineChart from '@/components/LineChart'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      recvnum: 0,
      currentNumber: 0,
      dataChanged: true,
      datacollection: {
        //Data to be represented on x-axis
        labels: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'], 
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'green',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [4, 2, 3, 5, 9, 1, 2, 4, 5, 7]
          }
        ]
      },
      chartOptions: {
        tooltips: {
            mode: 'point'
        },
        animation: {
          duration: 0
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },  

  updated() {
    //console.log("updated!");
    this.dataChanged = true;
  },

  methods: {


    messageReceived: function(data){
      //console.log("messageReceived: " + data);
      //console.log(this.datacollection.datasets[0].data);
      this.recvnum = data;
      var push = this.datacollection.datasets[0].data.push(this.recvnum);
      //console.log("push: " + push);
      var shift = this.datacollection.datasets[0].data.shift();
      //console.log("shift: " + shift);
      //console.log("data[]: "+this.datacollection.datasets[0].data);
      this.recvnum = data;
      this.dataChanged = false;
    },

    connect: function() {
      this.$connect();
      this.$options.sockets.onmessage = (data) => (this.messageReceived(data.data));
      //console.
      //this.$options.sockets.onmessage = (data) => this.messageReceived(data); //웹소켓 리스너
    },
    
    disconnect: function() {
      //delete this.$options.sockets.onmessage;
      this.$disconnect();
    },

    start: function() {
      var sendData = "start"
      this.$socket.send(sendData);
    },

    next: function() {

    }
  },
}
</script>

<style>
#Home {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.sampleUI{
  margin: 40px 0px 0px;
  font-size: 50px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}

.simpleButton {
  border-radius:10px;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 5px;
}

.log {
  margin: 0px 20px 0px;
  width: 30%;
  border-radius:10px;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 5px;
}

.graph {
  margin: 0px 20px 0px;
  width: 90%;
  border-radius:10px;
  box-shadow: 1px 1px 1px 1px gray;
  padding: 30px 20px 20px;
}
</style>