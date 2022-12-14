interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }
    this.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set category(category: string) {
    this.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
