
import { supabase } from "@/integrations/supabase/client";

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

// Create a service with type-safe operations
export const contactService = {
  // Get all messages
  async getMessages(): Promise<{ data: ContactMessage[] | null; error: any }> {
    const result = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    return {
      data: result.data as ContactMessage[] | null,
      error: result.error
    };
  },

  // Insert a new message
  async insertMessage(message: ContactMessageInsert): Promise<{ error: any }> {
    const result = await supabase
      .from('contact_messages')
      .insert(message);
    
    return { error: result.error };
  },

  // Update message read status
  async updateReadStatus(messageId: string, isRead: boolean): Promise<{ error: any }> {
    const result = await supabase
      .from('contact_messages')
      .update({ is_read: isRead })
      .eq('id', messageId);
    
    return { error: result.error };
  }
};
