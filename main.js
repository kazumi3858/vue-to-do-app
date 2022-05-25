/* global Vue, localStorage */

const App = {
  data () {
    return {
      contents: [],
      newContent: null,
      editingIndex: null
    }
  },
  created () {
    if (localStorage.length > 0) {
      try {
        this.contents = JSON.parse(localStorage.getItem('contents'))
      } catch (e) {
        localStorage.removeItem('contents')
      }
    }
  },
  methods: {
    addContent () {
      if (!this.newContent) {
        return
      }
      const content = { text: this.newContent }
      this.contents.push(content)
      this.newContent = ''
      this.saveContents()
    },
    removeContent (index) {
      this.contents.splice(index, 1)
      this.saveContents()
    },
    saveContents () {
      const jsonContents = JSON.stringify(this.contents)
      localStorage.setItem('contents', jsonContents)
    },
    updateContents () {
      this.saveContents()
      this.editingIndex = null
    }
  }
}

Vue.createApp(App).mount('#app')
