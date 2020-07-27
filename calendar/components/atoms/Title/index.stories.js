import StoryComponent from './index.vue'

export default {
  title: 'atoms/Title',
}

export const normal = () => ({
  components: { StoryComponent },
  template: `<story-component>Title</story-component>`,
})
