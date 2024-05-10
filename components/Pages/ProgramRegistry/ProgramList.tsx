import { ReadMore } from "@/utilities/ReadMore";
import formatCurrency from "@/utilities/formatCurrency";
import { formatDate } from "@/utilities/formatDate";
import Image from "next/image";
import { FC } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { registryHelper } from "./helper";
import { ExternalLink } from "@/components/Utilities/ExternalLink";
import { DiscordIcon, TwitterIcon } from "@/components/Icons";
import { DiscussionIcon } from "@/components/Icons/Discussion";
import { BlogIcon } from "@/components/Icons/Blog";
import { OrganizationIcon } from "@/components/Icons/Organization";

export type GrantProgram = {
  _id: {
    $oid: string;
  };
  name?: string;
  createdAtBlock?: string;
  createdByAddress?: string;
  metadata?: {
    tags?: string[];
    type?: string;
    title?: string;
    endDate?: string;
    logoImg?: string;
    socialLinks?: {
      blog?: string;
      forum?: string;
      twitter?: string;
      discord?: string;
      website?: string;
      orgWebsite?: string;
    };
    bounties?: string[];
    bannerImg?: string;
    createdAt?: number;
    grantSize?: string;
    startDate?: string;
    categories?: string[];
    ecosystems?: string[];
    networks?: string[];
    grantTypes?: string[];
    credentials?: {};
    description?: string;
    logoImgData?: string;
    grantsIssued?: number;
    bannerImgData?: string;
    linkToDetails?: string;
    programBudget?: string;
    projectTwitter?: string;
    applicantsNumber?: number;
    amountDistributedToDate?: string;
  };
  tags?: string[];
  updatedAtBlock?: string;
  projectNumber?: null;
  projectType?: string;
  registryAddress?: string;
  anchorAddress?: string;
  programId?: string;
  chainID?: number;
  isValid?: boolean;
  createdAt: {
    $timestamp: {
      t: number;
      i: number;
    };
  };
  updatedAt: {
    $timestamp: {
      t: number;
      i: number;
    };
  };
};

interface ProgramListProps {
  grantPrograms: GrantProgram[];
}

