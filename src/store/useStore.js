import { defineStore } from 'pinia'

import state from './moduleState'
import action from './moduleActions'

export const useStore = defineStore('test', {
  state: () => ( state ),
  actions: action,
})
