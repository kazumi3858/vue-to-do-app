const App = {
  data () {
    return {
      contents: [],
      newContent: null
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
      // 実際に何かしたことを入力する
      if (!this.newContent) {
        return
      }
      this.contents.push(this.newContent)
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
    editContent () {
      
    }
  }
}

Vue.createApp(App).mount('#app')
