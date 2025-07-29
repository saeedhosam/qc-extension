export interface ChecklistItem {
  id: string;
  label: string;
  tooltip: string;
  checked: boolean;
}

export interface Category {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export type CategoryId = 
  | 'pnr-creation'
  | 'issuance'
  | 'exchange'
  | 'refund-vol'
  | 'refund-invol'
  | 'merchant'
  | 'emd'
  | 'name-correction'
  | 'seats';
