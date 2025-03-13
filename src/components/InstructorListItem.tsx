import { InstructorProps } from '@/types';
import * as React from 'react';

const InstructorListItem: React.FC<InstructorProps> = ({ name }) => {
  return (
    <div className="mx-auto mt-8 flex w-full items-center gap-2">
      <div className="my-auto flex min-w-[240px] flex-1 shrink basis-4">
        <img
          loading="lazy"
          src="/assets/avatar.png"
          alt="check"
          className="my-auto mr-3 aspect-square w-6  self-stretch object-contain"
        />
        <div className="text-lg font-semibold leading-loose text-black">{name}</div>
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

export default InstructorListItem;
