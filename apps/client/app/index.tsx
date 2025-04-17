import { Link } from 'expo-router';
    import { View, Text } from 'react-native';
    import { usePizzaStore } from '../store/pizzaStore';
    import { useEffect } from 'react';

    export default function Page() {
      const fetchPizzas = usePizzaStore((state) => state.fetchPizzas);
      const pizzas = usePizzaStore((state) => state.pizzas);

      useEffect(() => {
        fetchPizzas();
      }, []);

      return (
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-xl font-bold">
            Welcome to Pizza Delivery App!
          </Text>
          <View className="mt-4">
            <Link href="/menu" className="p-4 bg-blue-500 text-white rounded">
              View Menu
            </Link>
          </View>
          <View className="mt-4">
            {pizzas.length > 0 ? (
              pizzas.map((pizza) => (
                <Text key={pizza.id} className="text-base">
                  {pizza.name} - ${pizza.price}
                </Text>
              ))
            ) : (
              <Text>Loading pizzas...</Text>
            )}
          </View>
        </View>
      );
    }
