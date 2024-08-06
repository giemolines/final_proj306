import Image from 'next/image';

export default function CartProduct({ image_file_address, name, quantity, product_id, size, price }) {
  return (
    <div className="flex items-start mb-5 space-x-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="relative w-32 h-32 flex-shrink-0">
        <Image 
          src={image_file_address} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md"
        />
      </div>


      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-1">Quantity: {quantity}</p>
        <p className="text-gray-700 mb-1">Size: {size}</p>
        <p className="text-gray-700 mb-1">#{product_id}</p>
        <h3 className="text-lg font-semibold">Price: ${price}</h3>
      </div>
    </div>
  );
}
