'use client';

import { Heart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Library Stool Chair',
      color: 'Ashen Slate/Cobalt Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/chair8.png?height=150&width=150',
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      color: 'Ashen Slate/Cobalt Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/chair5.png?height=150&width=150',
    },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-white p-4 md:p-6">
      <div className="mx-auto max-w-6xl w-full flex-grow">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <h1 className="mb-6 text-xl font-semibold">Bag</h1>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap gap-4 border-b border-gray-200 pb-6"
                >
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between flex-wrap">
                      <div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                        <div className="mt-2 flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                          <div className="flex items-center gap-1">
                            <span>Size</span>
                            <span className="font-medium">{item.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Quantity</span>
                            <span className="font-medium">{item.quantity}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium mt-2 lg:mt-0">
                        MRP: ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 ">
              <h2 className="text-lg font-semibold">Summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">
                    Estimated Delivery & Handling
                  </p>
                  <p className="text-sm font-medium">Free</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <p className="text-base font-medium">Total</p>
                    <p className="text-base font-medium">${total.toFixed(2)}</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full bg-teal-500 px-6 py-3 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  Member Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}