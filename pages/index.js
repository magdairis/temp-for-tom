import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import SvgGrassbears from '../components/svg'
import SvgDesktopscenelight from '../components/svgdesktop'

const svgStyles = css`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0%;
  @media (min-aspect-ratio: 1/1) {
    bottom: -2%;
  }
`;

const Example = () => (
  <SvgDesktopscenelight css={svgStyles} preserveAspectRatio="xMidYMid slice"/>
)

export default Example
