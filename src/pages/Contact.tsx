import { useState, useEffect } from "react"
const Contact = () => {

  const [imagenes, setImagenes] = useState([]);


  useEffect(() => {

    const consultaAPI = async () => {
      try {
        const apiKey = 'SeEsFUXe7t1gK7YwXgfhf4qtMbqqsFDM5nVmZh1liPQkQ7gWEOUfp1hD';
        /* const query = 'world'; */
        const randomSearch = Math.round((Math.random() + 1) * 10);
        const response = await fetch(`https://api.pexels.com/v1/curated?page=${randomSearch}d&per_page=1`, {
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
    <>
      <div className="flex justify-center  py-16">
        <div className='w-2/6 flex flex-col justify-center items-center gap-8 border-2 border-black'>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <form className="flex flex-col gap-2" action="">
            <label htmlFor="">Name:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="text" />
            <label htmlFor="">Message:</label>
            <textarea name="" id="" cols={35} rows={6} style={{ resize: 'none' }} ></textarea>
            <button className="bg-black text-white mt-4 p-2">Send</button>
          </form>
        </div>
        <div className="w-2/6">
          <img src={imagenes.length > 0 ? imagenes[0].src.portrait : ''} alt="" />
        </div>
      </div>
    </>
  )
}

export default Contact

