import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";


const SideBar = () => {
    return (
        <div className="border-r border-state-500 p-4 flex flex-col">
            <SearchInput />
            <Conversations />
            <div className="divider px-3"></div>            
            <LogoutBtn />
        </div>
    )
}

export default SideBar;