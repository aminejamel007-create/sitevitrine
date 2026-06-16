import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'

interface CartItem {
  productId: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: number; size: string; color: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; size: string; color: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.size === action.payload.size && i.color === action.payload.color
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === existing.productId && i.size === existing.size && i.color === existing.color
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => !(i.productId === action.payload.productId && i.size === action.payload.size && i.color === action.payload.color)) }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.size === action.payload.size && i.color === action.payload.color
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'LOAD_CART':
      return { ...state, items: action.payload }
    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (productId: number, size: string, color: string) => void
  updateQuantity: (productId: number, size: string, color: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  totalItems: number
  totalPrice: number
} | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  useEffect(() => {
    const saved = localStorage.getItem('monsieur-cart')
    if (saved) {
      try { dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) }) } catch { /* ignore */ }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('monsieur-cart', JSON.stringify(state.items))
  }, [state.items])

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item })
  const removeItem = (productId: number, size: string, color: string) => dispatch({ type: 'REMOVE_ITEM', payload: { productId, size, color } })
  const updateQuantity = (productId: number, size: string, color: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, color, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' })
  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, toggleCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
