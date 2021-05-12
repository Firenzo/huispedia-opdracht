<template>
  <div id="app">
    <header>
      <div class="container">
        <router-link to="/">
          <img src="@/assets/logo.png" class="logo" alt="Huispedia logo"> 
        </router-link>
      </div>
    </header>

    <div class="progressBar">
      <div class="progress"></div>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/styles/main.scss';

header {
  border-bottom: 1px #E9ECF1 solid;
  background:white;
  height: 75px;

  div.container{
    width:90%;
    margin:auto;
    display:flex;

    img.logo{
      max-width:160px;
      margin-top:23px;
    }
  }
}

div.progressBar{
  height:5px;
  background: $secondary;
  width:100%;
  transition:width 0.4s ease;

  div.progress{
    height:100%;
    background: $primary;
    width:20%;
    transition:width 0.4s ease;
  }
}

.fade-enter{
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-to{
  opacity: 1;
  transform: translateX(0em);
}

.fade-enter-active{
  transition: all 0.4s ease;
}

.fade-leave{
  opacity: 1;
  transform: translateX(0em);
}

.fade-leave-to{
  opacity: 0;
  transform: translateX(-2em);

}

.fade-leave-active{
  transition: all 0.4s ease;
}

</style>
