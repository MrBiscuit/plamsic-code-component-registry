import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";
import {UnstyledTextareaAutosize} from "unstyled-textarea-autosize";
import {Typewriter} from "react-simple-typewriter";
import ReactMarkdown from "react-markdown";


export const availableComponents = [
  {
    component: UnstyledTextareaAutosize,
    metadata: {
      name: "UnstyledTextareaAutosize",
      importPath: "unstyled-textarea-autosize",
      props: {
        value: {
          type: "string",
        },
        onValueChange: {
          type: "eventHandler",
          argTypes: [
            {
              name: "event",
              type: "object",
            },
          ],
        },
        onFocus: {
          type: "eventHandler",
          argTypes: [
            {
              name: "event",
              type: "object",
            },
          ],
        },
      },
    },
  },
  {
    component: Typewriter,
    metadata: {
      name: "Typewriter",
      importPath: "react-simple-typewriter",
      props: {
        words: {
          type: "array",
          defaultValue: ["Hello World"],
        },
        loop: {
          type: "number",
          defaultValue: 1,
        },
        typeSpeed: {
          type: "number",
          defaultValue: 90,
        },
        deleteSpeed: {
          type: "number",
          defaultValue: 50,
        },
        delaySpeed: {
          type: "number",
          defaultValue: 1000,
        },
        cursory: {
          type: "boolean",
          defaultValue: true,
        },
        cursorStyle: {
          type: "string",
          defaultValue: "|",
        },
      },
    },
  },
  {
    component: ReactMarkdown,
    metadata: {
      name: "ReactMarkdown",
      importPath: "react-markdown",
      isDefaultExport: true,
      props: {
        children: {
          type: "string",
          defaultValue: "Hello world",
          displayName: "Raw Markdown",
        },
      },
    },
  }
];

let componentsToRegister = [];

if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  const componentsParam = urlParams.get("components");
  if (componentsParam) {
    componentsToRegister = componentsParam.split(",");
  }
}

componentsToRegister.forEach((componentName) => {
  const component = availableComponents.find(
    (comp) => comp.metadata.name === componentName
  );

  if (component) {
    registerComponent(component.component, component.metadata);
  }
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
