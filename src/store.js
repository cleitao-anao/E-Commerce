import { create } from 'zustand';

// Criar a store usando Zustand
export const useStore = create((set, get) => ({
  products: [], // Lista de produtos no carrinho

  // Função para adicionar um produto ao carrinho
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.products.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          products: state.products.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { products: [...state.products, { ...product, quantity: 1 }] };
    }),

  // Função para remover um produto do carrinho
  removeFromCart: (productId) => set((state) => ({
    products: state.products.filter((product) => product.id !== productId),
  })),

  // Função para esvaziar o carrinho
  clearCart: () => set({ products: [] }),

  // Função para calcular o total de itens no carrinho
  totalItems: () => get().products.reduce((total, product) => total + product.quantity, 0),

  // Função para calcular o preço total dos produtos no carrinho
  totalPrice: () => get().products.reduce((total, product) => total + product.price * product.quantity, 0),
}));
