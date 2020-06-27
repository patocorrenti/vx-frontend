import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Text from '@/components/scenarios/Text.vue'

describe('scenarios/Text.vue', () => {
  
  const line = {
    text_type: 'sfx',
    type_description: 'User SFX',
    content: 'Lorem ipsum'
  }
  const wrapper = shallowMount(Text, {
    propsData: { line },
  })
  
  it('Renders type description', () => {
    expect(wrapper.text()).to.include(line.type_description)
  })
  it('Renders content', () => {
    expect(wrapper.text()).to.include(line.content)
  })
  it('Applies type description as css class', () => {
    expect(wrapper.classes()).to.include(line.text_type);
  })

})
  