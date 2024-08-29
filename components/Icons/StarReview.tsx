import { cn } from "@/utilities/tailwind";
import type { SVGProps } from "react";

export const StarReviewIcon = ({
  props,
  pathProps,
  score,
  isHovered = true,
}: {
  props?: SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  score?: number;
  isHovered?: boolean;
}) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        {...pathProps}
        d="M11.2827 3.44868C11.5131 2.98174 11.6284 2.74827 11.7848 2.67368C11.9209 2.60877 12.0791 2.60877 12.2152 2.67368C12.3717 2.74827 12.4869 2.98174 12.7174 3.44868L14.9041 7.87864C14.9721 8.0165 15.0061 8.08542 15.0558 8.13894C15.0999 8.18632 15.1527 8.22471 15.2113 8.25198C15.2776 8.28278 15.3536 8.2939 15.5057 8.31613L20.397 9.03107C20.9121 9.10635 21.1696 9.144 21.2888 9.2698C21.3925 9.37925 21.4412 9.52966 21.4215 9.67914C21.3988 9.85094 21.2124 10.0325 20.8395 10.3957L17.3014 13.8418C17.1912 13.9492 17.136 14.0029 17.1004 14.0668C17.0689 14.1234 17.0487 14.1856 17.0409 14.2499C17.0321 14.3225 17.0451 14.3984 17.0711 14.5501L17.906 19.4175C17.994 19.9309 18.038 20.1875 17.9553 20.3399C17.8833 20.4724 17.7554 20.5653 17.6071 20.5928C17.4366 20.6244 17.2061 20.5032 16.7451 20.2608L12.3724 17.9612C12.2361 17.8895 12.168 17.8537 12.0962 17.8396C12.0327 17.8272 11.9673 17.8272 11.9038 17.8396C11.832 17.8537 11.7639 17.8895 11.6277 17.9612L7.25492 20.2608C6.79392 20.5032 6.56341 20.6244 6.39297 20.5928C6.24468 20.5653 6.11672 20.4724 6.04474 20.3399C5.962 20.1875 6.00603 19.9308 6.09407 19.4175L6.92889 14.5501C6.95491 14.3984 6.96793 14.3225 6.95912 14.2499C6.95132 14.1856 6.93111 14.1234 6.89961 14.0668C6.86402 14.0029 6.80888 13.9492 6.69859 13.8418L3.16056 10.3957C2.78766 10.0325 2.60121 9.85094 2.57853 9.67914C2.55879 9.52966 2.60755 9.37925 2.71125 9.2698C2.83044 9.144 3.08797 9.10635 3.60304 9.03107L8.49431 8.31613C8.64642 8.2939 8.72248 8.28278 8.78872 8.25198C8.84736 8.22471 8.90016 8.18632 8.94419 8.13894C8.99391 8.08542 9.02793 8.0165 9.09597 7.87864L11.2827 3.44868Z"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          isHovered ? "hover:fill-[#004EEB] hover:stroke-[#004eeb81]" : "",
          pathProps?.className || "",
        )}
      />
      {score !== undefined && (
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize={props?.fontSize || "12"}
          fill={props?.color || "#000000"}
        >
          {score}
        </text>
      )}
    </svg>
  );
};
