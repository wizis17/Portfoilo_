
// Since we don't want to rely on Supabase backend, we'll create a mock service
// using localStorage to temporarily store the contact messages

// Define contact message types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
  user_id: string | null;
}

export interface ContactMessageInsert {
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
}

// Create a service with mock operations using localStorage
export const contactService = {
  // Get all messages
  async getMessages(): Promise<{ data: ContactMessage[] | null; error: any }> {
    try {
      const messagesJson = localStorage.getItem('contact_messages');
      const messages = messagesJson ? JSON.parse(messagesJson) : [];
      return {
        data: messages,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error
      };
    }
  },

  // Insert a new message
  async insertMessage(message: ContactMessageInsert): Promise<{ error: any }> {
    try {
      const messagesJson = localStorage.getItem('contact_messages');
      const messages = messagesJson ? JSON.parse(messagesJson) : [];
      
      const newMessage: ContactMessage = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        created_at: new Date().toISOString(),
        is_read: false,
        ...message
      };
      
      messages.push(newMessage);
      localStorage.setItem('contact_messages', JSON.stringify(messages));
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  // Update message read status
  async updateReadStatus(messageId: string, isRead: boolean): Promise<{ error: any }> {
    try {
      const messagesJson = localStorage.getItem('contact_messages');
      const messages: ContactMessage[] = messagesJson ? JSON.parse(messagesJson) : [];
      
      const updatedMessages = messages.map(message => 
        message.id === messageId ? { ...message, is_read: isRead } : message
      );
      
      localStorage.setItem('contact_messages', JSON.stringify(updatedMessages));
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  }
};
