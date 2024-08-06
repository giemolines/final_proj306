import CartProduct from "../components/cart_product";
import NavigationBar from "../components/navigationBar";
import PageFooter from "../components/footer";
import ShippingMethod from "../components/shipping_method";
import BannerProduct from '../cart/banner_product.png';

//temp products and shipping methods, so we can pull from db later

const cartProducts = [
    {
        id: "123234345",
        name: "Banner",
        quantity: 1,
        size: "30x40",
        price: 13,
        image: BannerProduct
    },
    {
        id: "678901234",
        name: "Poster",
        quantity: 2,
        size: "20x30",
        price: 8,
        image: BannerProduct
    }
];

const shippingOptions = [
    { id: 'standard', label: 'Standard Shipping', price: 5 },
    { id: 'express', label: 'Express Shipping', price: 15 },
    { id: 'overnight', label: 'Overnight Shipping', price: 30 }
];

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar />
            <div className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-5xl font-bold mb-6">Checkout</h1>
                <p className="text-lg mb-6">Added Products</p>
                
                <div className="mb-8">
                    {cartProducts.map(product => (
                        <CartProduct
                            key={product.id}
                            image_file_address={product.image}
                            name={product.name}
                            quantity={product.quantity}
                            product_id={product.id}
                            size={product.size}
                            price={product.price}
                        />
                    ))}
                </div>
                
                <div className="mb-8">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-4">
                            <label className="text-lg font-semibold mb-2">Enter your personal details</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="First Name"
                                aria-label="First Name"
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Last Name"
                                aria-label="Last Name"
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Email"
                                aria-label="Email"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <label className="text-lg font-semibold mb-2">Enter your payment details</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Name on Card"
                                aria-label="Name on Card"
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Card Number"
                                aria-label="Card Number"
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="CCV"
                                aria-label="CCV"
                            />
                        </div>
                    </form>
                </div>
                
                <div className="mb-8">
                    <ShippingMethod options={shippingOptions} />
                </div>

                <div className="mt-auto flex justify-end pt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Checkout
                    </button>
                </div>
            </div>
            <PageFooter />
        </main>
    );
}
