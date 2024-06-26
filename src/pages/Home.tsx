import Logo from "../components/Logo";
import Name from "../components/Name";
import Description from "../components/Description";
import SearchBar from "../components/SearchBar";
import ViewAllLink from "../components/ViewAllLink";
import '../assets/css/home.css'
import { ThemeColorProps } from "../..";

export default function Home({selectedColor}:ThemeColorProps) {
  
  
  return (
    <div>
      <div className="home-container">
        <Logo width={382} height={200}/>
        <div className="max-w-[370px] w-full">
          <Name size={48} selectedColor={selectedColor}/>
          <Description />
        </div>
        <div className="max-w-[370px] w-full">
          <SearchBar selectedColor={selectedColor}/>
        </div>
        <div className="mt-4">
          <ViewAllLink />
        </div>
      </div>
    </div>
  );
}
