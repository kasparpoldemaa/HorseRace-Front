<template>
  <div>
    <div v-if="successMessage.length > 0" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <div class="form" v-if="divFormDisplay">

      <form>
        <div class="form-group ">
          <br>
          <label>Add location</label>
          <input type="text"
                 class="form-control"
                 placeholder="Name of city, stadium etc."
                 v-model="request.racePlace">
          <br>
          <label>Add date</label>
          <input type="date"
                 class="form-control"
                 placeholder="YYYY-MM-DD"
                 v-model="request.raceDate">
          <br>
          <label>Add time</label>
          <input type="time"
                 class="form-control"
                 placeholder="HH:MM"
                 v-model="request.raceTime">
        </div>
      </form>
      <br>
      <button type="button"
              class="btn btn-primary btn-lg"
              v-on:click="addNewRace()">
        Create new horse race
      </button>
    </div>


    <div class="addHorses" v-if="divTableDisplay">
      <h4>Here are available horses for a race</h4>
      <h6>You need to add at least 3 horses to create a race</h6>
      <br>


      <div class="row justify-content-center">
        <div class="col-auto">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Horse</th>
              <th scope="col">Color</th>
              <th scope="col">Add</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(horse, index) in horses">
              <td>{{ index + 1 }}</td>
              <td>{{ horse.horseName }}</td>
              <td>{{ horse.horseColor }}</td>
              <td>
                <button
                    v-model="horseId"
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click="setHorseId(horse.id)">
                  Add horse
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div v-if="horseCount<3">
            <button type="button"
                    class="btn btn-light btn-lg"
                    disabled>
              Let's start betting!
            </button>
          </div>
          <div v-if="horseCount >= 3">
            <button type="button"
                    class="btn btn-primary btn-lg"
                    v-on:click="navigateToBetView">
              Let's start betting!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RaceView",

  data: function () {
    return {
      horses: {},
      request: {},
      horseId: 0,
      raceId: 3,
      divFormDisplay: true,
      divTableDisplay: false,
      raceHorseRequest: {},
      successMessage: '',
      horse: {},
      horseCount: 0
    }
  },
  methods: {
    // toggleButtonState: function (button) {
    //
    //   //If button is enabled, -> Disable
    //   if (button.disabled === false) {
    //     button.disabled = true;
    //
    //     //If button is disabled, -> Enable
    //   } else if (button.disabled === true) {
    //     button.disabled = false;
    //   }
    // },
    getAllHorses: function () {
      this.$http.get("/horse/all")
          .then(response => {

            this.horses = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    addNewRace: function () {

      this.$http.post("/race/new", this.request
      ).then(response => {
        this.divFormDisplay = false
        this.divTableDisplay = true
        this.raceId = response.data.id
        console.log(response.data)
      }).catch(error => {

        console.log(error)
      })
    },
    setHorseId: function (horseId) {
      this.horseId = horseId
      this.addRaceHorse()
    },

    addRaceHorse: function () {
      let raceHorseRequest = {
        horseId: this.horseId,
        raceId: this.raceId

      }
      this.$http.post("/race-horse/add", raceHorseRequest
      ).then(response => {
        this.successMessage = 'Horse with ID: ' + response.data.horseId + ' has been added successfully'
        this.horseCount++
        console.log(response.data)
      }).catch(error => {
        alert(error.response.data.detail)
        console.log(error.response.data)
      })
    },
    navigateToBetView: function (raceId) {
      this.$router.push({name: 'bet', query: {id: raceId}})
    },

  },
  mounted() {
    this.getAllHorses()
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
.addButton{
  margin-left: 20px;

}
</style>