
import React from 'react';
import Navbar from '../components/Navbar'; // Import your custom NavBar
import SectionTitle from "../components/SectionTitle"; // Import Section Title Component
import Image from 'next/image'; // Use Next.js Image optimization for images
import TopContainer from '../components/TopContainer';

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
      '/ChurchParkMain.webp', '/ChurchPark2.webp', '/ChurchPark3.webp', '/ChurchPark4.webp', '/ChurchPark5.webp'
    ]
  };

  return (
    <div className="w-[94%] flex flex-col px-6 lg:px-24 py-8 overflow-y-scroll">
        <TopContainer/>
        <ImageContainer images={apartmentDetails.images} />
      <TopContainerListing apartmentDetails={apartmentDetails} />
      <UnitInfo apartmentDetails={apartmentDetails} />
        <Amenities apartmentDetails={apartmentDetails}/>
    </div>
  );
};

// Top container with title, address, and pricing
const TopContainerListing = ({ apartmentDetails }) => {
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
        <div className="w-full grid grid-cols-2 gap-4 pb-4">
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


const MainImage = ({ ImageUrl }) => {
  return (
    <div className="relative w-1/2 aspect-[3.41/3] ">
      <img
        src={ImageUrl}
        alt="Listing Image Large"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

// Display unit information (bedrooms, bathrooms, sqft, amenities)
// Updated Unit Info component
const UnitInfo = ({ apartmentDetails }) => {
  return (
    <div className="border-t border-gray-300 pt-4">
      <h2 className="text-2xl font-semibold mb-4">Unit Info</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <InfoItem icon="/icons/bed.png" text={`${apartmentDetails.bedrooms} Bed`} />
          <InfoItem icon="/icons/bath.png" text={`${apartmentDetails.bathrooms} Bath`} />
          <InfoItem icon="/icons/square.svg" text={`${apartmentDetails.sqft} sqft`} />
        </div>
        <div className="space-y-2">
          <InfoItem icon="/icons/clock.svg" text={apartmentDetails.lease} />
          <InfoItem icon="/icons/zap.svg" text={apartmentDetails.utilities} />
        </div>
      </div>
    </div>
  );
};


// Updated Amenities component
const Amenities = ({ apartmentDetails }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Unit Amenities</h3>
      <div className="flex flex-wrap gap-2">
        {apartmentDetails.amenities.map((amenity, index) => (
          <AmenityTag
            key={index}
            text={amenity}
          />
        ))}
      </div>
    </div>
  );
};

// Helper Components
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    <img
      src={icon}
      alt="Icon"
      width={18}
      height={18}
      className="inline-block"
    />
    <span className="text-sm">{text}</span>
  </div>
);

const AmenityTag = ({ text }) => (
  <span className="px-0 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
    {text}
  </span>
);



// Main page rendering the Navbar and Apartment details
const IndividualListings = () => {
    return (
        <div className="w-full flex h-screen bg-gray-100">
            {/*<TopContainer/>*/}
            <Navbar/>
            <ApartmentDetailPage/>
        </div>
    );
};

export default IndividualListings;
