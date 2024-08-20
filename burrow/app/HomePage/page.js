import React from 'react'
import Navbar from '../components/Navbar.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

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

const Header = () => {
    return (
        <p className="ml-8 mt-6 text-3xl">New Subleases in Boston</p>
    )
}

const NeighborhoodCard = ({neighborhood, index}) => {
    return (
        <button key={index} className="flex flex-col mr-6 items-center inline">
            <img src={neighborhood.imageUrl} className="max-w-none w-[108px] h-[108px] rounded-full mb-2"></img>
            <p className="text-xl w-fit mb-4">{neighborhood.name}</p>
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
        <div className="flex mx-8 my-6 w-full overflow-x-auto">
            {cards}
        </div>
    )
}

const MainPage = () => {
    return (
        <div className="flex flex-col h-screen w-[94%]">
            <TopContainer />
            <Header />
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
        <div key={index} className="flex flex-col w-1/2 pl-0 pr-4 ">
            <img
                src={JustIn.imageUrl}
                className="w-[120%] h-64 object-cover rounded-lg mb-3 max-w-md"
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
        }
    ];

    const cards = [];



    JustInListings.forEach((n, i) => {
        cards.push(<JustInCard JustIn={n} index={i}/>)
    })


    return (
        <div className="w-full p-8">
            <div className="flex space-x-4">
                {JustInListings.map((n, i) => (
                    <JustInCard JustIn={n} index={i} key={i} />
                ))}
            </div>
        </div>
    );
};



export default HomePage
