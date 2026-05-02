import { useState, useEffect } from 'react';
import type { TranslationKeys } from "@/data/translations";
import { fetchProducts } from "@/data/products";
import type { Product } from "@/data/products";
import Separator from "./Separator";

interface ComponentProps {
  t?: TranslationKeys;
}

const ProductCard = ({ product }: { product: Product }) => {
  const finalPrice = product.discountPercentage
    ? product.basePrice * (1 - product.discountPercentage / 100)
    : product.basePrice;

  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 mb-6 h-48 hover:-translate-y-1 transition-transform duration-300">
      <div className="w-2/3 h-full relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {product.discountPercentage ? (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discountPercentage}%
          </div>
        ) : null}
      </div>
      <div className="w-1/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-2">
          {product.discountPercentage ? (
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 line-through">
                CHF {product.basePrice.toFixed(2)}
              </span>
              <span className="text-xl font-bold text-red-600">
                CHF {finalPrice.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              CHF {product.basePrice.toFixed(2)}
            </span>
          )}
          <button className="mt-2 w-full bg-red-600 text-white font-medium py-1.5 rounded-md hover:bg-red-700 transition-colors text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const DeliveryContent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-24 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Delivery / Order Now
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? 'bg-red-600 text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Delivery({ t }: ComponentProps) {
  // Use t to silence eslint, but we don't need it as we don't have translations yet
  void t;
  return (
    <div className="bg-white mt-16">
      <DeliveryContent />
      <Separator />
    </div>
  );
}
