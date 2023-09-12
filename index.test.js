import { mount } from '@vue/test-utils';
import MushroomFinder from 'pages/index.vue';


describe('MushroomFinder', () => {
  const wrapper = mount(MushroomFinder);

  it('filters mushrooms based on selected tags', async () => {
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

  it('displays all mushrooms when no tags are selected', async () => {
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

  it('filters mushrooms based on common name', async () => {
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
      }
    ]

    // Set search inputs
    wrapper.vm.nameSearch = 'Shaggy'

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    // Check if mushrooms are filtered based on name provided
    expect(filteredMushrooms).toHaveLength(1)
    expect(filteredMushrooms[0].common_names).toBe('Shaggy Mane')
  })

  it('filters mushrooms based on latin name', async () => {
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
      }
    ]

    // Set search inputs
    wrapper.vm.nameSearch = 'Amanita'

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(1)
    expect(filteredMushrooms[0].latin_names).toBe('Amanita muscaria')
  })

  it('displays all mushrooms when no name is provided', async () => {
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
      }
    ]

    // Set search inputs
    wrapper.vm.nameSearch = ""

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(2)
    expect(filteredMushrooms[0].id).toBe(1)
    expect(filteredMushrooms[1].id).toBe(2)
  })

// Test for range - ****DOES THIS APPLY TO CAP OR STIPE OR BOTH?? MAY NEED TO CHANGE THIS****
  it('filters mushrooms based on range', async () => {
    const mockMushrooms = [
      { 
        id: 1, 
        stipe_features: {diameter_min: '1', diameter_max: '3'}, 
        cap_features: {diameter_min: '1', diameter_max: '2'} 
      },
      { 
        id: 2, 
        stipe_features: {diameter_min: '4', diameter_max: '5'}, 
        cap_features: {diameter_min: '3', diameter_max: '4'} 
      }
    ]

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '5', 'stipe_features.diameter_min', 'stipe_features.diameter_max')

    expect(filteredMushrooms).toHaveLength(1)
    expect(filteredMushrooms[0].id).toBe(2)
  })

  it('displays no results found within range', async () => {
    const mockMushrooms = [
      {
        id: 1, 
        stipe_features: {diameter_min: '1', diameter_max: '3'}, 
        cap_features: {diameter_min: '1', diameter_max: '2'} 
      },
      { 
        id: 2, 
        stipe_features: {diameter_min: '4', diameter_max: '5'}, 
        cap_features: {diameter_min: '3', diameter_max: '4'} 
      }
    ]

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '9', 'stipe_features.diameter_min', 'stipe_features.diameter_max')

    expect(filteredMushrooms).toHaveLength(0)
  })

  it('filters mushrooms based on stipe colour', async () => {
    const mockMushrooms = [
      { 
        id: 1, 
        stipe_features: {colour: ['White']}, 
      },
      { 
        id: 2, 
        stipe_features: {colour: ['White', 'Brown']}, 
      },
      { 
        id: 3, 
        stipe_features: {colour: ['Red']} 
      }
    ]

    // Set search inputs
    wrapper.vm.stipeColour = 'White'

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByStipeColour(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(2)
    expect(filteredMushrooms[0].id).toBe(1)
    expect(filteredMushrooms[1].id).toBe(2)
  })

  it('displays no results found within range', async () => {
    const mockMushrooms = [
      { 
        id: 1, 
        stipe_features: {colour: ['White']}, 
      },
      { 
        id: 2, 
        stipe_features: {colour: ['White', 'Brown']}, 
      },
      { 
        id: 3, 
        stipe_features: {colour: ['Red']} 
      }
    ]

    // Set search inputs
    wrapper.vm.stipeColour = 'Yellow'

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByStipeColour(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(0)
  })

  it('filters mushrooms based on cap colour', async () => {
    const mockMushrooms = [
      { 
        id: 1, 
        cap_features: {colour: ['White']}, 
      },
      { 
        id: 2, 
        cap_features: {colour: ['White', 'Brown']}, 
      },
      { 
        id: 3, 
        cap_features: {colour: ['Red']} 
      }
    ]

    // Set search inputs
    wrapper.vm.capColour = 'White'

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(2)
    expect(filteredMushrooms[0].id).toBe(1)
    expect(filteredMushrooms[1].id).toBe(2)
  })

  it('displays no results found within range', async () => {
    const mockMushrooms = [
      { 
        id: 1, 
        cap_features: {colour: ['White']}, 
      },
      { 
        id: 2, 
        cap_features: {colour: ['White', 'Brown']}, 
      },
      { 
        id: 3, 
        cap_features: {colour: ['Red']} 
      }
    ]

    // Set search inputs
    wrapper.vm.capColour = 'Yellow'

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms)

    expect(filteredMushrooms).toHaveLength(0)
  })
  
})
