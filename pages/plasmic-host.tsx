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
  },{
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
    },
    {
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
                  type: "either",
                  options: [
                      {
                          type: "number",
                          description: "Single value"
                      },
                      {
                          type: "array",
                          description: "Range value",
                          arrayType: "number"
                      }
                  ],
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
}

];

export const otherComponents = [
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

/////

interface SideModalProps {
  selectedOption?: string;
  onSelectionChange?: (selectedOption: string) => void;
  className?: string;
}

const SideModal: React.FC<SideModalProps> = ({
  selectedOption,
  onSelectionChange,
  className,
}) => {
  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    onSelectionChange && onSelectionChange(selectedOption);
  };

  return (
    <div
      className={className}
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "200px",
        height: "100%",
        overflow: "auto",
        backgroundColor: "#f0f0f0",
      }}
    >
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

const CustomPropControl: React.FC<{
  value: string;
  updateValue: (value: string) => void;
}> = ({ value, updateValue }) => {
  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    updateValue(selectedOption);
  };

  return (
    <select value={value} onChange={handleSelectionChange}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

const meta: CodeComponentMeta<SideModalProps> = {
  name: "SideModal",
  importPath: "./pages/plasmic-host",
  props: {
    selectedOption: {
      type: "custom",
      control: CustomPropControl,
    },
    normalOptions: {
      type: "choice",
      options: ["option1", "option2", "option3"],
    },
  },
};

registerComponent(SideModal, meta);

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
