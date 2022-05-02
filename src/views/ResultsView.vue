<template>
  <div>
    <br>
    <br>
    <div class="selection">
      <label for="exampleFormControlSelect1">
        Select a race to see the winner
      </label>
      <select class="form-control"
              id="exampleFormControlSelect1"
              v-model="raceId" @change="getWinningHorse(raceId)">
        <option selected
                v-for="race in races"
                :value="race.id">
          {{ race.raceDate }} | {{ race.raceTime }} | {{ race.racePlace }}
        </option>
      </select>
    </div>
    <br>
    <br>
    <div v-if="showResult">
    <h3 class="result">{{'The winning horse was: ' + horseName + ' ('+horseColor+')'}}</h3>
    </div>


  </div>
</template>

<script>
export default {
  name: "ResultsView",

  data: function () {
    return {
      races: {},
      raceId: 0,
      result: {},
      horseName: '',
      horseColor: '',
      showResult: false


    }

  },
  methods: {
    getRacesWithResult: function () {
      this.$http.get("/race/finished")
          .then(response => {
            this.races = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    getWinningHorse: function (raceId) {
      this.$http.get("/result/id", {
        params: {
          raceId: raceId
        }
      })
          .then(response => {
            this.showResult = true
            this.horseName = response.data.horseName
            this.horseColor = response.data.horseColor
          }).catch(error => {
        console.log(error)
      })
    }

  },
  mounted() {
    this.getRacesWithResult()

  }
}
</script>

<style scoped>
body {
  text-align: center;
}

form {
  display: inline-block;
}

.selection {
  display: inline-block;
}
.result{
  color: green;
}
</style>