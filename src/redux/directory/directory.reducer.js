const INITIAL_STATE = {
    sections: [
        {
          title: 'mens',
          imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/sasuke.jpg',
          size: 'large',
          id: 1,
          linkUrl: 'shop/mens'
        },
        {
          title: 'womens',
          imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/akatsuki.jpg',
          size: 'large',
          id: 2,
          linkUrl: 'shop/womens'
        },
        {
          title: 'footwear',
          imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/geta.jpg',
          size: 'large',
          id: 3,
          linkUrl: 'shop/footwear'
        },
        {
          title: 'headbands',
          imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/bnr-headband_leaf.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/headbands'
        },
        {
          title: 'weapons',
          imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/bnr-leaf_throwing_knife_set.jpg',
          size: 'large',
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