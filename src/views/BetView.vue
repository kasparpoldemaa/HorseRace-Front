<template>
  <div>
    <div v-if="showSelection">
    <br>
    <br>
    <h3>Start betting now!</h3>
    <br>
    <div class="selection">
      <label for="exampleFormControlSelect1">
        Choose a race to make a bet
      </label>

      <select class="form-control"
              id="exampleFormControlSelect1"
              v-model="raceId" @change="findRaceHorses(raceId)">
        <option selected
                v-for="race in races"
                :value="race.id">
          {{ race.raceDate }} | {{ race.raceTime }} | {{ race.racePlace }}
        </option>
      </select>
    </div>
      <br>
    <br>
    <div v-if="raceId>0">
      <div class="selection">
        <label for="exampleFormControlSelect1">
          Choose a competing horse
        </label>
        <select class="form-control"

                v-model="horseId">
          <option selected
                  v-for="raceHorse in raceHorses"
                  :value="raceHorse.id">
            {{ raceHorse.horseName }} | {{ raceHorse.horseColor }}
          </option>
        </select>
      </div>
    </div>
    <br>
    <div v-if="horseId>0">
      <button type="button" class="btn btn-success btn-lg" v-on:click="decideWinner(raceId)">Make a Bet</button>
    </div>
    </div>

<div v-if="displayResult">
    <div v-if="winnerHorse.id === horseId" class="alert alert-success" role="alert">
      <h3>

        {{ 'Congrats you won! Horse ' + winnerHorse.horseName + ' came first!'}}
      </h3>

    </div>
    <div v-else class="alert alert-danger" role="alert">

      <h3>You Lost :(</h3>
      <h3> {{'Winner horse was: ' + winnerHorse.horseName }}</h3>
    </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "BetView",

  data: function () {
    return {
      request: {},
      races: {},
      raceHorses: {},
      divTableDisplay: false,
      raceId: 0,
      horseId: 0,
      winnerHorse: {},
      displayResult: false,
      showSelection: true


    }

  },
  methods: {


    getRacesWithoutResult: function () {
      this.$http.get("/race/ongoing")
          .then(response => {
            this.races = response.data
          }).catch(error => {
        console.log(error)
      })
    },
    findRaceHorses: function (raceId) {
      this.$http.get("/race-horse/id", {
            params: {
              raceId: raceId
            }
          }
      )
          .then(response => {
            this.raceHorses = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    decideWinner: function (raceId) {
      this.$http.get("/bet/winner", {
        params: {
          raceId: raceId
        }
      })
          .then(response => {
            this.showSelection = false
            this.displayResult = true
            this.winnerHorse = response.data
          }).catch(error => {
        alert(error.response.data.detail)
        console.log(error.response.data)
      })
    }


  },
  mounted() {
    this.getRacesWithoutResult()

  }
}
</script>

<style scoped>
.form-control {
  width: auto;
  justify-content: center;
}
body {
  text-align: center;
}

form {
  display: inline-block;
}

.selection {
  display: inline-block;
}
</style>