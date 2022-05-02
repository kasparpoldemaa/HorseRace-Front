<template>
  <div class="home">
    <br>
    <br>
    <img class="horse-icon" alt="horse-icon" src='@/assets/horse.png'/>
    <br>
    <br>

    <h3>Welcome to the world's best horse race betting site!</h3>
    <h3>Accepting bets 24/7!</h3>
    <br>
    <p class="text-center">

    To start betting click on "Place a bet" page in the navigation bar.

    </p>



    <footer class="bottom"><a href="https://www.flaticon.com/free-icons/horse" title="horse icons">Horse icons created by Kalashnyk - Flaticon</a> </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}


</script>
<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
}
.horse-icon {
  width: 10vw;
  height: auto;
}

</style>