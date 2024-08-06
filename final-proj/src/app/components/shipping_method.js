"use client";

import React, { useState } from 'react';

const ShippingMethod = ({ options }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handleSelect = (id) => {
        setSelectedMethod(id);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Method</h2>
            <div className="flex flex-col space-y-4">
                {options.map(option => (
                    <div
                        key={option.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-transform duration-200 ease-in-out ${
                            selectedMethod === option.id
                                ? 'border-blue-500 bg-blue-100'
                                : 'border-gray-300 hover:border-blue-300'
                        }`}
                        onClick={() => handleSelect(option.id)}
                    >
                        <p className="text-lg font-medium">{option.label}</p>
                        <p className="text-gray-500">Price: ${option.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShippingMethod;
