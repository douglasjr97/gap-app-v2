"use client";

import { formatDate } from "@/utilities/formatDate";
import { StarReviewIcon } from "@/components/Icons/StarReview";
import { CardReview } from "@/components/Pages/Project/Review/CardReview";
import { ChevronDown } from "@/components/Icons";
import { useReviewStore } from "@/store/review";
import { Review } from "@/types/review";

export const NavbarReview = () => {
  const review = useReviewStore((state) => state.review);
  const isStarSelected = useReviewStore((state) => state.isStarSelected);

  const handleToggleReviewSelected = (id: number) => {
    const currentSelection = useReviewStore.getState().isStarSelected;
    useReviewStore.setState({
      isStarSelected: currentSelection === id ? null : id,
    });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex px-2 gap-2 overflow-x-auto pb-4 relative scroller">
        {review
          .sort((a, b) => b.date - a.date)
          .map((miniReview: Review, index: number) => (
            <div
              key={miniReview.id}
              className="flex flex-col justify-center items-center text-center relative"
            >
              <p className="w-full">
                {formatDate(new Date(miniReview.date * 1000))}
              </p>
              <div className="w-full flex flex-col items-center sm:px-14 px-4">
                <StarReviewIcon
                  props={{
                    className: `w-20 h-20 ${
                      isStarSelected === miniReview.id && "text-[#004EEB]"
                    }`,
                  }}
                  pathProps={{
                    className: "cursor-pointer",
                    fill: `${isStarSelected === miniReview.id && "#004EEB"} `,
                    onClick: () => {
                      handleToggleReviewSelected(miniReview.id);
                    },
                  }}
                />
                <p>{miniReview.averageScore}</p>
                {isStarSelected === miniReview.id && (
                  <div>
                    <ChevronDown />
                  </div>
                )}
                {index < review.length - 1 && (
                  <div className="absolute right-0 top-1/2 h-3/4 w-[2px] bg-zinc-300 transform -translate-y-1/2"></div>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="w-full flex flex-col">
        {isStarSelected !== null && <CardReview id={isStarSelected} />}
      </div>
    </div>
  );
};