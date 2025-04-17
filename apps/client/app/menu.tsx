import { View, Text } from 'react-native';
    import { usePizzaStore } from '../store/pizzaStore';
    import { useEffect } from 'react';

    export default function MenuPage() {
      const fetchPizzas = usePizzaStore((state) => state.fetchPizzas);
      const pizzas = usePizzaStore((state) => state.pizzas);

      useEffect(() => {
        fetchPizzas();
      }, []);

      return (
        <View className="flex-1 items-center justify-center bg-gray-100">
          <Text className="text-2xl font-bold mb-4">Pizza Menu</Text>
          {pizzas.length > 0 ? (
            pizzas.map((pizza) => (
              <View key={pizza.id} className="p-4 mb-2 bg-white rounded shadow-md w-80">
                <Text className="text-lg font-semibold">{pizza.name}</Text>
                <Text className="text-gray-600">{pizza.description}</Text>
                <Text className="text-base mt-2">Price: ${pizza.price}</Text>
              </View>
            ))
          ) : (
            <Text>Loading menu...</Text>
          )}
        </View>
      );
    }
