<template>
 <div class="c-app" :class="{ 'c-dark-theme': $store.state.darkMode }">
   <Menu/>
    <CWrapper>
      <Header/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view ></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
 </div>
</template>

<script>
import Header from './Header'
import Menu from './Menu'

export default {
   components:{
       Header,
       Menu
   }
}
</script>

<style>

</style>