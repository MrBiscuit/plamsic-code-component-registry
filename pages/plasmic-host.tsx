import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";
import UnstyledTextareaAutosize from "unstyled-textarea-autosize";
import Typewriter from "react-simple-typewriter";
import ReactMarkdown from "react-markdown";
import CountUp from "react-countup";

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
      props: {
        children: {
          type: "string",
          defaultValue: "Hello world",
          displayName: "Raw Markdown",
        },
      },
    },
  },
  {
    component: CountUp,
    metadata: {
      name: "CountUp",
      importPath: "react-countup",
      props: {
        start: {
          type: "number",
          description: "The number to start counting from",
          defaultValue: 0,
        },
        end: {
          type: "number",
          description: "The number to count up to",
        },
        duration: {
          type: "number",
          description: "Duration in seconds",
          defaultValue: 2.75,
        },
        delay: {
          type: "number",
          description:
            "Number of seconds to delay before starting the animation",
          defaultValue: 0,
        },
        useEasing: {
          type: "boolean",
          description: "Whether to use easing functions or linear transition.",
          defaultValue: true,
        },
        decimals: {
          type: "number",
          defaultValue: 0,
        },
        separator: {
          type: "string",
          description: "The string used to separate the groups of thousands",
          defaultValue: ",",
        },
        decimal: {
          type: "string",
          description: "The string used to separate the decimal",
          defaultValue: ".",
        },
        prefix: {
          type: "string",
          description: "The string used as a prefix for the number",
          defaultValue: "",
        },
        suffix: {
          type: "string",
          description: "The string used as a suffix for the number",
          defaultValue: "",
        },
        enableScrollSpy: {
          type: "boolean",
          description: "Enables start animation when target is in view",
          defaultValue: false,
        },
      },
    },
  },
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
