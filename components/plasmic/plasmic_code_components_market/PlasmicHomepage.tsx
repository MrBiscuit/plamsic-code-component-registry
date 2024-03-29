// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8PziLNLiwDrVWxn4w3TkNb
// Component: OmsGOMJOWuYk

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import RegisterButton from "../../RegisterButton"; // plasmic-import: tdd4VyVt1w/component
import Checkbox from "../../Checkbox"; // plasmic-import: J2h6uk0-o-l/component
import Prompt from "../../Prompt"; // plasmic-import: c4S_3UOZbZ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_code_components_market.module.css"; // plasmic-import: 8PziLNLiwDrVWxn4w3TkNb/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: OmsGOMJOWuYk/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  copyButton?: p.Flex<typeof RegisterButton>;
  antlist?: p.Flex<"div">;
  checkbox3?: p.Flex<typeof Checkbox>;
  checkbox4?: p.Flex<typeof Checkbox>;
  list?: p.Flex<"div">;
  checkbox?: p.Flex<typeof Checkbox>;
  checkbox2?: p.Flex<typeof Checkbox>;
  prompt?: p.Flex<typeof Prompt>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "checkbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox2.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox3.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox4.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ycyCh
              )}
            >
              {"Code Component Market for Plasmic"}
            </div>
            <RegisterButton
              data-plasmic-name={"copyButton"}
              data-plasmic-override={overrides.copyButton}
              className={classNames("__wab_instance", sty.copyButton)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__h3Vkr)}>
            <div className={classNames(projectcss.all, sty.freeBox___0MbDx)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dlOwx
                )}
              >
                {"Antd Components:"}
              </div>
              <div
                data-plasmic-name={"antlist"}
                data-plasmic-override={overrides.antlist}
                className={classNames(projectcss.all, sty.antlist)}
              >
                <Checkbox
                  data-plasmic-name={"checkbox3"}
                  data-plasmic-override={overrides.checkbox3}
                  className={classNames("__wab_instance", sty.checkbox3)}
                  isChecked={
                    p.generateStateValueProp($state, [
                      "checkbox3",
                      "isChecked"
                    ]) ?? false
                  }
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "checkbox3",
                      "isChecked"
                    ])(eventArgs[0]);
                  }}
                >
                  {"UnstyledTextareaAutosize"}
                </Checkbox>
                <Checkbox
                  data-plasmic-name={"checkbox4"}
                  data-plasmic-override={overrides.checkbox4}
                  className={classNames("__wab_instance", sty.checkbox4)}
                  isChecked={
                    p.generateStateValueProp($state, [
                      "checkbox4",
                      "isChecked"
                    ]) ?? false
                  }
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "checkbox4",
                      "isChecked"
                    ])(eventArgs[0]);
                  }}
                >
                  {"Typewriter"}
                </Checkbox>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ii0Vv)}>
              <div className={classNames(projectcss.all, sty.freeBox__mpeX7)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__vbsoe)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3RMVu
                )}
              >
                {"Other Components:"}
              </div>
              <div
                data-plasmic-name={"list"}
                data-plasmic-override={overrides.list}
                className={classNames(projectcss.all, sty.list)}
              >
                <Checkbox
                  data-plasmic-name={"checkbox"}
                  data-plasmic-override={overrides.checkbox}
                  className={classNames("__wab_instance", sty.checkbox)}
                  isChecked={
                    p.generateStateValueProp($state, [
                      "checkbox",
                      "isChecked"
                    ]) ?? false
                  }
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "checkbox",
                      "isChecked"
                    ])(eventArgs[0]);
                  }}
                >
                  {"UnstyledTextareaAutosize"}
                </Checkbox>
                <Checkbox
                  data-plasmic-name={"checkbox2"}
                  data-plasmic-override={overrides.checkbox2}
                  className={classNames("__wab_instance", sty.checkbox2)}
                  isChecked={
                    p.generateStateValueProp($state, [
                      "checkbox2",
                      "isChecked"
                    ]) ?? false
                  }
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "checkbox2",
                      "isChecked"
                    ])(eventArgs[0]);
                  }}
                >
                  {"Typewriter"}
                </Checkbox>
              </div>
            </div>
          </div>
          <Prompt
            data-plasmic-name={"prompt"}
            data-plasmic-override={overrides.prompt}
            className={classNames("__wab_instance", sty.prompt)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "copyButton",
    "antlist",
    "checkbox3",
    "checkbox4",
    "list",
    "checkbox",
    "checkbox2",
    "prompt"
  ],
  header: ["header", "copyButton"],
  copyButton: ["copyButton"],
  antlist: ["antlist", "checkbox3", "checkbox4"],
  checkbox3: ["checkbox3"],
  checkbox4: ["checkbox4"],
  list: ["list", "checkbox", "checkbox2"],
  checkbox: ["checkbox"],
  checkbox2: ["checkbox2"],
  prompt: ["prompt"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  copyButton: typeof RegisterButton;
  antlist: "div";
  checkbox3: typeof Checkbox;
  checkbox4: typeof Checkbox;
  list: "div";
  checkbox: typeof Checkbox;
  checkbox2: typeof Checkbox;
  prompt: typeof Prompt;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    copyButton: makeNodeComponent("copyButton"),
    antlist: makeNodeComponent("antlist"),
    checkbox3: makeNodeComponent("checkbox3"),
    checkbox4: makeNodeComponent("checkbox4"),
    list: makeNodeComponent("list"),
    checkbox: makeNodeComponent("checkbox"),
    checkbox2: makeNodeComponent("checkbox2"),
    prompt: makeNodeComponent("prompt"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
