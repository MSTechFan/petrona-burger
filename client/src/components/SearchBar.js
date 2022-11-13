import { useState } from 'react' 
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux'


// eslint-disable-next-line react/prop-types
const SearchBar = ( {searchAction} ) => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search product..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={e => setInput(e.target.value)}/>
                <span className="input-group-text" id="basic-addon2"><BiSearchAlt2 onClick={() => dispatch(searchAction(input))}/></span>
        </div>
    )
}

export default SearchBar