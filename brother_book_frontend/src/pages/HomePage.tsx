import { BrotherCardList } from "../components/BrotherCardList"
import { SearchBar } from "../components/SearchBar"
import { getBrothersFromFile } from "../lib/models"

export const HomePage: React.FC = () => {
    return <>
        <SearchBar />
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <BrotherCardList brothers={getBrothersFromFile()} />
    </>
}
