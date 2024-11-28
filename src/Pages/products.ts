// Define the type for product properties
export type Product = {
    id: number;
    title: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqm: number;
    builtYear: number;
    features: string;
    images: string[];
    location: string; // New location field
   
  };


  //Newly Built Custom Home For Sale in Lekki 2nd Toll Gate, Lekki

  import tollg_1 from '../assets/products/toll_gate_1.jpg'
  import tollg_2 from '../assets/products/toll_gate_2.jpg'
  import tollg_3 from '../assets/products/toll_gate_3.jpg'
  import tollg_4 from '../assets/products/toll_gate_4.jpg'
  import tollg_5 from '../assets/products/toll_gate_5.jpg'
  import tollg_6 from '../assets/products/toll_gate_6.jpg'
  import tollg_7 from '../assets/products/toll_gate_7.jpg'
  import tollg_8 from '../assets/products/toll_gate_8.jpg'
  
  // Sample products data
  export const products: Product[] = [
    {
      id: 1,
      title: "Newly Built Custom Home For Sale in Lekki 2nd Toll Gate, Lekki Lagos ",
      price: 135000000   ,
      bedrooms: 4,
      bathrooms: 4,
      sqm: 345,
      builtYear: 2024,
      features: "This property has a well designed and large masters bedroom, en-suite large rooms with wardrobes, well designated, interior and exterior, modern toilet wares, fitted kitchen with modern accessories, detailed finishing, spacious compound with ample parking space, located in a serene and secure neighborhood",
      images: [
tollg_1, tollg_2,tollg_3 , tollg_4,tollg_5,tollg_6,tollg_7,tollg_8
      ],
      location: "Lekki 2nd Toll Gate, Lekki",
     
    },
    {
      id: 2,
      title: "Luxury Villa with Sea View Lagos",
      price: 1200000,
      bedrooms: 5,
      bathrooms: 4,
      sqm: 350,
      builtYear: 2020,
      features: "",
      images: [
        tollg_1, tollg_2,tollg_3 , tollg_4,tollg_5,tollg_6,tollg_7,tollg_8
      ],
      location: "Miami Beach, FL, USA",
      
    },
    {
      id: 3,
      title: "Cozy Apartment in City Center",
      price: 350000,
      bedrooms: 2,
      bathrooms: 1,
      sqm: 90,
      builtYear: 2010,
      features: "Balconylose to Publ",
      images: [
        tollg_1, tollg_2,tollg_3 , tollg_4,tollg_5,tollg_6,tollg_7,tollg_8
 ],
      location: "New York City, NY, USA",
      
    },
   
    {
      id: 4,
      title: "Cozy Apartment in City Center",
      price: 350000,
      bedrooms: 2,
      bathrooms: 1,
      sqm: 90,
      builtYear: 2010,
      features: "Balconylose to Publ",
      images: [
        tollg_1, tollg_2,tollg_3 , tollg_4,tollg_5,tollg_6,tollg_7,tollg_8
  ],
      location: "New York City, NY, USA",
      
    },
  ];
  