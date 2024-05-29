import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const data = defineStore('data', {
  state: () => ({
    data:[]
  }),
  actions: {
    async getData(){
        const value = await axios.get('/api/ExamAPI/examdata')
        this.data = value.data
        console.log(this.data)
    },
  },
  getters: {
  }
})
