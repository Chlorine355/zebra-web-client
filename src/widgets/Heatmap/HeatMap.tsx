import { useEffect, useRef, useState } from "react";
import styles from './HeatMap.module.scss'
import { loadGeoData } from "./lib/helpers";
import { CENTER } from "./model/data/data";
import { Button } from "antd";


export const Heatmap = () => {
    const [mapInstance, setMapInstance] = useState<ymaps.Map | null>(null);
    const [heatmapInstance, setHeatmapInstance] = useState<any>(null);

    const mapRef = useRef<HTMLDivElement | null>(null);

    const initAll = () => {
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

            loadGeoData().then((response) => {
                window.ymaps.modules.require(['Heatmap'], (Heatmap) => {
                    const heatmap = new Heatmap(response.items);
                    heatmap.setMap(newMap);
                    setHeatmapInstance(heatmap)
                });
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
    }

    useEffect(initAll, [mapRef.current]);

    const reloadHandler = () => {
        loadGeoData().then((response) => {
            window.ymaps.modules.require(['Heatmap'], () => {
                heatmapInstance.setData(response.items);
            });
        })
    }

    return <><Button className={styles.button} onClick={reloadHandler}>Обновить</Button><div className={styles.map} ref={mapRef}></div></>
}