import React, { MouseEventHandler, ReactNode, memo } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { IrisComponent } from '../../Utils';

import { CalendarDayLabel } from './CalendarDayLabel';

export type DateRange = [Date | undefined] | [Date, Date | undefined];
export interface DayProps {
  children: ReactNode;
  range: DateRange;
  draftRange: DateRange;
  inactive?: boolean;
  pastMinDate?: boolean;
  date: Date;
  onMouseEnter?: MouseEventHandler;
}

const Day: IrisComponent<DayProps> = ({
  children,
  className,
  onClick,
  onMouseEnter,
  inactive,
  pastMinDate,
  date,
  range,
  draftRange,
}) => {
  const isStart =
    isSameDate(date, range[0]) || isSameDate(date, draftRange[0]);
  const hasEnd = range[1] instanceof Date;
  const isEnd =
    isSameDate(date, range[1]) || isSameDate(date, draftRange[1]);
  const isTrack = isInDateRange(date, range);
  const isControl = isStart || isEnd;

  const handleClick: MouseEventHandler = event => {
    if (!inactive && !pastMinDate && onClick) {
      onClick(event);
    }
  };

  const handleMouseEnter: MouseEventHandler = event => {
    if (!inactive && !pastMinDate && onMouseEnter) {
      onMouseEnter(event);
    }
  };

  return (
    <CalendarGridItem
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {!inactive && (
        <CalendarDayLabel
          isControl={isControl}
          isPast={pastMinDate}
          isTrack={isTrack}
          isStart={isStart && hasEnd}
          isEnd={isEnd}
        >
          {children}
        </CalendarDayLabel>
      )}
    </CalendarGridItem>
  );
};

export const CalendarGridItem = styled.div`
  position: relative;
  flex: 0 0 calc(100% / 7);
  width: calc(100% / 7);
  padding: ${rem(1)};
  text-align: center;
  cursor: default;
  font-size: ${rem(14)};
  font-weight: 500;
`;

const DayStyled = styled(Day)`
  margin-bottom: ${rem(4)};
  &::before {
    content: ' ';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  cursor: ${props =>
    props.onClick && !props.inactive ? 'pointer' : 'default'};
`;

export const CalendarDay = memo(DayStyled, calendarDayEqual);

// Utility for comparing two date objects.
function isSameDate(a?: Date, b?: Date) {
  // if both dates are null we want to return true
  if (!(a && b)) {
    return a === b;
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Utility to determine if one date exists between two values of a range.
function isInDateRange(a: Date, range: DateRange) {
  const [start, end] = range;
  if (!(start && end)) {
    return false;
  }

  if (a > start && a < end) {
    return true;
  }

  return false;
}

// Generate the props that we want to watch for re renders
function generateCompareProps(day: DayProps) {
  const { date, range, draftRange } = day;
  const props = [];
  let i = 0;
  props[i++] =
    (isSameDate(date, range[0]) || isSameDate(date, draftRange[0])) &&
    range[1] instanceof Date; // isStart AND hasEnd
  props[i++] =
    isSameDate(date, range[1]) || isSameDate(date, draftRange[1]); // isEnd
  props[i++] = isInDateRange(date, range); // isTrack
  props[i++] = day.inactive;
  props[i++] = day.pastMinDate;
  return props;
}

// Determine if the previously rendered props differ enough to make a new render
function calendarDayEqual(prev: DayProps, next: DayProps) {
  const p = generateCompareProps(prev);
  const n = generateCompareProps(next);
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== n[i]) {
      return false;
    }
  }

  return true;
}
