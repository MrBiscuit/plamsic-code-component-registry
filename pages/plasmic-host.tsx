import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,CodeComponentMeta
} from "@plasmicapp/react-web/lib/host";
import {UnstyledTextareaAutosize} from "unstyled-textarea-autosize";
import {Typewriter} from "react-simple-typewriter";
import ReactMarkdown from "react-markdown";
import {Motion} from "../components/Animate";


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

componentsToRegister.forEach((componentName) => {
  const component = availableComponents.find(
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
