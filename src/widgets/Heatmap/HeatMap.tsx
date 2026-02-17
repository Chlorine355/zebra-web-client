import { LOCATION } from "@shared/lib/data";
import { YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } from "@shared/lib/ymaps3";

export const Heatmap = () => {

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <YMap location={LOCATION} mode="vector">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
            </YMap>
        </div>
    );
}