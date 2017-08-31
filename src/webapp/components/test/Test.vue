<style src="./Test.css"></style>
<template>
  <div class="test">
  Test Comoents
  </div>
</template>

<script>
export default {
  mounted () {
    import("./Test.js").then(function(res) {
      res.default();
    });
  }
}
</script>
