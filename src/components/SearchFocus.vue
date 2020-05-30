<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.handler = event => {
      this.$emit('keyup', event)
    }
    try{
        window.addEventListener('keyup', this.handler);
        window.aax_size='728x90';
        window.aax_pubname = '1123071-21';
        window.aax_src='302';
        // if(!window.adsbygoogle || !adsbygoogle.loaded){
           // var script = document.createElement('script');
           // script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
           // script.setAttribute('data-ad-client', "ca-pub-4820190408774040");
           // document.head.appendChild(script);
        // }
    } catch(e) {
        console.log("Exception on loading google ads");
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handler)
  }
}
</script>

<style scoped>
  div {
    display: none;
  }
</style>
