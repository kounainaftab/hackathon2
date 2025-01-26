import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/chair5.png",
      href: "/categories/wing-chair",
    },
    {
      name: "Wooden Chair",
      products: "157 Products",
      image: "/chair6.png",
      href: "/categories/wooden-chair",
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: "/chair7.png",
      href: "/categories/desk-chair",
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={424}
                  height={424}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Black Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-300">{category.products}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
