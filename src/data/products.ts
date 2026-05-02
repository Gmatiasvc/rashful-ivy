export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  // Variable price implementation:
  // The 'basePrice' represents the default selling price.
  // This allows the system to easily apply formulas, variable margins,
  // or dynamic pricing based on user location/time of day when fetched from the backend.
  basePrice: number;
  // Discount implementation:
  // 'discountPercentage' is an optional number (0-100).
  // This allows the frontend to compute final prices independently.
  // Future enhancements could include valid-from/valid-to dates.
  discountPercentage?: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulating an async fetch from a remote database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Empanada de Carne',
          description: 'Delicious beef empanada.',
          category: 'Empanadas',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 5.00,
          discountPercentage: 0,
        },
        {
          id: '2',
          name: 'Empanada de Pollo',
          description: 'Tasty chicken empanada.',
          category: 'Empanadas',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 4.50,
          discountPercentage: 10,
        },
        {
          id: '3',
          name: 'Ceviche Clásico',
          description: 'Fresh fish ceviche with lime.',
          category: 'Mains',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 15.00,
          discountPercentage: 20,
        },
        {
          id: '4',
          name: 'Inca Kola',
          description: 'Golden cola.',
          category: 'Drinks',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 3.00,
          discountPercentage: 0,
        },
        {
          id: '5',
          name: 'Lomo Saltado',
          description: 'Traditional beef stir fry.',
          category: 'Mains',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 18.00,
          discountPercentage: 5,
        },
        {
          id: '6',
          name: 'Alfajores',
          description: 'Sweet cookies with dulce de leche.',
          category: 'Desserts',
          imageUrl: 'https://placehold.co/600x400?text=Placeholder',
          basePrice: 6.00,
          discountPercentage: 0,
        }
      ]);
    }, 800);
  });
};
