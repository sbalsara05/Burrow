
import React from 'react';
import Navbar from '../components/Navbar'; // Import your custom NavBar
import SectionTitle from "../components/SectionTitle"; // Import Section Title Component
import Image from 'next/image'; // Use Next.js Image optimization for images

const ApartmentDetailPage = () => {
  const apartmentDetails = {
    title: "Church Park",
    address: "221 Massachusetts Ave, Boston, MA 02115",
    price: "$3,725 / mo",
    lease: "12 Month Lease",
    moveInDate: "September 28, 2024",
    nearby: ["Northeastern University", "Berklee College"],
    sqft: 630,
    bedrooms: 1,
    bathrooms: 1,
    utilities: "Utilities Included",
    amenities: [
      'In-unit Washer', 'In-unit Dryer', 'Balcony', 'Full Kitchen',
      'Street Parking', 'Rooftop Terrace', 'Pet Friendly'
    ],
    images: [
      '/fenway.jpeg', '/fenway.jpeg', '/fenway.jpeg', '/fenway.jpeg', '/fenway.jpeg'
    ]
  };

  return (
    <div className="w-[94%] flex flex-col px-6 lg:px-24 py-8 overflow-y-scroll">
        <ImageContainer images={apartmentDetails.images} />
      <TopContainer apartmentDetails={apartmentDetails} />

      <UnitInfo apartmentDetails={apartmentDetails} />
    </div>
  );
};

// Top container with title, address, and pricing
const TopContainer = ({ apartmentDetails }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-semibold mb-2">{apartmentDetails.title}</h1>
      <p className="text-gray-600">{apartmentDetails.address}</p>
      <p className="text-lg text-gray-800 font-medium my-2">{apartmentDetails.price} | {apartmentDetails.lease}</p>
      <p className="text-gray-500">Move in: {apartmentDetails.moveInDate}</p>
      <p className="text-gray-500">Near: {apartmentDetails.nearby.join(', ')}</p>
    </div>
  );
};


const ImageContainer = ({images}) => {
    const mainImage = images[0];
    const galleryImage = images.slice(1, 5);
    return (
        <div className="w-full grid grid-cols-2 gap-4">
            <MainImage ImageUrl={mainImage}/>
            <ImageGallery images={galleryImage}/>

        </div>
    )

}
// Image gallery component
const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2">
      {images.map((image, index) => (
        <div key={index} className="w-full h-64 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`Apartment Image ${index + 1}`}
            className="w-full h-full object-cover"
            width={600} height={400}
          />
        </div>
      ))}
    </div>
  );
};

const MainImage = ({ImageUrl}) => {
    return (
        <div className="w-1/2 h-full">
            <img
            src={ImageUrl}
            alt="Listing Image Large"
            className="object-cover rounded-lg w-full h-full"/>

        </div>
    )
}

// Display unit information (bedrooms, bathrooms, sqft, amenities)
const UnitInfo = ({ apartmentDetails }) => {
  return (
    <div className="border-t border-gray-300 pt-4">
      <h2 className="text-2xl font-semibold mb-4">Unit Info</h2>
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="text-gray-700">Bedrooms: {apartmentDetails.bedrooms}</p>
          <p className="text-gray-700">Bathrooms: {apartmentDetails.bathrooms}</p>
          <p className="text-gray-700">Sqft: {apartmentDetails.sqft} sqft</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Amenities</h3>
          <ul className="list-none">
            {apartmentDetails.amenities.map((amenity, index) => (
              <li key={index} className="text-gray-600 mb-1">{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main page rendering the Navbar and Apartment details
const IndividualListings = () => {
  return (
    <div className="w-full flex h-screen bg-gray-100">
      <Navbar />
      <ApartmentDetailPage />
    </div>
  );
};

export default IndividualListings;
