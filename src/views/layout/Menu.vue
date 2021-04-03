<template>
   <CSidebar 
    :minimize="minimize"
    unfoldable
    :show="show">
    <CSidebarBrand to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        src="logoGestion.png"
        size="custom-size"
        :height="80" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        src="logoGestion.jpg"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>
     <CRenderFunction flat :contentToRender="siderbarItems"/>
    <CSidebarMinimizer 
      class="c-d-md-down-none" 
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    />
  </CSidebar>
</template>

<script>
import siderbarItems from './opcionesMenu'
export default {
   extends: siderbarItems,
computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>

<style>

</style>