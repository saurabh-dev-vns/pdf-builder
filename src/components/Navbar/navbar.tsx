export const NavBar = () => {
    return (
        <nav className="relative dark:text-white dark:bg-elevatedSurface-dark flex w-full justify-between items-center pt-2 pb-2 pl-8 pr-8 border-b-2 dark:border-border-dark">
            <div>
                <a className="text-2xl uppercase font-extrabold" href="#">logo</a>
            </div>
            <div className="w-2/5">
                <ul className="flex flex-row w-full justify-evenly items-center">
                    <li className="dark:hover:bg-nav-dark pt-1 pb-1 pl-3 pr-3 rounded-full">
                        <a 
                            href="#" 
                            className="font-medium capitalize"
                        >
                            home
                        </a>
                    </li>
                    <li className="dark:hover:bg-nav-dark pt-1 pb-1 pl-3 pr-3 rounded-full ">
                        <a 
                            href="#" 
                            className="font-medium capitalize"
                        >
                            contact
                        </a>
                    </li>
                    <li className="dark:hover:bg-nav-dark pt-1 pb-1 pl-3 pr-3 rounded-full ">
                        <a 
                            href="#" 
                            className="font-medium capitalize"
                        >
                            about
                        </a>
                    </li>
                    <li className="dark:hover:bg-nav-dark pt-1 pb-1 pl-3 pr-3 rounded-full ">
                        <a 
                            href="#" 
                            className="font-medium capitalize"
                        >
                            prices
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
