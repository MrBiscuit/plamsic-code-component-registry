// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicRegisterButton,
  DefaultRegisterButtonProps
} from "./plasmic/plasmic_code_components_market/PlasmicRegisterButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";


export interface RegisterButtonProps extends DefaultRegisterButtonProps {}

function RegisterButton_(
  props: RegisterButtonProps,
  ref: HTMLElementRefOf<"div">
) {


  return <PlasmicRegisterButton root={{ ref }} {...props} />;
}

const RegisterButton = React.forwardRef(RegisterButton_);
export default RegisterButton;
