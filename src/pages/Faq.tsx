import { PlusIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion"

const items = [
    // User FAQs
    {
        id: "1",
        title: "How can I check my wallet balance?",
        content:
            "You can view your current wallet balance in the Dashboard under the 'Wallet Balance' section once you log in to your account.",
    },
    {
        id: "2",
        title: "How do I top up money to my wallet?",
        content:
            "Users can top up their wallet securely via SSL Commerz. Simply click the 'Top Up' button in your wallet dashboard and follow the instructions.",
    },
    {
        id: "3",
        title: "How can I withdraw money from my wallet?",
        content:
            "You can withdraw money from your wallet by clicking the 'Withdraw' button in the dashboard and entering the desired amount. Withdrawals are processed according to our system rules.",
    },
    {
        id: "4",
        title: "Can I send money to another user?",
        content:
            "Yes! You can send money to other users by searching their phone number or email in the 'Send Money' section of your dashboard.",
    },

    // Agent FAQs
    {
        id: "5",
        title: "How can I add money to a user's wallet as an agent?",
        content:
            "Agents can top up a user's wallet by entering the user's details and the amount to add. This allows them to manage user balances efficiently.",
    },
    {
        id: "6",
        title: "How can I withdraw money from a user's wallet as an agent?",
        content:
            "Agents can withdraw money from a user's wallet by entering the user's details and the amount to withdraw. Ensure proper authorization is obtained before performing this action.",
    },
]


export default function Faq() {
    return (
        <div className="space-y-4 my-20">
            <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="3">
                {items.map((item) => (
                    <AccordionItem value={item.id} key={item.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                                {item.title}
                                <PlusIcon
                                    size={16}
                                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                                    aria-hidden="true"
                                />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className="text-muted-foreground pb-2">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
