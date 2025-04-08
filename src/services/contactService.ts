
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<ContactMessage, 'id' | 'created_at' | 'is_read'>;

const STORAGE_KEY = 'contact_messages';

const getMessages = (): ContactMessage[] => {
  const storedMessages = localStorage.getItem(STORAGE_KEY);
  return storedMessages ? JSON.parse(storedMessages) : [];
};

const saveMessages = (messages: ContactMessage[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const contactService = {
  async getAllMessages(): Promise<{ data: ContactMessage[] | null; error: Error | null }> {
    try {
      const messages = getMessages();
      return { data: messages, error: null };
    } catch (error) {
      console.error('Error fetching messages:', error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(message: ContactMessageInsert): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const messages = getMessages();
      const newMessage: ContactMessage = {
        ...message,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        is_read: false
      };

      messages.push(newMessage);
      saveMessages(messages);

      return { data: newMessage, error: null };
    } catch (error) {
      console.error('Error inserting message:', error);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(id: string): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const messages = getMessages();
      const messageIndex = messages.findIndex(msg => msg.id === id);
      
      if (messageIndex === -1) {
        throw new Error('Message not found');
      }

      messages[messageIndex].is_read = true;
      saveMessages(messages);

      return { data: messages[messageIndex], error: null };
    } catch (error) {
      console.error('Error marking message as read:', error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      const messages = getMessages();
      const updatedMessages = messages.filter(msg => msg.id !== id);
      saveMessages(updatedMessages);

      return { error: null };
    } catch (error) {
      console.error('Error deleting message:', error);
      return { error: error as Error };
    }
  }
};
