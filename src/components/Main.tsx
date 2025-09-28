import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useState, useEffect } from 'react';
const Main = () => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {

        const consultaAPI = async () => {
            try {
                const apiKey = 'SeEsFUXe7t1gK7YwXgfhf4qtMbqqsFDM5nVmZh1liPQkQ7gWEOUfp1hD';
                /* const query = 'world'; */
                const randomSearch = Math.round((Math.random() + 1) * 10);
                const response = await fetch(`https://api.pexels.com/v1/curated?page=${randomSearch}&per_page=8`, {
                    headers: {
                        'Authorization': apiKey
                    }
                });
                if (!response.ok) {
                    throw new Error('Error no se pudo cargar las imagenes')
                }

                const data = await response.json();
                setImagenes(data.photos);
            } catch (error) {
                console.log('Error en la consulta a la api');
            }
        }
        consultaAPI();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="w-11/12 pt-14 pb-14">
                <h2 className="text-3xl pb-6 font-medium">Popular search</h2>
                <div className="grid grid-cols-4 gap-4">
                    {imagenes.map(imagen => (
                        <div key={imagen.id}>
                            <img src={imagen.src.portrait} alt={imagen.url} />
                            <h2>{imagen.photographer}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main


