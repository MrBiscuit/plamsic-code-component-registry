// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import { PlasmicHomepage } from "../components/plasmic/plasmic_code_components_market/PlasmicHomepage";
import { useRouter } from "next/router";

import { useState,useEffect } from "react";
import { availableComponents } from './plasmic-host';
import Checkbox from "@/components/Checkbox";


function Homepage() {
 
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleRegister = (componentName, isChecked) => {
    if (isChecked) {
      setSelectedComponents((prev) => [...prev, componentName]);
    } else {
      setSelectedComponents((prev) => prev.filter((name) => name !== componentName));
    }
  };


const handleCopyLink = (e) => {
  e.preventDefault();
  const url = `https://mrbiscuit.github.io/plamsic-code-component-registry/plasmic-host/?components=${selectedComponents.join(",")}`
  
  navigator.clipboard.writeText(url);
  setLinkCopied(true);

  setTimeout(() => setLinkCopied(false), 1500);

};

return (
  <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
    <PlasmicHomepage
      list={{
        props: {
          children: availableComponents.map(({ metadata }) => (
            <div key={metadata.name}>
              <Checkbox
                id={metadata.name}
                children={metadata.name}
                onChange={(e) => handleRegister(metadata.name, e)}
              />
            </div>
          )),
        },
      }}
      copyButton={{
        props: {
          onClick: handleCopyLink,
        },
      }}
      prompt={{
        props:{
          show: linkCopied,
        }
      }}
    />
  </ph.PageParamsProvider>
);
}

export default Homepage;