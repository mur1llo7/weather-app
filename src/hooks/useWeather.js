import { useState } from "react";
import { fetchWeather } from "../services/weatherApi";

export function useWeather(){
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


async function search(city) {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
        const data = await fetchWeather(city)
        setWeather(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
}
    return { weather, loading, error, search };
}