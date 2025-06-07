
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/firebase/config';

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

const COLLECTION_NAME = 'contact_messages';

export const contactService = {
  async getAllMessages(): Promise<{ data: ContactMessage[] | null; error: Error | null }> {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const messages: ContactMessage[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          user_id: data.user_id || null,
          created_at: data.created_at instanceof Timestamp 
            ? data.created_at.toDate().toISOString() 
            : data.created_at,
          is_read: data.is_read || false
        } as ContactMessage;
      });

      return { data: messages, error: null };
    } catch (error) {
      console.error('Error fetching messages:', error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(message: ContactMessageInsert): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...message,
        created_at: serverTimestamp(),
        is_read: false
      });

      const newMessage: ContactMessage = {
        ...message,
        id: docRef.id,
        created_at: new Date().toISOString(),
        is_read: false
      };

      return { data: newMessage, error: null };
    } catch (error) {
      console.error('Error inserting message:', error);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(id: string): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const messageRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(messageRef, {
        is_read: true
      });

      // Return a placeholder message since we don't fetch the updated document
      const updatedMessage: ContactMessage = {
        id,
        name: '',
        email: '',
        subject: '',
        message: '',
        user_id: null,
        created_at: new Date().toISOString(),
        is_read: true
      };

      return { data: updatedMessage, error: null };
    } catch (error) {
      console.error('Error marking message as read:', error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return { error: null };
    } catch (error) {
      console.error('Error deleting message:', error);
      return { error: error as Error };
    }
  }
};
