

const CarCard = ({img , heading , type , description}) => {
  return (
    <div className='w-[300px] border-2 border-black flex flex-col  h-[400px]'>
        
        <img className="w-full " src={img} />

        <div className='py-4 px-4'>
            <h3 className="text-xl font-semibold mb-2">{heading}</h3>
            <h4 className="text-base mb-6">{type}</h4>
            <p>{description}</p>
        </div>



    </div>
  )
}

export default CarCard