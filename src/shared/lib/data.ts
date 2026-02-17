import type { LngLat, YMapCenterZoomLocation } from "@yandex/ymaps3-types";

export const LOCATION: YMapCenterZoomLocation = {
    center: [44.00205, 56.32867],
    zoom: 13
};

export type Point = {coordinates: LngLat; value: number};

export function getDefaultMapProps() {
    return {
        location: LOCATION,
        projection: ymaps3.projections.sphericalMercator
    };
}
