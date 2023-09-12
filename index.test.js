import { mount } from '@vue/test-utils';
import MushroomFinder from 'pages/index.vue';


describe('MushroomFinder', () => {
// Test for selected tags
  it('filters mushrooms based on selected tags', async () => {
    const wrapper = mount(MushroomFinder);

    // Mock some mushroom data
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ]

    // Select a tag
    wrapper.vm.selectedTags = ['edible'];
    
    // Trigger filterByTags method
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms)
   
    // Check if filtered mushrooms match the selected tag
    expect(filteredMushrooms).toHaveLength(2)
    expect(filteredMushrooms[0].common_names).toBe('Mushroom 1')
    expect(filteredMushrooms[1].common_names).toBe('Mushroom 3')
  })

// Test for no tags selected
  it('displays all mushrooms when no tags are selected', async () => {
    const wrapper = mount(MushroomFinder);

    // Mock some mushroom data
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ]

    // Select a tag
    wrapper.vm.selectedTags = [];
    
    // Trigger filterByTags method
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms)
    
    // Check if filtered mushrooms match the selected tag
    expect(filteredMushrooms).toHaveLength(3)
    expect(filteredMushrooms[0].common_names).toBe('Mushroom 1')
    expect(filteredMushrooms[1].common_names).toBe('Mushroom 2')
    expect(filteredMushrooms[2].common_names).toBe('Mushroom 3')
  })

// Test for common name provided
  it('filters mushrooms based on common name', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Shaggy Mane',
        latin_names: 'Coprinus comatus',
      },
      {
        id: 2,
        common_names: 'Fly Agaric',
        latin_names: 'Amanita muscaria',
      },
    ]

    wrapper.vm.mushrooms = mockMushrooms

    // Set search inputs
    wrapper.vm.nameSearch = 'Shaggy'

    // Trigger searchMushrooms method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    // Check if mushrooms are filtered based on search inputs
    expect(filteredMushrooms).toHaveLength(1)
    expect(filteredMushrooms[0].common_names).toBe('Shaggy Mane')
  })

  // Test for latin name provided
  it('filters mushrooms based on latin name', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Shaggy Mane',
        latin_names: 'Coprinus comatus',
      },
      {
        id: 2,
        common_names: 'Fly Agaric',
        latin_names: 'Amanita muscaria',
      },
    ]

    wrapper.vm.mushrooms = mockMushrooms

    // Set search inputs
    wrapper.vm.nameSearch = 'Amanita'

    // Trigger searchMushrooms method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    // Check if mushrooms are filtered based on search inputs
    expect(filteredMushrooms).toHaveLength(1)
    expect(filteredMushrooms[0].latin_names).toBe('Amanita muscaria')
  })

// Test for no name provided
  it('displays all mushrooms when no name is provided', async () => {
    const wrapper = mount(MushroomFinder)

    // Mock some mushroom data
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Shaggy Mane',
        latin_names: 'Coprinus comatus',
      },
      {
        id: 2,
        common_names: 'Fly Agaric',
        latin_names: 'Amanita muscaria',
      },
    ]

    wrapper.vm.mushrooms = mockMushrooms

    // Set search inputs
    wrapper.vm.nameSearch = ""

    // Trigger searchMushrooms method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    // Check if mushrooms are filtered based on search inputs
    expect(filteredMushrooms).toHaveLength(2)
    expect(filteredMushrooms[0].id).toBe(1)
    expect(filteredMushrooms[1].id).toBe(2)
  })
})
