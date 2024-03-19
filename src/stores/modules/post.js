import axios from '@/api.js'

const PostModule = {
  namespaced: true,
  state() {
    return {
      posts: []
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    pushPosts(state, post) {
      state.posts.unshift(post)
    },
    pushComment(state, { postId, comment }) {
      const postIndex = state.posts.findIndex((post) => post.id == postId)
      if (postIndex != -1) {
        state.posts[postIndex].comments.unshift(comment)
      }
    }
  },
  actions: {
    async fetchPosts(context) {
      const res = await axios.get('/api/posts')
      context.commit('setPosts', res?.data.data)
    },
    async addPost(context, payload) {
      const res = await axios.post('/api/posts', payload)
      context.commit('pushPosts', res?.data.data)
      return res
    },
    async commentPost(context, payload) {
      const { postId, commentData } = payload
      const res = await axios.post(`/api/posts/${postId}/comment`, { body: commentData })
      context.commit('pushComment', { postId, comment: res.data })
      await context.dispatch('fetchPosts')
      return res
    }
  },
  getters: {
    posts: (state) => {
      return state.posts
    },
    postById: (state) => (id) => {
      return state.posts.find((post) => post.data.post_id == id)
    }
  }
}

export default PostModule
