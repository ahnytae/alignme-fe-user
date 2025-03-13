import * as React from 'react';
import { CenterProps } from '@/types';

const LessonCenterListItem: React.FC<CenterProps> = ({ name, regoinName }) => {
  return (
    <div className="mx-auto mt-8 flex w-full items-center gap-2">
      <div className="my-auto flex min-w-[240px] flex-1 shrink basis-4 flex-col self-stretch">
        <div className="text-lg font-semibold leading-loose text-black">
          {name} {regoinName || ''}
        </div>
        {/* <div className="mt-1 text-xs font-medium leading-none text-zinc-400">{address}</div> */}
      </div>
      <button className="my-auto flex w-10 items-center gap-2 self-stretch p-2" aria-label={`Select ${name}`}>
        <img
          loading="lazy"
          src="/assets/rightArrow.svg"
          alt="check"
          className="my-auto aspect-square w-6 -rotate-90 self-stretch object-contain"
        />
      </button>
    </div>
  );
};

export default LessonCenterListItem;
