import React from 'react';
import Navbar from '../components/Navbar.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import TopContainer from '../components/TopContainer.jsx'


const Header = () => {
    return (
        <p className="ml-8 mt-6 text-3xl">New Subleases in Boston</p>
    )
}

const NeighborhoodCard = ({neighborhood, index}) => {
    return (
        <button key={index} className="flex flex-col mr-6 items-center inline">
            <img src={neighborhood.imageUrl} className="max-w-none max-h-none w-[128px] min-h-[128px] rounded-full mb-2"></img>
            <p className="text-xl w-fit">{neighborhood.name}</p>
        </button>
    )
}

const Neighborhoods = () => {
    const neighborhoods = [
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Back Bay",
            imageUrl: "/back_bay.jpg",
        },
        {
            name: "Roxbury",
            imageUrl: "/Roxbury_mural.jpg",
        },
        {
            name: "North End",
            imageUrl: "/NorthEnd2.jpg",
        },
        {
            name: "South End",
            imageUrl: "/South_end.jpg",
        },
        {
            name: "West End",
            imageUrl: "/TD_garden.jpg",
        },
        {
            name: "Chinatown",
            imageUrl: "/Chinatown_gate.jpeg",
        },
        {
            name: "Seaport",
            imageUrl: "/Seaport.jpeg",
        },
        {
            name: "Cambridge",
            imageUrl: "/Cambridge.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
        {
            name: "Fenway",
            imageUrl: "/fenway.jpeg",
        },
    ]
    const cards = [];
    neighborhoods.forEach((n, i) => {
        cards.push(<NeighborhoodCard neighborhood={n} index={i}/>)
    })

    return (
        <div className="flex mx-8 mt-6 min-h-[11.5rem] overflow-x-auto">
            {cards}
        </div>
    )
}

const MainPage = () => {
    return (
        <div className="flex flex-col h-screen w-[94%]">
            <TopContainer />
        {/*<Header />*/}
            <SectionTitle text="Neighborhoods" />
            <Neighborhoods />
            <SectionTitle text="Just In" />
            <JustInSection/>
        </div>
    )
}

const HomePage = () => {
    return (
        <main className="flex bg-white h-screen w-screen">
            <Navbar />
            <MainPage />
        </main>
    )
}

const JustInCard = ({ JustIn, index }) => {
    return (
        <div key={index} className="flex flex-col pl-0 pr-4 w-1/2 inline-block">
            <img
                src={JustIn.imageUrl}
                className="max-h-80 rounded-lg mb-4"
                alt={JustIn.name}
            />
            <div className="text-lg font-semibold">{JustIn.name}</div>
            <div className="text-gray-500 text-sm">{JustIn.neighborhood}</div>
            <div className="text-sm">{JustIn.price} Rent • {JustIn.date}</div>
        </div>
    );
};

const JustInSection = () => {
    const JustInListings = [
        {
            name: "Lightview",
            neighborhood: "Roxbury",
            price: "$1900-$2300",
            date: "9/1/2024",
            imageUrl: "/fenway.jpeg"
        },
        {
            name: "Garrison Square",
            neighborhood: "Back Bay",
            price: "$3700-$6100",
            date: "9/6/2024",
            imageUrl: "/Garrison_Square.jpeg"
        },
        {
            name: "12 Commonwealth",
            neighborhood: "Back Bay",
            price : "$2995-$4325",
            date: "9/2/2024",
            imageUrl: "/12Commonwealth.webp"
        }

    ];

    const cards = [];
    JustInListings.forEach((n, i) => {
        cards.push(<JustInCard JustIn={n} index={i}/>)
    })


    return (
        <div className="w-full mx-8 mt-4 grid grid-cols-3 gap-x-3">
            {JustInListings.map((n, i) => (
                <JustInCard JustIn={n} index={i} key={i} />
            ))}
        </div>
    );
};



export default HomePage

