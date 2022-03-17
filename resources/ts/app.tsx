require("./bootstrap");
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => require(`./pages/${name}.tsx`),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

