/* global Vue, localStorage */

const App = {
  data () {
    return {
      contents: [],
      newContent: null,
      editMode: false
    }
  },
  mounted () {
    if (localStorage.getItem('contents')) {
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
      const content = { text: this.newContent, editAction: false }
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
    changeEditMode (index) {
      this.contents[index].editMode = !this.contents[index].editMode
    },
    saveUpdatedContents (index) {
      this.changeEditMode(index)
      this.saveContents()
    }
  }
}

Vue.createApp(App).mount('#app')
