/* global Vue, localStorage */

const App = {
  data () {
    return {
      contents: [],
      newContent: null,
      editingIndex: null,
      editingContent: null
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
    setEditData (index) {
      this.editingIndex = index
      this.editingContent = this.contents[index].text
    },
    updateContents () {
      this.saveContents()
      this.editingIndex = null
    },
    cancelEditing (index) {
      this.editingIndex = null
      this.contents[index].text = this.editingContent
    }
  }
}

Vue.createApp(App).mount('#app')
