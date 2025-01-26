import Image from "next/image";

export default function AllProducts() {
  const products = [
    { id: 1, name: "Luxury Stool Chair", price: 20, image: "/chair2.png", isNew: true },
    { id: 2, name: "Luxury Stool Chair", price: 20, image: "/Image.png", isSale: true },
    { id: 3, name: "Luxury Stool Chair", price: 20, image: "/chair3.png" },
    { id: 4, name: "Luxury Stool Chair", price: 20, image: "/chair9.png" },
    { id: 5, name: "Luxury Stool Chair", price: 30, image: "/chair6.png", isNew: true },
    { id: 6, name: "Luxury Stool Chair", price: 20, image: "/chair10.png", isSale: true },
    { id: 7, name: "Luxury Stool Chair", price: 30, image: "/chair12.png" },
    { id: 8, name: "Luxury Stool Chair", price: 20, image: "/chair2.png" },
    { id: 9, name: "Luxury Stool Chair", price: 20, image: "/chair5.png", isNew: true },
    { id: 10, name: "Luxury Stool Chair", price: 20, image: "/Image.png", isSale: true },
    { id: 11, name: "Luxury Stool Chair", price: 20, image: "/chair3.png" },
    { id: 12, name: "Luxury Stool Chair", price: 20, image: "/chair7.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">Explore Our Product Collection</h1>
        <p className="text-gray-600 mt-2">Discover premium furniture at affordable prices</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">All Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white shadow-md rounded-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={312}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    New
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </div>
                )}
                <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image
                    src="/cart.png"
                    alt="Add to Cart"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter and Instagram Section */}
      <NewsletterAndInstagram />
    </div>
  );
}

function NewsletterAndInstagram() {
  return (
    <div className="w-full mx-auto px-4 py-20 space-y-16 bg-[#F0F2F3]">
      {/* Newsletter Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Or Subscribe To The Newsletter
        </h2>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-1 px-4 py-2 border-b border-black focus:outline-none bg-transparent"
            required
          />
          <button
            type="submit"
            className="px-8 py-2 text-sm uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Instagram Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["/chair6.png", "/chair5.png", "/Image.png", "/chair2.png", "/chair8.png", "/star.png"].map(
            (src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={src}
                  alt={`Instagram Image ${idx + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}