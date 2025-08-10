interface InvitationData {
  id: number;
  // grooms
  host_one_name: string;
  host_one_nickname: string;
  host_one_additional_info: string;
  host_one_social_media: string;
  // brides
  host_two_name: string;
  host_two_nickname: string;
  host_two_additional_info: string;
  host_two_social_media: string;
  // events
  event_title: string;
  event_date: string;
  event_type: string;
  location: string;
  location_url: string;
  greetings: string;
  message: string;
  // relationships
  user?: User;
  themes?: Theme;
  music?: Music;
  videos?: Video[];
  images?: Image[];
  gift_infos?: GiftInfo[];
  guests?: Guest[];
  rundowns?: Rundown[];
  stories?: Story[];
  rsvps?: RSVP[];
  // etc.
  message_template: string;
  web_url: string;
  phone_number: string;
  slug: string;
  is_active: boolean;
  activated_at: string | null;
  expired_at: string | null;
  additional_info?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface Theme {
  id: number;
  name: string;
  preview_image: string;
  is_active: boolean;
  description: string;
}

export interface Music {
  id: number;
  title: string;
  artist: string;
  url: string;
}

export interface Video {
  id: number;
  invitation_id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  order_number: number;
}

export interface Image {
  id: number;
  invitation_id: number;
  url: string;
  caption: string;
  type: string;
  order_number: number;
}

export interface GiftInfo {
  id: number;
  invitation_id: number;
  provider_name: string;
  account_number: string;
  account_holder: string;
  gift_delivery_address: string;
}

export interface Guest {
  id: number;
  invitation_id: number;
  name: string;
  phone_number?: string;
  slug?: string;
  is_attending?: boolean;
  total_guest?: number;
  notes?: string;
  address?: string;
}

export interface Rundown {
  id: number;
  invitation_id: number;
  title: string;
  location: string;
  location_url: string;
  date: string;
  start_time: string; // 'HH:MM:SS'
  end_time: string;
  time_zone: string;
  description: string;
  image_url: string;
  order_number: number;
}

export interface Story {
  id: number;
  invitation_id: number;
  title: string;
  content: string;
  image_url: string;
  story_date: string;
  order_number: number;
}

export interface RSVP {
  id: number;
  invitation_id: number;
  guest_name: string;
  message: string;
  attendance_status: boolean;
  total_guest: number;
}

export default InvitationData;
