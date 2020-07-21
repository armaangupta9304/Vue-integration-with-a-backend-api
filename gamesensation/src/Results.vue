<template>
  <div class="container">
    <div v-if="loading" class="loading-div">
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="error" class="error-class">error 😢 : {{ error }}</div>

    <div class="row" v-if="playerStatus">
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-image">
            <img :src="playerStatus.legends.selected.ImgAssets.icon" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ playerStatus.global.name }}</span>
            <p>
              Legend Name:
              <strong> {{ playerStatus.legends.selected.LegendName }} </strong>
            </p>
            <p>
              Level: <strong>{{ playerStatus.global.level }} </strong> <br />

              <img
                :src="playerStatus.global.rank.rankImg"
                alt=""
                style="width: 30px"
              />
              Rank: <strong>{{ playerStatus.global.rank.rankName }}</strong>
            </p>
            <h6 v-for="(wins, i) in playerStatus.total" :key="i">
              {{ wins.name }}: <strong> {{ wins.value }} </strong>
            </h6>
          </div>
        </div>
      </div>
      <div id="chartDiv" class="" style="width: 300px; height: 300px;"></div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Results",
  data() {
    return {
      loading: false,
      playerStatus: null,
      error: null
    };
  },
  methods: {
    initChart: function() {}
  },
  async created() {
    try {
      this.loading = true;
      const response = await axios.get(
        `http://localhost:3000/api/v1/apex/${this.$route.params.platform}/${this.$route.params.playerid}`
      );
      this.playerStatus = response.data;
      var wins = [];
      //total.wins_season_5.name

      Object.keys(response.data.total).forEach(function(elem) {
        wins.push({
          x: response.data.total[elem].name,
          y: response.data.total[elem].value
        });
      });

      console.log(this.playerStatus.total);
      JSC.Chart("chartDiv", {
        type: "horizontal column",
        series: [
          {
            points: wins
          }
        ]
      });

      console.log(response.data);
      console.log(this.playerStatus);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err;
      this.$toasted.show(`An Error Occured: ${err}`, {
        duration: 3000,
        icon: "exclamation-circle"
      });
      console.log(err);
    }
  }
};
</script>

<style>
.loading-div {
  margin: 80px;
}

</style>
