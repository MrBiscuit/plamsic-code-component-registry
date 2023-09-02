import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,CodeComponentMeta
} from "@plasmicapp/react-web/lib/host";
import {UnstyledTextareaAutosize} from "unstyled-textarea-autosize";
import {Typewriter} from "react-simple-typewriter";
import ReactMarkdown from "react-markdown";
import {Motion} from "../components/Animate";
import {Switch,Divider} from 'antd'

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
                defaultValue: false
            },
            autoFocus: {
                type: "boolean",
                description: "Whether get focus when component mounted",
                defaultValue: false
            },
            disabled: {
                type: "boolean",
                description: "Disable switch",
                defaultValue: false
            },
            loading: {
                type: "boolean",
                description: "Loading state of switch",
                defaultValue: false
            },
            onChange: {
                type: "eventHandler",
                argTypes: [
                    {
                        name: "checked",
                        type: "boolean"
                    }
                ]
            }
        }
    }
},
{
  component: Divider,
  metadata: {
      name: "Divider",
      importPath: "antd",
      props: {
          children: {
              type: "slot",
              description: "The wrapped title"
          },
          className: {
              type: "string",
              description: "The className of container"
          },
          dashed: {
              type: "boolean",
              description: "Whether line is dashed",
              defaultValue: false
          },
          orientation: {
              type: "choice",
              options: ["left", "right", "center"],
              description: "The position of title inside divider",
              defaultValue: "center"
          },
          orientationMargin: {
              type: "string",
              description: "The margin-left/right between the title and its closest border (with units)"
          },
          orientationMargin: {
              type: "number",
              description: "The margin-left/right in pixels (without units)"
          },
          plain: {
              type: "boolean",
              description: "Divider text show as plain style",
              defaultValue: true
          },
          style: {
              type: "string",
              description: "The style object of container represented as a string"
          },
          type: {
              type: "choice",
              options: ["horizontal", "vertical"],
              description: "The direction type of divider",
              defaultValue: "horizontal"
          }
      }
  }
}
]




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
  },{
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
    }
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

const SideModal: React.FC<SideModalProps> = ({ selectedOption, onSelectionChange, className }) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelectionChange && onSelectionChange(selectedOption);
  };

  return (
    <div className={className} style={{ position: 'fixed', right: 0, top: 0, width: '200px', height: '100%', overflow: 'auto', backgroundColor: '#f0f0f0' }}>
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

const CustomPropControl: React.FC<{ value: string, updateValue: (value: string) => void }> = ({ value, updateValue }) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
}

const meta: CodeComponentMeta<SideModalProps> = {
  name: 'SideModal',
  importPath: './pages/plasmic-host',
  props: {
    selectedOption: {
      type: 'custom',
      control: CustomPropControl,
    },
    normalOptions:{
      type:"choice",
      options:["option1","option2","option3"],
    }
  },
};

registerComponent(SideModal, meta);

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
