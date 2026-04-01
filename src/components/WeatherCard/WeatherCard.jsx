import styles from './WeatherCard.module.css'

function WeatherCard({ data }) {
    const { name, sys, main, weather, wind } = data;

    return (
        <div className={styles.card}>
            <div className={styles.location}>
                <h2 className={styles.city}>{name}</h2>
                <p className={styles.country}>{sys.country}</p>
            </div>

        <div className={styles.tempRow}>
            <span className={styles.temp}>{Math.round(main.temp)}°C</span>
            <p className={styles.description}>{weather[0].description}</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.stats}>
            <div className={styles.stat}>
                <span className={styles.statLabel}>Humidity</span>
                <span className={styles.statValue}>{main.humidity}%</span>
            </div>

        <div className={styles.stat}>
            <span className={styles.statLabel}>Wind</span>
            <span className={styles.statValue}>{Math.round(wind.speed)} km/h</span>
        </div>

        <div className={styles.stat}>
            <span className={styles.statLabel}>Feels like</span>
            <span className={styles.statValue}>{Math.round(main.feels_like)}°C</span>

        </div>

        </div>

        </div>
    );
}

export default WeatherCard;