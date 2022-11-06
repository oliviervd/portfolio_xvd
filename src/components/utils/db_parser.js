import React from "react";

// reusable functions to fetch information from google spreadsheet.

export function fetchType(i) {
    let type;
    if (i.type !== "") {
        type = i.type; // narrative content or branded content
    } else {
        type = "unclassified" // if no type classified.
    }
    return type;
}

export function fetchDescription(i) {
    if (i.description !== "") {
        return <p>{i.description}</p>;
    };
}

export function fetchDirectedBy(i) {
    if (i.directed_by !== "") {
        return <p>directed by: {i.directed_by}</p>
    };
}

export function fetchProducedBy(i) {
    if (i.produced_by !== "") {
        return <p>produced by: {i.produced_by}</p>
    };
}

export function fetchCinematographer(i) {
    if (i.cinematography !== "") {
        return <p>cinematography: {i.cinematography}</p>
    };
}

export function fetchArtDirection(i) {
    if (i.art_direction !== "") {
        return <p>art direction: {i.art_direction}</p>
    };
}

export function fetchTags(i) {
    if (i.tagList !== "") {
        let tags = i.tagList;
        return tags;
    }
}
