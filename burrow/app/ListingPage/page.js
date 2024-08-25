import React from 'react';
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle"



const TopContainer = () => {
    return (
        <div className="flex w-full h-24">
            <button className="flex-none flex ml-8 items-center">
                <img src="/logo.png" style={{ height: "4rem", width: "4rem" }}></img>
                <img src="/textlogo.png" style={{ height: "2rem", width: "12rem", paddingLeft: "1rem" }}></img>
            </button>
            <div className="grow">
            </div>
            <button className="flex-none p-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </button>
            <button className="flex-none p-4 mr-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </button>
        </div>
    )
}

const MainListingPage = () => {
    const listing = [
        {
            imageUrl: "/fenway.jpeg",
            postedDate: "2 weeks ago",
            title: "Church Park",
            address: "221 Massachusetts Ave, Boston, MA 02115",
            description: "Church Park Apartments offers the perfect blend...",
            price: "$3,710 / mo",
            utilities: "Utilities included",
            nearby: "Near Northeastern University",
            lease: "One Year Lease Starting Sept. 28, 2024"
        },
        {
            imageUrl: "/back_bay.jpg",
            postedDate: "2 weeks ago",
            title: "38 Hemenway",
            address: "38 Hemenway St, Boston, MA 02115",
            description: "Welcome to 38 Hemenway St. A charming brick apartment...",
            price: "$2,350+ / mo",
            utilities: "Utilities included",
            nearby: "Near Northeastern University and Berklee",
            lease: "One Year Lease"
        }
    ];

    return (
        <div className="flex flex-col h-screen w-[94%]">
            <TopContainer />
            <SectionTitle text={"Listings in Fenway"} />
            <div className="flex flex-col">
                {listing.map((listing, index) => (
                    <ListingCard key={index} listing={listing} />
                ))}
            </div>
        </div>
    );
};

const ListingPage = () => {
    return (
        <main className="flex bg-white h-screen w-screen">
            <Navbar />
            <MainListingPage />
        </main>
    );
};

const ListingCard = ({ listing }) => {
    return (
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden mb-6">
            <ListingImage imageUrl={listing.imageUrl} />
            <ListingDetails listing={listing} />
        </div>
    );
};

const ListingImage = ({ imageUrl }) => {
    return (
        <img
            src={imageUrl}
            alt="Listing Image"
            className="w-full md: w-1/3 h-64 object-cover rounded-lg"

        />
    )
}

const ListingDetails = ({ listing }) => {
    return (
        <div className="flex flex-col pr-4 pl-0 md:w-2/3">
            <ListingData postedDate={listing.postedDate} />
            <h3 className="text-xl font-semibold">{listing.title}</h3>
            <p className="text-gray-500 mb-2">{listing.address}</p>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <p className="font-semibold mb-2">{listing.price}</p>
            <p className="text-gray-500 mb-4">{listing.utilities}</p>
            <p className="text-gray-500 mb-4">{listing.nearby}</p>
            <p className="text-gray-500 mb-4">{listing.lease}</p>
            <ListingButton />
        </div>
    );
};


const ListingButton = () => {
    return (
        <button className="bg-m3-schemes-primary">View Listing</button>
    );
};

const ListingData = () => {
    return (
        <p className="text-black text-sm mb-2">

        </p>
    )
}

export default ListingPage;