// type InboxGroup = "primary" | "social" | "promotions";
// type InboxType = "draft" | "sent" | "spam" | "trash" | "none";

export class InboxItem {
    id: string;
    userId: string;
    owner: string;
    description: string;
    when: string;
}