export const ProgramList: FC<ProgramListProps> = ({ grantPrograms }) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 h-full">
      <thead>
        <tr className="">
          <th
            scope="col"
            className="py-3.5 px-3 text-left text-sm font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left w-[420px] text-sm font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900 dark:text-zinc-100 sm:pl-0 font-body max-w-64"
          >
            Networks
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Budget
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm w-[120px] font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Grant Size
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Categories
          </th>

          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900 dark:text-zinc-100 font-body"
          >
            Type
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {grantPrograms.map((grant, index) => {
          const firstNetworks = grant.metadata?.networks?.slice(0, 4);
          const restNetworks = grant.metadata?.networks?.slice(4);
          return (
            <tr key={grant?.programId! + index}>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-300 text-wrap max-w-[285px]">
                <div className="flex flex-row gap-3">
                  <div className="flex flex-col gap-1">
                    {grant.metadata?.socialLinks?.website ? (
                      <ExternalLink
                        href={grant.metadata?.socialLinks?.website}
                        className="w-max"
                      >
                        <div className="font-semibold text-base text-gray-900 underline dark:text-zinc-100">
                          {grant?.metadata?.title}
                        </div>
                      </ExternalLink>
                    ) : (
                      <div className="font-semibold text-base text-gray-900 dark:text-zinc-100">
                        {grant?.metadata?.title}
                      </div>
                    )}
                    <div className="flex flex-row gap-1 w-full">
                      {grant.metadata?.socialLinks?.website ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.website}
                          className="w-max"
                        >
                          <Image
                            className="w-5 h-5 text-black dark:text-white dark:hidden"
                            width={20}
                            height={20}
                            src="/icons/globe.svg"
                            alt={grant.metadata?.socialLinks?.website}
                          />
                          <Image
                            width={20}
                            height={20}
                            className="w-5 h-5 text-black dark:text-white hidden dark:block"
                            src="/icons/globe-white.svg"
                            alt={grant.metadata?.socialLinks?.website}
                          />
                        </ExternalLink>
                      ) : null}
                      {grant.metadata?.socialLinks?.twitter ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.twitter}
                          className="w-max"
                        >
                          <TwitterIcon className="w-5 h-5 text-black dark:text-white" />
                        </ExternalLink>
                      ) : null}
                      {grant.metadata?.socialLinks?.discord ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.discord}
                          className="w-max"
                        >
                          <DiscordIcon className="w-5 h-5 text-black dark:text-white" />
                        </ExternalLink>
                      ) : null}
                      {grant.metadata?.socialLinks?.forum ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.forum}
                          className="w-max"
                        >
                          <DiscussionIcon className="w-5 h-5 text-black dark:text-white" />
                        </ExternalLink>
                      ) : null}
                      {grant.metadata?.socialLinks?.blog ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.blog}
                          className="w-max"
                        >
                          <BlogIcon className="w-5 h-5 text-black dark:text-white" />
                        </ExternalLink>
                      ) : null}
                      {grant.metadata?.socialLinks?.orgWebsite ? (
                        <ExternalLink
                          href={grant.metadata?.socialLinks?.orgWebsite}
                          className="w-max"
                        >
                          <OrganizationIcon className="w-5 h-5 text-black dark:text-white" />
                        </ExternalLink>
                      ) : null}
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-400 max-w-[285px]">
                <div
                  className="w-[420px] max-w-[420px] text-wrap pr-8"
                  data-color-mode="light"
                >
                  <ReadMore
                    readLessText="Show less description"
                    readMoreText="Show full description"
                    side="left"
                    words={50}
                  >
                    {grant.metadata?.description!}
                  </ReadMore>
                </div>
              </td>
              <td>
                <div className="w-full max-w-44 flex flex-row flex-wrap gap-1 my-2 items-center">
                  {firstNetworks?.map((network, index) => (
                    <Tooltip.Provider key={network}>
                      <Tooltip.Root delayDuration={0.5}>
                        <Tooltip.Trigger asChild>
                          <div className="w-7 h-7 rounded-full flex justify-center items-center">
                            {registryHelper.networkImages[
                              network.toLowerCase()
                            ] ? (
                              <>
                                <Image
                                  width={20}
                                  height={20}
                                  src={
                                    registryHelper.networkImages[
                                      network.toLowerCase()
                                    ].light
                                  }
                                  alt={network}
                                  className="rounded-full w-5 h-5  dark:hidden"
                                />
                                <Image
                                  width={20}
                                  height={20}
                                  src={
                                    registryHelper.networkImages[
                                      network.toLowerCase()
                                    ].dark
                                  }
                                  alt={network}
                                  className="rounded-full w-5 h-5  hidden dark:block"
                                />
                              </>
                            ) : (
                              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-gray-500" />
                            )}
                          </div>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="TooltipContent bg-[#101828] rounded-lg text-white p-3 max-w-[360px]"
                            sideOffset={5}
                            side="bottom"
                          >
                            <div className="flex flex-col gap-3">
                              <div className="flex flex-row gap-2 items-center">
                                {registryHelper.networkImages[
                                  network.toLowerCase()
                                ] ? (
                                  <Image
                                    width={16}
                                    height={16}
                                    src={
                                      registryHelper.networkImages[
                                        network.toLowerCase()
                                      ].dark
                                    }
                                    alt={network}
                                    className="rounded-full w-4 h-4"
                                  />
                                ) : (
                                  <div className="w-4 h-4 rounded-full flex justify-center items-center bg-gray-500" />
                                )}
                                <p className="text-sm text-white" key={network}>
                                  {network}
                                </p>
                              </div>
                            </div>
                            <Tooltip.Arrow className="TooltipArrow" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  ))}
                  {restNetworks?.length ? (
                    <Tooltip.Provider>
                      <Tooltip.Root delayDuration={0.5}>
                        <Tooltip.Trigger asChild>
                          <p
                            key={index}
                            className="whitespace-nowrap rounded-full w-6 h-6 items-center flex flex-col justify-center px-1 py-1 text-[11px] truncate text-center text-blue-700 bg-[#EFF8FF] border border-[#B2DDFF] mr-2"
                          >
                            +{restNetworks.length}
                          </p>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="TooltipContent bg-[#101828] rounded-lg text-white p-3 max-w-[360px]"
                            sideOffset={5}
                            side="bottom"
                          >
                            <div className="flex flex-col gap-3">
                              {restNetworks.map((item) => (
                                <div
                                  key={item}
                                  className="flex flex-row gap-2 items-center"
                                >
                                  {registryHelper.networkImages[
                                    item.toLowerCase()
                                  ] ? (
                                    <Image
                                      width={16}
                                      height={16}
                                      src={
                                        registryHelper.networkImages[
                                          item.toLowerCase()
                                        ].dark
                                      }
                                      alt={item}
                                      className="rounded-full w-4 h-4"
                                    />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full flex justify-center items-center bg-gray-500" />
                                  )}
                                  <p className="text-sm text-white" key={item}>
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <Tooltip.Arrow className="TooltipArrow" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  ) : null}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-300">
                {grant?.metadata?.programBudget
                  ? formatCurrency(+grant?.metadata?.programBudget) === "NaN"
                    ? grant?.metadata?.programBudget
                    : `$${formatCurrency(+grant?.metadata?.programBudget)}`
                  : ""}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-300">
                {grant?.metadata?.grantSize
                  ? formatCurrency(+grant?.metadata?.grantSize) === "NaN"
                    ? grant?.metadata?.grantSize
                    : `$${formatCurrency(+grant?.metadata?.grantSize)}`
                  : ""}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-300">
                <div className="w-full flex flex-row flex-wrap gap-1">
                  {grant.metadata?.categories?.map((category, index) => (
                    <span
                      key={index}
                      className="mr-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-black dark:text-zinc-300">
                {grant.metadata?.grantTypes?.map((category, index) => (
                  <span
                    key={index}
                    className="mr-1 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
                  >
                    {category}
                  </span>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
