import NavBar from "../Components/navbar/NavBar";
import { useEffect, useState } from "react";
import { getSeries } from "../api/ApiFunction";
import DotLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Series(){
    const [comics, setComics] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [color, setColor] = useState("#E53610")

    useEffect(() => {
        const fetchAdminUser = async () => {
            try {
                const response = await getSeries();
                setComics(response.data.data.results);
                setIsLoading(false);
                setColor("#ffffff")
            } catch (error) {
                return error
            }
        };
    
        fetchAdminUser();
        }, []);
        console.log(comics)


        if (isLoading) {
            return (
                <>
                    <div>
                        <NavBar/>
                    </div>
                    <div className="w-4/4 h-screen flex items-center justify-center">
                    <DotLoader
                        color={color}
                        loading={isLoading}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    </div>
                </>
            );
        }

        return (
            <>
            <div>
                <NavBar/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
                {comics.map((comic) => {
                const imageUrl = comic.thumbnail.path + '.' + comic.thumbnail.extension;

                return (
                    <div className="card w-3/4 h-full relative d-flex flex-row justify-center items-center place-self-center">
                    <img src={imageUrl} alt="super-hero-img" className="w-4/4 h-full"/>
                    <div className="card-image absolute top-5 left-0 w-full flex flex-col items-center">
                        <div className="w-4/6 bg-yellow-400 shadow-2xl border-4 border-slate-700 text-center">
                        <h1>{comic.title}</h1>
                        </div>
                    </div>
                    <div className="card-description absolute bottom-0 w-full flex flex-col items-center">
                        <div className="w-full bg-yellow-400 shadow-2xl border-4 border-slate-700 ps-2">
                            <p>Type: {comic.type}</p>
                            <p>Learn more: <a href={comic.urls[0].url} target="blank">Click here</a></p>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            </>
        );
}