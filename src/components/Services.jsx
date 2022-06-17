import React from 'react'
import styled  from "styled-components";
export default function Services() {
  return (
    <Section>
        <h1>
          واٹس ایپ گروپ چیٹ کے لیے چند نئے فیچرز متعارف
        </h1>
        <p> 
        یہی وجہ ہے کہ واٹس ایپ کی جانب سے صارفین کے لیے ہر ماہ کئی نئے فیچرز متعارف کرائے جاتے ہیں۔
خاص طور پر واٹس ایپ گروپس پر  زیادہ توجہ دی جاتی ہے کیونکہ یہ صارفین میں بہت زیادہ مقبول ہیں۔
اسی لیے واٹس ایپ میں گروپس چیٹ کے حوالے سے چند نئے فیچرز کا اضافہ کیا گیا ہے۔


اینڈرائیڈ اور آئی او ایس صارفین کے لیے یہ نئے فیچرز متعارف کرائے گئے جو آئندہ چند دن میں سب کو دستیاب ہوں گے۔

ان فیچرز سے واٹس ایپ میں کسی گروپ کال کے حوالے سے صارف کو زیادہ اختیار دیا گیا ہے۔
        </p>
    </Section>
  )
}
const Section = styled.section`
    margin: 5rem 9rem;
    h1{
      padding: 2rem;
      margin-top: 2rem;
      line-height: 1rem;
      font-size: 1.1rem;
      background-color: aqua !important;
      color: black !important;
      font-weight: bolder;
    }
    p{
      padding: 2rem;

      line-height: 1rem;
      font-size: 1.1rem;
      font-weight: bolder;
    }
`;
