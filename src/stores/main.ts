import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
	state: () => {
		return {
			menuToggleState: JSON.parse(localStorage.getItem('menuToggleState') || 'false')
		}
	},
	getters: {},
	actions: {
		setMenuToggleState() {
			this.menuToggleState = !this.menuToggleState
			localStorage.setItem("menuToggleState", JSON.stringify(this.menuToggleState));
		}
	},
})
