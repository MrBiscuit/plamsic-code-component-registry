import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
  CodeComponentMeta,
} from "@plasmicapp/react-web/lib/host";
import { UnstyledTextareaAutosize } from "unstyled-textarea-autosize";
import { Typewriter } from "react-simple-typewriter";
import ReactMarkdown from "react-markdown";
import { Motion } from "../components/Animate";
import { Switch, Divider, Breadcrumb, Alert,Slider } from "antd";
import { TableCell } from "@/components/TableCell";
import { TableRow } from "@/components/TableRow";
import { TableBody } from "@/components/TableBody";
import { Table } from "@/components/Table";
import InlineSVG from 'react-inlinesvg';
export const antdComponents = [
  {
    component: Switch,
    metadata: {
      name: "Switch",
      importPath: "antd",
      props: {
        checked: {
          type: "boolean",
          description: "Determine whether the Switch is checked",
          defaultValue: false,
        },
        autoFocus: {
          type: "boolean",
          description: "Whether get focus when component mounted",
          defaultValue: false,
        },
        checkedChildren:{
          type:"string",
          description:"The content to be shown when the state is checked",
        },
        unCheckedChildren:{
          type:"string",
          description:"The content to be shown when the state is unchecked"
        },
        disabled: {
          type: "boolean",
          description: "Disable switch",
          defaultValue: false,
        },
        loading: {
          type: "boolean",
          description: "Loading state of switch",
          defaultValue: false,
        },
        size: {
          type: "choice",
          options: ["default", "small"],
          description: "The size of the Switch",
          defaultValue: "default",
        },
        onChange: {
          type: "eventHandler",
          argTypes: [
            {
              name: "checked",
              type: "boolean",
            },
          ],
        },
      },
    },
  },
  {
    component: Divider,
    metadata: {
      name: "Divider",
      importPath: "antd",
      props: {
        children: {
          type: "slot",
          description: "The wrapped title",
        },
        dashed: {
          type: "boolean",
          description: "Whether line is dashed",
          defaultValue: false,
        },
        orientation: {
          type: "choice",
          options: ["left", "right", "center"],
          description: "The position of title inside divider",
          defaultValue: "center",
        },
        orientationMargin: {
          type: "number",
          description: "The margin-left/right in pixels (without units)",
        },
        plain: {
          type: "boolean",
          description: "Divider text show as plain style",
          defaultValue: true,
        },
        style: {
          type: "string",
          description: "The style object of container represented as a string",
        },
        type: {
          type: "choice",
          options: ["horizontal", "vertical"],
          description: "The direction type of divider",
          defaultValue: "horizontal",
        },
      },
    },
  },
  {
    component: Breadcrumb,
    metadata: {
      name: "Breadcrumb",
      importPath: "antd",
      props: {
        itemRender: {
          type: "function",
          description: "Custom item renderer",
          argTypes: [
            {
              name: "route",
              type: "object",
            },
            {
              name: "params",
              type: "object",
            },
            {
              name: "routes",
              type: "array",
            },
            {
              name: "paths",
              type: "array",
            },
          ],
        },
        params: {
          type: "object",
          description: "Routing parameters",
        },
        items: {
          type: "array",
          description: "The routing stack information of router",
          itemTypes: ["RouteItemType", "SeparatorType"],
          defaultValue: [
            {
              title: "Home",
            },
            {
              title: "Application Center",
              href: "",
            },
            {
              title: "Application List",
              href: "",
            },
            {
              title: "An Application",
            },
          ],
        },
        separator: {
          type: "string",
          description: "Custom separator",
          defaultValue: "/",
        },
      },
    },
  },
  {
    component: Alert,
    metadata: {
        name: "Alert",
        importPath: "antd",
        props: {
            action: {
                type: "slot",
                description: "The action of Alert"
            },
            afterClose: {
                type: "eventHandler",
                description: "Called when close animation is finished",
                argTypes: []
            },
            banner: {
                type: "boolean",
                description: "Whether to show as banner",
                defaultValue: false
            },
            closeIcon: {
                type: "boolean",      
                description: "Whether to display the close icon",
                defaultValue: true
            },
            description: {
                type: "slot",
                description: "Additional content of Alert"
            },
            icon: {
                type: "slot",
                description: "Custom icon, effective when `showIcon` is true"
            },
            message: {
                type: "slot",
                description: "Content of Alert"
            },
            showIcon: {
                type: "boolean",
                description: "Whether to show icon",
                defaultValue: false
            },
            type: {
                type: "choice",
                options: ["success", "info", "warning", "error"],
                description: "Type of Alert styles",
                defaultValue: "info"
            },
            onClose: {
                type: "eventHandler",
                description: "Callback when Alert is closed",
                argTypes: []
            }
        }
    }
  },{
    component: Slider,
    metadata: {
        name: "Slider",
        importPath: "antd",
        props: {
            autoAdjustOverflow: {
                type: "boolean",
                description: "Whether to automatically adjust the popup position",
                defaultValue: true
            },
            autoFocus: {
                type: "boolean",
                description: "Whether get focus when component mounted",
                defaultValue: false
            },
            defaultValue: {
                type: "array",
                description: "The default value of slider.",
                defaultValue: [0, 0]
            },
            disabled: {
                type: "boolean",
                description: "If true, the slider will not be intractable",
                defaultValue: false
            },
            keyboard: {
                type: "boolean",
                description: "Support using keyboard to move handlers",
                defaultValue: true
            },
            dots: {
                type: "boolean",
                description: "Whether the thumb can drag over tick only",
                defaultValue: false
            },
            included: {
                type: "boolean",
                description: "Make effect when `marks` not null",
                defaultValue: true
            },
            marks: {
                type: "object",
                description: "Tick mark of Slider"
            },
            max: {
                type: "number",
                description: "The maximum value the slider can slide to",
                defaultValue: 100
            },
            min: {
                type: "number",
                description: "The minimum value the slider can slide to",
                defaultValue: 0
            },
            range: {
                type: "boolean",
                description: "Dual thumb mode",
                defaultValue: false
            },
            reverse: {
                type: "boolean",
                description: "Reverse the component",
                defaultValue: false
            },
            step: {
                type: "number",
                description: "The granularity the slider can step through values.",
                defaultValue: 1
            },
            tooltip: {
                type: "object",
                description: "The tooltip relate props"
            },
            value: {
                type: "array",
                description: "The value of slider."
            },
            vertical: {
                type: "boolean",
                description: "If true, the slider will be vertical",
                defaultValue: false
            },
            onAfterChange: {
                type: "eventHandler",
                argTypes: [
                    {
                        name: "value",
                        type: "number"
                    }
                ]
            },
            onChange: {
                type: "eventHandler",
                argTypes: [
                    {
                        name: "value",
                        type: "number"
                    }
                ]
            },
            trackStyle: {
                type: "object",
                description: "The style of slider track (the active range)"
            },
            railStyle: {
                type: "object",
                description: "The style of slider rail (the background)"
            },
            handleStyle: {
                type: "object",
                description: "The style of slider handle"
            }
        }
    }
}
];

