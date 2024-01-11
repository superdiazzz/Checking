<template>
  
  <router-view/>
  
</template>
<script>
import { computed } from 'vue'
 


export default {
  components: {
  },
  setup() {




    return {
    }
  },
}
</script>

<style>


#app {
  font-family: Rubik, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}


.fixed-notif{
  position: fixed;
  z-index: 30;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  pointer-events: none;
  padding: 1.5rem;
  align-items: flex-start;
  justify-content: flex-end;
}

.width-notif{
  max-width: 24rem;
  width: 100%;
}


/* TOAST */
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 80px;
  z-index: 10;
}
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}

.toast-success{
  padding: 20px;
  color: white;
  background: #09ed02;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}

.toast-warn{
  padding: 20px;
  color: white;
  background: #fff203;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}

.toast-original{
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}

.toast-enter-from {
    opacity: 0;
    transform: translateY(-100px);
}
.toast-enter-to{
    opacity: 1;
    transform: translateY(0);
}

.toast-enter-active{
    transition: all 0.3s ease;

}

.toast-leave-from{
    opacity: 1;
    transform: translateY(0);
}

.toast-leave-to{
    opacity: 0;
    transform: translateY(-100px);

}

.toast-leave-active{
    transition: all 0.3s ease;
}


/* TRANSITION INNER-OUTTER */
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

</style>

<style scoped>

.section{
  flex: 1;
  position: relative;
  padding: 1.5rem 1.5rem;
}

.section img{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  transform: rotateZ(8deg);
  z-index: -1;
}


/* modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
