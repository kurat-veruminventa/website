import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'
import './logo-animation.css'
import 'animate.css';


import App from './App.js'


const PageHeader = ({
  fronttitle,
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => (
    <div class="PageHeader">
        <div class="container">
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 viewBox="0 0 1000 1000"  >
<g>
	<g>
		<path class="logo_bar" d="M368.61,414.16l-1.02-1.05c35.65-34.8,82.74-53.98,132.59-54.02c0.05,0,0.11,0,0.15,0
			c49.79,0,96.83,19.1,132.5,53.79l-1.02,1.05c-35.39-34.42-82.08-53.38-131.48-53.38c-0.05,0-0.1,0-0.15,0
			C450.71,360.6,403.98,379.64,368.61,414.16z"/>
		<path class="logo_bar" d="M368.59,416.13l-1.98-4l0,0c35.91-35.05,83.35-54.38,133.56-54.42c50.3,0,97.7,19.24,133.63,54.18l0,0
			l-1.96,4.01l-1-0.97c-35.12-34.17-81.48-52.98-130.51-52.98c-49.25,0.04-95.63,18.93-130.74,53.2L368.59,416.13z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M630.13,420.3c-71.58-71.58-188.05-71.58-259.63,0l-0.52-0.52c71.87-71.87,188.8-71.87,260.66,0L630.13,420.3
			z"/>
		<path class="logo_bar" d="M630.13,420.89l-0.3-0.29c-34.54-34.54-80.53-53.56-129.52-53.56c-48.98,0-94.98,19.02-129.52,53.56
			l-0.3,0.29l-1.11-1.11l0.29-0.3c72.03-72.02,189.22-72.02,261.25,0l0.29,0.3L630.13,420.89z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M626.04,423.47c-32.87-32.87-76.56-51.35-123.02-52.05l0.01-0.73c46.66,0.7,90.53,19.27,123.53,52.27
			L626.04,423.47z"/>
		<path class="logo_bar" d="M626.04,424.06l-0.3-0.29c-32.78-32.79-76.37-51.23-122.73-51.93l-0.42-0.01l0.03-1.56l0.42,0.01
			c46.77,0.71,90.74,19.31,123.82,52.39l0.29,0.3L626.04,424.06z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M374.61,423.47l-0.52-0.52c33.1-33.1,77.09-51.66,123.89-52.27l0.01,0.73
			C451.38,372.02,407.57,390.51,374.61,423.47z"/>
		<path class="logo_bar" d="M374.6,424.06l-1.11-1.11l0.29-0.3c33.18-33.18,77.28-51.78,124.18-52.4l0.42-0.01l0.02,1.57l-0.42,0.01
			c-46.49,0.61-90.2,19.05-123.09,51.94L374.6,424.06z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M597.21,448.17c-22.14-22.14-50.22-35.85-81.22-39.65l0.18-1.45c31.33,3.84,59.71,17.7,82.08,40.07
			L597.21,448.17z"/>
		<path class="logo_bar" d="M597.21,449.15l-0.49-0.49c-22.02-22.03-49.97-35.67-80.82-39.46l-0.69-0.08l0.34-2.83l0.69,0.08
			c31.48,3.86,60.01,17.78,82.49,40.27l0.49,0.49L597.21,449.15z M516.76,407.92c30.65,3.91,58.44,17.48,80.45,39.27l0.05-0.05
			c-22.02-21.81-49.82-35.39-80.49-39.29L516.76,407.92z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M397.81,448.49l-1.04-1.04c23.72-23.72,55.18-38.18,88.59-40.72l0.11,1.46
			C452.41,410.71,421.28,425.02,397.81,448.49z"/>
		<path class="logo_bar" d="M397.81,449.48l-2.02-2.02l0.49-0.49c23.84-23.84,55.46-38.37,89.03-40.92L486,406l0.22,2.85l-0.7,0.05
			c-32.89,2.5-63.87,16.74-87.22,40.09L397.81,449.48z M397.76,447.46l0.05,0.05c23.37-23.13,54.18-37.3,86.91-39.95l-0.01-0.08
			C451.97,410.14,421.14,424.31,397.76,447.46z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M593.27,451.38c-21.09-21.1-47.83-34.37-77.31-38.38l0.1-0.73c29.64,4.04,56.52,17.38,77.73,38.59
			L593.27,451.38z"/>
		<path class="logo_bar" d="M593.27,451.97l-0.3-0.29c-21.03-21.03-47.68-34.26-77.07-38.27l-0.41-0.06l0.21-1.55l0.41,0.06
			c29.74,4.05,56.7,17.44,77.97,38.71l0.29,0.3L593.27,451.97z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M401.92,451.38l-0.52-0.52c22.59-22.59,52.53-36.55,84.3-39.33l0.06,0.73
			C454.16,415.02,424.39,428.91,401.92,451.38z"/>
		<path class="logo_bar" d="M401.92,451.97l-1.11-1.11l0.3-0.3c22.66-22.66,52.69-36.67,84.56-39.45l0.42-0.04l0.13,1.56l-0.42,0.04
			c-31.5,2.75-61.19,16.59-83.58,38.99L401.92,451.97z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M590.24,454.4c-19.92-19.92-45.12-32.67-72.88-36.89l0.11-0.72c27.92,4.24,53.26,17.06,73.29,37.09
			L590.24,454.4z"/>
		<path class="logo_bar" d="M590.25,454.99l-0.3-0.29c-19.86-19.86-44.98-32.57-72.65-36.77l-0.41-0.06l0.23-1.55l0.41,0.06
			c28.01,4.25,53.43,17.12,73.53,37.21l0.3,0.3L590.25,454.99z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M404.94,454.4l-0.52-0.52c21.44-21.44,49.83-34.91,79.95-37.93l0.07,0.73
			C454.5,419.68,426.26,433.08,404.94,454.4z"/>
		<path class="logo_bar" d="M404.94,454.99l-1.11-1.11l0.3-0.3c21.51-21.51,49.99-35.02,80.2-38.05l0.41-0.04l0.16,1.56l-0.42,0.04
			c-29.85,2.99-58,16.34-79.25,37.6L404.94,454.99z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M499.21,554.07c0.56,0.56,1.46,0.56,2.02,0c11.39-11.39,116.52-116.49,120.52-119.94
			c3.35-2.89,4.6,3.67,4.97,6.5c0.09,0.7,0.69,1.22,1.4,1.2l4.22-0.09c0.76-0.02,1.36-0.64,1.36-1.4l-0.27-27.85
			c0-0.2-0.24-0.29-0.38-0.15L500.12,545.55l-0.1-0.19L367.24,412.28c-0.14-0.14-0.38-0.04-0.38,0.15l-0.27,27.84
			c-0.01,0.76,0.6,1.39,1.36,1.41l4.2,0.09c0.71,0.02,1.32-0.5,1.41-1.21c0.37-2.84,1.62-9.39,4.97-6.5L499.21,554.07z"/>
		<path class="logo_bar" d="M500.21,554.9c-0.47,0-0.94-0.18-1.3-0.53l-120.67-120c-0.62-0.53-1.16-0.72-1.65-0.53
			c-1.14,0.43-2.12,2.97-2.62,6.78c-0.12,0.9-0.89,1.57-1.79,1.57c-0.01,0-0.02,0-0.04,0l-4.21-0.09c-0.99-0.02-1.78-0.84-1.77-1.83
			l0.27-27.85c0.01-0.26,0.16-0.49,0.4-0.59c0.24-0.1,0.51-0.05,0.69,0.14l132.63,132.92l132.57-132.86
			c0.18-0.19,0.45-0.25,0.7-0.14c0.24,0.1,0.39,0.33,0.4,0.58l0.27,27.85c0.01,0.99-0.79,1.8-1.77,1.82l-4.22,0.09
			c-0.94,0.07-1.71-0.65-1.82-1.57c-0.5-3.81-1.48-6.35-2.62-6.79c-0.48-0.18-1.03,0-1.66,0.55
			c-4.16,3.58-119.33,118.75-120.49,119.92C501.16,554.72,500.69,554.9,500.21,554.9z M499.5,553.77c0.4,0.4,1.04,0.39,1.43,0
			c1.16-1.16,116.36-116.35,120.54-119.96c0.88-0.76,1.72-1,2.51-0.7c1.89,0.72,2.76,4.46,3.15,7.46c0.06,0.48,0.47,0.84,0.96,0.84
			c0.01,0,0.02,0,0.02,0l4.22-0.09c0.53-0.01,0.95-0.45,0.95-0.98L633,412.96L500,546.26l-0.32-0.66L367.27,412.9l-0.27,27.38
			c-0.01,0.53,0.42,0.97,0.95,0.98l4.21,0.09c0.01,0,0.01,0,0.02,0c0.49,0,0.9-0.36,0.97-0.85c0.39-3,1.26-6.74,3.15-7.46
			c0.78-0.3,1.62-0.06,2.51,0.7L499.5,553.77z"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M510.77,341.31l-9.3-7.3c-0.49-0.39-1.19-0.4-1.69-0.02l-8.55,6.39c-1.09,0.81-2.57-0.25-2.16-1.54
			l10.55-32.67c0.42-1.29,2.24-1.28,2.65,0.01l10.69,33.62C513.37,341.1,511.85,342.15,510.77,341.31z M501.5,332.16l6.43,5.05
			c1.08,0.85,2.6-0.21,2.19-1.52l-7.86-24.73c-0.41-1.29-2.24-1.29-2.65-0.01l-7.73,23.94c-0.42,1.29,1.07,2.35,2.16,1.54l5.76-4.31
			C500.31,331.77,501,331.78,501.5,332.16z"/>
		<path class="logo_bar" d="M511.63,342.03c-0.39,0-0.78-0.13-1.12-0.39l-9.29-7.3c-0.34-0.27-0.83-0.28-1.19-0.01l-8.55,6.39
			c-0.65,0.48-1.49,0.49-2.13,0.02c-0.65-0.47-0.92-1.26-0.67-2.03l10.55-32.67c0.25-0.76,0.92-1.25,1.72-1.25c0,0,0.01,0,0.01,0
			c0.8,0,1.48,0.5,1.72,1.26l10.69,33.62c0.25,0.77-0.02,1.57-0.69,2.03C512.34,341.92,511.98,342.03,511.63,342.03z M500.61,333.3
			c0.4,0,0.79,0.13,1.12,0.38l9.29,7.3c0.42,0.33,0.87,0.24,1.16,0.04c0.29-0.2,0.53-0.59,0.37-1.09l-10.69-33.62
			c-0.16-0.5-0.58-0.68-0.93-0.68c0,0,0,0,0,0c-0.34,0-0.77,0.18-0.93,0.68l-10.55,32.67c-0.16,0.5,0.08,0.89,0.36,1.09
			c0.28,0.2,0.73,0.3,1.15-0.01l8.55-6.39C499.85,333.42,500.23,333.3,500.61,333.3z M508.79,337.94c-0.39,0-0.78-0.13-1.11-0.39
			l-6.43-5.06c-0.34-0.27-0.83-0.28-1.19-0.01l-5.76,4.31c-0.64,0.48-1.49,0.49-2.13,0.02c-0.65-0.47-0.92-1.26-0.67-2.03
			l7.73-23.94c0.24-0.76,0.92-1.25,1.72-1.25c0,0,0,0,0.01,0c0.8,0,1.48,0.5,1.72,1.26l7.86,24.72c0.25,0.77-0.02,1.57-0.69,2.04
			C509.5,337.83,509.14,337.94,508.79,337.94z M501.75,331.84l6.43,5.05c0.42,0.33,0.88,0.23,1.16,0.03
			c0.29-0.2,0.53-0.59,0.37-1.09l-7.86-24.73c-0.16-0.5-0.58-0.68-0.93-0.68h0c-0.34,0-0.77,0.18-0.93,0.67l-7.73,23.94
			c-0.16,0.5,0.08,0.89,0.36,1.09c0.28,0.2,0.73,0.3,1.15-0.01l5.76-4.31C500.2,331.32,501.11,331.33,501.75,331.84L501.75,331.84z"
			/>
	</g>
</g>
<g>
	<path class="logo_bar" d="M394.53,392.75l5.39-17.54c0.46-1.51,2.1-2.32,3.59-1.78l15.29,5.56L394.53,392.75z M402.65,376.19
		l-3.21,10.44l12.47-7.07L402.65,376.19z"/>
</g>
<g>
	<path class="logo_bar" d="M441.42,370.13l7.46-14.22c0.7-1.33,2.39-1.78,3.66-0.96l13.69,8.84L441.42,370.13z M451.21,357.34l-4.52,8.61
		l12.79-3.27L451.21,357.34z"/>
</g>
<g>
	<path class="logo_bar" d="M562.9,371.26l-21.95-6.13l12.7-7.64c1.03-0.62,2.37-0.23,2.9,0.85L562.9,371.26z M546.45,364.38l12.3,3.44
		l-4.11-8.37L546.45,364.38z"/>
</g>
<g>
	<path class="logo_bar" d="M606.92,392.66l-20.83-12.37l14.67-3.86c1.06-0.28,2.13,0.36,2.4,1.42L606.92,392.66z M591.49,381.05
		l12.15,7.21l-2.47-9.76L591.49,381.05z"/>
</g>
<g>
	<g>
		<path class="logo_bar" d="M567.81,482.3l-3.17-45.56l-37.47,14.09l-0.23-0.74l-26.47-84.78l-25.74,85.85l-39.55-17.12l-6.42,45.33
			l-1.45-0.21l6.69-47.23l38.37,16.61c0.76,0.33,1.64-0.08,1.88-0.87l26.19-87.37l27.23,87.21c0.24,0.76,1.07,1.17,1.81,0.89
			l36.49-13.72l3.31,47.52L567.81,482.3z"/>
		<path class="logo_bar" d="M567.16,483.04l-0.05-0.69l-3.11-44.63l-37.29,14.03l-0.45-1.44l-25.8-82.61l-25.31,84.42l-0.72-0.31
			l-38.71-16.76l-6.39,45.12l-2.83-0.4l6.92-48.82l39.21,16.97c0.18,0.08,0.39,0.08,0.57-0.01c0.18-0.08,0.31-0.24,0.37-0.43
			l26.85-89.55l27.91,89.38c0.06,0.18,0.18,0.33,0.36,0.42c0.18,0.09,0.37,0.1,0.55,0.03l37.37-14.05l0.06,0.93l3.35,48.21
			L567.16,483.04z M565.27,435.76l0.06,0.93l3.12,44.87l0.07-0.01l-3.19-45.89l-35.62,13.39c-0.53,0.2-1.14,0.17-1.65-0.08
			c-0.51-0.25-0.9-0.71-1.08-1.25l-26.55-85.04l-25.54,85.19c-0.17,0.56-0.57,1.03-1.11,1.29c-0.54,0.25-1.16,0.26-1.71,0.02
			l-37.54-16.25l-6.47,45.64l0.07,0.01l6.46-45.54l39.67,17.17l26.17-87.28l27.16,86.98L565.27,435.76z"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="499.28,548.03 499.92,332.17 501.39,332.18 500.76,542.68 564.67,435.34 565.93,436.09 		"/>
		<path class="logo_bar" d="M498.86,549.55l0-1.52l0.64-216.27l2.3,0.01v0.42l-0.62,208.97l63.34-106.39l1.97,1.18l-0.21,0.36
			L498.86,549.55z M500.34,332.59l-0.64,213.91l65.66-110.27l-0.55-0.32L500.34,544.2l0-1.52l0.62-210.08L500.34,332.59z"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="502.18,550.51 433.95,433.37 435.21,432.63 497.87,540.2 473.55,450.36 474.96,449.98 		"/>
		<path class="logo_bar" d="M503.4,553.44l-70.02-120.22l1.98-1.16l0.21,0.36l61.07,104.84l-23.6-87.19l2.22-0.6L503.4,553.44z
			 M434.52,433.52l66.43,114.05l-26.28-97.08l-0.61,0.17l25.04,92.48L435.06,433.2L434.52,433.52z"/>
	</g>
</g>
<g>
	<g>

			<rect x="464.14" y="496.88" transform="matrix(0.2773 -0.9608 0.9608 0.2773 -106.7561 853.3051)" class="logo_bar" width="99.39" height="1.47"/>
		<path class="logo_bar" d="M501.01,546.07l-2.21-0.64l0.11-0.4l27.73-95.87l2.21,0.64l-0.11,0.4L501.01,546.07z M499.83,544.87
			l0.61,0.17l27.38-94.67l-0.61-0.18L499.83,544.87z"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="476.66,459.9 441.12,444.52 441.41,443.85 476.95,459.23 		"/>
		<polygon class="logo_bar" points="477.38,461.73 442.98,446.84 440.69,442.02 476.04,457.32 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="479.26,469.54 447.52,455.8 447.81,455.13 479.56,468.86 		"/>
		<polygon class="logo_bar" points="479.99,471.36 449.48,458.16 447.09,453.3 478.54,466.91 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="481.79,478.88 453.95,466.83 454.24,466.16 482.09,478.21 		"/>
		<polygon class="logo_bar" points="482.51,480.71 456.31,469.37 453.52,464.33 481.3,476.36 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="472.31" y="470.16" transform="matrix(0.3972 -0.9177 0.9177 0.3972 -158.462 724.986)" class="logo_bar" width="0.73" height="25.93"/>
		<polygon class="logo_bar" points="485.15,490.43 462.2,480.5 460.2,475.81 483.98,486.1 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="487.06,498.34 467.32,489.79 467.61,489.12 487.35,497.66 		"/>
		<polygon class="logo_bar" points="487.78,500.16 469.13,492.09 466.89,487.29 486.43,495.75 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="489.69,508.06 474.01,501.27 474.3,500.6 489.98,507.39 		"/>
		<polygon class="logo_bar" points="490.42,509.89 475.73,503.53 473.58,498.77 489.12,505.5 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="486.06" y="507.98" transform="matrix(0.3972 -0.9177 0.9177 0.3972 -178.8926 756.4777)" class="logo_bar" width="0.73" height="12.89"/>
		<polygon class="logo_bar" points="492.92,519.15 482,514.42 479.94,509.7 491.65,514.77 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="494.83,527.04 487.06,523.68 487.35,523.01 495.12,526.37 		"/>
		<polygon class="logo_bar" points="495.56,528.87 488.43,525.79 486.63,521.18 494.58,524.62 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="495.57" y="534.13" transform="matrix(0.3973 -0.9177 0.9177 0.3973 -193.0362 778.1965)" class="logo_bar" width="0.73" height="3.87"/>

			<rect x="495.16" y="533.71" transform="matrix(0.3971 -0.9178 0.9178 0.3971 -192.9874 778.3359)" class="logo_bar" width="1.57" height="4.7"/>
	</g>
</g>
<g>
	<g>
		<path class="logo_bar" d="M500.89,309.96l-0.24,22.47l9.99,7.84c0.69,0.54,1.66-0.13,1.39-0.97l-9.41-29.61
			C502.32,308.74,500.9,308.95,500.89,309.96z"/>
		<path class="logo_bar" d="M501.06,332.23l9.83,7.72c0.25,0.19,0.49,0.07,0.56,0.02c0.07-0.05,0.28-0.22,0.18-0.53l-9.41-29.6
			c-0.09-0.28-0.32-0.36-0.52-0.32c-0.19,0.03-0.4,0.17-0.4,0.46L501.06,332.23z"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="522.28,466.68 501.07,398.77 501.65,388.85 524.18,461 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="509.48" y="415.98" transform="matrix(0.9545 -0.2981 0.2981 0.9545 -110.3416 172.333)" class="logo_bar" width="0.73" height="63.91"/>
		<polygon class="logo_bar" points="518.11,480.29 500.32,423.31 501.59,415.59 520.13,474.97 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="507.36" y="443.99" transform="matrix(0.9545 -0.2981 0.2981 0.9545 -116.7203 172.6496)" class="logo_bar" width="0.73" height="50.07"/>
		<polygon class="logo_bar" points="513.92,494.77 500.53,451.88 501.52,443.28 515.84,489.12 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="505.31" y="470.57" transform="matrix(0.9545 -0.2981 0.2981 0.9545 -122.9268 172.9771)" class="logo_bar" width="0.73" height="37.91"/>
		<polygon class="logo_bar" points="510.06,509.47 500.51,478.88 501.28,469.58 511.83,503.37 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="503.19" y="497.74" transform="matrix(0.9545 -0.2981 0.2981 0.9545 -129.0115 173.2723)" class="logo_bar" width="0.73" height="23.71"/>
		<polygon class="logo_bar" points="505.83,522.76 500.51,505.73 501.28,496.43 507.82,517.36 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="501.26" y="524.2" transform="matrix(0.9545 -0.2981 0.2981 0.9545 -134.9985 173.5776)" class="logo_bar" width="0.73" height="10.45"/>
		<polygon class="logo_bar" points="501.93,536.26 499.93,529.88 500.9,521.18 503.94,530.92 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="560.11,487.03 557.42,448.37 558.15,448.32 560.84,486.98 		"/>
		<polygon class="logo_bar" points="558.82,488.51 556.23,451.38 559.44,446.83 562.32,488.27 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="551.48" y="460.25" transform="matrix(0.9976 -0.0694 0.0694 0.9976 -31.7987 39.465)" class="logo_bar" width="0.73" height="33.88"/>
		<polygon class="logo_bar" points="551.37,495.6 549.13,463.51 552.32,458.78 554.87,495.35 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="544.64" y="471.5" transform="matrix(0.9976 -0.0694 0.0694 0.9976 -32.4641 39.0226)" class="logo_bar" width="0.73" height="29.85"/>
		<polygon class="logo_bar" points="544.39,502.83 542.41,474.38 545.63,470.02 547.89,502.58 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="537.36" y="483.45" transform="matrix(0.9976 -0.0694 0.0694 0.9976 -33.1408 38.5327)" class="logo_bar" width="0.73" height="25.1"/>
		<polygon class="logo_bar" points="536.95,510.03 535.34,487.03 538.51,481.97 540.45,509.78 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="531.86,515.88 530.33,493.87 531.06,493.82 532.59,515.82 		"/>
		<polygon class="logo_bar" points="530.57,517.36 529.11,496.43 532.35,492.33 534.07,517.11 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="523.77" y="505.82" transform="matrix(0.9976 -0.0695 0.0695 0.9976 -34.4622 37.6551)" class="logo_bar" width="0.73" height="16.95"/>
		<polygon class="logo_bar" points="523.07,524.26 521.98,508.55 525.2,504.33 526.57,524.01 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="517.63,529.88 516.71,516.73 517.44,516.68 518.36,529.83 		"/>
		<polygon class="logo_bar" points="516.34,531.36 515.49,519.15 518.73,515.2 519.84,531.12 		"/>
	</g>
</g>
<g>
	<g>

			<rect x="510.86" y="527.05" transform="matrix(0.9976 -0.0695 0.0695 0.9976 -35.7066 36.8101)" class="logo_bar" width="0.73" height="9.14"/>
		<polygon class="logo_bar" points="509.89,537.69 509.38,530.37 512.56,525.56 513.39,537.45 		"/>
	</g>
</g>
<g>
	<g>
		<polygon class="logo_bar" points="503.74,543.92 503.4,539.09 504.13,539.04 504.47,543.87 		"/>
		<polygon class="logo_bar" points="503.35,544.36 502.96,538.7 504.52,538.59 504.91,544.25 		"/>
	</g>
</g>
<g>
	<polygon class="logo_bar" points="401.71,374.31 406.7,384.18 415.35,379.27 	"/>
</g>
<g>
	<polygon class="logo_bar" points="450.69,355.39 453.45,365.64 462.85,363.23 	"/>
</g>
<g>
	<polygon class="logo_bar" points="555.1,357.9 552.81,367.3 560.83,369.54 	"/>
</g>
<g>
	<polygon class="logo_bar" points="601.92,377.22 597.03,385.57 605.28,390.46 	"/>
</g>
<g>
	<path class="logo_bar" d="M428.35,471.75c0,0-0.36,1.4-1.31,0.45c-0.95-0.96,0.26,2.24,0.26,2.24l1.66-1.34L428.35,471.75z"/>
	<path class="logo_bar" d="M427.11,475.13l-0.21-0.54c-0.97-2.54-0.64-2.75-0.41-2.91c0.24-0.15,0.52-0.08,0.83,0.23
		c0.18,0.18,0.33,0.22,0.33,0.21c0.1-0.02,0.24-0.28,0.29-0.47l0.3-1.13l1.22,2.7L427.11,475.13z M427.21,472.85
		c0.07,0.27,0.17,0.59,0.28,0.9l0.95-0.77l-0.14-0.31c-0.11,0.11-0.26,0.21-0.42,0.25C427.71,472.96,427.48,472.97,427.21,472.85z"
		/>
</g>
<g>
	<path class="logo_bar" d="M568.74,474.99c0,0,0.36,1.4,1.31,0.45c0.95-0.95-0.26,2.24-0.26,2.24l-1.66-1.34L568.74,474.99z"/>
	<path class="logo_bar" d="M569.97,478.36l-2.36-1.91l1.22-2.7l0.3,1.13c0.06,0.21,0.2,0.45,0.29,0.47c-0.01,0.04,0.14-0.02,0.33-0.21
		c0.31-0.31,0.59-0.38,0.83-0.23c0.24,0.15,0.56,0.36-0.41,2.91L569.97,478.36z M568.64,476.21l0.95,0.77
		c0.11-0.32,0.21-0.64,0.28-0.9c-0.27,0.13-0.51,0.12-0.67,0.08c-0.17-0.05-0.31-0.14-0.43-0.25L568.64,476.21z"/>
</g>
<g>
	<path class="logo_bar" d="M438.2,671.6h0.22l7.94-53.32c0.21-1.4,1.41-2.43,2.82-2.43h14.71v78.52h-11.67v-56.31H452l-8.3,56.31h-11.67
		l-8.97-55.53h-0.22v55.53h-10.77v-78.52h14.74c1.4,0,2.59,1.02,2.81,2.4L438.2,671.6z"/>
	<path class="logo_bar" d="M254.59,679.9h0.22l8.96-61.61c0.2-1.4,1.41-2.44,2.83-2.44h8.86l-12.12,78.52h-18.4l-12.11-78.52h9.98
		c1.42,0,2.62,1.04,2.83,2.44L254.59,679.9z"/>
	<path class="logo_bar" d="M293.51,648.94h16.94v11.22h-16.94v23h21.31v11.22h-33.65v-78.52h33.65v11.22h-21.31V648.94z"/>
	<g>
		<path class="logo_bar" d="M359.98,684.84c-0.64-3.19-0.52-12.12-0.52-12.12c0-8.19-2.02-14.02-8.19-16.6v-0.22
			c5.5-2.58,8.08-7.74,8.08-15.82v-6.17c0-12.12-5.5-18.06-18.29-18.06h-18.62v78.52h12.34V662.4h4.26c5.61,0,8.07,2.69,8.07,9.98
			l0.01,0.34c0,0-0.12,8.92,0.52,12.12c0.85,4.23,2.09,6.66,4.24,9.53h1.71h10.63C362.06,691.5,360.83,689.07,359.98,684.84z
			 M347.01,635.14v7.74l0,0c0,6.28-2.8,8.3-7.4,8.3h-4.82l0,0v-24.12l0,0h5.94C345.1,627.06,347.01,629.53,347.01,635.14
			L347.01,635.14z"/>
		<path class="logo_bar" d="M339.61,651.18h-4.82l0,0H339.61c4.6,0,7.4-2.02,7.4-8.3l0,0C347.01,649.16,344.21,651.18,339.61,651.18z"/>
	</g>
	<path class="logo_bar" d="M376.42,615.85c1.6,0,2.89,1.29,2.89,2.89v57.69c0,5.61,2.47,7.63,6.4,7.63c3.93,0,6.39-2.02,6.39-7.63v-57.69
		c0-1.6,1.29-2.89,2.89-2.89h8.78v59.79c0,12.56-6.28,19.74-18.39,19.74c-12.12,0-18.4-7.18-18.4-19.74v-59.79H376.42z"/>
	<path class="logo_bar" d="M490.24,615.85h12.34v78.52h-12.34V615.85z"/>
	<path class="logo_bar" d="M522.77,637.5h-0.22v56.87h-11.11v-78.52h13.3c1.28,0,2.41,0.86,2.74,2.11l11.89,44.89h0.22v-44.17
		c0-1.56,1.27-2.83,2.83-2.83h8.16v78.52h-12.68L522.77,637.5z"/>
	<path class="logo_bar" d="M577.95,679.9h0.22l8.96-61.63c0.2-1.39,1.4-2.43,2.81-2.43h8.88l-12.12,78.52h-18.4l-12.11-78.52h10
		c1.41,0,2.6,1.03,2.81,2.43L577.95,679.9z"/>
	<path class="logo_bar" d="M616.87,648.94h16.94v11.22h-16.94v23h21.31v11.22h-33.65v-78.52h33.65v11.22h-21.31V648.94z"/>
	<path class="logo_bar" d="M657.03,637.5h-0.22v56.87H645.7v-78.52H659c1.28,0,2.41,0.86,2.73,2.1l11.89,44.9h0.23v-44.17
		c0-1.56,1.27-2.83,2.83-2.83h8.16v78.52h-12.68L657.03,637.5z"/>
	<path class="logo_bar" d="M690.11,615.85h38.14v11.22h-12.9v67.31h-12.34v-67.31h-12.9V615.85z"/>
	<path class="logo_bar" d="M769.31,694.37h-12.45l-2.13-14.25h-15.14l-2.13,14.25h-11.33l12.56-78.52h18.06L769.31,694.37z
		 M741.15,669.47h11.89l-5.83-39.71h-0.23L741.15,669.47z"/>
</g>
</svg>  <div class="text-box">
    <div class="animate__animated animate__fadeIn animate__delay-4s">
    <p>New website coming soon</p>

    <p>192 Clapham High Street,
        London, SW4 7UD
        United Kingdom</p>

    <p>831 N Tatnall Street
        Suite M #198, Wilmington,
        DE 19801 United States of America</p>

    <a href="mailto:info@veruminventa.com">info@veruminventa.com</a>
    </div>
    <div class="animate__animated animate__fadeIn animate__slower">
        <h2 class="animate__animated animate__fadeOut animate__delay-3s up">Time to reset the world economy</h2>
        <p class="animate__animated animate__fadeIn animate__delay-4s down">Verum Inventa is an industrial group of private
        companies incorporated in London, Delaware and Nairobi. The group is integrated in the development of
        assets with interests in scientific, geological, educational and sporting projects. The Group aims to
        promote social enterprise and environmentally friendly solutions and applications within its assets.</p>
        </div>
      </div>
      </div>
    </div>
)




PageHeader.propTypes = {
  fronttitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
