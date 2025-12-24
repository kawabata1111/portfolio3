export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Diamond' | 'TrendingUp' | 'Globe' | 'Shield';
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ContactStatus {
  IDLE = 'IDLE',
  DRAFTING = 'DRAFTING',
  SENDING = 'SENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
