import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service } from '@/data/services';

export interface CartItem {
  id: string;
  service: Service;
  quantity: number;
  targetUrl: string;
  selectedOption: string;
  orderNotes?: string;
  pricePerUnit: number;
  totalPrice: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('boostdirect_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('boostdirect_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const totalPrice = item.quantity * item.pricePerUnit;
    
    const newItem: CartItem = {
      ...item,
      id,
      totalPrice,
    };

    setItems(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { 
            ...item, 
            quantity, 
            totalPrice: quantity * item.pricePerUnit 
          }
        : item
    ));
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('boostdirect_cart');
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
};