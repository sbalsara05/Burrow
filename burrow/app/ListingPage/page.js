import React from 'react';
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle"
import TopContainer from "../components/TopContainer"

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
        },
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
        },
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
        },
    ];

    return (
        <div className="flex flex-col h-screen w-[94%]">
            <TopContainer />
            <SectionTitle text={"Listings in Fenway"} />
            <div className="mt-4 mx-8 flex flex-col overflow-y-scroll">
                {listing.map((listing, index) => (
                    <ListingCard listing={listing} key={index} />
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

const ListingCard = ({ listing, index }) => {
    return (
        <button key={index} className="flex flex-col md:flex-row rounded-lg mb-4 text-left">
            <ListingImage imageUrl={listing.imageUrl} />
            <ListingDetails listing={listing} />
        </button>
    );
};

const ListingImage = ({ imageUrl }) => {
    return (
        <img
            src={imageUrl}
            alt="Listing Image"
            className="w-full md:w-2/5 h-64 object-cover rounded-lg"

        />
    )
}

const ListingDetails = ({ listing }) => {
    return (
        <div className="flex flex-col px-4 md:w-2/3 text-lg">
            <p className="text-xl font-bold">{listing.title}</p>
            <p className="text-gray-500 mb-2">{listing.address}</p>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <p className="font-bold mb-2">{listing.price}</p>
            <p className="text-gray-500 mb-4">{listing.utilities}</p>
            <p className="text-gray-500 mb-4">{listing.nearby}</p>
            <p className="text-gray-500 mb-4">{listing.lease}</p>
        </div>
    );
};


const ListingButton = () => {
    return (
        <button className="bg-m3-schemes-primary">View Listing</button>
    );
};

export default ListingPage;
