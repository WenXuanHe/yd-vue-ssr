<template>
  <div class="counter-bem counter-bem--init">
    <button class="ounter-bem__btn" @click='increment'>Increment +1</button>
    <button class="ounter-bem__btn" @click='decrement'>Decrement -1</button>
<!--     <button  class="ounter-bem__btn" @click='test'>测试hot reload</button> -->
    <h3>Count is {{ count }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    test () {
      alert(123);
    },
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
}
</script>

<style>
.counter-bem{
    border: 1px solid #efefef;
    -moz-border-radius: 0 0 120px 120px / 0 0 6px 6px;
    border-radius: 0 0 120px 120px / 0 0 6px 6px;
}
.ounter-bem__btn{
  display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
        color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.counter-bem--init{
position: relative;
    float: left;
    width: 40%;
    padding: 1em;
    margin: 2em 10px 4em;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
</style>