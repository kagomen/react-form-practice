import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

export default function Email(props) {
  return (
    <Html>
      <Tailwind>
        <Heading className="text-lg">Welcomem {props.firstName}!</Heading>
        <Text>テストです。テストです。</Text>
        <Button
          href="https://example.com"
          className="rounded bg-emerald-500 text-white px-3 py-2"
        >
          リブラク
        </Button>
      </Tailwind>
    </Html>
  );
}
