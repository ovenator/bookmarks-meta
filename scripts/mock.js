

exports.getNodes = async (config, {parentId}) => {
  
  return new Promise((res, rej) => {
    setTimeout(() => res(
      [
        {
          id: `${parentId}-1`,
          title: 'Mock 1',
          url: 'https://seznam.cz'
        },    
        {
          id: `${parentId}-2`,
          title: 'Mock 2',
          url: 'https://seznam.cz'
        },
        {
          id: `${parentId}-3`,
          title: 'Mock 3',
          url: 'https://seznam.cz'
        },
        {
          id: `${parentId}-4`,
          title: 'Mock 4',
          url: 'https://seznam.cz'
        },
      ]
    ), 1000);
  });
  
  
  return 
}
