import Navbar from "../app/components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="w-auto h-[600px] mx-8 my-1 bg-slate-700 rounded-[32px]">
                <ul className="text-slate-300 text-3xl lg:text-5xl text-center">
                    <li className="pt-[150px] px-3">Something interesting would go here.</li>
                    <li className="pt-[150px] px-3">This says something about Burrow.</li>
                    <li className="px-3">Here's another cool fact about Burrow.</li>
                </ul>
            </main>
        </div>
   );
}
