import { create } from 'zustand';
    import axios from 'axios';
    import { Pizza } from '@pizza-delivery/types';

    interface PizzaState {
      pizzas: Pizza[];
      fetchPizzas: () => Promise<void>;
    }

    export const usePizzaStore = create<PizzaState>((set) => ({
      pizzas: [],
      fetchPizzas: async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/pizzas'); // Assuming backend runs on port 3000
          set({ pizzas: response.data });
        } catch (error) {
          console.error("Error fetching pizzas:", error);
        }
      },
    }));
