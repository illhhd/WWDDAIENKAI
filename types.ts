export interface NavItem {
  label: string;
  href: string;
}

export interface FloorInfo {
  floor: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'talk' | 'performance' | 'dj' | 'tour';
  floor: '6F' | '5F' | '4F' | 'VIP';
}