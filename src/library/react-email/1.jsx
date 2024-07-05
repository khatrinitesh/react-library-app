import React from 'react'
import { Markdown,Preview,Section, Column, Row, Text  } from "@react-email/components";
import { Heading } from 'lucide-react';


const ReactEmailApp = () => {
  return (
    <>
     
      <Preview>Email preview text</Preview>
      <Section>
      <Text>Hello World</Text>
    </Section>

    {/* Formatted with `rows` and `columns` */}
     <Section>
      <Row>
        <Column>Column 1, Row 1</Column>
        <Column>Column 2, Row 1</Column>
      </Row>
      <Row>
        <Column>Column 1, Row 2</Column>
        <Column>Column 2, Row 2</Column>
      </Row>
    </Section>
    <Heading as="h2">Lorem ipsum</Heading>
    </>
  )
}

export default ReactEmailApp