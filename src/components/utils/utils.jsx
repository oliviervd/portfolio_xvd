import React from "react";

export function makeBold() {
    let i = 0, ps = document.getElementsByTagName("p");
    let len
    for(len = ps.length; i<len; i++)
    {
        let p = ps[i];
        p.innerHTML = p.innerHTML.replace(/\b([A-Z]{2,})\b/g, "<b>$1</b>");
    }
}
