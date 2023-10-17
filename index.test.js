import { mount } from '@vue/test-utils';
import Index from 'pages/index.vue';


describe('Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Index);
    jest.mock('./assets/images/mushy.jpg', () => 'Photo by Egor Kamelev from Pexels: https://www.pexels.com/photo/brown-mushroom-on-ground-1685650/');

  });
  
  it('should filter based on one selected tag', () => {
    const mockMushrooms = [
      { id: 1, common_names: ['Mushroom 1'], tags: ['edible'] },
      { id: 2, common_names: ['Mushroom 2'], tags: ['poisonous'] },
      { id: 3, common_names: ['Mushroom 3'], tags: ['edible'] },
    ];

    wrapper.vm.selectedTag = 'edible';
    
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms);
    
    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(3);
  })

  
  it('should display all mushrooms when no tag is selected', () => {
    const mockMushrooms = [
      { id: 1, common_names: ['Mushroom 1'], tags: ['edible'] },
      { id: 2, common_names: ['Mushroom 2'], tags: ['poisonous'] },
      { id: 3, common_names: ['Mushroom 3'], tags: ['edible'] },
    ];

    wrapper.vm.selectedTag = '';
    
    const filteredMushrooms = wrapper.vm.filterByTags(mockMushrooms);
    
    expect(filteredMushrooms).toHaveLength(3);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
    expect(filteredMushrooms[2].id).toBe(3);
  })

  it('should filter based on common name', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: ['Shaggy Mane'],
        latin_names: ['Coprinus comatus'],
      },
      {
        id: 2,
        common_names: ['Fly Agaric'],
        latin_names: ['Amanita muscaria'],
      }
    ];

    wrapper.vm.searchInput = "shaggy";

    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms, wrapper.vm.searchInput);

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(1);
  })

  it('should filter based on latin name', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: ['Shaggy Mane'],
        latin_names: ['Coprinus comatus'],
      },
      {
        id: 2,
        common_names: ['Fly Agaric'],
        latin_names: ['Amanita muscaria'],
      }
    ];

    wrapper.vm.searchInput = 'Amanita';

    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms, wrapper.vm.searchInput);

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(2);
  })

  it('should display none if unexpected character in name', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: ['Shaggy Mane'],
        latin_names: ['Coprinus comatus'],
      },
      {
        id: 2,
        common_names: ['Fly Agaric'],
        latin_names: ['Amanita muscaria'],
      }
    ];

    wrapper.vm.searchInput = 'Aman*ita';

    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms, wrapper.vm.searchInput);

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should display all when no name is provided', () => {
    const mockMushrooms = [
      {
        id: 1,
        tags: ['edible'],
        common_names: ['Shaggy Mane'],
        latin_names: ['Coprinus comatus'],
      },
      {
        id: 2,
        common_names: ['Fly Agaric'],
        latin_names: ['Amanita muscaria'],
      }
    ];

    wrapper.vm.searchInput = "";

    const filteredMushrooms = wrapper.vm.filterByName(mockMushrooms, wrapper.vm.searchInput);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should filter mushrooms based on selected cap shape', () => {
    const mockMushrooms = [
      { id: 1, common_names: ['Mushroom 1'], cap_features: { shape: 'convex' } },
      { id: 2, common_names: ['Mushroom 2'], cap_features: { shape: 'flat' } },
      { id: 3, common_names: ['Mushroom 3'], cap_features: { shape: 'convex' } },
    ];
    
    wrapper.vm.selectedCapShape = 'convex';
   
    const filteredMushrooms = wrapper.vm.filterByCapShape(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(3);
  });

  it('should return all mushrooms when selected cap shape is null', () => {
    const mockMushrooms = [
      { id: 1, common_names: ['Mushroom 1'], cap_features: { shape: 'convex' } },
      { id: 2, common_names: ['Mushroom 2'], cap_features: { shape: 'flat' } },
      { id: 3, common_names: ['Mushroom 3'], cap_features: { shape: 'convex' } },
    ];


    wrapper.vm.selectedCapShape = null;

    const filteredMushrooms = wrapper.vm.filterByCapShape(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(3);
  });

  it('should display all if no size is provided', () => {
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

    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should filter based on size of stipe', () => {
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


    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms, '5', 'stipe_features.diameter_min', 'stipe_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(2);
  })

  it('should display none found with stipe size', () => {
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

    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms, '9', 'stipe_features.diameter_min', 'stipe_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should filter based on size of cap', () => {
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

    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms, '3', 'cap_features.diameter_min', 'cap_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(2);
  })

  it('should display none found within cap size', () => {
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

    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms, '9', 'cap_features.diameter_min', 'cap_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should display none if size has unexpected character', () => {
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

    const filteredMushrooms = wrapper.vm.filterBySize(mockMushrooms, '9*', 'cap_features.diameter_min', 'cap_features.diameter_max');

    expect(filteredMushrooms).toHaveLength(0);
  })

  it('should apply all filters correctly', () => {
    wrapper.vm.mushrooms = [
      { 
        id: 1, 
        tags: ['edible'],
        common_names: ['Mushroom 1'],
        latin_names: ['Mushroomus Maximus'],
        cap_features: {shape: 'flat'},
      },
      { 
        id: 2, 
        tags: ['edible'],
        common_names: ['Fungus 1'],
        latin_names: ['Fungus Fleshius'],
        cap_features: {shape: 'convex'},
      },
      { 
        id: 3, 
        tags: ['edible'],
        common_names: ['Mushroom 2'],
        latin_names: ['Magicus'],
        cap_features: {shape: 'convex'},
      }
    ];

    // Set inputs
    wrapper.vm.selectedTags = ['edible'];
    wrapper.vm.searchInput = 'Mushroom';
    wrapper.vm.selectedCapShape = 'convex';

    //create dummy HTML alert element for applyAllFilters alert reset line
    document.body.innerHTML =
    '<div>' +
    '  <span id="inputerror" />' +
    '</div>';

    // Trigger applyAllFilters method
    wrapper.vm.applyAllFilters();

    expect(wrapper.vm.filteredMushrooms).toHaveLength(1);
    expect(wrapper.vm.filteredMushrooms[0].id).toBe(3);
  }); 
  
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
    wrapper.vm.selectedStipeColour = "";

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
    wrapper.vm.selectedStipeColour = 'White';

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
    wrapper.vm.selectedStipeColour = 'Yellow';

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
    wrapper.vm.selectedCapColour = "";

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
    wrapper.vm.selectedCapColour = 'White';

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
    wrapper.vm.selectedCapColour = 'Yellow';

    // Trigger filterByCapColour method
    const filteredMushrooms = wrapper.vm.filterByCapColour(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(0);
  }) 

  it('should return correct integer for the given month', () => {
    expect(wrapper.vm.monthToInt('january')).toBe(1);
    expect(wrapper.vm.monthToInt('february')).toBe(2);
    expect(wrapper.vm.monthToInt('march')).toBe(3);
    expect(wrapper.vm.monthToInt('april')).toBe(4);
    expect(wrapper.vm.monthToInt('may')).toBe(5);
    expect(wrapper.vm.monthToInt('june')).toBe(6);
    expect(wrapper.vm.monthToInt('july')).toBe(7);
    expect(wrapper.vm.monthToInt('august')).toBe(8);
    expect(wrapper.vm.monthToInt('september')).toBe(9);
    expect(wrapper.vm.monthToInt('october')).toBe(10);
    expect(wrapper.vm.monthToInt('november')).toBe(11);
    expect(wrapper.vm.monthToInt('december')).toBe(12);
  });

  it('should return undefined for an invalid month', () => {
    expect(wrapper.vm.monthToInt('invalid')).toBeUndefined();
  });


  it('should filter based on month', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: ['Mushroom 1'],
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      {
        id: 2,
        common_names: ['Mushroom 2'],
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set search inputs
    wrapper.vm.selectedMonth = "October";

    // Trigger filterBySeason method
    const filteredMushrooms = wrapper.vm.filterByMonth(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(1);
    expect(filteredMushrooms[0].id).toBe(1);
  })

  it('should filter based on month within range', () => {
    const mockMushrooms = [
      {
        id: 1,
        common_names: ['Mushroom 1'],
        time_of_year: 'Late spring to autumn (October to April in the Southern Hemisphere)'
      },
      {
        id: 2,
        common_names: ['Mushroom 2'],
        time_of_year: 'Late summer (March to June in the Southern Hemisphere)'
      }
    ];

    // Set search inputs
    wrapper.vm.selectedMonth = "April";

    // Trigger filterByName method
    const filteredMushrooms = wrapper.vm.filterByMonth(mockMushrooms);

    expect(filteredMushrooms).toHaveLength(2);
    expect(filteredMushrooms[0].id).toBe(1);
    expect(filteredMushrooms[1].id).toBe(2);
  })

  it('should handle and store all incoming emit parameters', () => {
    const handledFunct = wrapper.vm.handleSearch("bolete");
    expect(handledFunct).toBe(["bolete"]);
    
    const handledFunct2 = wrapper.vm.handleTags("poisonous");
    expect(handledFunct2).toBe("poisonous");
    
    const handledFunct3 = wrapper.vm.handleCapShape("convex");
    expect(handledFunct3).toBe("convex");
    
    const handledFunct4 = wrapper.vm.handleGills("adnate");
    expect(handledFunct4).toBe("adnate");
    
    const handledFunct5 = wrapper.vm.handleEcology("saprotrophic");
    expect(handledFunct5).toBe("saprotrophic");
    
    const handledFunct6 = wrapper.vm.handleStipe("ring");
    expect(handledFunct6).toBe("ring");
    
    const handledFunct7 = wrapper.vm.handleStipeColour("red");
    expect(handledFunct7).toBe("red");
    
    const handledFunct8 = wrapper.vm.handleCapColour("white");
    expect(handledFunct8).toBe("white");
    
    const handledFunct9 = wrapper.vm.handleMonth("january");
    expect(handledFunct9).toBe("january");
  })


})