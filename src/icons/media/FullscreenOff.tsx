import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FullscreenOff: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.6667 21.3334H46.4378L55.219 12.5523C56.2603 11.5109 56.2603 9.82245 55.219 8.78105C54.1776 7.73965 52.4891 7.73965 51.4477 8.78105L42.6667 17.5621V13.3334C42.6667 11.8607 41.4728 10.6667 40 10.6667C38.5273 10.6667 37.3334 11.8607 37.3334 13.3334V24.0001C37.3334 24.7073 37.6143 25.3856 38.1144 25.8857C38.6145 26.3858 39.2928 26.6667 40 26.6667L50.6667 26.6667C52.1395 26.6667 53.3334 25.4728 53.3334 24.0001C53.3334 22.5273 52.1395 21.3334 50.6667 21.3334ZM21.3334 13.3334L21.3334 17.5622L12.5523 8.78109C11.5109 7.73969 9.82245 7.73969 8.78106 8.78109C7.73966 9.82249 7.73966 11.5109 8.78105 12.5523L17.5621 21.3334H13.3334C11.8607 21.3334 10.6667 22.5273 10.6667 24C10.6667 25.4728 11.8607 26.6667 13.3334 26.6667H24.0001C24.7073 26.6667 25.3856 26.3858 25.8857 25.8857C26.3858 25.3856 26.6667 24.7073 26.6667 24L26.6668 13.3334C26.6668 11.8606 25.4728 10.6667 24.0001 10.6667C22.5273 10.6667 21.3334 11.8606 21.3334 13.3334ZM13.3333 42.6667H17.5622L8.78105 51.4478C7.73965 52.4892 7.73965 54.1776 8.78105 55.219C9.82245 56.2604 11.5109 56.2604 12.5523 55.219L21.3333 46.438L21.3333 50.6667C21.3333 52.1394 22.5272 53.3333 24 53.3333C25.4728 53.3333 26.6667 52.1394 26.6667 50.6667L26.6667 40C26.6667 39.2928 26.3857 38.6145 25.8856 38.1144C25.3855 37.6143 24.7072 37.3333 24 37.3333H13.3333C11.8606 37.3333 10.6667 38.5272 10.6667 40C10.6667 41.4728 11.8606 42.6667 13.3333 42.6667ZM42.6666 46.4379L42.6666 50.6667C42.6666 52.1395 41.4727 53.3334 39.9999 53.3334C38.5272 53.3334 37.3332 52.1395 37.3332 50.6667L37.3333 40C37.3333 39.2928 37.6142 38.6145 38.1143 38.1144C38.6144 37.6143 39.2927 37.3334 39.9999 37.3334H50.6666C52.1393 37.3334 53.3333 38.5273 53.3333 40C53.3333 41.4728 52.1393 42.6667 50.6666 42.6667H46.4379L55.2189 51.4478C56.2603 52.4891 56.2603 54.1776 55.2189 55.219C54.1775 56.2604 52.4891 56.2604 51.4477 55.219L42.6666 46.4379Z"
      />
    </svg>
  )
);

FullscreenOff.tags = [
  'exit',
  'fill',
  'full',
  'fullscreen',
  'big',
  'off',
  'overlay',
  'return',
  'start',
  'video',
];
