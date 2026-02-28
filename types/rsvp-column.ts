export interface RsvpColumn {
  id: number;
  guest_name: string;
  total_guest: number;
  message: string;
  attendance_status?: boolean;
  created_at?: string;
}
