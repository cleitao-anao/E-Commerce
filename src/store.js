import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // Carrinho de compras
  products: JSON.parse(localStorage.getItem('cart')) || [], // Tenta pegar do localStorage

  // Adicionar produto ao carrinho
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.products.find((item) => item.id === product.id);
      let updatedProducts;

      if (existingProduct) {
        updatedProducts = state.products.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedProducts = [...state.products, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedProducts));

      return { products: updatedProducts };
    }),

  // Remover produto do carrinho
  removeFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.products.find((product) => product.id === productId);

      let updatedProducts;
      if (existingProduct && existingProduct.quantity > 1) {
        updatedProducts = state.products.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        updatedProducts = state.products.filter((product) => product.id !== productId);
      }

      localStorage.setItem('cart', JSON.stringify(updatedProducts));

      return { products: updatedProducts };
    }),

  // Esvaziar o carrinho
  clearCart: () => {
    localStorage.removeItem('cart');
    set({ products: [] });
    return { products: [] };
  },

  // Calcular o total de itens no carrinho
  totalItems: () => get().products.reduce((total, product) => total + product.quantity, 0),

  // Calcular o preço total dos produtos no carrinho
  totalPrice: () => get().products.reduce((total, product) => total + product.new_price * product.quantity, 0),

  headsetProducts: [],
  tecladoProducts: [],
  mouseProducts: [],

  addProduct: (type, product) => {
    set((state) => {
      if (type === 'headset') {
        return { headsetProducts: [...state.headsetProducts, product] };
      } else if (type === 'teclado') {
        return { tecladoProducts: [...state.tecladoProducts, product] };
      } else if (type === 'mouse') {
        return { mouseProducts: [...state.mouseProducts, product] };
      }
      return {};
    });
  },



}));
