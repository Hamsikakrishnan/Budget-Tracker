import Link from "next/link";
export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-black py-8 px-8">
            <Link className="text-white text-3xl font-bold" href={'/'}>
              Budget Tracker</Link>
            <Link className="bg-green-300 text-black px-4 border border-none rounded-sm py-3 text-xl font-bold " href={'/'}>
            Add Expense / Savings</Link>
        </nav>
    );
}