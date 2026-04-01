import { useState } from "react";
import styles from './SearchBar.module.css'

function SearchBar ({ onSearch }) {
    const [city, setCity] = useState('');

function handleSubmit(){
    if (city.trim() === '') return; 
    onSearch(city.trim());
}

function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit();
}

return (
    <div className={styles.wrapper}>
        <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search city..."
        className={styles.input}
        />
        <button onClick={handleSubmit} className={styles.button}>
            Search    
        </button> 

    </div>
);

}

export default SearchBar