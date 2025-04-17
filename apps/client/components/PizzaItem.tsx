import React from 'react';
    import { View, Text, Image } from 'react-native';
    import { Pizza } from '@pizza-delivery/types';

    interface PizzaItemProps {
      pizza: Pizza;
    }

    const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
      return (
        <View className="bg-white rounded-lg shadow-md p-4">
          <Image
            source={{ uri: pizza.imageUrl }}
            className="w-full h-40 rounded-md mb-2"
          />
          <Text className="text-lg font-semibold">{pizza.name}</Text>
          <Text className="text-gray-600">{pizza.description}</Text>
          <Text className="text-base mt-2">Price: ${pizza.price}</Text>
        </View>
      );
    };

    export default PizzaItem;