export const otherComponents = [
  {
    component: Table,
    metadata: {
      name: "Table",
      importPath: "./components/Table",
      props: {
        children: {
          type: "slot",
          description: "The content of the table, usually TableHeader and TableBody",
        },
      },
    },
  },
  {
    component: TableBody,
    metadata: {
      name: "TableBody",
      importPath: "./components/TableBody",
      props: {
        children: {
          type: "slot",
          description: "The content of the table body, usually TableRow",
        },
      },
    },
  },
  {
    component: TableRow,
    metadata: {
      name: "TableRow",
      importPath: "./components/TableRow",
      props: {
        children: {
          type: "slot",
          description: "The content of the table row, usually TableCell",
        },
      },
    },
  },
  {
    component: TableCell,
    metadata: {
      name: "TableCell",
      importPath: "./components/TableCell",
      props: {
        children: {
          type: "slot",
          description: "The content of the table cell",
        },
        isHeader: {
          type: "boolean",
          description: "Whether this cell is a header cell (th) or a regular cell (td)",
          defaultValue: false,
        },
      },
    },
  },
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
    component: Motion,
    metadata: {
      name: "Motion",
      importPath: "./components/Animate",
      props: {
        from: { type: "object" },
        to: { type: "object" },
        isChildren: { type: "boolean", defaultValue: false },
        whileInView: { type: "object" },
        whileHover: { type: "object" },
        whileTap: { type: "object" },
        children: { type: "slot" },
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
  },
  {
    component: InlineSVG,
    metadata: {
      name: "InlineSVG",
      importPath: "react-inlinesvg",
      isdefaultExport: true,
      props: {
        src: {
          type: "dateString",
          description: "The URL or string of the SVG file to load",
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
const allComponents = [...otherComponents, ...antdComponents];

componentsToRegister.forEach((componentName) => {
  const component = allComponents.find(
    (comp) => comp.metadata.name === componentName
  );

  if (component) {
    registerComponent(component.component, component.metadata);
  }
});


export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
