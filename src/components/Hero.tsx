
const Hero = () => {
    return (
        <>
            <div className="w-full px-4">
                <img className="relative h-72 w-full object-cover" src="https://images.pexels.com/photos/2784759/pexels-photo-2784759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="absolute left-16 top-1/4 flex flex-col">
                    <h1 className="text-5xl text-white pb-5">Search you photos here</h1>
                    <input className="w-96 p-3 rounded-full" type="text" />
                        <div className="flex space-x-2 pl-5 pt-2">
                        <p className="text-white">Popular:</p>
                        <button className="text-white underline">Beach</button>
                        <button className="text-white underline">Sunset</button>
                        <button className="text-white underline">City</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero