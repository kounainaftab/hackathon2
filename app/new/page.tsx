import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Array of images for featured products
  const featuredProducts = [
    { id: 1, image: "/chair12.png", name: "Library Stool Chair", price: "$99" },
    { id: 2, image: "/chair2.png", name: "Library Stool Chair", price: "$90" },
    { id: 3, image: "/chair7.png", name: "Library Stool Chair", price: "$80" },
    { id: 4, image: "/chair3.png", name: "Library Stool Chair", price: "$85" },
    { id: 5, image: "/chair5.png", name: "Library Stool Chair", price: "$90" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Product Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src="/Image.png"
              alt="Library Stool Chair"
              width={675}
              height={607}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Library Stool Chair
            </h1>
            <p className="text-2xl font-semibold text-cyan-500">$20.00 USD</p>
            <p className="text-gray-600 leading-relaxed text-balance p-8">
              Transform your living space with our premium-quality Library Stool
              Chair, designed for both style and durability. Perfect for your
              home or office, this chair offers superior comfort with its
              ergonomic design. Now available at a special discounted price ! 
              Don’t miss this limited-time sale. order yours today and bring
              home luxury that doesn’t break the bank.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-md hover:bg-cyan-600 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              FEATURED PRODUCTS
            </h2>
            <Link href="/all" className="text-gray-600 hover:text-gray-900">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={263}
                    height={263}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-cyan-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}