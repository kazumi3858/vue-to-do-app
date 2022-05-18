import Vue from 'vue'

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
      console.log('1')
      if (!this.newContent) {
        return
      }
      const content = { text: this.newContent, editAction: false }
      this.contents.push(content)
      this.newContent = ''
      this.saveContents()
    },
    removeContent (index) {
      console.log('2')
      this.contents.splice(index, 1)
      this.saveContents()
    },
    saveContents () {
      console.log('3')
      const jsonContents = JSON.stringify(this.contents)
      localStorage.setItem('contents', jsonContents)
    },
    changeEditMode (index) {
      console.log('4')
      this.contents[index].editMode = !this.contents[index].editMode
    },
    saveUpdatedContents (index) {
      console.log('5')
      this.changeEditMode(index)
      this.saveContents()
    }
  },
  computed: {

  }
}

Vue.createApp(App).mount('#app')
