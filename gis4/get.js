import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";
import {URLGeoJson,responseData} from "./getfunction.js";


get(URLGeoJson,responseData);

//ini tampilin map

document.addEventListener('DOMContentLoaded', () => {
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([103.61061534308766, -1.6272725906014358]),
            zoom: 13.2
        })
    });



    
});