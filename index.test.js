import { mount } from '@vue/test-utils';
import MushroomFinder from 'pages/index.vue';

describe('MushroomFinder', () => {
  it('filters mushrooms based on selected tags', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
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

  it('displays all mushrooms when no tags are selected', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ]
    wrapper.vm.mushrooms = mockMushrooms
    await wrapper.vm.$nextTick()

    // No tags have been selected
    wrapper.vm.selectedTags = []
    await wrapper.vm.$nextTick()

    // Trigger filterMushrooms method
    wrapper.vm.filterMushrooms()

    // Check if all mushrooms are displayed
    expect(wrapper.vm.filteredMushrooms).toHaveLength(3)
    expect(wrapper.vm.filteredMushrooms[0].common_names).toBe('Mushroom 1')
    expect(wrapper.vm.filteredMushrooms[1].common_names).toBe('Mushroom 2')
    expect(wrapper.vm.filteredMushrooms[2].common_names).toBe('Mushroom 3')
  })

  it('filters mushrooms based on search inputs', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Edible Mushroom 1',
        latin_names: 'Latin Edible 1',
        cap_features: { diameter: 'Small', colour: 'Brown' },
        environment: 'Forest',
      },
      {
        id: 2,
        common_names: 'Poisonous Mushroom 2',
        latin_names: 'Latin Poisonous 2',
        cap_features: { diameter: 'Large', colour: 'Red' },
        environment: 'Garden',
      },
      {
        id: 3,
        common_names: 'Edible Mushroom 3',
        latin_names: 'Latin Edible 3',
        cap_features: { diameter: 'Medium', colour: 'White' },
        environment: 'Field',
      },
    ]
    wrapper.vm.mushrooms = mockMushrooms
    await wrapper.vm.$nextTick()

    // Set search inputs
    wrapper.vm.text = 'Edible'
    wrapper.vm.text2 = 'Small'
    wrapper.vm.text3 = 'Brown'
    wrapper.vm.text4 = 'Forest'
    await wrapper.vm.$nextTick()

    // Trigger searchMushrooms method
    wrapper.vm.searchMushrooms()

    // Check if mushrooms are filtered based on search inputs
    expect(wrapper.vm.filteredMushrooms).toHaveLength(1)
    expect(wrapper.vm.filteredMushrooms[0].common_names).toBe('Edible Mushroom 1')
  })
})