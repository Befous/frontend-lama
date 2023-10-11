
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://us-central1-gis3-401509.cloudfunctions.net/ambilpolygon";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value) {
    let content = tableTemplate
        .replace("#TYPE#", value.geometry.type)
        .replace("#NAME#", value.properties.name)
        .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates));
    console.log(content);
    addChild("lokasi", tableTag, tableRowClass, content);
}
