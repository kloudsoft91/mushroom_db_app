import { mount } from '@vue/test-utils';
import MushroomFinder from 'pages/index.vue';

describe('MushroomFinder', () => {
  it('filters mushrooms based on selected tags', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock mushroom data
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ]
    wrapper.vm.mushrooms = mockMushrooms
    await wrapper.vm.$nextTick()

    // Select a tag
    wrapper.vm.selectedTags = ['edible']
    await wrapper.vm.$nextTick()

    // Trigger filterMushrooms method
    wrapper.vm.filterMushrooms()

    // Check if filtered mushrooms match the selected tag
    expect(wrapper.vm.filteredMushrooms).toHaveLength(2)
    expect(wrapper.vm.filteredMushrooms[0].common_names).toBe('Mushroom 1')
    expect(wrapper.vm.filteredMushrooms[1].common_names).toBe('Mushroom 3')
  })

  // You can add more test cases for different scenarios
})

