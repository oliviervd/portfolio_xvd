import React from "react";

// reusable functions to fetch information from google spreadsheet.
export function fetchID(i) {
    return i.id;
}

export function fetchVimeo(i) {
    let vimeo;
    if (i.vimeo !== "") {
        vimeo = i.vimeo;
    }
    return vimeo
}

export function fetchHighlight(i) {
    let highlight;
    highlight = i.highlight === "YES";
    return highlight
}


export function fetchId(i) {
    let id;
    if (i.id !== "") {
        id = i.id
    }
    return id;
}

export function fetchType(i) {
    let type;
    if (i.type !== "") {
        type = i.type; // narrative content or branded content
    } else {
        type = "unclassified" // if no type classified.
    }
    return type;
}

export function fetchTitle(i) {
    if (i.title !== ""){
        return i.title
    }
}

export function fetchTheaterMovie(i) {
    let id;
    if (i.theater === 'yes') {
        id = i.vimeo
    }
    return id;
}

export function fetchDescription(i) {
    if (i.description !== "") {
        return i.description;
    }
}

export function fetchDirectedBy(i) {
    if (i.directed_by !== "") {
        return <>{i.directed_by}</>
    };
}

export function fetchProducedBy(i) {
    if (i.produced_by !== "") {
        return <>{i.produced_by}</>
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

export function fetchImage(i) {
    if (i.images !== "") {
        let im = i.images
        return im;
    }
}