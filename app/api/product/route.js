import { NextResponse } from "next/server";

// http://localhost:3000/api/product

// Sample product list
let products = [
    { id: 1, title: "iPhone 15 Pro", price: 999, category: "Phones", userRating: 4.8 },
    { id: 2, title: "Samsung Galaxy S23", price: 899, category: "Phones", userRating: 4.7 },
    { id: 3, title: "Google Pixel 7", price: 799, category: "Phones", userRating: 4.6 },
];


// Handle GET request
export const GET = async ( request ) => {
    return NextResponse.json(
        {
            success: true,
            message: "Fetched all products...✔️✔️✔️",
            data: products,
        },
        {
            status: 200,
        }
    );
};



// add 
// http://localhost:3000/api/product
export async function POST ( request ) {
    const data = await request.json();
    products.push( data )
    return NextResponse.json( {
        message: "new  product has been added",
        success: true,
        bodyData: data
    }, { status: 201 } )

}



// update



//PUT  http://localhost:3000/api/product?id=1
export async function PUT ( request ) {

    const searchParams = request.nextUrl.searchParams;

    const id = parseInt( searchParams.get( "id" ) );
    console.log( id )
    console.log( "Content-Type:", request.headers.get( "content-type" ) );

    if ( !id ) {
        return NextResponse.json(
            { message: "not product find this id ", success: false },
            { status: 400 }
        );
    }
    // get the specific product by id 
    let updatedProduct;
    try {
        updatedProduct = await request.json();
        console.log( updatedProduct )
    } catch ( error ) {
        return NextResponse.json(
            { message: "Invalid JSON body", success: false, error: error },
            { status: 400 }
        );
    }

    // find the product that recieved by search query
    // products.forEach( ( product ) => {
    //     if ( product.id == id ) {
    //         product.title = updatedProduct.title;
    //         product.category = updatedProduct.category;
    //         product.price = updatedProduct.price;
    //         product.userRating = updatedProduct.userRating;
    //     }
    // } );

    // another way 
    const index = products.findIndex( ( p ) => p.id === id );
    console.log( index )

    if ( index === -1 ) {
        return NextResponse.json(
            { message: "Product not found", success: false },
            { status: 404 }
        );
    }

    products[ index ] = { ...products[ index ], ...updatedProduct };


    return NextResponse.json( {
        message: "your product has been updated successfully... ",
        success: true,
        id: id,
        // updatedP: updatedProduct
        // products
        updated: products[ index ]
    } )

}



// delete 
export async function DELETE ( request ) {
    const searchParams = request.nextUrl.searchParams;
    const id = parseInt( searchParams.get( "id" ) );
    if ( !id ) {
        return NextResponse.json(
            { message: "your  product has been deleted ", success: false },
            { status: 400 }
        );
    }
    products = products.filter( product => product.id != id )

    return NextResponse.json( {
        message: "your product has been updated successfully... ",
        success: true,
        id: id,
        products: products

    } )

}
