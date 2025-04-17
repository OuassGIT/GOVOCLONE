// Shared types definitions
    export interface Pizza {
      id: string;
      name: string;
      description: string;
      price: number;
      imageUrl: string;
    }

    export interface Order {
      id: string;
      userId: string;
      items: Pizza[];
      total: number;
      status: 'pending' | 'preparing' | 'delivering' | 'delivered';
    }

    export interface User {
      id: string;
      name: string;
      address: string;
      phone: string;
    }
    // ... more shared types
