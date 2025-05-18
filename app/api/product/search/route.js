import { NextResponse } from "next/server";

// Sample products
const products = [
    { title: "iPhone 15 Pro", price: 999, category: "Phones", userRating: 4.8 },
    { title: "iPhone 15 Pro", price: 9929, category: "Phones", userRating: 4.8 },
    { title: "Samsung Galaxy S23", price: 899, category: "Phones", userRating: 4.7 },
    { title: "Samsung Galaxy S23", price: 2899, category: "Phones", userRating: 4.7 },
    { title: "Google Pixel 7", price: 799, category: "Phones", userRating: 4.6 },
];

export async function GET ( request ) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get( "query" );
    const price = searchParams.get( "price" );

    const filteredProducts = products.filter( ( product ) => {
        const matchesQuery = query ? product.title.toLowerCase().includes( query.toLowerCase() ) : true;
        const matchesPrice = price ? product.price === Number( price ) : true;
        return matchesQuery && matchesPrice;
    } );

    if ( filteredProducts.length === 0 ) {
        return NextResponse.json(
            { message: "No specific products available", },
            { status: 404 }
        );
    }

    return NextResponse.json(
        {
            message: "Fetching specific products",
            data: filteredProducts,
        },
        { status: 200 }
    );
}
