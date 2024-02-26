import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('counter', () => {
  const isModalShown = ref(false)
  function toggleAuthModal() {
    isModalShown.value = !isModalShown.value
  }
  return { isModalShown, toggleAuthModal }
})
