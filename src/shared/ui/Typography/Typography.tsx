import { Typography as TypographyAnt } from "antd";
import { LinkProps as LinkPropsAnt } from "antd/es/typography/Link";
import { ParagraphProps as ParagraphPropsAnt } from "antd/es/typography/Paragraph";
import { TextProps as TextPropsAnt } from "antd/es/typography/Text";
import { TitleProps as TitlePropsAnt } from "antd/es/typography/Title";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";

type LinkProps = LinkPropsAnt;
type ParagraphProps = ParagraphPropsAnt;
type TextProps = TextPropsAnt;
type TitleProps = TitlePropsAnt;

export const Typography = (
  props: JSX.IntrinsicAttributes & TextProps & RefAttributes<HTMLSpanElement>,
) => {
  return <TypographyAnt.Text {...props} />;
};

const Title = (
  props: JSX.IntrinsicAttributes & TitleProps & RefAttributes<HTMLElement>,
) => {
  return <TypographyAnt.Title {...props} />;
};

const Link = (
  props: JSX.IntrinsicAttributes & LinkProps & RefAttributes<HTMLElement>,
) => {
  return <TypographyAnt.Link {...props} />;
};

const Paragraph = (
  props: JSX.IntrinsicAttributes & ParagraphProps & RefAttributes<HTMLElement>,
) => {
  return <TypographyAnt.Paragraph {...props} />;
};

const Text = (
  props: JSX.IntrinsicAttributes & TextProps & RefAttributes<HTMLSpanElement>,
) => {
  return <TypographyAnt.Text {...props} />;
};

Typography.Title = Title;
Typography.Link = Link;
Typography.Paragraph = Paragraph;
Typography.Text = Text;

export type { LinkProps, ParagraphProps, TextProps, TitleProps };
