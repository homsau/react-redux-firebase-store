const SHOP_DATA = {
  mens: {
    id: 1,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 6,
        name: 'Akatsuki Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/akatsuki.jpg',
        price: 10
      },
      {
        id: 7,
        name: 'Hogoromo Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/hogoromo.jpg',
        price: 10
      },
      {
        id: 8,
        name: 'Minato Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/minato.jpg',
        price: 10
      },
      {
        id: 9,
        name: 'Naruto Hokage Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/naruto_hokage.jpg',
        price: 10
      },
      {
        id: 10,
        name: 'Naruto Sage Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/naruto_sage.jpg',
        price: 10
      },
      {
        id: 11,
        name: 'Naruto Shippuden',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/naruto_shippuden.jpg',
        price: 15
      },
      {
        id: 12,
        name: 'Uchiha Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/obito_uchiha.jpg',
        price: 15
      },
      {
        id: 13,
        name: 'Youth Uchiha Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/sasuke_youth.jpg',
        price: 5
      },
      {
        id: 14,
        name: 'Sasuke Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/sasuke.jpg',
        price: 15
      },
      {
        id: 15,
        name: 'Shikamaru Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/shikamaru.jpg',
        price: 15
      },
      {
        id: 16,
        name: 'Shinobi Vest',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-mens/shinobi_vest.jpg',
        price: 10
      }
    ]
  },
  womens: {
    id: 2,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 17,
        name: 'Akatsuki Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/akatsuki.jpg',
        price: 20
      },
      {
        id: 18,
        name: 'Hinata Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/hinata.jpg',
        price: 20
      },
      {
        id: 19,
        name: 'Hokage Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/hokage.jpg',
        price: 25
      },
      {
        id: 20,
        name: 'Ino Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/ino.jpg',
        price: 20
      },
      {
        id: 21,
        name: 'Naruto Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/naruto.jpg',
        price: 25
      },
      {
        id: 22,
        name: 'Sakura Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/sakura_boruto.jpg',
        price: 20
      },
      {
        id: 23,
        name: 'Sakura Outfit',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/sakura_tactical.jpg',
        price: 20
      },
      {
        id: 24,
        name: 'Tamari Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/tamari_black.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Tsunade Cloak',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-womens/tsunade.jpg',
        price: 20
      }
    ]
  },
  footwear: {
    id: 3,
    title: 'Footwear',
    routeName: 'footwear',
    items: [
      {
        id: 26,
        name: 'Geta',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/geta.jpg',
        price: 10
      },
      {
        id: 27,
        name: 'Geta 2',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/geta_two_tooth.jpg',
        price: 10
      },
      {
        id: 28,
        name: 'Black',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_black.jpg',
        price: 110
      },
      {
        id: 29,
        name: 'Blue',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_blue.jpg',
        price: 10
      },
      {
        id: 30,
        name: 'Brown',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_brown.jpg',
        price: 10
      },
      {
        id: 31,
        name: 'Grey',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_grey.jpg',
        price: 10
      },
      {
        id: 32,
        name: 'White',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_white.jpg',
        price: 10
      },
      {
        id: 33,
        name: 'Yellow',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-footwear/shinobi_yellow.jpg',
        price: 10
      }
    ]
  },
  headbands: {
    id: 4,
    title: 'Headbands',
    routeName: 'headbands',
    items: [
      {
        id: 34,
        name: 'Allied Shinobi Forces',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_allied_shinobi_forces.jpg',
        price: 5
      },
      {
        id: 35,
        name: 'Leaf Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_leaf.jpg',
        price: 5
      },
      {
        id: 36,
        name: 'Mist Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_mist.jpg',
        price: 5
      },
      {
        id: 37,
        name: 'Rain Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_rain.jpg',
        price: 5
      },
      {
        id: 38,
        name: 'Rogue Leaf Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_rogue_leaf.jpg',
        price: 5
      },
      {
        id: 39,
        name: 'Rogue Mist Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_rogue_mist.jpg',
        price: 5
      },
      {
        id: 40,
        name: 'Sand Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_sand.jpg',
        price: 5
      },
      {
        id: 41,
        name: 'Rogue Sand Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_rogue_sand.jpg',
        price: 5
      },
      {
        id: 42,
        name: 'Sound Shinobi',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-headwear/headband_sound.jpg',
        price: 5
      }
    ]
  },
  weapons: {
    id: 5,
    title: 'Weapons',
    routeName: 'weapons',
    items: [
      {
        id: 43,
        name: 'Asuma Kunai',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/asuma_kunai_blade.jpg',
        price: 25
      },
      {
        id: 44,
        name: 'Kakashi Sword',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/kakashi_sword.jpg',
        price: 30
      },
      {
        id: 45,
        name: 'Sasuke Sword',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/sasuke_kusanagi_sword.jpg',
        price: 30
      },
      {
        id: 46,
        name: 'Tamari Fan',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/tamari_fan.jpg',
        price: 20
      },
      {
        id: 47,
        name: 'Zabuza Sword',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/zabuza_sword.jpg',
        price: 30
      },
      {
        id: 48,
        name: 'Kunai White',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/kunai_white.jpg',
        price: 15
      },
      {
        id: 49,
        name: 'Keaf Kunai Set',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/leaf_throwing_knife_set.jpg',
        price: 30
      },
      {
        id: 50,
        name: 'Kunai Set',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/kunai_set.jpg',
        price: 20
      },
      {
        id: 51,
        name: 'Shuriken',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/shuriken.jpg',
        price: 10
      },
      {
        id: 52,
        name: 'Throwing Quills',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/throwing_quills_knives.jpg',
        price: 20
      },
      {
        id: 53,
        name: 'Kunai Red',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/kunai_red.jpg',
        price: 15
      },
      {
        id: 54,
        name: 'Kunai Elite',
        imageUrl: 'https://caution-clothing.s3.amazonaws.com/images/web-weapons/kunai_elite.jpg',
        price: 20
      }
    ]
  }
};

export default SHOP_DATA;
