import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  shortName?: string;
  price: number;
  originalPrice: number;
  image: string;
  color?: string;
  storage?: string;
  size?: string;
  quantity: number;
  category: string;
  maxQuantity?: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity' | 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  subtotal: number;
  tax: number;
  shipping: number;
  orderTotal: number;
  isInCart: (productId: string, variantId?: string) => boolean;
  getCartItem: (productId: string, variantId?: string) => CartItem | undefined;
}

const TAX_RATE = 0.0875; // 8.75% tax rate
const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 0; // Free shipping

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('apple-cart');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('apple-cart', JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity' | 'id'>) => {
    setItems((prev) => {
      // Check if item already exists (same product and variant)
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
      );

      if (existingIndex >= 0) {
        // Update quantity of existing item
        const updated = [...prev];
        const maxQty = newItem.maxQuantity || 10;
        updated[existingIndex].quantity = Math.min(
          updated[existingIndex].quantity + 1,
          maxQty
        );
        return updated;
      }

      // Add new item with generated cart ID
      const cartId = `${newItem.productId}-${newItem.variantId}-${Date.now()}`;
      return [...prev, { ...newItem, id: cartId, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const maxQty = item.maxQuantity || 10;
          return { ...item, quantity: Math.min(quantity, maxQty) };
        }
        return item;
      })
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
    try {
      localStorage.removeItem('apple-cart');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const isInCart = useCallback((productId: string, variantId?: string) => {
    return items.some(
      (item) =>
        item.productId === productId &&
        (!variantId || item.variantId === variantId)
    );
  }, [items]);

  const getCartItem = useCallback((productId: string, variantId?: string) => {
    return items.find(
      (item) =>
        item.productId === productId &&
        (!variantId || item.variantId === variantId)
    );
  }, [items]);

  // Calculated values
  const totalItems = useMemo(() => 
    items.reduce((sum, item) => sum + item.quantity, 0),
  [items]);

  const subtotal = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  [items]);

  const tax = useMemo(() => Math.round(subtotal * TAX_RATE * 100) / 100, [subtotal]);
  
  const shipping = useMemo(() => 
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST,
  [subtotal]);

  const totalPrice = useMemo(() => subtotal, [subtotal]);
  
  const orderTotal = useMemo(() => 
    Math.round((subtotal + tax + shipping) * 100) / 100,
  [subtotal, tax, shipping]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        subtotal,
        tax,
        shipping,
        orderTotal,
        isInCart,
        getCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
