export interface Product {
    _id:string;
    userId:string;
    name:string;
    description:string;
    price:number;
    offerPrice:number;
    image:string[];
    category:string;
    date:number;
    __v:number
}
export interface Order {
    _id:string;
    userId:string;
    name:string;
    items:[{
      product:{
        _id:string;
        userId:string;
        name:string;
        description:string;
        price:number;
        offerPrice:number;
        image:string[];
        category:string;
        date:number;
        __v:number
      },
      quantity:number
      _id:string
    }],
    amount:number;
    address:{
      _id: string
      userId: string,
      fullName: string
      phoneNumber: string
      pincode: number
      area: string
      city: string
      state:string
      __v: number
    }
    status: string
    date: string
    __v: number
}
export const orders : Order[] = [
  {
    _id: "67a20934b3db72db5cc77b2b",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f4e43f34a77b6dde9144",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Apple AirPods Pro",
          description: "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          price: 499.99,
          offerPrice: 399.99,
          image: [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png"
          ],
          category: "Earphone",
          date: 1738667236865,
          __v: 0
        },
        quantity: 1,
        _id: "67a20934b3db72db5cc77b2c"
      }
    ],
    amount: 406.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0
    },
    status: "Order Placed",
    date: 1738672426822,
    __v: 0
  },
  {
    "_id": "67a20949b3db72db5cc77b2e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f52e3f34a77b6dde914a",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Bose QuietComfort 45",
          "description": "The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.",
          "price": 429.99,
          "offerPrice": 329.99,
          "image": [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667311/m16coelz8ivkk9f0nwrz.png"
          ],
          "category": "Headphone",
          "date": 1738667310300,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20949b3db72db5cc77b2f"
      }
    ],
    "amount": 335.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "GreatStack",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
        date: 1738672448031,
    "__v": 0
  },
  {
    "_id": "67a209bab3db72db5cc77b34",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Apple AirPods Pro",
          "description": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          "price": 499.99,
          "offerPrice": 399.99,
          "image": [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png"
          ],
          "category": "Earphone",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a209bab3db72db5cc77b35"
      }
    ],
    "amount": 406.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "GreatStack",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672560698,
    "__v": 0
  }
]
export const products: Product[] = [
{
  _id: "67a1f4e43f34a77b6dde9144",
  userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "Sandalwood",
  description: "Imagine a creamy, smooth, and slightly sweet woody scent. It's often described as calming, grounding, and meditative.  Sandalwood is believed to ease anxiety, promote relaxation, and improve sleep. It's a classic choice for creating a serene atmosphere.",
  price: 2999,
  offerPrice: 2499,
  image: [
  
    "/images.jpg",
    "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/j212frakb8hdrhvhajhg.webp",
    "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/imwuugqxsajuwqpkegb5.webp",
    "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k1oqaslw5tb3ebw01vvj.webp"
  ],
  category: "Home",
  date: 1738667236865,
  __v: 0
},
{
  "_id": "67a1f52e3f34a77b6dde914a",
  "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "Frankincense",
  "description": "This resinous scent is warm, spicy, and slightly balsamic with a hint of citrus.It's often associated with spiritual practices and purification. Frankincense is believed to have anti-inflammatory properties and may help to boost the immune system and improve mood.",
  "price": 429.99,
  "offerPrice": 329.99,
  "image": [
    "/Weihrauch.jpg"
  ],
  "category": "Medicine",
  "date": 1738667310300,
  __v: 0
},
{
  "_id": "67a1f5663f34a77b6dde914c",
  "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "Myrrh",
  "description": "Myrrh shares a similar profile with frankincense, but it's richer, earthier, and slightly bitter. It has a warm, balsamic aroma with smoky undertones.  It's often paired with frankincense and is believed to have healing properties, potentially soothing respiratory issues and reducing inflammation.",
  "price": 799.99,
  "offerPrice": 699.99,
  "image": [
    "/MYRRH-OIL.png"
  ],
  "category": "Room",
  "date": 1738667366224,
  __v: 0
},
{
  "_id": "67a1f5993f34a77b6dde914e",
  "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": " Amber",
  "description": " Amber isn't a single scent but rather a blend of resins, often including benzoin, vanilla, and labdanum.The result is a warm, sweet, and resinous aroma, sometimes with a powdery or musky edge. Amber creates a cozy and inviting atmosphere and is thought to uplift the mood and reduce stress.",
  "price": 399.99,
  "offerPrice": 349.99,
  "image": [
    "/images (1).jpg"
  ],
  "category": "Room",
  "date": 1738667417511,
  __v: 0
},

]