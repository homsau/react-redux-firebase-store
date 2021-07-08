const INITIAL_STATE = {
    sections: [
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 1,
          linkUrl: 'shop/mens'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 2,
          linkUrl: 'shop/womens'
        },
        {
          title: 'footwear',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          // size: 'large',
          id: 3,
          linkUrl: 'shop/footwear'
        },
        {
          title: 'headbands',
          imageUrl: process.env.PUBLIC_URL + '/assets/inventory/headbands/mist.jpeg',
          id: 4,
          linkUrl: 'shop/headbands'
        },
        {
          title: 'weapons',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 5,
          linkUrl: 'shop/weapons'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;