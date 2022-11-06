import React from "react";

// reusable functions to fetch information from google spreadsheet.

export function fetchDescription(item){
    if (item.description !== "") {
        return <p>{item.description}</p>;
    };
}

export function fetchDirectedBy(item){
    if (item.directed_by !== "") {
        return <p>directed by: {item.directed_by}</p>
    };
}

export function fetchProducedBy(item){
    if (item.produced_by !== "") {
        return <p>produced by: {item.produced_by}</p>
    };
}

export function fetchCinematographer(item){
    if (item.cinematography !== "") {
        return <p>cinematography: {item.cinematography}</p>
    };
}

export function fetchArtDirection(item){
    if (item.art_direction !== "") {
        return <p>art direction: {item.art_direction}</p>
    };
}
