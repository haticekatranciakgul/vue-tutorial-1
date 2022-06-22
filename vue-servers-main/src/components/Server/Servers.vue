<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="index in 5">
        Sunucu #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
  div {
    border : 2px dashed red;
  }
</style>
