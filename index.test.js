import { mount } from '@vue/test-utils';
import MushroomFinder from 'pages/index.vue';


describe('MushroomFinder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MushroomFinder);
  });

  it('should filter based on selected tags', () => {
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ];

    // Select a tag
    wrapper.vm.selectedTags = ['edible'];
    
    // Trigger filterByTags method
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms);
   
    // Check if filtered mushrooms match the selected tag
    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].common_names).toBe('Mushroom 1');
    expect(filteredMushrooms[1].common_names).toBe('Mushroom 3');
  })

  it('should display all mushrooms when no tags are selected', () => {
    const mockMushrooms = [
      { id: 1, common_names: 'Mushroom 1', tags: ['edible'] },
      { id: 2, common_names: 'Mushroom 2', tags: ['poisonous'] },
      { id: 3, common_names: 'Mushroom 3', tags: ['edible'] },
    ];

    // Select a tag
    wrapper.vm.selectedTags = [];
    
    // Trigger filterByTags method
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms);
    
    // Check if filtered mushrooms match the selected tag
    expect(filteredMushrooms).toHaveLength(3);
    expect(filteredMushrooms[0].common_names).toBe('Mushroom 1');
    expect(filteredMushrooms[1].common_names).toBe('Mushroom 2');
    expect(filteredMushrooms[2].common_names).toBe('Mushroom 3');
  })

  it('should filter based on common name', () => {
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
    ];

    // Set search inputs
    wrapper.vm.nameSearch = 'Shaggy';

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms);

    // Check if mushrooms are filtered based on name provided
    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].common_names).toBe('Shaggy Mane');
  })

  it('should filter based on latin name', () => {
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
    ];

    // Set search inputs
    wrapper.vm.nameSearch = 'Amanita';

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms);

    // Check if mushrooms are filtered based on latin name
    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].latin_names).toBe('Amanita muscaria');
  })

  it('should display all when no name is provided', () => {
    const mockMushrooms = [
      {
        id: 1,
        tags: ['edible'],
        common_names: 'Shaggy Mane',
        latin_names: 'Coprinus comatus',
      },
      {
        id: 2,
        common_names: 'Fly Agaric',
        latin_names: 'Amanita muscaria',
      }
    ];

    // Set search inputs
    wrapper.vm.nameSearch = "";

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms);

    // Check all mushrooms are displayed
    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should display all if no range value is provided', () => {
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
    ];

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms);

    // Check all mushrooms are displayed
    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should filter based on stipe features range', () => {
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
    ];

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '5', 'stipe_features.diameter_min', 'stipe_features.diameter_max');

    // Check mushrooms are filtered based on given range
    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(2);
  })

  it('should display none found within stipe features range', () => {
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
    ];

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '9', 'stipe_features.diameter_min', 'stipe_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should filter based on cap features range', () => {
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
    ];

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '3', 'cap_features.diameter_min', 'cap_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(2);
  })

  it('should display none found within cap features range', () => {
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
    ];

    // Trigger filterByRange method
    const filteredMushrooms = wrapper.vm.filterByRange(mockMushrooms, '9', 'cap_features.diameter_min', 'cap_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should display all if no stipe colour is provided', () => {
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
    ];

    // Set search inputs
    wrapper.vm.stipeColour = "";

    // Trigger filterByStipeColour method
    const filteredMushrooms = wrapper.vm.filterByStipeColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(3);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
    expect(filteredMushrooms[2].id).toBe(3);
  })

  it('should filter based on stipe colour', () => {
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
    ];

    // Set search inputs
    wrapper.vm.stipeColour = 'White';

    // Trigger filterByStipeColour method
    const filteredMushrooms = wrapper.vm.filterByStipeColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should display none found with stipe colour provided', () => {
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
    ];

    // Set search inputs
    wrapper.vm.stipeColour = 'Yellow';

    // Trigger filterByStipeColour method
    const filteredMushrooms = wrapper.vm.filterByStipeColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should display all if no cap colour is provided', () => {
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
    ];

    // Set search inputs
    wrapper.vm.capColour = "";

    // Trigger filterByCapColour method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(3);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
    expect(filteredMushrooms[2].id).toBe(3);
  })

  it('should filter based on cap colour', () => {
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
    ];

    // Set search inputs
    wrapper.vm.capColour = 'White';

    // Trigger filterByCapColour method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should display none found with cap colour provided', () => {
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
    ];

    // Set search inputs
    wrapper.vm.capColour = 'Yellow';

    // Trigger filterByCapColour method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(0);
  }) 


  // PUT FILTER BY MONTH HERE

  it('should return correct integer for the given month', () => {
    expect(wrapper.vm.monthToInt('january')).toBe(1);
    expect(wrapper.vm.monthToInt('february')).toBe(2);
    expect(wrapper.vm.monthToInt('march')).toBe(3);
    expect(wrapper.vm.monthToInt('april')).toBe(4);
    expect(wrapper.vm.monthToInt('may')).toBe(5);
    expect(wrapper.vm.monthToInt('june')).toBe(6);
    expect(wrapper.vm.monthToInt('july')).toBe(7);
    expect(wrapper.vm.monthToInt('August')).toBe(8);
    expect(wrapper.vm.monthToInt('september')).toBe(9);
    expect(wrapper.vm.monthToInt('october')).toBe(10);
    expect(wrapper.vm.monthToInt('november')).toBe(11);
    expect(wrapper.vm.monthToInt('december')).toBe(12);
  });

  it('should return undefined for an invalid month', () => {
    expect(wrapper.vm.monthToInt('invalid')).toBeUndefined();
  });


  it('should filter based on season', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Mushroom 1',
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      {
        id: 2,
        common_names: 'Mushroom 2',
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set search inputs
    wrapper.vm.seasonSearch = "Autumn";

    // Trigger filterBySeason method
    const filteredMushrooms = wrapper.vm.filterBySeason(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(1);
  })

  it('should filter based on month', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Mushroom 1',
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      {
        id: 2,
        common_names: 'Mushroom 2',
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set search inputs
    wrapper.vm.seasonSearch = "October";

    // Trigger filterBySeason method
    const filteredMushrooms = wrapper.vm.filterBySeason(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(1);
  })

  it('should filter based on month within range', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: 'Mushroom 1',
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      {
        id: 2,
        common_names: 'Mushroom 2',
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set search inputs
    wrapper.vm.seasonSearch = "April";

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterBySeason(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should apply all filters correctly', () => {
    wrapper.vm.mushrooms = [
      { 
        id: 1, 
        tags: ['edible'],
        common_name: 'Mushroom 1',
        latin_name: 'Mushroomus Maximus',
        stipe_features: {diameter_min: '1', diameter_max: '3', colour: ['Brown']}, 
        cap_features: {diameter_min: '1', diameter_max: '2', colour: ['Brown']},
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      { 
        id: 2, 
        tags: ['edible'],
        common_name: 'Fungus 1',
        latin_name: 'Fungus Fleshius',
        stipe_features: {diameter_min: '1', diameter_max: '3', colour: ['Yellow']}, 
        cap_features: {diameter_min: '1', diameter_max: '2', colour: ['Red']},
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      },
      { 
        id: 3, 
        tags: ['edible'],
        common_name: 'Mushroom 2',
        latin_name: 'Magicus',
        stipe_features: {diameter_min: '2', diameter_max: '5', colour: ['Brown']}, 
        cap_features: {diameter_min: '1', diameter_max: '2', colour: ['Green']},
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set inputs
    wrapper.vm.tags = ['edible'];
    wrapper.vm.common_name = 'Mushroom';
    wrapper.vm.stipeDiam = '2';
    wrapper.vm.stipeLen = '';
    wrapper.vm.stipeHgt = '';
    wrapper.vm.capDiam = '1';
    wrapper.vm.capThickness = '';
    wrapper.vm.stipeColour = 'Brown';
    wrapper.vm.capColour = '';
    wrapper.vm.seasonSearch = 'summer';

    // Trigger applyAllFilters method
    wrapper.vm.applyAllFilters();

    expect(wrapper.vm.filteredMushrooms).toHaveLength(1);
    expect(wrapper.vm.filteredMushrooms[0].common_name).toBe('Mushroom 2');
  });
})
