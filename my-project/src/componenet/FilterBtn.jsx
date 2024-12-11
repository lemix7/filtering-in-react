

const FilterBtn = ({btnText , onClick}) => {

  return (
    <div>
       
       <button className="bg-green-500 py-3 px-4 rounded-xl capitalize font-semibold hover:bg-green-400 active:bg-green-600" onClick={onClick}>{btnText}</button>
       
       
    </div>
  )
}

export default FilterBtn