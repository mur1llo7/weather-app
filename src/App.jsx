import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './App.module.css'

function App () {
  const { weather, loading, error, search } = useWeather();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather</h1>

      <SearchBar onSearch={search} />

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
