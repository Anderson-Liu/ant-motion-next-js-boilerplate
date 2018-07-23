import React from 'react';


const subsetItem = [
    { children: 'ea molestias quasi exercitationem', className: 'example-cn-name' },
    {
        children: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus ',
        className: 'example-en-name',
    },
    {
        children: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur',
        className: 'example-en-name',
    },
    {
        children: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus ",
        className: 'example-en-name',
    },
];

let items = [];
for (let i=0; i<4; i++) {
    items = items.concat(subsetItem);
}

export const exampleData = [
  {
    className: 'example-wrap',
    children: [{ children: 'Title', className: 'example-cn-title' }].concat(items),
  },
];

export const data = [{
  title: 'qui est esse',
  subTitle: 'sint nihil reprehenderit dolor',
    id: 'title_1_id',
    key: 'title_1_key',
},
{
  id: 'title_2_id',
  key: 'title_2_id',
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  subTitle: 'suscipit recusandae consequuntur expedita',
},
];
