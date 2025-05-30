export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  category: string;
  tags?: string[];
  imageUrl: string;
  price?: string;
  ticketUrl: string;
}