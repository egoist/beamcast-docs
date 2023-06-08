<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  loop: {
    type: Boolean,
  },
})
</script>

<template>
  <video class="video-player" :src="src" :loop="loop" controls></video>
</template>

<style scoped>
.video-player {
  width: 100%;
}
</style>
