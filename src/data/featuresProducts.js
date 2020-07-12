const FEATURES_PRODUCTS = [
  {
    id: 1,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/01.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/daybreak-shoe-bs1J78-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/daybreak-shoe-bs1J78-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/daybreak-shoe-bs1J78-3.jpg",
    ],
    productName: "Nike Daybreak",
    price: "$145.93",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 2,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/02.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/react-metcon-amp-training-shoe-SqvrVS-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/react-metcon-amp-training-shoe-SqvrVS-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/react-metcon-amp-training-shoe-SqvrVS-3.jpg",
    ],
    productName: "Nike React Metcon AMP",
    price: "$200.00",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 3,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/03.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/mx-720-818-shoe-zlRc9j-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/mx-720-818-shoe-zlRc9j-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/mx-720-818-shoe-zlRc9j-3.jpg",
    ],
    productName: "Nike MX-720-818",
    price: "$193.97",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 4,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/04.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/shox-tl-nova-sp-shoe-m4rp7K-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/shox-tl-nova-sp-shoe-m4rp7K-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/shox-tl-nova-sp-shoe-m4rp7K-3.jpg",
    ],
    productName: "Nike Daybreak",
    price: "$200.00",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 5,
    category: "shoes",
    mainImg:
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/react-metcon-amp-training-shoe-SqvrVS-2.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/daybreak-shoe-bs1J78-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/daybreak-shoe-bs1J78-1.jpg",
    ],
    productName: "Nike Shox TL Nova SP",
    price: "$145.00",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 6,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/05.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/free-rn-flyknit-3-running-shoe-vVqwz6-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/free-rn-flyknit-3-running-shoe-vVqwz6-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/free-rn-flyknit-3-running-shoe-vVqwz6-3.jpg",
    ],
    productName: "Nike Free RN Flyknit 3.0",
    price: "$107.18",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 7,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/06.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/custom-kyrie-6-by-you-1.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/custom-kyrie-6-by-you-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/custom-kyrie-6-by-you-3.jpg",
    ],
    productName: "Kyrie 6 By You",
    price: "$190.85",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
  {
    id: 8,
    category: "shoes",
    mainImg: "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/07.jpg",
    subImages: [
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/jordan-why-not-zer03-pf-basketball-shoe-nNTc80-1-100x100.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/jordan-why-not-zer03-pf-basketball-shoe-nNTc80-2.jpg",
      "https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/jordan-why-not-zer03-pf-basketball-shoe-nNTc80-3.jpg",
    ],
    productName: "Jordan Why Not Zer0.3 PF",
    price: "$191.23",
    description:
      "Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum. Consequatur molestiae ad molestias eius unde facere est architecto.",
  },
];

export default FEATURES_PRODUCTS;
