<template>
  <div>
    <button @click="increment">Cantidad de clicks: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count += 1
    }
  }
}
</script>
