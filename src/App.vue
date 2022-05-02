<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <router-link to="/">
        <a class="navbar-brand"
           href="#"><img
            class="ui-icon"
            :src="require('@/assets/horse.png')"
            to="/home"
            tag="img">HorseBet</a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </router-link>
      <div class="collapse navbar-collapse"
           id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <router-link to="/bet">
            <a class="nav-item nav-link active"
               href="#">Place a bet
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/race">
            <a class="nav-item nav-link active"
               href="#">Create new race
              <span class="sr-only">(current)
              </span>
            </a>
          </router-link>
          <router-link to="/results">
            <a class="nav-item nav-link active"
               href="#">View results
              <span class="sr-only">(current)
              </span>
            </a>
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-nav {
  text-align: center;
}

.ui-icon {
  width: 3vw;
  height: auto;
}

</style>
