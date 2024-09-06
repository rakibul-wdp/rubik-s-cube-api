import { P, SubTitle } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export interface IFaq {
  id: number;
  itemNum: string;
  question: string;
  answer?: string;
  answerList?: {
    id: number;
    ans: string;
  }[];
}

export const faqs: IFaq[] = [
  {
    id: 1,
    itemNum: "item-1",
    question: "Are you guys legitimate? This sounds too good to be true!",
    answer:
      "Our business is very new, but we assure you we would not go through all this effort without good cause. We’re here to help you type faster, and we will be around for a very long time because this software is revolutionizing how people type.",
  },
  {
    id: 2,
    itemNum: "item-2",
    question: "In what apps can I use TypeShort?",
    answer:
      "You can use it with most popular apps in Windows. Included are: Word, Outlook, Excel, PowerPoint, and some Instant Messaging Apps such as WhatsApp and Teams. Let us know what other apps you would like to use TypeShort in!",
  },
  {
    id: 3,
    itemNum: "item-3",
    question: "Tell me about the 30-Day Free Trial period.",
    answer:
      "You can install our 30-Day Free Trial app on up to three computers, and use it in all your apps, like Word and Outlook, etc. This is the same as the paid version, the only difference is that it expires after 30 days. If for any reason you don’t think TypeShort is for you, you can simply uninstall it. We do not collect your credit card information until you actually agree to buy it.",
  },
  {
    id: 4,
    itemNum: "item-4",
    question: "Do I need a credit card to use the 30-day free trial version?",
    answer:
      "No. We are only asking you for your email address and first and last name.",
  },
  {
    id: 5,
    itemNum: "item-5",
    question: "Can I extend my 30-day free trial beyond 30 days?",
    answer:
      "We don’t know why this would be necessary, but if we find a reason, such as the software will not function like it is supposed to, we might consider.",
  },
  {
    id: 6,
    itemNum: "item-6",
    question: "Can I install it on more than one computer?",
    answer: "Yes, the license will be good for three devices.",
  },
  {
    id: 7,
    itemNum: "item-7",
    question: "Can I easily uninstall your software?",
    answer:
      "Yes, just like you would uninstall any software, you can remove TypeShort from your computer.",
  },
  {
    id: 8,
    itemNum: "item-1",
    question: "Why didn’t this solution come along many years ago?",
    answer:
      "Great question! And the best we can say is that first: the idea had to be discovered in the first place. We evolved from typewriters to computers, and even if somebody had noticed then, it would not have been feasible to create. Second, when the idea was found, it took considerable effort, time, persistence & team players to bring this invention to reality. There were numerous tricks that we had to employ to make it work right. We built it for you, and we would love for you to enjoy it!",
  },
  {
    id: 9,
    itemNum: "item-2",
    question: "Will it work on my MAC or Linux computer?",
    answer:
      "Currently, no. We are working towards this of course, but our priorities have revolved around making one quality version of the software, and then once we are confident that the Windows version works like it should, then we will proceed with MAC and Linux versions.",
  },
  {
    id: 10,
    itemNum: "item-3",
    question: "Is there a version for my cellphone?",
    answer:
      "Thanks for asking, but not at this time. The idea behind TypeShort is to make typing easier and faster. We know that we can help texting too. It’s part of our development plan.",
  },
  {
    id: 11,
    itemNum: "item-4",
    question: "Can I use it to write in any other language besides English?",
    answer:
      "Not currently. We have some ideas stirring in our little brains but again, we have needed to focus on making one version work right, and then we will create others as the opportunities present themselves.",
  },
  {
    id: 12,
    itemNum: "item-5",
    question: "How do I install it on my computer?",
    answerList: [
      {
        id: 20,
        ans: "Click on the “Download Free Trial” button to download it to your computer",
      },
      {
        id: 21,
        ans: "Once downloaded double click on the file to start the installation",
      },
      {
        id: 22,
        ans: "You will be asked for your email so you can get a One Time Password – don’t worry we will not sell it or send spam",
      },
      {
        id: 23,
        ans: "Once you get the One Time Password enter it on the appropriate box and click Next",
      },
      {
        id: 24,
        ans: "Enter your First and Last name to finish registration and start the installation.",
      },
      {
        id: 25,
        ans: "There will be a screen asking to confirm you want to proceed – click continue to accept.",
      },
      {
        id: 26,
        ans: "Install will proceed and once done you will be ready to enjoy. It only takes a couple of minutes to finish",
      },
    ],
  },
  // {
  //   id: 13,
  //   itemNum: "item-6",
  //   question: "What apps can I use with TypeShort?",
  //   answer: "Now you can use it with most popular apps in Windows.",
  // },
  {
    id: 14,
    itemNum: "item-7",
    question: "Why is it not working with some of my apps?",
    answerList: [
      {
        id: 20,
        ans: "If it’s not working with some apps, right click on our icon on the status bar and select Settings",
      },
      {
        id: 21,
        ans: "At the Settings window click on File and click Select Apps",
      },
      {
        id: 22,
        ans: "Activate TypeShort to work on apps from the list",
      },
      {
        id: 23,
        ans: "If you cannot find a specific app please let us know and we will work to include it.",
      },
    ],
  },
  {
    id: 15,
    itemNum: "item-8",
    question: "How do I actually use it?",
    answerList: [
      {
        id: 20,
        ans: "The first thing is to stop using the spacebar when you type! This alone will help you type much faster.",
      },
      {
        id: 21,
        ans: "Secondly, stop using the shift-key for capitalization. Let TypeShort do that for you.",
      },
      {
        id: 22,
        ans: "Third, start using our shorthand. Go to this page for more info. We have a cheat sheet you can use for the shorthand capability. Don’t worry, we are working hard to help you get much faster by unlocking the power of the shorthand.",
      },
      {
        id: 23,
        ans: "Check our tutorial page for more detailed step-by-step instructions",
      },
    ],
  },
];

export const FaqBox: FC<{ limit?: number }> = ({ limit }) => {
  return (
    <div className="w-full rounded-[20px] bg-primary-brand-1/[3%] p-5 md:px-10 md:py-10 lg:px-16 lg:py-16 xl:px-[83px] xl:py-20">
      <Accordion type="single" collapsible className="overflow-hidden">
        {faqs
          .slice(0, limit)
          .map(({ id, itemNum, question, answer, answerList }) => (
            <div key={id} className="rounded-2xl bg-white">
              <AccordionItem
                className="mb-2.5 shadow-custom md:mb-5 lg:mb-7"
                value={itemNum}
              >
                <AccordionTrigger className="gap-2.5 px-2.5 md:px-6 md:pt-8 lg:px-8 lg:pt-10">
                  <SubTitle
                    variant="H4"
                    className="text-base text-secondary-title"
                  >
                    {question}
                  </SubTitle>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 md:px-6 md:pb-8 lg:px-8 lg:pb-10">
                  <P variant="P2" className="text-sm text-secondary-body">
                    {answerList && !answer
                      ? answerList.map((list) => (
                          <span
                            className="flex items-start justify-start gap-1.5"
                            key={list.id}
                          >
                            <span className="mt-1 text-base">⚫</span>
                            <span>{list.ans}</span>
                          </span>
                        ))
                      : answer}
                  </P>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
      </Accordion>

      {limit && (
        <Button
          variant="default-reverse"
          className="mx-auto mt-6 flex w-fit items-center justify-center md:mt-8 lg:mt-12"
        >
          <Link href="faq">See More Faqs</Link>
        </Button>
      )}
    </div>
  );
};
