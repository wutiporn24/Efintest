<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="text-decoration-none" ><a class="nav-link ">Navbar</a></router-link>
        <ul class="navbar-nav" >
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none"> <a class="nav-link ">Menu1</a> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu2" class="text-decoration-none"> <a class="nav-link">Menu2</a> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu3" class="text-decoration-none"> <a class="nav-link">Menu3</a> </router-link>
          </li>
        </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
