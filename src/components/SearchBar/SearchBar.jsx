import Input from '../../ui/Input/Input';

const SearchBar = ({ inputState, handleChange }) => {

    return (
        <form>
            <label className='h4' htmlFor="track">
                Track you're looking for:
            </label>
            <Input 
                type="text"
                name="track"
                id="track"
                isRequired={ true }
                value={ inputState }
                eventHandler={ handleChange }
            />
            
        </form>
    )
}

export default SearchBar