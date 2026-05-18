import { useEffect, useRef, useState } from "react";
import { data } from "./model/data/mockData";
import styles from './HeatMap.module.scss'

const CENTER = [56.311211, 43.963440]

export const Heatmap = () => {
    const [mapInstance, setMapInstance] = useState<ymaps.Map | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function initMap() {
            if (mapInstance || !mapRef.current) return;
            const newMap = new window.ymaps.Map(
                mapRef.current,
                {
                    type: 'yandex#map',
                    center: CENTER,
                    zoom: 12,
                    controls: [],
                },
                {
                    projection: window.ymaps.projection.sphericalMercator,
                },
            );

            setMapInstance(newMap);

            newMap.behaviors.disable('routeEditor');
            newMap.options.set('openBalloonOnClick', false);
            newMap.cursors.push('pointer');

            window.ymaps.modules.require(['Heatmap'], (Heatmap) => {
                const heatmap = new Heatmap(data);
                heatmap.setMap(newMap);
            })
        }

        if (!mapInstance) {
            window.ymaps.ready(initMap);
        }

        return () => {
            if (mapInstance) {
                mapInstance.destroy();
                setMapInstance(null);
            }
        };
    }, [mapRef.current]);

    return <div className={styles.map} ref={mapRef}></div>
}